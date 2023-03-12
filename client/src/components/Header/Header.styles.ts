// import styled from styled-components
import styled from "styled-components";

// header container styles
export const HeaderContainer = styled.div`
   display : flex;
   justify-content : space-between;
   padding : 2.5rem 2rem;
   
   @media screen and (max-width : 650px) {
      padding : 2rem 1rem;
   }
   
`

// logo container styles
export const LogoContainer = styled.div`
  display : flex;
  justify-content : center;
  align-items : center;
  gap: 0.3rem;
`

// logo styles
export const Logo = styled.img`
   width : 1.5rem;
   height: 2rem;
`
// logo header styles
export const LogoHeader = styled.p`
  font-size : 1rem;
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 400;
`

// header connect container styles
export const HeaderConnectContainer = styled.div`
   display : flex;
   gap : 2rem;
   margin : 0rem 5rem 0rem 0rem;

   @media screen and (max-width: 1100px) {
     margin : 0rem 1rem 0rem 0rem; 
   }
   p {
    display : flex;
    justify-content : center;
    align-items : center;
    gap : 0.4rem;

    span {
        font-family: 'Space Grotesk';
        font-style: normal;
        font-weight: 500; 
        font-size : 1rem;
     }
     img {
        width : 1.5rem;
     }

    }

`
// header connect wallet styles
export const HeaderConnectWallet = styled.button`
   display : flex;
   gap: 0.7rem;
   border: solid 1px #000000;
   justify-content : center;
   align-items : center;
   background : #ffffff;
   border-radius : 0.3rem;
   padding : 0.5rem 1rem;
   cursor : pointer;
   position : relative;

   img {
    width : 1.1rem;
   }

   span {
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: 500; 
    font-size : 1rem;
   }
   .dropDownConnect__items {
		right: 0;
		position: absolute;
		flex-direction: column;
		background: purple;
		border-radius: 8px;
		display: none;
		border: 1px;
      top : 37.7px;

	}
   :hover .dropDownConnect__items {
		display: flex;
      justify-content : center;
      margin: auto;
	  }
	  .dropDownConnect_item {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 10px 10px;
		padding-right: 40px;
		cursor: pointer;
       gap: 1rem;
 
		p {
         font-family: 'Space Grotesk';
         font-style: normal;
         font-weight: 400; 
         font-size : 1rem;

			@media (max-width: 576.98px) {
			font-size: 0.5rem;
			}
		}
	  }
`

