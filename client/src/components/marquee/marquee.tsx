
import Marquee from "react-fast-marquee";

// import custom styles

import { MarqueeContainer} from "./marquee.styles";

const MarqueeDiv = () => {
    return (
       <MarqueeContainer>
          <Marquee gradient={false} speed={20}>
        <ul>
         <li>SolPayPLus has big dreams</li>
         <li>Leveraging solana pay.</li>
         <li>Pay for Utility Bills with Crypto</li>
         <li>SolPayPLus has big dreams</li>
         <li>Pay and receive rewards.</li>
         <li>Pay for Utility Bills with Crypto</li>
         <li>SolPayPLus has big dreams</li>
         <li>receive cashback rewards on every payment.</li>
         <li>Pay for Utility Bills with Crypto</li>
         <li>SolPayPLus has big dreams</li>
         <li>Pay for Utility Bills with Crypto</li>
         <li>SolPayPLus has big dreams</li>
         <li>Pay for Utility Bills with Crypto</li>
       </ul>
      </Marquee>
       </MarqueeContainer>
    );
}

export default MarqueeDiv;