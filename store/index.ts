import { configureStore } from '@reduxjs/toolkit';
import appReducer from './slices/app';
import cartReducer from './slices/cart';

export default configureStore({
    reducer: {
        app: appReducer,
        cart: cartReducer,
    },
});
