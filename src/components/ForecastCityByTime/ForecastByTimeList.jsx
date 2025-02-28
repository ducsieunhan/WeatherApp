import { UseExtractWeatherData } from "../../hooks/useExtractWeatherData"
import Loading from "../Loading";
import PerTime from "./PerTime"

const ForecastByTimeList = ({ cityName }) => {

  const { weather24hours, isLoading } = UseExtractWeatherData(cityName);

  if (isLoading) {
    return <Loading />
  }

  // console.log(weather24hours);


  return (
    <div className="flex flex-col py-3 text-gray-700 ">
      {
        weather24hours.map((timeAt, index) =>
          <PerTime key={index} humidity={timeAt.humidity} pressure={timeAt.pressure} temp_min={timeAt.temperature} temp_max={timeAt.temperature}
            time={timeAt.time} uv={timeAt.uvIndex} description={timeAt.weatherDescription} windSpeed={timeAt.windspeed}
          />
        )
      }
    </div>
  )
}
export default ForecastByTimeList