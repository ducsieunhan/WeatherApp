import { useEffect, useState } from "react";

const DEFAULT_HEADERS = {
  accept: 'application/json',
}

export function useCoordinationCity({ cityName = "Hanoi" }) {

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    setIsLoading(true);
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${import.meta.env.VITE_API_TOKEN}`, {
      method: 'Get',
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
  }, [cityName]);
  return { data, isLoading };
}