// import relevant styles

import { FooterContainer, FooterD } from "./footer.styles";

const Footer = () => {
    return (
        <FooterContainer>
        <FooterD>
            <h2 className="p">What are you waiting for?</h2>
            <h2>Get started! </h2>
            <button>
                <span>Go to App</span>
                <img src="/assets/ArrowRight.png" alt="arrow " />
            </button>
            <p>© SolPayPlus</p>
        </FooterD>
      </FooterContainer>
    )
}

export default Footer;