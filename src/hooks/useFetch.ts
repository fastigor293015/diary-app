import { useEffect, useState } from "react";

const useFetch = <T>(url: string, options?: RequestInit) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    setLoading(true);
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        if (data?.errors) {
          setError(data?.errors[0]);
          setData(null);
        } else {
          setData(data);
        }
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      })
      .finally(() => setLoading(false));
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
