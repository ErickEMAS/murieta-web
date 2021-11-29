import axios from "axios";

const api = axios.create({
  baseURL: "https://murieta.herokuapp.com"
});

export default api;