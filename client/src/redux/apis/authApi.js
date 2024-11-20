import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_URL}/api/auth`, credentials: "include" }),
    tagTypes: ["auth"],
    endpoints: (builder) => {
        return {
            registerUsers: builder.mutation({
                query: (userData) => {
                    return {
                        url: "/register-user",
                        method: "POST",
                        body: userData
                    }
                },
                transformResponse: data => {
                    localStorage.setItem("user", JSON.stringify(data.result))
                    return data.result
                }
            }),

            loginUsers: builder.mutation({
                query: (userData) => {
                    return {
                        url: "/login-user",
                        method: "POST",
                        body: userData
                    }
                },
                transformResponse: data => {
                    if (data.result.role == "admin") {
                        localStorage.setItem("admin", JSON.stringify(data.result))
                        return data.result
                    } else {
                        localStorage.setItem("user", JSON.stringify(data.result))
                        return data.result
                    }
                }
            }),

            continueWithGoogle: builder.mutation({
                query: (userData) => {
                    return {
                        url: "/continueWithGoogle",
                        method: "POST",
                        body: userData
                    }
                },
                transformResponse: data => {
                    console.log(data.result);
                    if (data.result.role == "admin") {
                        localStorage.setItem("admin", JSON.stringify(data.result))
                        return data.result
                    } else {
                        localStorage.setItem("user", JSON.stringify(data.result))
                        return data.result
                    }
                }
            }),


            logOutUsers: builder.mutation({
                query: () => {
                    return {
                        url: "/logOut-user",
                        method: "POST",
                    }
                },
                transformResponse: data => {
                    localStorage.removeItem("user")
                    localStorage.removeItem("admin")
                    return data
                }

            }),


        }
    }
})

export const { useLoginUsersMutation, useRegisterUsersMutation, useLogOutUsersMutation, useContinueWithGoogleMutation } = authApi
