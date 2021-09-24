import { useState, useEffect } from "react";
import axios from "axios";

export const useAxios = ({ url, method, body = null, headers = null }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axios[method](url, JSON.parse(headers), JSON.parse(body))
        .then((res) => setResponse(res.data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }, 2000);
  }, [method, url, body, headers]);

  return { response, error, loading };
};
