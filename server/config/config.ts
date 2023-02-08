// importing relevant modules
import dotenv from 'dotenv';

// import relevant types
import {defaultConfigTypes} from '../types/config.types';

//using .env
dotenv.config();


// defaultConfig object - this contains any config strings || numbers
export const defaultConfig:defaultConfigTypes = {
   PORT : Number(process.env.PORT)
}

