import axios from "axios"

const BASE_URL = "https://690b6eae6ad3beba00f4eddd.mockapi.io/api/v1"

export const api = axios.create({
  baseURL: BASE_URL,
})
