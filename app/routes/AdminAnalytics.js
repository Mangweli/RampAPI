import express from 'express';
import { getTopOrders } from '../controllers/RampAdminAnalyticsController.js';

const router = express.Router();

router.get('/', getTopOrders);

export default router;


