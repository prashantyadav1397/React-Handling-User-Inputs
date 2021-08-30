import axios from "axios";

export default axios.create({
  // baseURL: "https://bankrestfulapi.herokuapp.com",
  baseURL: "http://localhost:5000",
  headers: {
    Accept: "*",
  },
});
