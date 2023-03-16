// importing relevant styles
import { HeroImage, HeroSectionContainer,Image, ImagesContainer, TransactionsContainer, TransactionsText } from "./hero-section.styles";

// JSX Component
const HeroSection :  () => JSX.Element = () => {
    return (
      <HeroSectionContainer>
        <TransactionsContainer>
          <TransactionsText>
            You can pay over <span className="coloredText">17,000 </span>
            bills on <span className="coloredText">SolPayPLus</span>.
          </TransactionsText>
        </TransactionsContainer>
        <ImagesContainer>
          <Image>
            <img src="/assets/Make-Payment.png" alt="makes payemnt" />
            <span>
              {" "}
              Make <br /> Payment
            </span>
          </Image>
          <Image>
            <img src="/assets/Accross-africa.png" alt="accross africa" />
            <span>
              {" "}
              Accross <br /> Africa
            </span>
          </Image>
        </ImagesContainer>
        <HeroImage>
          <img src="/assets/hero.png" alt="hero section" />
        </HeroImage>
      </HeroSectionContainer>
    );  
}

export default HeroSection;