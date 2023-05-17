// importing relevant modules
import express from 'express';
import { httpConvertUSDC } from '../controllers/payment.controller';

// creating 'mock-up' payment route
export const paymentRouter = express.Router();

// getting all USDT conversion rate
paymentRouter.get('/', httpConvertUSDC);


