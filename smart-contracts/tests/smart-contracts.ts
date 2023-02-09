import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { SmartContracts } from "../target/types/smart_contracts";

describe("smart-contracts", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.SmartContracts as Program<SmartContracts>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
