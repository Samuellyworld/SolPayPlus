// import styled from styled components
import styled , {keyframes} from "styled-components"

const marquee = keyframes`
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(-100%);
    }
`
// marquee container
export const MarqueeContainer = styled.div`
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    top: 0px;
    cursor: pointer;
    margin: 8px 0 32px 0;
    z-index: 0;
    position: absolute;

    
   ul {
    display: inline-block;
    white-space: nowrap;
    margin-block: 0;
    padding-inline: 0;
    font-family: "Space Grotesk";
    font-style: normal;
    font-weight: 500;
  }
    
  li {
    display: inline-block;
    padding-left: 54px;
    position: relative; 
    font-family: 'Tiny';
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
    font-family: "Space Grotesk";
    font-style: normal;
    font-weight: 500;

    @media screen and (max-width: 500px) {
        font-size : 10px;
    }
  }
  
   li::before {
    content: '';
    position: absolute;
    width: 24px;
    height: 9px;
    background: rgba(0, 0, 0, 0.3);
    margin-left: -39px;
    margin-top: 3px;
  }
`

// Marquee Span
export const MarqueeSpan = styled.p`
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: 400;
`  