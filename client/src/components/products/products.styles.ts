//importing styled from styled-components
import styled from "styled-components";

interface Props {
    notPart : boolean
}

export const PayBillContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Space Grotesk';
    font-style: normal;

    
`
export const PayBillMiniContainer = styled.div`
    width: 45%;
    margin-top: 1rem;

    @media only screen and (max-width: 1116px) {
        width: 50%;
    }
    @media only screen and (max-width: 1044px) {
        width: 55%;
    }
    @media only screen and (max-width: 922px) {
        width: 60%;
    }
    @media only screen and (max-width: 834px) {
        width: 65%;
    }
    @media only screen and (max-width: 776px) {
        width: 75%;
    }
    @media only screen and (max-width: 666px) {
        width: 85%;
    }
    @media only screen and (max-width: 588px) {
        width: 90%;
    }
`

export const PayBillTop = styled.div`
    margin-bottom: 1rem;
    padding : 0 1rem;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const PayBillTopLeft = styled.span`
    display: block;
    font-size: 1.5rem;
    font-weight: 600;
    width : 40%;
     font-family: 'Space Grotesk';
     font-style: normal;
     font-weight: 700;

    @media only screen and (max-width: 556px) {
        font-size: 1.3rem;
    }

    @media only screen and (max-width: 486px) {
        font-size: 1.2rem;
        width: 50%;
    }
    @media only screen and (max-width: 486px) {
        font-size: 1rem;
    }
    
`

export const PayBillTopRight = styled.div`
    .SelectAndIconCont {
        position: relative;

        .map-icon {
            position : absolute;
            height: 20px;
            z-index: 2;
            top: 50%;
            left:5% ;
            transform: translateY(-50%);
        }
    }
    
`
export const PayBillBoxesContainer = styled.div`
    display : grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 0.3rem;
    padding : 1rem;

    @media only screen and (max-width: 512px) {
        
        grid-template-columns: 1fr 1fr;
        gap : 1rem;
    }
`

export const PayBillBox = styled.div<Props>`
    padding: 3rem 0 2rem 0;
    cursor : pointer;
    background-color: ${Props => Props.notPart ? "transparent" : "#F2F2F2"};

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;

    .BillImgCont {
        position: relative;
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        .PayCellImage {
            position: absolute;
            height : 1.2rem;
        }
    }
`

export const PayBillBoxIcon = styled.img`
    height: 4.5rem;
`

export const PayBillBoxText = styled.span`
    font-weight: 500;
    font-size: 0.9rem;
`

