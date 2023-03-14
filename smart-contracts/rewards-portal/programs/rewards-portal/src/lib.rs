use anchor_lang::prelude::*;
use anchor_lang::solana_program::entrypoint::ProgramResult;
use anchor_lang::solana_program::System;

declare_id!("JYL8VC6nj5WbnNYnMyy8rCaPDiDtdQ31ggdiwUdYZgH");

#[program]
pub mod rewards_portal {
    use super::*;

    pub fn create_account(ctx: Context<Create>) -> ProgramResult {
        let sppuser = &mut ctx.accounts.sppuser;
       
        sppuser.cashback_balance = 0;
        sppuser.cashback_total=0;
        sppuser.admin = *ctx.accounts.user.key;
        Ok(())
    }
    
    pub fn add_cashback(ctx: Context<Add>, amount: u64) -> ProgramResult {
        let sppuser = &mut ctx.accounts.sppuser;
        let user = &mut ctx.accounts.user;
        if sppuser.admin != *user.key {
            return Err(ProgramError::IncorrectProgramId);
        }
       
        (&mut ctx.accounts.sppuser).cashback_balance += amount;
        (&mut ctx.accounts.sppuser).cashback_total += amount;
        msg!("added cashback");
        msg!(&amount.to_string());
        msg!(&(ctx.accounts.sppuser).cashback_balance.to_string());

    
        Ok(())
    } 
    
    pub fn use_cashback(ctx: Context<Use>, amount: u64) -> ProgramResult {
        let sppuser = &mut ctx.accounts.sppuser;
        let user = &mut ctx.accounts.user;
        if sppuser.admin != *user.key {
            return Err(ProgramError::IncorrectProgramId);
        }
       
        (&mut ctx.accounts.sppuser).cashback_balance -= amount;
        msg!("used cashback");
        msg!(&amount.to_string());
        msg!(&(ctx.accounts.sppuser).cashback_balance.to_string());
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Create<'info> {
    #[account(init, payer=user, space=9000, seeds=[b"SOLPAYPLUS".as_ref(), user.key().as_ref()], bump)]
    pub sppuser: Account<'info, SolPayPlusUser>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>

}

#[derive(Accounts)]
pub struct Use<'info> {
    #[account(mut)]
    pub sppuser: Account<'info, SolPayPlusUser>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>
}

#[derive(Accounts)]
pub struct Add<'info> {
    #[account(mut)]
    pub sppuser: Account<'info, SolPayPlusUser>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>
}

#[account]
pub struct SolPayPlusUser {
    pub admin: Pubkey,
    pub cashback_balance: u64,
    pub cashback_total: u64,
}

