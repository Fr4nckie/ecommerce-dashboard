export type Kpi = {
  id: string
  label: string
  value: number | string
  delta?: number // relative change in percent (e.g. +5.2)
  hint?: string
  sparkline?: number[]
}

export type Sale = {
  month: string
  revenue: number
}

export type TopProduct = {
  id: string
  name: string
  category: string
  image: string
  price: number
  unitsSold: number
  revenue: number
  stock: number
  rating: number
  trend: string
}
export type RevenueByCountry = {
  country: string
  code: string
  revenue: number
}

// Type pour un produit dans la commande
export type OrderItem = {
  name: string
  quantity: number
  price: number
}

// Type pour une commande
export type Order = {
  orderId: string
  customerName: string
  date: string // ISO 8601 string
  status: "Processing" | "Shipped" | "Delivered" | "Cancelled"
  total: number
  paymentMethod: string
  items: OrderItem[]
}

export type Product = {
  id: number
  name: string
  category: string
  price: number
  size: string
  quantity: number
  status: "In Stock" | "Low Stock" | "Out of Stock"
  date: string // (ISO 8601)
  image: string
}
