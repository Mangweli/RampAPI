'use strict'

import { setLogs } from '../../utils/functions.util.js';
import logs from '../models/log.model.js';
import { sendCrypto, convertToWei } from '../services/crypto.service.js';
import { setNewOrder } from '../services/orders.service.js';

export const fulfilOrder = async (req, res, next) => {
   
    const privateKey = process.env.PRIVATE_KEY;
    const { walletAddress, cryptoCurrencyName } = req.body;

    try {
        //Convert to way and Send Crypto to wallet address
        const originalUnitCount = (req.body.cryptoUnitCount).toString();
        const cryptoUnitCount   = await convertToWei(originalUnitCount);
        const receipt           = await sendCrypto(walletAddress, cryptoUnitCount, privateKey, cryptoCurrencyName);

        if (!receipt) {
            //Log Unexpected Error
            setLogs({
                file: 'order.controller.js',
                info: { data: 'Invalid receipt', receipt: receipt, reqbody: req.body },
                type: 'critical'
            }, logs );

            res.status(403).json({
                success: false,
                message: 'Unable to process your request please try again later'
            });
        }

        const orderDetails = {
            transactionHash    : receipt.transactionHash,
            userWalletAddress  : receipt.to,
            senderWalletAddress: receipt.from,
            amount             : originalUnitCount,
            amountInWei        : cryptoUnitCount,
            currency           : cryptoCurrencyName,
            status             : receipt.status
        }
        //Save details toDB
        setNewOrder(orderDetails);

        if (receipt.status) {
            res.status(200).json({
                success: true,
                message: 'success',
                data: orderDetails
            })
        }
    } catch (err) {
        //Log Unexpected Error
        setLogs({
            file: 'order.controller.js',
            info: err,
            type: 'critical'
        }, logs);
        next(err);
    }
}