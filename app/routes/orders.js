import express from "express";
import { fulfilOrder } from '../app/controllers/RampOrderController.js';

const router = express.Router();

//CREATE ORDER
router.post("/", fulfilOrder);

export default router;