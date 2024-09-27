import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth/authSlice";
import { todoSlice } from "./slices/todo/todoSlice";


export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        todo: todoSlice.reducer,
    }
});
