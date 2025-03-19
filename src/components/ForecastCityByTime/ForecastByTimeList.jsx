/* eslint-disable react/prop-types */
import { useState } from "react";
import { UseExtractWeatherData } from "../../hooks/useExtractWeatherData"
import Loading from "../Loading";
import PerTime from "./PerTime"

const ForecastByTimeList = ({ cityName, currentTime = 0 }) => {

  const [number, setNumber] = useState(6);
  const [isOpen, setIsOpen] = useState(false);
  const [read, setRead] = useState('Read more');

  const { weather24hours, isLoading } = UseExtractWeatherData({ cityName, currentTime });

  const weatherHours = weather24hours.slice(0, number);

  const handleOpen = () => {
    setIsOpen(!isOpen);
    let count = number === 6 ? 24 : 6;
    setNumber(count);
    let text = read === "Read more" ? "Read less" : "Read more";
    setRead(text);
  }

  if (isLoading) {
    return <Loading />
  }

  // console.log(weather24hours);


  return (
    <div className="flex flex-col py-3 text-gray-700 ">
      {
        weatherHours.map((timeAt, index) =>
          <PerTime key={index} humidity={timeAt.humidity} pressure={timeAt.pressure} temp_min={timeAt.temperature} temp_max={timeAt.temperature}
            time={timeAt.time} uv={timeAt.uvIndex} description={timeAt.weatherDescription} windSpeed={timeAt.windspeed}
          />
        )
      }
      <p className="text-blue-500 text-[18px] underline cursor-pointer mt-2" onClick={() => handleOpen()}>{read}</p>
    </div>
  )
}
export default ForecastByTimeList