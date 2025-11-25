import type { Customer } from "@/types/data.ts"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const BASE_URL = "http://localhost:4000"

export const customersApi = createApi({
  reducerPath: "customersApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query<Customer[], void>({
      query: () => "customers",
      keepUnusedDataFor: 60,
    }),
  }),
})

export const { useGetProductsQuery } = customersApi
