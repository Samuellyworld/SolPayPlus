import anchor, { AnchorProvider } from '@project-serum/anchor';

const main=async()=>{
  console.log('Starting tests .....')

  const provider=AnchorProvider.env()
  anchor.setProvider(provider)

  const program=anchor.workspace.RewardsPortal;

  const baseAccount=anchor.web3.Keypair.generate();
  const tx=await program.rpc.init({
    accounts:{
      baseAccount:baseAccount.publicKey,
      user:provider.wallet.publicKey,
      systemProgram:anchor.web3.SystemProgram.programId,
    },
    signers:[baseAccount],
  });
  console.log("Your Transaction Id: ", tx)
  let account =await program.account.base.fetch(baseAccount.publicKey)
  console.log("Total Transactions: ", account.totalTx.toString())

  await program.rpc.addTx(
     "wedwrfghaqwsdefghjkojxhgbnslhbdbp",
     "300",
    {
    accounts:{
      baseAccount: baseAccount.publicKey,
      user: provider.wallet.publicKey,
    },
    
  },

  );

  await program.rpc.addTx(
    "wedwrfghaqwsdefghjkojxhgbnslhbdbp2",
    "400",
   {
   accounts:{
     baseAccount: baseAccount.publicKey,
     user: provider.wallet.publicKey,
   },
   
 },

 );

  account =await program.account.base.fetch(baseAccount.publicKey)
  console.log("Total Transactions: ", account.totalTx.toString())
  console.log("Tx Lists: ", account.txList)
}
const main2=main;
const runMain=async()=>{
  try{

    await main();
    await main2();
    
    
    process.exit(0)

  }
  catch(err){
    console.error(err)
    process.exit(1)
  }
}

runMain()