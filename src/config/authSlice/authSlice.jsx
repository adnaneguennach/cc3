import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [
        {id:1, user : 'root', pass : 'root'}
    ],switchSidebar : false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        showState: (state) => state,
        signUp : (state,action)=>{
            return {...state, users : [...state.users, action.payload.p]}
        },
        toggleSidebar : (state,action) =>{
            return {...state, switchSidebar: !state.switchSidebar}
        }

    }
});
export const {toggleSidebar} = authSlice.actions
export default authSlice.reducer;
