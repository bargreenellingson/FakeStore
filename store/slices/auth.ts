import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
    },
    reducers: {
        loginUser: (state, action) => {
            state.token = action.payload.token;
        },
        signOutUser: (state) => {
            state.token = null;
        },
    },
});

export const { loginUser, signOutUser } = authSlice.actions;

export const login = (username, password) => (dispatch) => {
    return dispatch(
        loginUser({
            token: `${username}token${password}`,
        })
    );
};

export const signOut = () => (dispatch) => {
    return dispatch(signOutUser());
};

export const selectLoginToken = (state) => state.auth.token;

export default authSlice.reducer;
