import axios from "axios";
const axiosInstance = axios.create({
  // baseURL: "http://localhost:4000"
  baseURL: "https://backend-amazonapi-rebu.onrender.com"
});
export { axiosInstance };
