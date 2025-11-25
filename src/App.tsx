import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import MainLayout from "./pages/MainLayout.tsx"
import Dashboard from "./pages/Dashboard.tsx"
import { kpisLoader } from "./services/kpisLoader.ts"
import Products from "./pages/Products.tsx"
import Orders from "./pages/Orders.tsx"
import Customers from "./pages/Customers.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to="dashboard" replace /> },
      { path: "dashboard", element: <Dashboard />, loader: kpisLoader },
      { path: "products", element: <Products /> },
      { path: "orders", element: <Orders /> },
      { path: "customers", element: <Customers /> },
      { path: "analytics", element: <div>Analytics</div> },
      { path: "settings", element: <div>Settings</div> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
