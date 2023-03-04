// importing relevant modules
import express from 'express';
import {getBillsCategories, getStatus, paymentAgencies, amountToBePaid, createBill, validateBill, getBillsPayment} from '../controllers/bill.controller';

// creating bill route
export const billRouter = express.Router();


//making bill payments
billRouter.post('/', createBill);

// getting Bill Payments
billRouter.post('/get-bills', getBillsPayment);

// getting Bill categories
billRouter.get('/categories', getBillsCategories );

// getting Bill payment agencies
billRouter.get('/payment-agencies', paymentAgencies );

// getting Bill payment agencies
billRouter.get('/status/:reference',  getStatus);

//getting amount for a Bill
billRouter.post('/amount', amountToBePaid);

//validate services like DSTV smartcard no, Meter number etc.
billRouter.post('/validate', validateBill);

