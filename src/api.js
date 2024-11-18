import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001", // Backend URL
});

export default API;
