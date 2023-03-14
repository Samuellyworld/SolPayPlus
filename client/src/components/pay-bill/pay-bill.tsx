//import useState from react
import { useState } from "react";

//import custom styles from
import { PayBillAmountIn, PayBillAmountInText, 
         PayBillAmoutCont, PayBillButton, 
         PayBillButtonDiv, PayBillButtonTwo,
         PayBillContainer, PayBillForm,
         PayBillGroup, PayBillHeader,
         PayBillInnerContainer, PayBillInput, 
         PayBillLabel, PayBillPrice, PayBillSQLInText 
        } from "./pay-bill.styles";

//import react phone put 2 library
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';

//import select
import Select from "react-select";

//importing custom dropdown 
import Dropdown from "../dropdown/dropdown";
import { customStyles } from "../../utils/utils";

// importing options from utils
import { DropdownSelectType } from "../../types/types";

// get service name
import { useLocation } from "react-router-dom";

// react-redux
import {useSelector} from 'react-redux'
import { RootState } from "../../store/store";

// import pay with solana pay
import { getCustomerName, payWithSolanaPay } from "../../utils/requests";

// import web 3 utils
import { useWallet } from "@solana/wallet-adapter-react";

// import useDispatch
import {useDispatch} from 'react-redux';

//JSX Component
const PayBill = () => {
    // use params to get services
    const location = useLocation()
    const category = location.state

    const dispatch = useDispatch();

    // selector
    const bills = useSelector((state: RootState) => state?.currentUser?.bills)
    //rewards
    const rewards = useSelector((state: RootState) => state?.currentUser?.rewards)
    console.log(rewards);
   console.log(bills, 'bills')
   const  {publicKey} = useWallet();

   const billsName = bills?.map((bill : any) => ({
    value: bill.name,
    label: bill.name,
   }))

   const amount = bills?.map((bill : any) => (
      bill.amount
   ))

   const [customerName, setCustomerName] : any= useState("")

   const [selectedOption, setSelectedOption] : any = useState("");

   const [nairaAmount, setNairaAmount] : any = useState("")

   const result = bills?.find((bill: any) => bill.name === selectedOption?.value);

   const [meter, setMeter] : any = useState("");

   console.log(result, amount)
    // use state initial values
    const [phone, setPhone] : DropdownSelectType = useState("");

    // 
    const handlePay = async () => {
        const usdAmount = amount[0] === 0 ? (nairaAmount/750).toFixed(2)  : (result?.amount/750).toFixed(2)
        const naira = amount[0] === 0 ? nairaAmount : result?.amount
        const customer =   category === "electricity" || category === "cable" ? meter : phone
       await payWithSolanaPay(publicKey, usdAmount, bills[0]?.label_name, dispatch, bills[0]?.country,customer, bills[0]?.biller_name, naira )
    }

    // handle customer name
    const handleCustomerName = async  (e : any) => {
         console.log(selectedOption, "option")
        //   setCustomerName(e.target.value)
           setMeter(e.target.value)
           await getCustomerName(e.target.value,result?.biller_code, setCustomerName, result?.item_code )


    }
  return (
    <PayBillContainer>
        <PayBillInnerContainer>
            <PayBillHeader>{
             `${category} Recharge`}</PayBillHeader>

            <PayBillForm>
            <PayBillGroup>
                    <PayBillLabel>Network Provider</PayBillLabel>
                    <Select
                        options={billsName}
                        styles={customStyles}
                        //@ts-ignore
                        defaultValue={selectedOption}
                        onChange={(e : any) => setSelectedOption(e)}
                        />
                </PayBillGroup>
                <PayBillGroup>
                    <PayBillLabel>{bills[0]?.label_name === "SmartCard Number" ? "Smart Card Number" : bills[0]?.label_name === "Meter Number" ? "Meter Number" : "Phone Number"}</PayBillLabel>
                    {
                       category === "electricity" || category === "cable" ? 
                       <div>
                             <PayBillInput className="input"  placeholder={category === "electricity" ? "Meter Number" : "Smart Card Number"} onChange={  handleCustomerName }/>
                             <p style={{
                                marginTop : "5px" ,
                                fontSize : "13px",
                                fontWeight : "bold",
                                color : "green",
                             }}>{customerName}</p>
                       </div>
                    
                      
                      
                       :   <PhoneInput
                       country={bills[0]?.country.toLowerCase()}
                       regions={'africa'}
                       value={phone}
                       onChange={phone => setPhone(phone)}
                       inputStyle={{
                           width: '100%',
                           fontSize: '0.8rem',
                           color : "grey",
                           borderRadius: '4px',
                           boxShadow: 'none',
                           boxSizing: 'border-box',
                           paddingLeft : '5rem',
                           border : 'none',
                       }}
                       dropdownStyle={{
                           borderRadius: '4px',
                           boxShadow: 'none',
                           boxSizing: 'border-box',
                       }}
                       buttonStyle={{
                           border : 'none',
                           padding : '0 1rem',
                           backgroundColor : 'white',
                           height : '80%',
                           borderRight : '1px solid #959595',
                           top : "50%",
                           transform : "translateY(-50%)"
                       }}
                       containerStyle={{
                           border : '1px solid #959595',
                           borderRadius : '4px',
                           backgroundColor : "white",
                           padding : '0.5rem',
                       }}
                       />
                    }
                  
                    </PayBillGroup>
                <PayBillGroup>
                    <PayBillLabel>Amount</PayBillLabel>
                    <PayBillAmoutCont>
                     
                       <PayBillInput
                           type = {"number"}
                           value={amount[2] === 0 ? undefined : result?.amount }
                           min={category === "electricity" ? 1000 : undefined}
                           onChange={(e) => setNairaAmount(e.target.value)}
                        />
                        <PayBillAmountIn>
                            <PayBillAmountInText>Amount in</PayBillAmountInText>
                            <PayBillSQLInText>USD: ${!selectedOption?.value ? "0.00" :  amount[2] === 0 ?  (nairaAmount/750).toFixed(2) : (result?.amount/750).toFixed(2)}</PayBillSQLInText>
                        </PayBillAmountIn>
                    </PayBillAmoutCont>
                </PayBillGroup>

                <PayBillButtonDiv>
                    <PayBillButton onClick={handlePay}>
                        Pay with 
                        <img src="/assets/Vector.png" className = "payBackIcon" alt="" />
                        <span className="boldText">Pay</span>
                    </PayBillButton>

                    <PayBillButtonTwo>
                        Pay with Cashback Balance
                    </PayBillButtonTwo>
                    <PayBillPrice>₦{!rewards?.data?.balance ? "0" : rewards?.data?.balance}</PayBillPrice>

                </PayBillButtonDiv>

                
                
            </PayBillForm>
        </PayBillInnerContainer>
    </PayBillContainer>    
)
}

export default PayBill