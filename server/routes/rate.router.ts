// importing relevant modules
import express from 'express';
import { nairaRate } from '../controllers/rate.controller';

// creating rate route
export const rateRouter = express.Router();

// getting BUSD-NGN conversion rate
rateRouter.get('/', nairaRate );


