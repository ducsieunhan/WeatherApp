import { useEffect, useState } from "react";

const DEFAULT_HEADERS = {
  accept: 'application/json',
}

export function useSpeCity({ url = '', method = 'GET' }) {

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    setIsLoading(true);
    fetch(`${import.meta.env.VITE_API_HOST}${url}appid=${import.meta.env.VITE_API_TOKEN}`, {
      method,
      headers: {
        ...DEFAULT_HEADERS,
      },
    })
      .then(async (res) => {
        const data = await res.json();
        console.log({ data });
        setData(data);
      })
      .catch(err => {
        console.error(err);
      }).finally(() => {
        setIsLoading(false);
      })
  }, [url, method]);
  return { isLoading, data };
}