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
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    animation: marquee 10s linear infinite;
    position : absolute;
`

// Marquee Span
export const MarqueeSpan = styled.p`
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: 400;
`  