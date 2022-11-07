import * as dotenv from 'dotenv';
dotenv.config();
import Web3 from 'web3';
const web3 = new Web3(process.env.RPCSERVER);

const getGasPrice = () => {
    return web3.eth.getGasPrice();
}

const getGasEstimate = (receiverAddress) => {
    return web3.eth.estimateGas({
        to: receiverAddress
    })
}

export const convertToWei = (cryptoUnit, cryptoCurrency) => {
    return web3.utils.toWei(cryptoUnit, cryptoCurrency);
}

export const sendCrypto = async (receiverAddress, cryptoUnit, privateKey) => {
    const trxObj = await web3.eth.accounts.signTransaction({
        to   : receiverAddress,
        gas  : await getGasEstimate(receiverAddress),
        value: cryptoUnit
    }, privateKey);

    return await web3.eth.sendSignedTransaction(trxObj.rawTransaction);
}

