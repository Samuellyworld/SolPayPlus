// importing relevant types
import { CustomStylesType, NestedObjectType, OptionsType } from "../types/types";

// options
export const options : OptionsType[] = [
    { value: 'nigeria', label: 'Nigeria' },
    { value: 'ghana', label: 'Ghana' },
    { value: 'togo', label: 'Togo' },
  ];

 export const customStyles : CustomStylesType | any = {
    control: (provided: NestedObjectType, state :{isFocused : boolean} ) => ({
      ...provided,
      paddingLeft: '25px', // add left padding to accommodate icon
      width: '100%',
      border : "1px solid black",
      fontSize : "0.8rem",
      boxShadow: state.isFocused ? 'none' : 'none',
      '&:hover': { borderColor: state.isFocused ? 'none' : 'none' },
    }),
    indicatorSeparator: () => ({ display: 'none' }),
    dropdownIndicator: (provided: any, state: { isFocused: boolean; }) => ({
        ...provided,
        color: state.isFocused ? 'black' : '#B2B2B2',
        transform: state.isFocused ? 'rotate(180deg)' : null,
        transition: 'transform 0.2s ease-in-out'
      }),
    singleValue: (provided : NestedObjectType) => ({
      ...provided,
      display: 'flex', // display single value as flex
      alignItems: 'center', // center contents vertically,
      color : "black",
      fontSize : "0.8rem",

    }),
    option: (provided : NestedObjectType, state : NestedObjectType) => ({
      ...provided,
      display: 'flex', // display option as flex
      alignItems: 'center', // center contents vertically
      paddingLeft: '30px', // add left padding to accommodate icon
      background: state.isSelected ? '#eee' : 'white', // highlight selected option
      color : "black",
      fontSize : "0.8rem",

    }),
    optionLabel: (provided : NestedObjectType, state : NestedObjectType) => ({
      ...provided,
      paddingLeft: '10px', // add left padding to space out label from icon


    }),
    optionIcon: {
      width: '10px', // set width of icon
      marginRight: '10px' // add right margin to space out icon from label
    }
  };