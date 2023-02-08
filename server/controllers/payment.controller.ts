// importing relevant modules
import { Response, Request } from "express";


// Mockup skeleton 'can be changed' 
export const httpConvertUSDC= async (req: Request, res: Response) => {
   // mock up, no serious integration yet
   //response
   res.status(200).json({
       data : "converted"
   }) 
}