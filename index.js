import express from 'express'
import dotenv from 'dotenv';
import mongoose from "mongoose";
import orderRoute from './app/routes/Orders.js';
import adminAnalyticsRoute from './app/routes/AdminAnalytics.js';

const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
    } catch (error) {
        throw error;
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected");
})

mongoose.connection.on("connected", () => {
    console.log("MongoDB reConnected");
});

//Middleware

app.use(express.json());
app.use("/fulfill-order", orderRoute);
app.use("/analytics/top-order", adminAnalyticsRoute);

// Handling any unexpected Errors
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong. Please try again later";
    //TODO:LOG ERRORS
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    });
})

app.listen(process.env.PORT || 3000, () => {
    connect(),
    console.log('Connected and running');
})