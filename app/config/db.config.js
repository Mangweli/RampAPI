'use strict'

import mongoose from 'mongoose';

const mongoConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
    } catch (error) {
        throw error;
    }
}

export { mongoConnect }