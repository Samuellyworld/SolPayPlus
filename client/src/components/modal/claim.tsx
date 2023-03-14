import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import BarLoader from "react-spinners/BarLoader";
import { bottomClose, removeCashback } from "../../store/alert/alert.modal.reducer";
import { RootState } from "../../store/store";
// @ts-ignore
import ABI from '../../utils/ABI.json';
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import {
	Program,
	AnchorProvider,
	web3,
	utils,
	BN,
} from "@project-serum/anchor";
import { Buffer } from "buffer";
import { useWallet } from "@solana/wallet-adapter-react";
window.Buffer = Buffer;

const programID = new PublicKey(ABI.metadata.address);
const network = clusterApiUrl("devnet");
const opts = {
	preflightCommitment: "processed",
};
const { SystemProgram } = web3;



const Alert = () => {

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


    const dispatch = useDispatch()
    const content = useSelector(
      (state : RootState) => state.alert.cashback?.modalContent
    );
    const rewards = useSelector(
        (state: RootState) => state.currentUser?.rewards
    )

    console.log(rewards)
      //copying address

    const claimRewards = async  () => {
        const provider = getProvider();
        //@ts-ignore
        const program : any = new Program(ABI, programID, provider);
       const amount = 10;
       console.log(new BN(amount))

        await program.rpc.addCashback(new BN(amount), content,{
            accounts: {
                //@ts-ignore
                sppuser: rewards?.data?.pubkey,
                user: provider.wallet.publicKey,
                systemProgram: SystemProgram.programId,
            }
        });
        //@ts-ignore
        console.log("Added Cashback to user: ", rewards?.data?.pubkey.toString());
        dispatch(removeCashback(""))
    }
    const close = useSelector((state: RootState) => state?.alert?.cashback?.openModal)
  
    return(
        <div
        style={{
            // width: "100%",
          position : "fixed",
          zIndex : "1000",
          bottom: "25px",
          right: "20px",
          display: `${close? "flex" : "none"}`,

          border : "1px solid grey",
          borderRadius : "5px",
          padding : "3px",
          flexDirection: "column",
          background :  "whitesmoke" ,
          fontWeight: 500,
          textTransform: "uppercase",
        }}
      >
        
        <div
            style={{
              width: "20px",
              marginTop : "-20px",
              height: "20px",
              display: "flex",
              fontSize: "16px",
              cursor: "pointer",
              fontWeight: "500",
              textAlign: "center",
              borderRadius: "100%",
              alignItems: "center",
              justifyContent: "center",
              textTransform: "uppercase",
              border: "1px solid white",
              background: "black",
              padding: "20px"
            }}
            onClick={() => {
              dispatch(removeCashback(""));
            }}
          >
           <p style={{color : "white"}}>×</p>
          </div>

        <p style={{
          padding : "3px", 
          fontSize : "14px",
          fontWeight : "bold",
          color :  "black",
          fontFamily: 'Space Grotesk',
          fontStyle: "normal",
          display : "flex",
          justifyContent : "center",
          alignItems : "center",
          gap : "0.2rem",
          cursor : "pointer"
            }} 
          className="wallet_content"  onClick={claimRewards}> 
          
            <span style={{color : "green"}}>
             Claim Rewards;
            </span>
        </p>
        <BarLoader
          color={"#888"}
          size={150}
          width={250}
         //@ts-ignore
          speedMultiplier="0.4"
        />
      
      </div>
    )
}

export default Alert;