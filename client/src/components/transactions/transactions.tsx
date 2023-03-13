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
                    <CashNumberText>N{rewards?.data?.balance}</CashNumberText>
                </TransactionBoxOne>
                <TransactionBoxTwo>
                    <CashBalanceText>Total Rewards</CashBalanceText>
                    <CashNumberText>N{rewards?.data?.total}</CashNumberText>
                </TransactionBoxTwo>
            </TransactionBoxContainer>

            <DoneTransactions>
                <TransactionHeader>Recent Transactions</TransactionHeader>

                <ListTransctionSubHeaderContainer>
                    <HeaderTransaction>Transaction ID</HeaderTransaction>
                    <HeaderTransaction>Category</HeaderTransaction>
                    <HeaderTransaction>Amount (N)</HeaderTransaction>
                </ListTransctionSubHeaderContainer>

                <ListTransctionContainer>
                    <TransactionItem>ixIttn...489</TransactionItem>
                    <TransactionItem>Airtime</TransactionItem>
                    <TransactionItem>N5000</TransactionItem>
                </ListTransctionContainer>

                <ListTransctionContainer>
                    <TransactionItem>ixIttn...489</TransactionItem>
                    <TransactionItem>Airtime</TransactionItem>
                    <TransactionItem>N5000</TransactionItem>
                </ListTransctionContainer>

                <ListTransctionContainer>
                    <TransactionItem>ixIttn...489</TransactionItem>
                    <TransactionItem>Airtime</TransactionItem>
                    <TransactionItem>N5000</TransactionItem>
                </ListTransctionContainer>
            </DoneTransactions>



        </TransactionInnerContainer>
    </TransactionContainer>
  )
}

export default Transactions