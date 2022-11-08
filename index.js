import express from 'express'
import dotenv from 'dotenv';
import mongoose from "mongoose";
import orderRoute from './app/routes/orders.routes.js';
import adminAnalyticsRoute from './app/routes/Admin/analytics.routes.js';
import { errorHandler } from './app/middleware/errors.js';
import { mongoConnect } from './app/config/db.config.js';

const app = express();
dotenv.config();

//Middleware
app.use(express.json());
app.use("/fulfill-order", orderRoute);
app.use("/analytics/top-order", adminAnalyticsRoute);

// Handling any unexpected Errors
app.use(errorHandler);

app.listen(process.env.PORT || 3001, () => {
    mongoConnect()
})

export default app 