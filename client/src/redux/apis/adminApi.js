import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const adminApi = createApi({
    reducerPath: "adminApi",
    // baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/admin" }),
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_URL}/api/admin`, credentials: "include" }),
    tagTypes: ["dish", "users", "order"],
    endpoints: (builder) => {
        return {
            getAllDishes: builder.query({
                query: () => {
                    return {
                        url: "/dishes",
                        method: "GET"
                    }
                },
                transformResponse: data => {
                    return data.result
                },
                providesTags: ["dish"]
            }),


            addDish: builder.mutation({
                query: dishData => {
                    return {
                        url: "/add-dish",
                        method: "POST",
                        body: dishData
                    }
                },
                invalidatesTags: ["dish"]
            }),


            deleteDish: builder.mutation({
                query: id => {
                    return {
                        url: `/delete-dish/${id}`,
                        method: "DELETE",
                    }
                },
                invalidatesTags: ["dish"]
            }),


            updateDish: builder.mutation({
                query: dishData => {
                    return {
                        url: `/update-dish/${dishData._id}`,
                        method: "PUT",
                        body: dishData.data
                    }
                },
                invalidatesTags: ["dish"]
            }),


            getAllUsers: builder.query({
                query: () => {
                    return {
                        url: `/users`,
                        method: "GET",
                    }
                },
                transformResponse: data => {
                    return data.result
                },
                providesTags: ["users"]
            }),


            updateUser: builder.mutation({

                query: (userData) => {
                    return {
                        url: `/update-user/${userData._id}`,
                        method: "PUT",
                        body: userData
                    }
                },
                invalidatesTags: ["users"]
            }),

            getAllOrders: builder.query({
                query: () => {
                    return {
                        url: `/orders`,
                        method: "GET"
                    }
                },
                transformResponse: data => {
                    return data.result
                },
                providesTags: ["order"]

            }),


            updateOrderStatus: builder.mutation({
                query: (orderData) => {
                    console.log(orderData);
                    return {
                        url: `/update-order-status/${orderData._id}`,
                        method: "PUT",
                        body: orderData
                    }
                },
                invalidatesTags: ["order"]
            }),


        }
    }
})

export const {
    useAddDishMutation,
    useDeleteDishMutation,
    useGetAllDishesQuery,
    useUpdateDishMutation,
    useGetAllUsersQuery,
    useUpdateUserMutation,
    useGetAllOrdersQuery,
    useUpdateOrderStatusMutation
} = adminApi
