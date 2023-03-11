// import relevant modules
import React, { useState } from 'react';

// import relevant custom styles
import { DropdownMenu, DropdownContainer,
         DropdownItem, DropdownLabel 
        } from './dropdown.styles';

// importing dropdown props type
import { DropdownType , DropdownStateType, DropdownSelectType} from '../../types/types';

// JSX Component
const Dropdown: React.FC<DropdownType> = ({  options, theDefault }) => {

    // state initial values
  const [isOpen, setIsOpen] : DropdownStateType = useState(true);
  const [selectedOption, setSelectedOption] : DropdownSelectType = useState(theDefault);

  // handle option click 
  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  }

  // JSX Building block;
  return (
    <DropdownContainer onClick={() => setIsOpen(!isOpen)}>
      <DropdownMenu isOpen={isOpen}>
        {options.map(option => (
          <DropdownItem key={option} onClick={() => handleOptionClick(option)}>
            {option}
          </DropdownItem>
        ))}
      </DropdownMenu>
      <DropdownLabel>{selectedOption}</DropdownLabel>
      <img src="/assets/ArrowDown.png" className="dropdownIcon" alt="" />
    </DropdownContainer>
  );
}

export default Dropdown;