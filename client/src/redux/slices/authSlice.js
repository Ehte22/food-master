import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../apis/authApi";
import { adminApi } from "../apis/adminApi";

const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        user: JSON.parse(localStorage.getItem("user")),
        admin: JSON.parse(localStorage.getItem("admin"))
    },
    reducers: {},


    extraReducers: builder => {

        builder.addMatcher(authApi.endpoints.loginUsers.matchFulfilled, (state, { payload }) => {
            state[payload.role] = payload
            state.loggenIn = true
        })
        builder.addMatcher(adminApi.endpoints.getAllDishes.matchFulfilled, (state, { payload }) => {
            state.loggenIn = false
        })

        builder.addMatcher(authApi.endpoints.continueWithGoogle.matchFulfilled, (state, { payload }) => {
            state[payload.role] = payload
            state.loggenIn = true
        })

        builder.addMatcher(authApi.endpoints.registerUsers.matchFulfilled, (state, { payload }) => {
            console.log(payload);
            state.user = payload
            state.loggenIn = true
        })

        builder.addMatcher(authApi.endpoints.logOutUsers.matchFulfilled, (state, { payload }) => {
            state.loggenIn = false
            state.user = null
            state.admin = null
        })

    }


})


export default authSlice.reducer