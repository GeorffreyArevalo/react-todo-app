import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({

    name: 'auth',
    initialState: {
        user: {},
        state: 'checking', // authenticated - unauthenticated
    },
    reducers: {

        onLogin: ( state, { payload }) => {
            state.state = 'authenticated';
            state.user = payload.user;
        },
        onLogout: ( state ) => {
            state.state = 'unauthenticated',
            state.user = {};
        },
        onChecking: ( state ) => {
            state.state = 'checking';
            state.user = {};
        }
    }

});

export const { onChecking, onLogin, onLogout } = authSlice.actions;


