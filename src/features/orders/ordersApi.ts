import type { Order } from "@/types/data.ts"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    getOrders: builder.query<Order[], void>({
      query: () => "orders",
      keepUnusedDataFor: 60,
    }),
  }),
})

export const { useGetOrdersQuery } = ordersApi
