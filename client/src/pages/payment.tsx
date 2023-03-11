// import components that make up the payment page

import Header from "../components/header/header";
import PayBill from "../components/pay-bill/pay-bill";

 const PaymentPage = () => {
    return (
        <div className="payment">
               <Header/>
                <PayBill/>
        </div> 
        );
    }

export default PaymentPage;