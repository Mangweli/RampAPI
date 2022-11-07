import { ValidationError } from 'express-validation'

const errorHandler = (err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong. Please try again later";
    if (err instanceof ValidationError) {
        return res.status(errorStatus).json({
            success: false,
            status: err.statusCode,
            message: err.details.body[0].message,
            stack: err.error
        });
    }

    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    });
}

export { errorHandler }