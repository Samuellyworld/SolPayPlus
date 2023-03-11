// important relevant module;

import { SplashContainer, SplashLeft } from "./splash-section.styles";

// splash section JSX Component
const SplashSection : () => JSX.Element = () => {
    return (
        <SplashContainer>
            <SplashLeft>
                <span className="header">
                 <h2> Pay Your Bills Hassle-Free with</h2>
                 <h2> <img src="/assets/Vector.png" alt="solana icon" /> Pay</h2>
                </span>
                <p>Simplify Your Life with Our Multi-Payment Platform Across Nigeria and Africa and </p>
                <button>
                     <span>Go to App</span> 
                     <img src="assets/SquaresFour.png" alt="sqaure ones"/>
               </button>
            </SplashLeft>
        </SplashContainer>
    );
}

export default SplashSection;