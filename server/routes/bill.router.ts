// importing relevant modules
import express from 'express';
import {getBillsCategories, getBillsCategory, getStatus, paymentAgencies, amountToBePaid, createBill, validateBill, getBillsPayment, createBillCashback} from '../controllers/bill.controller';

// creating bill route
export const billRouter = express.Router();


//making bill payments
billRouter.post('/', createBill);

//making bill payments with cashback
billRouter.post('/cashback', createBillCashback);

// getting Bill Payments
billRouter.post('/get-bills', getBillsPayment);

// getting Bill categories
billRouter.get('/categories', getBillsCategories );

// getting Bill category for country
billRouter.post('/category', getBillsCategory );

// getting Bill payment agencies
billRouter.get('/payment-agencies', paymentAgencies );

// getting Bill payment agencies
billRouter.get('/status/:reference',  getStatus);

//getting amount for a Bill
billRouter.post('/amount', amountToBePaid);

//validate services like DSTV smartcard no, Meter number etc.
billRouter.post('/validate', validateBill);

