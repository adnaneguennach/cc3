import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice/authSlice';
import annoncesSlice from './annoncesSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        annonces : annoncesSlice
    }
});

export default store;
