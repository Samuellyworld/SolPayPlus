// import styled from styled-components
import styled from "styled-components";

// dropdown container styles
export const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
  padding : 1rem;
  background-color: white;
  border: 1px solid #959595;
  border-radius: 4px;

  .dropdownIcon {
    position : absolute;
    right : 1rem;
    top : 50%;
    transform: translateY(-50%);
    width: 1rem;
  }
`;

// dropdown label styles
export const DropdownLabel = styled.div`
  font-size: 14px;
  color: #333;
`;

// dropdown menu styles
export const DropdownMenu = styled.ul<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #fffffff4;
  border: 1px solid #959595;
  display: ${props => props.isOpen ? 'none' : 'block'};
  transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-10px)'};
  z-index: 1;
`;

// dropdown item styles
export const DropdownItem = styled.li`
  list-style: none;
  padding: 8px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  
  &:hover {
    background-color: #f2f2f2;
  }
`;