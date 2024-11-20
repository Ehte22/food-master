import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const UserApi = createApi({
    reducerPath: "userapi",
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_URL}/api/user`, credentials: "include" }),
    tagTypes: ["user", "cart", "address", "order"],
    endpoints: (builder) => {
        return {
            getUserDish: builder.query({
                query: (id) => {
                    return {
                        url: `/dish/${id}`,
                        method: "GET",

                    }
                },
                transformResponse: data => data.result,
                providesTags: ["user"]
            }),

            // cart
            getUsercart: builder.query({
                query: (id) => {
                    return {
                        url: `/cart/${id}`,
                        method: "GET",

                    }
                },
                transformResponse: data => data.result,
                providesTags: ["cart"]
            }),

            addUsercart: builder.mutation({
                query: (cartData) => {
                    return {
                        url: `/add-cart`,
                        method: "POST",
                        body: cartData
                    }
                },
                transformErrorResponse: err => {
                    console.log(err)
                    return err
                },
                invalidatesTags: ["cart"]
            }),


            updateUsercart: builder.mutation({
                query: (cartData) => {
                    console.log(cartData);
                    return {
                        url: `/update-cart/${cartData._id}`,
                        method: "PUT",
                        body: cartData
                    }
                },
                invalidatesTags: ["cart"]
            }),

            // ADDRESSS 

            getUserAddress: builder.query({
                query: (id) => {
                    return {
                        url: `/address`,
                        method: "GET",

                    }
                },
                transformResponse: data => data.result,
                providesTags: ["address"]
            }),

            addUserAddress: builder.mutation({
                query: (addressData) => {
                    return {
                        url: `/add-address`,
                        method: "POST",
                        body: addressData
                    }
                },
                transformErrorResponse: err => {
                    console.log(err)
                    return err
                },
                invalidatesTags: ["address"]
            }),


            // order

            placeOrder: builder.mutation({
                query: (orderData) => {
                    return {
                        url: `/place-order`,
                        method: "POST",
                        body: orderData
                    }
                },
                transformErrorResponse: err => {
                    console.log(err)
                    return err
                },
                invalidatesTags: ["order"]
            }),


            getUserOrder: builder.query({
                query: (id) => {
                    return {
                        url: `/user-order`,
                        method: "GET",

                    }
                },
                transformResponse: data => data.result,
                providesTags: ["address", "order"]
            }),

            getUserOrderStatus: builder.query({
                query: (id) => {
                    return {
                        url: `/user-order-status/${id}`,
                        method: "GET",

                    }
                },
                transformResponse: data => data.result,
                providesTags: ["address", "order"]
            }),


            // payment place

            initiatePayment: builder.mutation({
                query: (orderData) => {
                    return {
                        url: `/initiatePayment`,
                        method: "POST",
                        body: orderData
                    }
                },
                transformErrorResponse: err => {
                    console.log(err)
                    return err
                },
                invalidatesTags: ["order"]
            }),

            payMoney: builder.mutation({
                query: (orderData) => {
                    return {
                        url: `/pay-money`,
                        method: "POST",
                        body: orderData
                    }
                },
                transformErrorResponse: err => {
                    console.log(err)
                    return err
                },
                invalidatesTags: ["order"]
            }),






        }
    }
})

export const {
    useGetUserDishQuery,
    useGetUsercartQuery,
    useAddUsercartMutation,
    useUpdateUsercartMutation,

    // address

    useGetUserAddressQuery,
    useAddUserAddressMutation,

    // orders

    useGetUserOrderQuery,
    usePlaceOrderMutation,
    useGetUserOrderStatusQuery,

    // payment
    useInitiatePaymentMutation,
    usePayMoneyMutation



} = UserApi
