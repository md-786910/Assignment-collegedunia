import axios from "axios";
const api = "https://assignment-collegedunia.onrender.com/api/v1/users";
// const api = "http://localhost:5000/api/v1/users";

const Axios = axios.create({
  baseURL: api,
  withCredentials: true,
});

export { Axios };
