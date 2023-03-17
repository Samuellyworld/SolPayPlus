// react module
import { useEffect, useState } from "react";
//import relevant modules
import { HeaderConnectContainer, HeaderConnectWallet,
         HeaderContainer, Logo, 
         LogoContainer, LogoHeader 
        } from "./Header.styles";

// solana and web3 utils
import { useWalletModal }  from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@solana/wallet-adapter-react';

// redux 
import { RootState } from "../../store/store";
import {useDispatch, useSelector} from 'react-redux';
import { setCurrentUser, setRewards } from "../../store/user/user.reducer";

// @ts-ignore
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import MarqueeDiv from "../marquee/marquee";

// import relevant smart contract interact module
// import { getSppusers, sortUser } from "../../utils/interact";
import { alert, bottomAlert, close } from "../../store/alert/alert.modal.reducer";

// use navigate from react-router dom
import { useNavigate } from "react-router-dom";
import { getRewards, sortUser, userRewards } from "../../utils/requests";
import { HeaderPropsType } from "../../types/types";



// header component
const Header: React.FC<HeaderPropsType> = ({marquee}) => {
    const dispatch  = useDispatch()

    const Navigate = useNavigate()

    const [usersList, setUsers] = useState([])
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
     const connectWallet = async () => { 
        setVisible(true);
       
     }

     
    // use effect
    useEffect(() => {
        dispatch(setCurrentUser(publicKey?.toString()));
     }, [connected, dispatch, publicKey])



     useEffect(() => {
       const rewards = userRewards(address, dispatch);
     }, [address])

     useEffect(() => {
      if(address) {
        sortUser(address, dispatch)
      }
    
     }, [address])
    // get rewards;
    const rewardsLink =  async () => {
       if(!address) {
        dispatch(alert('Connect Wallet ⛔️'));
       return setTimeout(() => {
          dispatch(close(""));
        }, 1000);
       }  else {
        const rewards = await getRewards(address, dispatch, Navigate);
       }
      
    }
     
     // building block
   return (
     <HeaderContainer>
       { marquee &&  <MarqueeDiv/>}
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
        <p onClick={rewardsLink}>
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
                className="connect"
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
                        >

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

