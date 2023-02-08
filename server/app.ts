// importing relevant module
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

// importing routes
import { paymentRouter } from './routes/payment.router';


// start an express server
export const app = express();

// middlewares
app.use(express.json());
app.use(morgan('combined'));
app.use(cors());

//routes
app.get('/', (req,res) => {
    res.json("Backend server is Live 👨🏼‍🍳")
})
 
// this is a mockup endpoint
//get all USDT conversion rate
app.use('/payment', paymentRouter);
