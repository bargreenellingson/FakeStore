import { configureStore } from '@reduxjs/toolkit';
import catalogReducer from './slices/catalog';
import cartReducer from './slices/cart';
import authReducer from './slices/auth';

export default configureStore({
    reducer: {
        catalog: catalogReducer,
        cart: cartReducer,
        auth: authReducer,
    },
});
