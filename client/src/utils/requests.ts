// import axios from axios
import ABI from './ABI.json'
import axios from 'axios';
import { setBills, setRewards } from '../store/user/user.reducer';
import { alert, close } from '../store/alert/alert.modal.reducer';
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import {
	Program,
	AnchorProvider,
	web3,
	utils,
	BN,
} from "@project-serum/anchor";
// import { useEffect, useState } from "react";
import { Buffer } from "buffer";
window.Buffer = Buffer;

const programID = new PublicKey(ABI.metadata.address);
const network = clusterApiUrl("devnet");
const opts = {
	preflightCommitment: "processed",
};
const { SystemProgram } = web3;

const getProvider = () => {
    //@ts-ignore
    const connection = new Connection(network, opts.preflightCommitment);
    const provider = new AnchorProvider(
        connection,
        //@ts-ignore
        window.solana,
        //@ts-ignore
        opts.preflightCommitment
    );
    return provider;
};

// base URL
const baseUrl : string = 'https://solpayplus-server.herokuapp.com'

// get rewards
export const getRewards = async (walletAddress : string| null, dispatch: any, Navigate : any) => {
     axios.get(`${baseUrl}/user/2dudFU32c5wsRpfRZDXBAJFirHC4hindqpKSCwwtDaAB`).
     then((response) => {
        if(response) {
            dispatch(setRewards(response.data))
            Navigate('/transactions');
        }   
     })    
}

// get bills
 export const getBills = async (countryCode : any, category : any, Navigate : any, dispatch : any) => {
    console.log(countryCode, category)
    dispatch(alert('Getting Bills ⌛️'));
    setTimeout(() => {
       dispatch(close(""));
     }, 1200);

     axios.post(`${baseUrl}/bill/category`, {
        country : countryCode,
        category : category
     }).then((response)=> {
        console.log(response.data?.data)
        if(response) {
            dispatch(setBills(response?.data?.data))
            Navigate('/payment' , {state : category})
        }
     })
 }

 //  rewards;
 export const userRewards = async (walletAddress :string |null, dispatch : any) => {
    axios.get(`${baseUrl}/user/${walletAddress}`)
    .then((response) =>{
         console.log(response.data);
        dispatch(setRewards(response?.data))
    })
 }

 // sort user;
 export const sortUser = async (walletAddress : any) => {
    axios.get(`${baseUrl}/user/${walletAddress}`)
     .then(async (response) => {
        if(!response?.data?.message) {
            try {
                const provider = getProvider();
                //@ts-ignore
                const program = new Program(ABI, programID, provider);
                const [sppuser] = await PublicKey.findProgramAddress(
                    [
                        utils.bytes.utf8.encode("SOLPAYPLUS"),
                        provider.wallet.publicKey.toBuffer(),
                    ],
                    program.programId
                );
                await program.rpc.createAccount({
                    accounts: {
                        sppuser,
                        user: provider.wallet.publicKey,
                        systemProgram: SystemProgram.programId,
                    },
                });
                console.log(
                    "Created a new user w/ address:",
                    sppuser.toString()
                );
            } catch (error) {
                console.error("Error creating user account:", error);
            }
        }
     })
 }