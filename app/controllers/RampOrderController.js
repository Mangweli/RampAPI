// import RampOrderModel from '../models/RampOrder.js';
import { createError } from '../../utils/error.js';
import { sendCrypto } from '../services/RampOrderService.js';

export const fulfilOrder = async (req, res, next) => {
    //Validations
    if( Object.keys(req.body).length === 0) return next(createError(403, 'Missing Request data'));
    if(!req.body.cryptoUnitCount)  return next(createError(403, 'Crypto Unit is required'));
    if(!req.body.cryptoCurrencyName)  return next(createError(403, 'Currency is required'));
    if(!req.body.walletAddress)  return next(createError(403, 'Wallet address is required'));

    const receiverAddress = req.body.walletAddress;
    const cryptoUnit      = (req.body.cryptoUnitCount).toString();
    const privateKey      = process.env.PRIVATE_KEY;
    const cryptoCurrency  = req.body.cryptoCurrencyName;

    try {
        const receipt = await sendCrypto(receiverAddress, cryptoUnit, privateKey, cryptoCurrency);
        console.log(receipt);
        res.status(200).json({
            success: true,
            message: 'success',
            data: {
                receipt
            }
        })
    } catch (err) {
        next(createError(err.status));
    }

}