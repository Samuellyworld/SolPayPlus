// importing relevant module
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CurrentType } from '../../types/store.types';
import { USER_ACTION_TYPES } from './user.action';

// initial state
const initialState : CurrentType = {
    currentUser : ""
}

// setting user actions;
export const userSlice = createSlice({
    name: USER_ACTION_TYPES.SET_CURRENT_USER,
    initialState,
    reducers : {
     setCurrentUser : (state :any, action :PayloadAction<any>) => {
      state.currentUser = action.payload
     }
    }
})

// dispatch
export const {setCurrentUser } = userSlice.actions

//reducer
export default userSlice.reducer;