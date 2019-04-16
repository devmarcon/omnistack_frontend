import axios from "axios";

const api = axios.create({
  baseURL: "https://omnistack-amtrs-backend.herokuapp.com"
});

export default api;
