import { createError } from '../../utils/error.js';
import { sendCrypto } from '../services/CryptoService.js';
import { setNewOrder } from '../services/RampOrderService.js';

let channel;

export const fulfilOrder = async (req, res, next) => {
    //TODO: USE JOI FOR VALIDATION
    if (Object.keys(req.body).length === 0) return next(createError(403, 'Missing Request data'));
    if (!req.body.cryptoUnitCount) return next(createError(403, 'Crypto Unit is required'));
    if (!req.body.cryptoCurrencyName) return next(createError(403, 'Currency is required'));
    if (!req.body.walletAddress) return next(createError(403, 'Wallet address is required'));


    const cryptoUnitCount = (req.body.cryptoUnitCount).toString();
    const privateKey = process.env.PRIVATE_KEY;

    const { walletAddress, cryptoCurrencyName } = req.body;

    try {
        /**
         * Send Crypto to address
         */
        const receipt = await sendCrypto(walletAddress, cryptoUnitCount, privateKey, cryptoCurrencyName);
        console.log(receipt);

        if (!receipt) {
            //TODO:LOG ERROR TO DB
            res.status(403).json({
                success: false,
                message: 'Unable to process your request please try again later'
            });
        }

        //TODO::CONVERT NON-ETHER CURRENCY TO ETHER BEFORE SAVING
        const orderDetails = {
            transactionHash: receipt.transactionHash,
            userWalletAddress: receipt.to,
            senderWalletAddress: receipt.from,
            amount: cryptoUnitCount,
            currency: cryptoCurrencyName,
            status: receipt.status
        }
        /**
         * SEND DETAILS TO DB
         */
        setNewOrder(orderDetails);

        if (receipt.status) {
            res.status(200).json({
                success: true,
                message: 'success',
                data: orderDetails
            })
        }
    } catch (err) {
        /**
         * SEND UNKNOWN ERRORS TO LOG
         */
        next(createError(err.status));
    }
}