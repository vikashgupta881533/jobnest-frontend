import axios from "axios";

// Ek hi jagah backend ka address likha hai — poore app mein yahi import karo.
const api = axios.create({
  baseURL: "http://localhost:6100",
});

// Har request ke saath automatically login token bhej dega
// (agar localStorage mein token save hai).
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.authorization = token;
  }
  return config;
});

export default api;
