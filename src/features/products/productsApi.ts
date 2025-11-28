import type { Product } from "@/types/data.ts"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "products",
      keepUnusedDataFor: 60,
    }),
    getProductById: builder.query<Product, string>({
      query: (id) => `/products/${id}`,
      keepUnusedDataFor: 60
    }),
  }),
})

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi
