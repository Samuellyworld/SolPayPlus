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
import 'react-phone-input-2/lib/style.css'

//importing custom dropdown 
import Dropdown from "../dropdown/dropdown";

// importing options from utils
import { airtimeOptions } from "../../utils/utils";
import { DropdownSelectType } from "../../types/types";

// get service name
import { useParams } from "react-router-dom";

//JSX Component
const PayBill = () => {
    // use params to get services
    const {serviceName} = useParams()

    // use state initial values
    const [phone, setPhone] : DropdownSelectType = useState("");
  return (
    <PayBillContainer>
        <PayBillInnerContainer>
            <PayBillHeader>{
             serviceName === "Airtime" ?`${serviceName} Recharge` : serviceName }</PayBillHeader>

            <PayBillForm>
                <PayBillGroup>
                    <PayBillLabel>Phone Number</PayBillLabel>
                    <PhoneInput
                        country='ng'
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
                    </PayBillGroup>

                <PayBillGroup>
                    <PayBillLabel>Network Provider</PayBillLabel>
                    <Dropdown theDefault = "MTN" label = ""options = {airtimeOptions} />
                </PayBillGroup>

                <PayBillGroup>
                    <PayBillLabel>Amount</PayBillLabel>
                    <PayBillAmoutCont>
                        <PayBillInput type = "text" />
                        <PayBillAmountIn>
                            <PayBillAmountInText>Amount in</PayBillAmountInText>
                            <PayBillSQLInText>SQL: 10</PayBillSQLInText>
                        </PayBillAmountIn>
                    </PayBillAmoutCont>
                </PayBillGroup>

                <PayBillButtonDiv>
                    <PayBillButton>
                        Pay back with 
                        <img src="/assets/Vector.png" className = "payBackIcon" alt="" />
                        <span className="boldText">Pay</span>
                    </PayBillButton>

                    <PayBillButtonTwo>
                        Pay with Cashback Balance
                    </PayBillButtonTwo>
                    <PayBillPrice>N5000</PayBillPrice>

                </PayBillButtonDiv>

                
                
            </PayBillForm>
        </PayBillInnerContainer>
    </PayBillContainer>    
)
}

export default PayBill