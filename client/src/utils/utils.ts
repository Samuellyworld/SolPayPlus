// importing relevant types
import { CustomStylesType, NestedObjectType, OptionsType, ServiceType } from "../types/types";

// options
export const options : OptionsType[] = [
    { value: 'NG', label: 'Nigeria' },
    { value: 'GH', label: 'Ghana' },
    { value: 'UG', label: 'Uganda' },
    { value: 'ZM', label: 'Zimbabwe' },
    { value: 'KE', label: 'Kenya' },
  ];

// airtime options
// export const airtimeOptions : string[] = ["MTN", "Airtel", "9 Mobile", "Glo"]

export const customStyles : CustomStylesType | any = {
    control: (provided: NestedObjectType, state :{isFocused : boolean} ) => ({
      ...provided,
      paddingLeft: '25px', // add left padding to accommodate icon
      width: '100%',
      border : "1px solid black",
      fontSize : "0.8rem",
      cursor: "pointer",
      boxShadow: state.isFocused ? 'none' : 'none',
      '&:hover': { borderColor: state.isFocused ? 'none' : 'none' },
    }),
    indicatorSeparator: () => ({ display: 'none' }),
    dropdownIndicator: (provided: any, state: { isFocused: boolean, isHovered : boolean }) => ({
        ...provided,
        color: state.isFocused ? 'black' : '#B2B2B2',
        transform: state.isFocused || state?.isHovered ? 'rotate(180deg)' : null,
        transition: 'transform 0.2s ease-in-out',
        cursor: "pointer",
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
      cursor : "pointer"

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

// services
export const services : ServiceType[] = [
    {
        name : "Airtime",
        image : "/assets/airtime.png" ,
        category : "airtime"
    },
    {
      name : "Data Bundles",
      image : "/assets/DeviceMobileCamera.png",
      category : "data"
    },
    {
     name : "Internet",
     image : "/assets/Globe.png",
    category : "internet"
    }, 
    {
     name : "Electricity",
     image : "/assets/Lightbulb.png",
     category : "electricity"
    },
    {
     name : "Cable TV",
     image : "/assets/TelevisionSimple.png",
     category : "cable"
    }
  ]



