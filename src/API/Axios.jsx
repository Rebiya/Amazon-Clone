import axios from "axios";
const axiosInstance = axios.create({
  // baseURL: "http://localhost:4000"
  baseURL: "https://backend-amazonapi-10.onrender.com/"
});
export { axiosInstance };
