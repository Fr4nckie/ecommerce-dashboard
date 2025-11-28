import type { Customer } from "@/types/data.ts"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const customersApi = createApi({
  reducerPath: "customersApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    getCustomers: builder.query<Customer[], void>({
      query: () => "customers",
      keepUnusedDataFor: 60,
    }),
  }),
})

export const { useGetCustomersQuery } = customersApi
