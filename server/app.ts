// importing relevant module
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

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

