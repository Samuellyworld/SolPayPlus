import Flutterwave from "flutterwave-node-v3";
import { defaultConfig } from "../config/config";
import { Request, Response } from 'express';
const flw = new Flutterwave(defaultConfig.FLW_PUBLIC_KEY, defaultConfig.FLW_SECRET_KEY);


const getBillsCategories = async (req: Request, res: Response) => {

    try {
        const response = await flw.Bills.fetch_bills_Cat()
        res.status(200).json({
            data:response
        })
    } catch (error) {
        console.log(error)
    }

}
const getStatus = async (req: Request, res: Response) => {

    try {
        const payload={
            "reference": req.params.reference,
        }
        
        const response = await flw.Bills.fetch_status(payload)
        res.status(200).json({
            data:response
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error:{
                message:'Couldnt fetch payment agencies'
            }
        })
    }

}



const paymentAgencies = async (req: Request, res: Response) => {

    try {
    
        const response = await flw.Bills.fetch_bills_agencies()
        res.status(200).json({
            data:response
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error:{
                message:'Couldnt fetch payment agencies'
            }
        })
    }

}

const createBill = async (req: Request, res: Response) => {

    try {
        const payload=req.body
        
        const response = await flw.Bills.create_bill(payload)
        res.status(200).json({
            data: response
  
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error:{
                message:'Couldnt make Bill Payment'
            }
        })
    }

}

const validateBill = async (req:Request, res:Response) => {
    try {
        const payload = req.body

        const response = await flw.Bills.validate(payload)
        res.status(200).json({
            data: response
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error:{
                message:'Couldnt Validate Customer'
            }
        })
    }

}

const getBillsPayment = async (req:Request, res:Response) => {

    try {

        const payload = req.body

        const response = await flw.Bills.fetch_bills(payload)
        res.status(200).json({
            data: response
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error:{
                message:'Couldnt get Bill Payments'
            }
        })
    }

}



const amountToBePaid = async (req:Request, res:Response) => {

    try {

        const payload = req.body

        const response = await flw.Bills.amt_to_be_paid(payload)
        res.status(200).json({
            data:response
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error:{
                message:'Couldnt Resolve amount'
            }
        })
    }

}




export{getBillsCategories, getStatus, paymentAgencies, amountToBePaid, createBill, validateBill, getBillsPayment}


