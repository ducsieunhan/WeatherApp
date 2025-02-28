import { useEffect, useState } from "react";

export function UseExtractWeatherData(cityName) {

  const [isLoading, setIsLoading] = useState(false);
  const [extractedData, setExtractedData] = useState([]);
  const [position, setPosition] = useState({ lat: null, lon: null });
  const [weatherData, setWeatherData] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);



  const getWeatherDescription = (weathercode) => {
    const weatherDescriptions = {
      0: "Clear sky",
      1: "Mainly clear",
      2: "Partly cloudy",
      3: "Overcast",
      45: "Fog",
      51: "Light drizzle",
      53: "Moderate drizzle",
      55: "Dense drizzle",
      61: "Slight rain",
      63: "Moderate rain",
      65: "Heavy rain",
      80: "Light showers",
      81: "Moderate showers",
      82: "Violent showers",
      95: "Thunderstorm",
      96: "Thunderstorm with slight hail",
      99: "Thunderstorm with heavy hail",
    };

    return weatherDescriptions[weathercode] || "Unknown";
  };


  useEffect(() => {
    setIsLoading(true);
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${import.meta.env.VITE_API_TOKEN}`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
    })
      .then(async (res) => {
        const data = await res.json();
        // console.log({ data });
        setPosition({
          "lat": data[0].lat,
          "lon": data[0].lon
        })

      })
      .catch(err => {
        console.error(err);
      }).finally(() => {
        setIsLoading(false);
      })
  }, [cityName])

  useEffect(() => {
    if (!position.lat || !position.lon) return;
    setIsLoading(true);
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${position.lat}&longitude=${position.lon}&hourly=temperature_2m,relativehumidity_2m,weathercode,precipitation,windspeed_10m,winddirection_10m,pressure_msl,uv_index`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      }
    )
      .then(async (res) => {
        const data = await res.json();
        // console.log({ data });
        setWeatherData(data);

      })
      .catch((err) => {
        console.error("Lỗi khi fetch dữ liệu thời tiết:", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [position]);


  useEffect(() => {
    // setIsLoading(true);
    if (weatherData && weatherData.hourly) {

      const {
        temperature_2m,
        relativehumidity_2m,
        precipitation,
        windspeed_10m,
        winddirection_10m,
        pressure_msl,
        uv_index,
        time,
        weathercode,
      } = weatherData.hourly;

      const next24Hours = time
        .map((timestamp, index) => ({
          time: timestamp.split("T")[1],
          temperature: temperature_2m[index],
          humidity: relativehumidity_2m[index],
          precipitation: precipitation[index],
          windspeed: windspeed_10m[index],
          winddirection: winddirection_10m[index],
          pressure: pressure_msl[index],
          uvIndex: uv_index[index],
          weathercode: weathercode[index],
          weatherDescription: getWeatherDescription(weathercode[index]),
        }))
        .slice(0, 24);

      setExtractedData(next24Hours);
    }
  }, [weatherData]);

  // useEffect(() => {
  //   console.log({ extractedData });
  // }, [extractedData]);

  return { weather24hours: extractedData, isLoading };
}