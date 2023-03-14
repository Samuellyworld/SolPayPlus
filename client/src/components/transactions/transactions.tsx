//importing useful styles from styles folder
import { TransactionBoxContainer, TransactionBoxTwo,
         TransactionBoxOne, TransactionContainer, 
         TransactionInnerContainer, DoneTransactions, 
         CashBalanceText, CashNumberText,
         TransactionHeader, ListTransctionSubHeaderContainer, 
         HeaderTransaction, ListTransctionContainer, TransactionItem 
        } from "./transactions.styles";

        import {useSelector} from 'react-redux';
import { RootState } from "../../store/store";

const Transactions = () => {
    const rewards = useSelector((state: RootState) => 
        state.currentUser?.rewards
    )

    console.log(rewards?.data);
  return (
    <TransactionContainer>
        <TransactionInnerContainer>
            <TransactionBoxContainer>
                <TransactionBoxOne>
                    <CashBalanceText>Cash Back Balance</CashBalanceText>
                    <CashNumberText>₦{rewards?.data?.balance}</CashNumberText>
                </TransactionBoxOne>
                <TransactionBoxTwo>
                    <CashBalanceText>Total Rewards</CashBalanceText>
                    <CashNumberText>₦{rewards?.data?.total}</CashNumberText>
                </TransactionBoxTwo>
            </TransactionBoxContainer>

            <DoneTransactions>
                <TransactionHeader>Recent Transactions</TransactionHeader>

                <ListTransctionSubHeaderContainer>
                    <HeaderTransaction>Transaction ID</HeaderTransaction>
                    <HeaderTransaction>Category</HeaderTransaction>
                    <HeaderTransaction>Amount (N)</HeaderTransaction>
                </ListTransctionSubHeaderContainer>
                 { rewards?.data.tx_list?.map((txn: any) => (
                       <ListTransctionContainer>
                       <TransactionItem>{txn.tx?.substring(0,4)}...{txn.tx?.substring(12,17)}</TransactionItem>
                       <TransactionItem>Airtime</TransactionItem>
                       <TransactionItem>₦50</TransactionItem>
                   </ListTransctionContainer>
                 )
                 )}

            </DoneTransactions>


        </TransactionInnerContainer>
    </TransactionContainer>
  )
}

export default Transactions