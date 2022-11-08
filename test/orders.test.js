import mongoose from 'mongoose';
import orderModel from '../app/models/order.model';

const orderDetails = {
    transactionHash: 'transactionHash',
    userWalletAddress: 'userWalletAddress',
    senderWalletAddress: 'senderWalletAddress',
    amount: 2,
    amountInWei: 20000,
    currency: 'ether',
    status: true
}

describe('Add Fulfil order record', () => {

    // Connect to the MongoDB Memory Server
    beforeAll(async () => {
        await mongoose.connect(global.__MONGO_URI__, { useNewUrlParser: true }, (err) => {
            if (err) {
                console.error(err);
            }
        });
    });
    afterAll(async () => {
        await mongoose.disconnect();
        mongoose.connection.close();
      
      });

    it('create & save fulfil order successfully', async () => {
        const fulfilOrder = new orderModel(orderDetails);
        const savedfulfilOrder = await fulfilOrder.save();

        expect(savedfulfilOrder._id).toBeDefined();
        expect(savedfulfilOrder.transactionHash).toBe(orderDetails.transactionHash);
        expect(savedfulfilOrder.userWalletAddress).toBe(orderDetails.userWalletAddress);
        expect(savedfulfilOrder.amount).toBe(orderDetails.amount);
        expect(savedfulfilOrder.currency).toBe(orderDetails.currency);
        expect(savedfulfilOrder.status).toBe(orderDetails.status);
    });

    // Testing Schema
    it('Add fulfil order details successfully with undefined schema fields as undefined', async () => {
        const orderWithUndefinedField = new orderModel({ ...orderDetails, gasPrice: 'gasPrice' });
        const savedOrderWithUndefinedField = await orderWithUndefinedField.save();
        expect(savedOrderWithUndefinedField._id).toBeDefined();
        expect(savedOrderWithUndefinedField.gasPrice).toBeUndefined();
    });

    // Test Validation!!!
    it('create order without required field should failed', async () => {
        const orderWithoutRequiredField = new orderModel({ amount: '2' });
        let err;
        try {
            const savedOrderWithoutRequiredField = await orderWithoutRequiredField.save();
            error = savedOrderWithoutRequiredField;
        } catch (error) {
            err = error
        }
        expect(err).toBeInstanceOf(mongoose.Error.ValidationError)
        expect(err.errors.transactionHash).toBeDefined();
    });
})