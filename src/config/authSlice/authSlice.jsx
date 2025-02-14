import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [
        {id:1, user : 'root', pass : 'root'}
    ]
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        showState: (state) => state,
        signUp : (state,action)=>{
            return {...state, users : [...state.users, action.payload.p]}
        }

    }
});

export default authSlice.reducer;
