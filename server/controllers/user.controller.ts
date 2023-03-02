// import idl from "./idl.json";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import {
	Program,
	AnchorProvider,
	web3,
	utils,
	BN,
} from "@project-serum/anchor";
import { Buffer } from "buffer";
window.Buffer = Buffer;

const programID = new PublicKey(idl.metadata.address);
const network = clusterApiUrl("devnet");
const opts = {
	preflightCommitment: "processed",
};
const { SystemProgram } = web3;

const App = () => {
	const getProvider = () => {
		const connection = new Connection(network, opts.preflightCommitment);
		const provider = new AnchorProvider(
			connection,
			opts.preflightCommitment
		);
		return provider;
	};


	const getSppusers = async () => {
		const connection = new Connection(network, opts.preflightCommitment);
		const provider = getProvider();
		const program = new Program(idl, programID, provider);

		Promise.all(
			(await connection.getProgramAccounts(programID)).map(
				async (sppuser) => ({
					 ...(await program.account.solPayPlusUser.fetch(sppuser.pubkey)),
					 pubkey: sppuser.pubkey,
				})
			)
		).then((sppusers) => setSppusers(sppusers));
	};







export default App;