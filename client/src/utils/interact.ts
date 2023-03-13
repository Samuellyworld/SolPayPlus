// import smart contract module
import {
	Program,
	AnchorProvider,
	web3,
	utils,
	BN,
} from "@project-serum/anchor";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import { Buffer } from "buffer";

// import ABI
import ABI from './ABI.json'

// buffer
window.Buffer = Buffer;

// @ts-ignore
const programID = new PublicKey(ABI?.metadata?.address);
const network = clusterApiUrl("devnet");
const opts : any= {
	preflightCommitment: "processed",
};
const { SystemProgram } = web3;


const getProvider = () => {
    const connection = new Connection(network, opts.preflightCommitment);
    const provider = new AnchorProvider(
        connection,
        // @ts-ignore
        window.solana ,
        opts.preflightCommitment
    );
    return provider;
};

// get users
export const getSppusers = async (setUsers : any) => {
    const connection = new Connection(network, opts.preflightCommitment);
  
    const provider = getProvider();
        // @ts-ignore
    const program = new Program(ABI, programID, provider);

    Promise.all(
        (await connection.getProgramAccounts(programID)).map(
            async (sppuser) => ({
                 ...(await program.account.solPayPlusUser.fetch(sppuser.pubkey)),
                 pubkey: sppuser.pubkey,
            })
        )
      ).then((sppusers) => {
        console.log(sppusers, 'users')
        setUsers(sppusers)
    } )

    
 
};


export const sortUser = async (walletAddress : any, users : any) => {
       users?.map((user : any) => {
         if(user?.admin.toString() === walletAddress) {
            console.log(walletAddress)
            console.log(user?.admin.toString());
            return   true;
         } 
         if(user?.admin.toString() !== walletAddress) {
           return false;
         }
       })
}

// const createSppuser = async () => {
//     try {
//         const provider = getProvider();
//         const program = new Program(idl, programID, provider);
//         const [sppuser] = await PublicKey.findProgramAddress(
//             [
//                 utils.bytes.utf8.encode("SOLPAYPLUS"),
//                 provider.wallet.publicKey.toBuffer(),
//             ],
//             program.programId
//         );
//         await program.rpc.createAccount({
//             accounts: {
//                 sppuser,
//                 user: provider.wallet.publicKey,
//                 systemProgram: SystemProgram.programId,
//             },
//         });
//         console.log(
//             "Created a new user w/ address:",
//             sppuser.toString()
//         );
//     } catch (error) {
//         console.error("Error creating user account:", error);
//     }
// };

// const add = async (publicKey) => {
//     try {
//         const provider = getProvider();
//         const program = new Program(idl, programID, provider);
//   const amount = 21000;
//   console.log(new BN(amount))

//         await program.rpc.addCashback(new BN(amount), {
//             accounts: {
//                 sppuser: publicKey,
//                 user: provider.wallet.publicKey,
//                 systemProgram: SystemProgram.programId,
//             },
//         });
//         console.log("Added Cashback to user: ", publicKey.toString());
//         getSppusers();
//     } catch (error) {
//         console.error("Error Adding Cashback:", error);
//     }
// };

// const use = async (publicKey) => {
//     try {
//         const provider = getProvider();
//         const program = new Program(idl, programID, provider);
//   const amount=21000
//         await program.rpc.useCashback(new BN(amount), {
//             accounts: {
//                 sppuser: publicKey,
//                 user: provider.wallet.publicKey,
//             },
//         });
//         console.log(`Used : ${amount} from cashback on from user`, publicKey.toString());
//     } catch (error) {
//         console.error("Error withdrawing:", error);
//     }
// };