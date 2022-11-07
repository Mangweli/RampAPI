import express from "express";
import { validate } from 'express-validation';
import fulfillorderValidations from "../../utils/validations/fulfillorder.validations.js";
import { fulfilOrder } from '../controllers/order.controller.js';

const router = express.Router();

//Create Order
router.post("/", validate(fulfillorderValidations.fulfilOrder), fulfilOrder);

export default router;