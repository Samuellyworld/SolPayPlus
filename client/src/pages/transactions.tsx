// import components that make up transactions pages
import Transactions from "../components/transactions/transactions";
import Header from "../components/Header/Header";

// JSX Component
const TransactionsPage = () => {
    return (
        <div className="transactions">
            <Header/>
            <Transactions />
        </div>
    );
}

export default TransactionsPage;