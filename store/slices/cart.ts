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
            const isProductInCart = new Set(
                [...state.cart].map((product) => product.id)
            ).has(action.payload.product.id);

            if (isProductInCart) {
                state.cart = [...state.cart].map((product) => {
                    if (product.id === action.payload.product.id) {
                        return {
                            ...product,
                            quantity: product.quantity + 1,
                        };
                    }
                    return product;
                });
            } else {
                const productWithQuantity = {
                    ...action.payload.product,
                    quantity: 1,
                } as CartProduct;
                state.cart = [...state.cart, productWithQuantity];
            }
        },
        deleteProductFromCart: (state, action) => {
            state.cart = [...state.cart].filter(
                (product) => product.id !== action.payload.productId
            );
        },
        updateProductQuantityInCart: (state, action) => {
            const updatedQuantity = Number(action.payload.productQuantity);
            state.cart = [...state.cart].map((product) => {
                if (product.id === action.payload.productId) {
                    return {
                        ...product,
                        quantity: updatedQuantity,
                    };
                } else {
                    return product;
                }
            });
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
