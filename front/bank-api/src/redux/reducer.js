import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    firstName: '',
    lastName: '',
    token: localStorage.getItem("token") || 0,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUser: (state, action) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.firstName = '';
            state.lastName = '';
            state.token = 0;
        },
    },
});

export const { getUser, logout } = userSlice.actions;
export default userSlice.reducer;

