
import idl from "../idl.json"
import { Connection, PublicKey, clusterApiUrl , Keypair} from "@solana/web3.js";
import { Request, Response } from 'express';
import {
	Program,
	AnchorProvider,
	web3,
	utils,
	BN,
} from "@project-serum/anchor";
let keypair = Keypair.generate();

const programID = new PublicKey(idl.metadata.address);
const network = clusterApiUrl("devnet");
const opts = {
	preflightCommitment: "processed",
};
const { SystemProgram } = web3;


    //@its-ignore
	const getProvider = () => {
        //@ts-ignore
		const connection  = new Connection(network, opts.preflightCommitment);
		const provider = new AnchorProvider(
			connection,
            //@ts-ignore
			keypair,
            //@ts-ignore
			opts.preflightCommitment
		);
		return provider;
	};
	


	const getUser = async (req:Request, res:Response) => {
		
		try {
			let walletAddress=req.params.wallet;
			let found=false;
         //@ts-ignore
		const connection = new Connection(network, opts.preflightCommitment);
		const provider = getProvider();
         //@ts-ignore
		const program = new Program(idl, programID, provider);

		Promise.all(
			(await connection.getProgramAccounts(programID)).map(
				async (sppuser) => ({
					 ...(await program.account.solPayPlusUser.fetch(sppuser.pubkey)),
					 pubkey: sppuser.pubkey,
				})
			)
		).then((sppusers) => {
			sppusers.map((user)=>{
				         //@ts-ignore
				if(user.admin.toString()==walletAddress){
					found=true;
					{
						res.status(200).json({
							data:{
								//@ts-ignore
						wallet:user.admin.toString(),
						//@ts-ignore
						balance: +user.cashbackBalance.toString(),
						//@ts-ignore
						total: +user.cashbackTotal.toString(),
							}
						})
						
					}
				}
			})
			if(!found){
				res.status(404).json({
					message:"user not found"
				})
			}
		})
		} catch (error) {
			res.status(500).json({
				error:{
					message:'Couldnt fetch User'
				}
			})
		}
	 };


	 export{getUser}

	
   


   

 





	
