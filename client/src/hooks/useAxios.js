import { useState } from "react";
import { Axios } from "../axios/axiosInstance";

const useAxios = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (url, method, body = null) => {
    setLoading(true);
    setError(null);
    try {
      const response = await Axios({
        method,
        url,
        data: body,
      });
      setData(response);
    } catch (error) {
      setError(error?.response?.data?.msg || error?.message);
    }
    setLoading(false);
  };

  const GET = (url) => fetchData(url, "GET");
  const POST = (url, body) => fetchData(url, "POST", body);
  const PATCH = (url, body) => fetchData(url, "PATCH", body);
  const DELETE = (url) => fetchData(url, "DELETE");

  return {
    data,
    loading,
    error,
    GET,
    POST,
    PATCH,
    DELETE,
  };
};

export default useAxios;
