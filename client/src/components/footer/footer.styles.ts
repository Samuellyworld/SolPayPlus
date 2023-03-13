// import styled from styled components
import styled from "styled-components";

// footer container styles
export const FooterContainer = styled.div`
  display: flex;
  background: white;
  padding: 1rem 3rem 0rem;
  flex-direction: column;
`;
// footer D styles
export const FooterD = styled.div`
  display: flex;
  background: black;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem 0.8rem 0rem 0rem;

  @media only screen and (max-width: 768px) {
    padding: 15px;
  }

  .p {
    padding-top: 2rem;
  }
  h2 {
    font-size: 1.6rem;
    margin: auto;
    font-family: "Space Grotesk";
    font-style: normal;
    font-weight: 700;
    line-height: 2rem;
    color: white;
  }

  button {
    margin: 2rem 0rem 0rem;
    border-radius: 0.3rem;
    border: solid 1px white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
    padding: 0.5rem 0.5rem;

    span {
      font-family: "Space Grotesk";
      font-style: normal;
      font-weight: 400;
      color: white;
    }
    img {
      width: 1.6rem;
    }
  }

  p {
    margin-top: 4rem;
    padding: 1rem;
    font-family: "Space Grotesk";
    font-style: normal;
    font-weight: 400;
    color: white;
  }
`;
