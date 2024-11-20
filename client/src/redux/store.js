import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./apis/authApi";
import authSlice from "./slices/authSlice";
import { adminApi } from "./apis/adminApi";
import { UserApi } from "./apis/userApi";

const reduxStore = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [adminApi.reducerPath]: adminApi.reducer,
        auth: authSlice,
        [UserApi.reducerPath]: UserApi.reducer
    },
    middleware: mid => [...mid(), authApi.middleware, adminApi.middleware, UserApi.middleware]
})


export default reduxStore
