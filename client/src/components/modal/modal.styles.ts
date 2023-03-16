// import relevant module
import styled from "styled-components";

//declaring PropType interface
interface PropsType {
    visible : boolean
}

//decalring PopupContainer styles
export const PopupContainer = styled.div<PropsType>`
  position: fixed;
  top: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem;
  background-color: whitesmoke;
  border-radius: 0.5rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.2s ease-out;
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 500;
  z-index : 2;
`;

