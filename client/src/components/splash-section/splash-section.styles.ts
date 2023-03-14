// import styled from styled-components;
import styled from "styled-components";

// splash container styles
export const SplashContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5rem 4rem 7rem 9rem;
  display: flex;
  gap: 2rem;
  position: relative;
  

  @media screen and (max-width: 1035px) and (min-width: 800px) {
    padding: 3rem 4rem 7rem 4rem;
  }
  @media screen and (max-width: 800px) and (min-width : 400px) {
    padding: 3rem 2rem 3rem 2rem;
  }
  @media screen and (max-width : 400px) {
    padding : 3rem 1rem 2rem 1rem;
  }
`;

// splash left styles
export const SplashLeft = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    inline-size: 28rem;
    overflow-wrap: break-word;
    font-size: 3rem;
    font-family: "Space Grotesk";
    font-style: normal;
    font-weight: 700;
    line-height: 4rem;
    color: #2c2c2c;

    @media screen and (max-width: 800px) and (min-width: 649px) {
      font-size: 2.5rem;
      inline-size: 24rem;
    }

    @media screen and (max-width: 649px) and (min-width : 400px) {
      display: inline;
      font-size: 2.6rem;
      inline-size: 10rem;
      overflow-wrap: break-word;
    }

    @media screen and (max-width : 400px) {
        font-size : 2.2rem;
        line-height : 3rem;
        inline-size: 18rem;
        overflow-wrap : break-word;
    }

    img {
      width: 2.4rem;
      height: 2.3rem;
    }
  }

  p {
    font-family: "Space Grotesk";
    font-style: normal;
    font-weight: 400;
    color: #2c2c2c;
    inline-size: 23rem;
    overflow-wrap: break-word;
    line-height: 1.9rem;
    padding: 1.5rem 0rem 0rem 0rem;

    @media screen and  (max-width : 400px) {
        inline-size : unset;
        overflow-wrap : unset;
    }
  }

  button {
    background: #2c2c2c;
    width: 9rem;
    justify-content: center;
    display: flex;
    align-items: center;
    padding: 0.6rem 1rem;
    gap: 0.6rem;
    border-radius: 0.25rem;
    margin: 1rem 0rem;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;

    :active {
      transform: translate(0, 5px);
    }

    span {
      font-family: "Space Grotesk";
      font-style: normal;
      font-weight: 400;
      color: #ffffff;
    }
    img {
      width: 1.2rem;
    }
  }
`;

// image map styles
export const ImageMap = styled.img`
  position: absolute;
  right: 11.24rem;
  top: 4rem;
`;
