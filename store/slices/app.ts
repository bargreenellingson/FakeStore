import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        categories: [],
        token: null,
    },
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload;
        },
        loginUser: (state, action) => {
            state.token = action.payload.token;
        },
        signOutUser: state => {
            state.token = null;
        },
    },
});

export const { setCategories } = appSlice.actions;
export const { loginUser, signOutUser } = appSlice.actions;

export const login = () => dispatch => {
    //   // TODO: implement a mock login flow by storing a token from 'https://fakestoreapi.com/auth/login'
    //   fetch("https://fakestoreapi.com/auth/login", {
    //     method: "POST",
    //     body: JSON.stringify({
    //       username,
    //       password,
    //     }),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log("data", data);
    //       return dispatch(authenticationStatus(data));
    //     })
    //     .catch(err => {
    //         console.log(err)
    //         return dispatch(authenticationStatus({
    //             token: "524token"
    //         }))
    //     })
    return dispatch(
        loginUser({
            token: '524token',
        })
    );
};

export const signOut = () => dispatch => {
    return dispatch(signOutUser());
};

export const getAndSetCategories = () => dispatch => {
    fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(data => dispatch(setCategories(data)));
};

export const selectCategories = state => state.app.categories;
export const selectLoginToken = state => state.app.token;

export default appSlice.reducer;
