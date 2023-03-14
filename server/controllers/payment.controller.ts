// importing relevant modules
import { Response, Request } from "express";
import { clusterApiUrl, Connection, Keypair, PublicKey } from '@solana/web3.js';
import { encodeURL, findReference, validateTransfer } from '@solana/pay';
import { defaultConfig } from "../config/config";
import BigNumber from "bignumber.js";


// Mockup skeleton 'can be changed' 
export const httpConvertUSDC = async (req: Request, res: Response) => {
   // mock up, no serious integration yet
   //response
   res.status(200).json({
       data : "converted"
   });
}

// Initialize a payment transaction.
export const initializePayment = async (req: Request, res: Response) => {
    try {
        const recipient = new PublicKey(defaultConfig.MERCHANT_ADDRESS);
        const reference = new Keypair().publicKey;
        const amount = new BigNumber(req.body.amount);
        const url = encodeURL({ amount, recipient, label: req.body.label, reference });
        res.status(200).json({
            message: 'Transaction Initialized.',
            data: { url },
        });
    }
    catch (error) {
        res.status(500).json({
            error: {
                message:'Couldn\'t initialize transaction.'
            }
        })
    }
} 

// Validate a payment transaction.
export const validatePayment = async (req: Request, res: Response) => {
    try {
        const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
        console.log('✅ Established connection to the network.');
        const { reference, amount } = req.body;
        const signatureInfo = await findReference(connection, new PublicKey(reference), { finality: 'confirmed' });
       const validate= await validateTransfer(
            connection,
            signatureInfo.signature,
            { recipient: new PublicKey(defaultConfig.MERCHANT_ADDRESS), amount: new BigNumber(amount) },
        );
       console.log(validate)
        res.status(200).json({
            message: 'Payment validated.',

        });
    }
    catch (error) {
        
        res.status(500).json({
            error: {

                message:'Couldn\'t validate payment.'
            }
        })
    }
}

export const validate = async (reference:string, amount:any) => {
    try {
        const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
        console.log('✅ Established connection to the network.');
       
        const signatureInfo = await findReference(connection, new PublicKey(reference), { finality: 'confirmed' });
       const validate= await validateTransfer(
            connection,
            signatureInfo.signature,
            { recipient: new PublicKey(defaultConfig.MERCHANT_ADDRESS), amount: new BigNumber(amount) },
        );
       console.log(validate)
       
    }
    catch (error) {
            console.error(error)
    }
}