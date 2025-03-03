import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CityForecastComingDays from "./ForecastHome/CityForecastComingDays"
import { faMapPin } from "@fortawesome/free-solid-svg-icons"
import TableIndicator from "./ForecastHome/TableIndicator"
import { capitalizeWords } from "../libs/utils"
import Loading from "./Loading"
import { useSpeCity } from "../hooks/useSpeCity"
import useWeatherConditionIcon from "../hooks/useWeatherConditionIcon"


const CityWeatherPinned = ({ currentCity, isLoading, cityName }) => {

  const daysComing = ['Today', 'Tomorrow', '3 days', '5 days', '7 days', '10 days', '15 days', '30 days'];

  const weatherMain = currentCity?.weather?.[0]?.main ?? "";
  const iconWeather = useWeatherConditionIcon({ condition: weatherMain });

  if (isLoading) return <div>Loading...</div>;

  const currentCityPinned = currentCity || {};
  // console.log({ weatherMain });

  return (

    isLoading ? <Loading /> : (


      <div className="bg-light text-white  h-full w-full p-2 text-sm md:text-base flex flex-col gap-2 md:gap-0  rounded-md">
        <p className="font-bold"><FontAwesomeIcon icon={faMapPin} /> {cityName}</p>
        <p>Updated 25 minutes later</p>
        <div className="flex flex-row justify-start items-center ml-3 relative">
          <img src={iconWeather} className="w-10 md:w-16 absolute" />
          <p className="text-[25px] md:text-[2.5vw] font-bold pl-24 pr-3"> {currentCityPinned.main?.temp.toFixed(1) ?? "Loading..."}&deg;</p>
          <div className="font-bold text-[15px] md:text-[1.3vw] gap-1">
            <p>C</p>
            <p>F</p>
          </div>
        </div>
        <p className="font-bold">
          {currentCityPinned.weather?.[0]?.description
            ? capitalizeWords(currentCityPinned.weather[0].description)
            : "Loading..."}
        </p>

        <p>Feels like {currentCityPinned.main?.feels_like.toFixed(1) ?? "Loading..."}&deg;</p>
        <h3 className="text-[15px] md:text-[1.3vw] mb-1">Forecast for coming days</h3>
        <div className="grid justify-center items-center grid-cols-4 gap-3 mx-auto">
          {daysComing.map((day) => (
            <CityForecastComingDays key={day} day={day} />
          ))}

        </div>
        <TableIndicator cityPinned={currentCityPinned} />
      </div>
    )
  )
}
export default CityWeatherPinned