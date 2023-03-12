// react module
import { useEffect, useState } from "react";
//import relevant modules
import { HeaderConnectContainer, HeaderConnectWallet,
         HeaderContainer, Logo, 
         LogoContainer, LogoHeader 
        } from "./header.styles";

// solana and web3 utils
import { useWalletModal }  from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@solana/wallet-adapter-react';

// redux 
import { RootState } from "../../store/store";
import {useDispatch, useSelector} from 'react-redux';
import { setCurrentUser } from "../../store/user/user.reducer";

// @ts-ignore
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import Marquee from "../marquee/marquee";


// header component
const Header : () => JSX.Element = () => {
    const dispatch  = useDispatch()

     //copying address
     const [handleCopyAddress, setHandleCopyAddress] = useState(false);

     // address
     const address  = useSelector(
          (state:RootState) => state.currentUser?.currentUser
          )

    // set visible
     const { setVisible } = useWalletModal();

     // wallet uses
     const { publicKey, connected, connecting } = useWallet();

     // connect wallet functionalities
     const connectWallet = () => { 
       setVisible(true);
       dispatch(setCurrentUser(publicKey?.toString()) )
     }
    // use effect
    useEffect(() => {
        dispatch(setCurrentUser(publicKey?.toString()) )
     }, [connected, dispatch, publicKey])

     // building block
   return (
     <HeaderContainer>
        {/* <Marquee/> */}
      <LogoContainer>
        <Link to="/" style={{
            display : "flex",
            justifyContent : "center",
            alignItems : "center",
            gap: "0.3rem"
        }}>  
            <Logo src="/assets/logo.png" alt="solpayplus icon"/>
            <LogoHeader>SolPayPlus</LogoHeader>
        </Link>
      </LogoContainer>
      <HeaderConnectContainer>
        <p>
          <img src="/assets/Gift.png" alt=""/>
          <span>Rewards</span>
        </p>
        <HeaderConnectWallet
          style={{
            cursor :  "cursor" 
          }}
           onClick={!address ? connectWallet : undefined}
          >
            {
            connecting ?
            <span>Waiting ...</span> :
            address && !connecting && connected  ?
              <span>
                {address?.substring(0,5)}...
				{address?.substring(38,42)} 
              </span>
              :
              <span> Connect Wallet</span>
            }
            {
                !address ?  
                <img 
                 src="/assets/Wallet.png" 
                 alt="connect wallet"
                /> 
                :
                 <CopyToClipboard text={address}>
                 {
                    !handleCopyAddress ? 
                    <img 
                        src="/assets/copy.svg"
                        alt="wallet copy"
                        style ={{
                        cursor : "pointer"
                        }}
                        onClick={() => {
                         setHandleCopyAddress(!handleCopyAddress)
                         setTimeout(() => {
                            setHandleCopyAddress(false)
                        }, 800);}} /> 
                      : 
                   <img src="/assets/copy.png" alt="copy"/>
                 }
                 </CopyToClipboard>
                }
                {
                  address && 
                      <div className='dropDownConnect__items'>
                        <div className='dropDownConnect_item'
                         onClick={ () => {
                         localStorage.clear()
                         dispatch(setCurrentUser(""))
                          }} 
                         style={{
                            background: 'rgba(170, 74, 68, 0.6)',
                            borderRadius: "8px"
                         }}>
					  <div className='dropDownConnect_img'>
                       <img 
                         src="/assets/cancel.png" 
                         alt='disconnect logo' 
                         style={{width : "2rem"}}
                        />
					   </div>
				       <p> Disconnect</p>
				   </div>
			     </div>  
              }
        </HeaderConnectWallet>
      </HeaderConnectContainer>
     </HeaderContainer>
   );
}

export default Header;

