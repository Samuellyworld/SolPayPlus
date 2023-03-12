// importing relevant modules
import express from 'express';
import { getUser } from '../controllers/user.controller';

// creating user route
export const userRouter = express.Router();

// getting user details
userRouter.get('/:wallet',  getUser);