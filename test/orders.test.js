import mongoose from 'mongoose';
import request from 'supertest';
import app from './index.js';

import("dotenv").config();

/* Connecting to the database before each test. */
beforeEach(async () => {
    await mongoose.connect(process.env.MONGODB_URI);
});

/* Closing database connection after each test. */
afterEach(async () => {
    await mongoose.connection.close();
});

describe("POST /fulfill-order", () => {
    it("should send crypto unit from one address to another", async () => {
        const res = await request(app).post("/fulfill-order").send();
            // {
            // cryptoUnitCount: 1,
            // cryptoCurrencyName: "wei",
            // walletAddress: "0x66fE709fdf6879fEEb0345c56432F6E1Bd26aAE1",
        // });
        expect(res.statusCode).toBe(200);
        expect(res.body.success).toBe("true");
    });
});