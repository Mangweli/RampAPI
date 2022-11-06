import express from "express";
import { fulfilOrder } from '../controllers/RampOrderController.js';

const router = express.Router();

//CREATE ORDER
router.post("/", fulfilOrder);

export default router;