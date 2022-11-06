import express from 'express'
import * as dotenv from 'dotenv';
import orderRoute from './routes/orders.js';

const app = express();
dotenv.config();

app.use(express.json());
app.use("/fulfill-order", orderRoute);

// Handling any unexpected Errors
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong. Please try again later";
//TODO:LOG ERRORS
    return res.status(errorStatus).json({
        success: false,
        status : errorStatus,
        message: errorMessage,
        stack  : err.stack
    });
})

app.listen(process.env.PORT || 3000, () => console.log('running'));