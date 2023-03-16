// import relevant styles
import { FooterContainer, FooterD } from "./footer.styles";

// import link from react-router dom
import { Link } from "react-router-dom";

// JSX Component
const Footer: () => JSX.Element = () => {
  return (
    <FooterContainer>
      <FooterD>
        <h2 className="p">What are you waiting for?</h2>
        <h2>Get started! </h2>
        <Link to="/app">
          <button>
            <span>Go to App</span>
            <img src="/assets/ArrowRight.png" alt="arrow " />
          </button>
        </Link>
        <p>© SolPayPlus</p>
      </FooterD>
    </FooterContainer>
  );
};

export default Footer;
