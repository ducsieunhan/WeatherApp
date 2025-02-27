import { useEffect, useState } from "react";

export function UseExtractWeatherData(data) {

  const [extractedData, setExtractedData] = useState([]);
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
    // setIsLoading(true);
    if (data && data.hourly) {
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
      } = data.hourly;

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
  }, [data]);

  return extractedData;
}