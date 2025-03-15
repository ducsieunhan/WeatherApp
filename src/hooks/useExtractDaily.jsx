import { useEffect, useState } from "react";

const DEFAULT_HEADERS = {
  accept: 'application/json',
}

export function useExtractDaily({ cityName, method = 'GET' }) {

  // console.log(cityName);


  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    setIsLoading(true);
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_API_TOKEN_2}&q=${cityName}&days=14&aqi=no&alerts=no`, {
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
  }, [cityName, method]);
  return { data, isLoading };
}