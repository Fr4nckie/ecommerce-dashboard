import { KPIs_DATA } from "@/data/kpis.ts"
import type { LoaderFunction } from "react-router-dom"

export const kpisLoader: LoaderFunction = async () => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1_000))
    return KPIs_DATA
  } catch (error) {
    console.error(error)
    throw error
  }
}
