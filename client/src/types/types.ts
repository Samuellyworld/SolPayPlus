// OptionType
export interface OptionsType {
    value : string,
    label : string
}


// nested object type
export interface ValuesObjectType {
    [key: string ]: string | NestedObjectType | number;
}

// nested object type
export interface NestedObjectType {
    [key: string]: string | Number;
  }

// dropdown Type
export interface DropdownType {
    label: string;
    options: string[];
    theDefault : string;
}

// service Type
export interface ServiceType {
    name : string,
    image : string,
    category : string
}

// pop up Type
export interface PopUpType {
    children : string,
    visible : boolean,

}

// Header Props Type
export interface HeaderPropsType {
    marquee :  boolean
}

// dropdown state
export type DropdownStateType = [boolean , React.Dispatch<React.SetStateAction<boolean>>]
export type DropdownSelectType = [string, React.Dispatch<React.SetStateAction<string>>]

// CustomStyles Types
export interface CustomStylesType {
    control: (provided: NestedObjectType) => {
        paddingLeft: string;
        width: string;
        border: string;
        fontSize: string;
    };
    singleValue: (provided: NestedObjectType) => {
        display: string;
        alignItems: string;
        color: string;
        fontSize: string;
    };
    option: (provided: NestedObjectType, state: NestedObjectType) => {
            display: string;
            alignItems: string;
            paddingLeft: string;
            background: string;
            color: string;
            fontSize: string;
        
    };
    optionLabel: (provided: NestedObjectType, state: NestedObjectType) => {
            paddingLeft: string;  
    };
    optionIcon: {
        width: string;
        marginRight: string;
     };
}
