import { url } from "./url";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: url,
});

export default axiosInstance;
