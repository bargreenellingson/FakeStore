import { createSlice } from '@reduxjs/toolkit';

interface CartProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        count: number;
        rate: number;
    };
    // property added for cart
    quantity: number;
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {
        addProductToCart: (state, action) => {
            const updatedProductQuantity = {
                ...action.payload.product,
                quantity: 1,
            } as CartProduct;

            const isProductInCart = new Set(
                [...state.cart].map((product) => product.id)
            ).has(updatedProductQuantity.id);

            if (isProductInCart) {
                const updatedCartWithQuantity = [...state.cart].map(
                    (product) => {
                        if (product.id === updatedProductQuantity.id) {
                            return {
                                ...product,
                                quantity: product.quantity + 1,
                            };
                        }
                        return product;
                    }
                );
                state.cart = [...updatedCartWithQuantity];
            } else {
                state.cart = [...state.cart, updatedProductQuantity];
            }
        },
        deleteProductFromCart: (state, action) => {
            state.cart = [...state.cart].filter(
                (product) => product.id !== action.payload.productId
            );
        },
        updateProductQuantityInCart: (state, action) => {
            const newQuantity = Number(action.payload.productQuantity);
            const newCart = [...state.cart].map((product) => {
                if (product.id === action.payload.productId) {
                    return {
                        ...product,
                        quantity: newQuantity,
                    };
                }
            });
            state.cart = newCart;
        },
    },
});

export const {
    addProductToCart,
    deleteProductFromCart,
    updateProductQuantityInCart,
} = cartSlice.actions;


export const addToCart = (product) => (dispatch) => {
    return dispatch(addProductToCart({ product }));
};

export const deleteFromCart = (productId) => (dispatch) => {
    return dispatch(deleteProductFromCart({ productId }));
};

export const updateQuantityInCart =
    (productId, productQuantity) => (dispatch) => {
        return dispatch(
            updateProductQuantityInCart({
                productId,
                productQuantity,
            })
        );
    };

export const selectCart = (state) => state.cart.cart;
export const selectCartCount = (state) => {
    return state.cart.cart.reduce((totalProducts, product) => {
        return (totalProducts += product.quantity);
    }, 0);
};
export default cartSlice.reducer;
