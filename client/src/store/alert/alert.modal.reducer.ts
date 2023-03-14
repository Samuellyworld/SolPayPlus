
// importing relevant module
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ALERT_ACTION_TYPES } from './alert.modal.action';

// user types
interface alertTypes {
   alertModal :  { openModal: boolean, modalContent: any },
   bottomAlert : {openModal : boolean, modalContent : any},
   cashback : {openModal : boolean, modalContent : any}
}

// initial state
const initialState: alertTypes= {
  alertModal : {openModal : false, modalContent: ""},
  bottomAlert : {openModal : false, modalContent : ""},
  cashback : {openModal : false, modalContent : ""},
}

// setting user actions
export const alertSlice= createSlice({
  name: ALERT_ACTION_TYPES.ALERT_TYPE,
  initialState,
  reducers : {
   alert : (state :any, action :PayloadAction<string>) => {
    state.alertModal.openModal = true
    state.alertModal.modalContent= action.payload 
   },
  close : (state :any, action :PayloadAction<string>)  => {
    state.alertModal.openModal = false
  },
  bottomAlert : (state :any, action :PayloadAction<string>) => {
    state.bottomAlert.openModal = true
    state.bottomAlert.modalContent= action.payload 
   },
  bottomClose :  (state :any, action :PayloadAction<string>) => {
    state.bottomAlert.openModal = false
   },
  addCashBack : (state :any, action :PayloadAction<string>) => {
    state.cashback.openModal = true
    state.cashback.modalContent = action.payload
   
  },
  removeCashback :  (state :any, action :PayloadAction<string>) => {
    state.cashback.openModal = false
  }
}
})

// dispatch
export const {alert, close, bottomAlert, bottomClose, addCashBack, removeCashback} = alertSlice.actions

//reducer
export default alertSlice.reducer