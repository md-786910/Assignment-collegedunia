import axios from "axios";
const api = "http://localhost:5000/api/v1/users";

const Axios = axios.create({
  baseURL: api,
  withCredentials: true,
});

export { Axios };
