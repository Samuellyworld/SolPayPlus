//importing styled from styled components
import styled from "styled-components";

export const TransactionContainer = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Space Grotesk';
    font-style: normal;
`

export const TransactionInnerContainer = styled.div`
    width: 50%;
    margin-top: 1rem;

    @media only screen and (max-width: 1109px) {
        width :55%;
    }

    @media only screen and (max-width: 1051px) {
        width :60%;
    }
    @media only screen and (max-width: 927px) {
        width :70%;
    }
    @media only screen and (max-width: 803px) {
        width :80%;
    }
    @media only screen and (max-width: 691px) {
        width :90%;
    }
    @media only screen and (max-width: 573px) {
        width :95%;
    }
`

export const TransactionBoxContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 0.5rem;

    @media only screen and (max-width: 353px) {
        flex-direction: column; 
        align-items: center;
        justify-content: center;
    } 
`

export const TransactionBoxOne = styled.div`
    background-image: url("/assets/Frame_7.png");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;


    aspect-ratio: 1 / 0.5;
    width : 100%;
    
    display: flex;
    flex-direction: column;

    padding: 2rem;

    @media only screen and (max-width: 510px) {
       padding : 3rem 2rem;
    } 

    @media only screen and (max-width: 437px) {
        padding : 3rem 1rem;
    }
    @media only screen and (max-width: 413px) {
        padding : 1rem 0.7rem;
        width: 90%;
        background-size: cover;
    }
    @media only screen and (max-width: 353px) {
        height: 0.5rem 1rem;
        background-size: contain;
        gap: 1rem;
    } 
   
`

export const TransactionBoxTwo = styled.div`
    background-image: url("/assets/Frame_6.png");
    
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    

    width : 100%;
    aspect-ratio: 1 / 0.5;

    
    display: flex;
    flex-direction: column;

    padding: 2rem;

    @media only screen and (max-width: 510px) {
        padding : 3rem 2rem;
    }

    @media only screen and (max-width: 437px) {
        padding : 3rem 1rem;
    }

    @media only screen and (max-width: 413px) {
        padding : 1rem 0.7rem;
        width: 90%;
        background-size: cover;
    }
    @media only screen and (max-width: 353px) {
        height: 0.5rem 1rem;
        background-size: contain;
        gap: 1rem;
    } 

`

export const TransactionImage = styled.img`
`

export const CashBalanceText = styled.span`
    color : white;
    font-size: 0.9rem;
    font-weight: 200;

    @media only screen and (max-width: 481px) {
        font-size: 0.8rem;
    }

    @media only screen and (max-width: 413px) {
        font-size: 0.7rem;
    }
    @media only screen and (max-width: 353px) {
        font-size: 0.9rem;
    } 
`

export const CashNumberText = styled.span`
    color : white;
    margin-top: 1rem;
    font-size : 2rem;
    font-weight: bold;

    @media only screen and (max-width: 481px) {
        font-size: 1.8rem;
    }

    @media only screen and (max-width: 413px) {
        font-size: 1.5rem;
    }
    @media only screen and (max-width: 353px) {
        font-size: 2rem;
    } 
`

export const DoneTransactions = styled.div`
    margin-top: 2rem;
`

export const TransactionHeader = styled.span`
    display: block;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight : 700;

    @media only screen and (max-width: 463px) {
        font-size: 1.3rem;
    } 
`

export const ListTransctionContainer = styled.div`
    display : grid;
    grid-template-columns: 1fr 1fr 1fr;

    padding: 0.5rem 1rem;
    margin-bottom: 0.2rem;

`

export const ListTransctionSubHeaderContainer = styled.div`
    display : grid;
    grid-template-columns: 1fr 1fr 1fr;

    background-color: #FAFAFA;
    margin-bottom: 1rem;
    border-radius: 5px;
    padding: 0.5rem ;

`

export const HeaderTransaction = styled.span`
    font-weight: bold;
    font-size: 0.9rem;

    @media only screen and (max-width: 421px) {
        font-size: 0.8rem;
        text-align: center;
    } 
`


export const TransactionItem = styled.div`
    padding-left: 1rem;
    font-size: 0.88rem;

    @media only screen and (max-width: 463px) {
        font-size: 0.8rem;
    } 

    @media only screen and (max-width: 405px) {
        font-size: 0.75rem;
        padding-left: 0.5rem;
        text-align : center;
    } 
`
