// importing relevant modules
import { Response, Request } from "express";
import { Cluster, clusterApiUrl, Connection, Keypair, PublicKey } from '@solana/web3.js';
import { encodeURL, createQR, findReference, validateTransfer } from '@solana/pay';
import { defaultConfig } from "../config/config";


// Mockup skeleton 'can be changed' 
export const httpConvertUSDC = async (req: Request, res: Response) => {
   // mock up, no serious integration yet
   //response
   res.status(200).json({
       data : "converted"
   }) 
}

// Initialize a payment transaction.
export const initializePayment = async (req: Request, res: Response) => {
    try {
        const recipient = new PublicKey(defaultConfig.MERCHANT_ADDRESS);
        const reference = new Keypair().publicKey;
        const { amount } = req.body;
        const url = encodeURL({ amount, recipient, label: 'New Payment', reference });
        res.status(200).json({
            message: 'Transaction Initialized.',
            data: url,
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
        const signatureInfo = await findReference(connection, reference, { finality: 'confirmed' });
        await validateTransfer(
            connection,
            signatureInfo.signature,
            { recipient: new PublicKey(defaultConfig.MERCHANT_ADDRESS), amount });
        res.status(200).json({
            message: 'Payment validated.'
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