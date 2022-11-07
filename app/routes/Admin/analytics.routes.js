import express from 'express';
import { getTopOrders } from '../../controllers/Admin/analytics.controller.js';

const router = express.Router();

router.get('/', getTopOrders);

export default router;


