'use strict'

import  mongoose from 'mongoose';

const RampOrderSchema = mongoose.Schema({
    userWalletAddress: {
        type: String,
        required: true
    },
    senderWalletAddress: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    amountInWei:{
        type: Number,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    }
}, {timestamps: true });

export default mongoose.model("RampOrders", RampOrderSchema);