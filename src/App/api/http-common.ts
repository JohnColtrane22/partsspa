import axios from "axios";

export default axios.create({
  baseURL: "https://localhost:7157/",
  headers: {
    "Content-type": "application/json"
  }
});