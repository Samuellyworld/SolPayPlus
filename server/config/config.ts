// importing relevant modules
import dotenv from 'dotenv';

//using .env
dotenv.config();

// defaultConfig Types
interface defaultConfigTypes {
   PORT: number,
}

// defaultConfig object - this contains any config strings || numbers
export const defaultConfig:defaultConfigTypes = {
   PORT : Number(process.env.PORT)
}

