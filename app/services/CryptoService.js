import * as dotenv from 'dotenv';
dotenv.config();
import Web3 from 'web3';
const web3 = new Web3(process.env.RPCSERVER);

const getGasPrice = async () => {
    
}

export const sendCrypto = async (receiverAddress, cryptoUnit, privateKey, cryptoCurrency) => {
    const trxObj = await web3.eth.accounts.signTransaction({
        to   : receiverAddress,
        gas  : 21000,
        value: web3.utils.toWei(cryptoUnit, cryptoCurrency)
    }, privateKey);

    return await web3.eth.sendSignedTransaction(trxObj.rawTransaction);
}

