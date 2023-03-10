//import relevant modules

import { HeaderConnectContainer, HeaderConnectWallet, HeaderContainer, Logo, LogoContainer, LogoHeader } from "./Header.styles";

const Header = () => {
   return (
     <HeaderContainer>
      <LogoContainer>
        <Logo src="/assets/logo.png" alt="solpayplus icon"/>
        <LogoHeader>SolPayPlus</LogoHeader>
      </LogoContainer>
      <HeaderConnectContainer>
        <p>
          <img src="/assets/Gift.png" alt=""/>
          <span>Rewards</span>
        </p>
        <HeaderConnectWallet>
            <span> Connect Wallet</span>
            <img src="/assets/Wallet.png" alt="connect wallet" />
        </HeaderConnectWallet>
      </HeaderConnectContainer>
     </HeaderContainer>
   );
}

export default Header;