import axios from "axios";

const api = axios.create({
  baseURL: ('http://localhost:4000'),
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api;
