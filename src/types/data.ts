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

export type Product = {
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
