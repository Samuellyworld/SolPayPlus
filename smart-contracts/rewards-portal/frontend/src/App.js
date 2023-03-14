import "./App.css";
import idl from "./idl.json";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import {
	Program,
	AnchorProvider,
	web3,
	utils,
	BN,
} from "@project-serum/anchor";
import { useEffect, useState } from "react";
import { Buffer } from "buffer";
window.Buffer = Buffer;

const programID = new PublicKey(idl.metadata.address);
const network = clusterApiUrl("devnet");
const opts = {
	preflightCommitment: "processed",
};
const { SystemProgram } = web3;

const App = () => {
	const [walletAddress, setWalletAddress] = useState(null);
	const [sppusers, setSppusers] = useState([]);
	const getProvider = () => {
		const connection = new Connection(network, opts.preflightCommitment);
		const provider = new AnchorProvider(
			connection,
			window.solana,
			opts.preflightCommitment
		);
		return provider;
	};
	const checkIfWalletIsConnected = async () => {
		try {
			const { solana } = window;
			if (solana) {
				if (solana.isPhantom) {
					console.log("Phantom wallet found!");
					const response = await solana.connect({
						onlyIfTrusted: true,
					});
					console.log(
						"Connected with public key:",
						response.publicKey.toString()
					);
					setWalletAddress(response.publicKey.toString());
				}
			} else {
				alert("Solana object not found! Get a Phantom wallet");
			}
		} catch (error) {
			console.error(error);
		}
	};
	const connectWallet = async () => {
		const { solana } = window;
		if (solana) {
			const response = await solana.connect();
			console.log(
				"Connected with public key:",
				response.publicKey.toString()
			);
			setWalletAddress(response.publicKey.toString());
		}
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
		).then((sppusers) => {
			setSppusers(sppusers);
		    console.log("users ",sppusers)
		})
	};
	const createSppuser = async () => {
		try {
			const provider = getProvider();
			const program = new Program(idl, programID, provider);
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
	};

	const add = async (publicKey) => {
		try {
			const provider = getProvider();
			const program = new Program(idl, programID, provider);
      const amount = 21000;
      console.log(new BN(amount))

			await program.rpc.addCashback(new BN(amount), "gdggsbsjshhsjsjsjshhh",{
				accounts: {
					sppuser: publicKey,
					user: provider.wallet.publicKey,
					systemProgram: SystemProgram.programId,
				}
			});
			console.log("Added Cashback to user: ", publicKey.toString());
			getSppusers();
		} catch (error) {
			console.error("Error Adding Cashback:", error);
		}
	};

	const use = async (publicKey) => {
		try {
			const provider = getProvider();
			const program = new Program(idl, programID, provider);
      const amount=21000
			await program.rpc.useCashback(new BN(amount), {
				accounts: {
					sppuser: publicKey,
					user: provider.wallet.publicKey,
				},
			});
			console.log(`Used : ${amount} from cashback on from user`, publicKey.toString());
		} catch (error) {
			console.error("Error withdrawing:", error);
		}
	};

	const renderNotConnectedContainer = () => (
		<button onClick={connectWallet}>Connect to Wallet</button>
	);
	const renderConnectedContainer = () => (
		<>
			<button onClick={createSppuser}>Create a user....</button>
			<button onClick={getSppusers}>Get a list of users ...</button>
			<br />
      
			{sppusers.map((sppuser) => (
				<>
					<p>User ID: {sppuser.pubkey.toString()}</p>
          <p>Wallet ID: {sppuser.admin.toString()}</p>
          <p>
          Cashback Balance:{" "}
						{(
							sppuser.cashbackBalance
						).toString()}
          </p>
          
          <p>
           Cashback Total:{" "}
						{(
							sppuser.cashbackTotal
						).toString()}
            </p>
            
					
					<button onClick={() => add(sppuser.pubkey)}>
						Click to add!
					</button>
					<button onClick={() => use(sppuser.pubkey)}>
						Click to use!
					</button>
					<br />
				</>
			))}
		</>
	);
	useEffect(() => {
		const onLoad = async () => {
			await checkIfWalletIsConnected();
		};
		window.addEventListener("load", onLoad);
		return () => window.removeEventListener("load", onLoad);
	}, []);

	return (
		<div className="App">
			{!walletAddress && renderNotConnectedContainer()}
			{walletAddress && renderConnectedContainer()}
		</div>
	);
};

export default App;