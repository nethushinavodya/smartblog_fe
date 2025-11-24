import axios from "axios"

const api = axios.create({
  baseURL: "https://smartblog-be.vercel.app/api/v1",
  withCredentials: true
})

const PUBLIC_ENDPOINTS = ["/auth/login", "/auth/register"]

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken")

  const isPUblic = PUBLIC_ENDPOINTS.some((url) => config.url?.includes(url))

  if (!isPUblic && token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export default api