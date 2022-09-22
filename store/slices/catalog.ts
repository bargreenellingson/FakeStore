import { createSlice } from '@reduxjs/toolkit';

export const catalogSlice = createSlice({
    name: 'catalog',
    initialState: {
        categories: [],
    },
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload;
        },
    },
});

export const { setCategories } = catalogSlice.actions;

export const getAndSetCategories = () => (dispatch) => {
    fetch('https://fakestoreapi.com/products/categories')
        .then((res) => res.json())
        .then((data) => dispatch(setCategories(data)));
};

export const selectCategories = (state) => state.catalog.categories;

export default catalogSlice.reducer;
