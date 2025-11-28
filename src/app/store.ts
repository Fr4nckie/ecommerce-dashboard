import { customersApi } from "@/features/customers/customersApi.ts"
import { ordersApi } from "@/features/orders/ordersApi.ts"
import { productsApi } from "@/features/products/productsApi.ts"
import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
  reducer: {
    [customersApi.reducerPath]: customersApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(customersApi.middleware)
      .concat(productsApi.middleware)
      .concat(ordersApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
