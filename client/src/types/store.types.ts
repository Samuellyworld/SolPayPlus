// import custom types from redux persist module;
import { WebStorage } from "redux-persist";
import { ObjectType } from "typescript";

// persist config types
export interface PersistConfigType {
    key : string,
    storage : WebStorage
}

// types config types
export interface UserActionType {
    SET_CURRENT_USER : string
}

// current user Type
export interface CurrentType {
    currentUser : null | string 
    rewards : null | ObjectType | any
}