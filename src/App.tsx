import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import MainLayout from "./pages/MainLayout.tsx"
import Dashboard from "./pages/Dashboard.tsx"
import { kpisLoader } from "./services/kpisLoader.ts"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to="dashboard" replace /> },
      { path: "dashboard", element: <Dashboard />, loader: kpisLoader },
      { path: "products", element: <div>Products</div> },
      { path: "orders", element: <div>orders</div> },
      { path: "customers", element: <div>customers</div> },
      { path: "analytics", element: <div>Analytics</div> },
      { path: "settings", element: <div>Settings</div> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
