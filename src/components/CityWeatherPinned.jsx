/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CityForecastComingDays from "./ForecastHome/CityForecastComingDays"
import { faMapPin } from "@fortawesome/free-solid-svg-icons"
import TableIndicator from "./ForecastHome/TableIndicator"
import { capitalizeWords } from "../libs/utils"
import Loading from "./Loading"
import useWeatherConditionIcon from "../hooks/useWeatherConditionIcon"


const CityWeatherPinned = ({ currentCity, isLoading, cityName, daily = true }) => {

  const daysComing = ['Today', 'Tomorrow', '3 days', '5 days', '7 days', '10 days', '15 days', '30 days'];

  const weatherMain = currentCity?.weather?.[0]?.main ?? "";
  const iconWeather = useWeatherConditionIcon({ condition: weatherMain });

  if (isLoading) return <div>Loading...</div>;

  const currentCityPinned = currentCity || {};
  // console.log({ weatherMain });

  return (

    isLoading ? <Loading /> : (


      <div className="bg-light text-white  h-full w-full p-2 text-sm md:text-base flex flex-col gap-2 md:gap-0  rounded-md mt-10 ">
        <p className="font-bold text-[20px] md:text-[25px] "><FontAwesomeIcon icon={faMapPin} /> {cityName}</p>
        <div className="flex flex-row justify-start items-center ml-3 relative">
          <img src={iconWeather} className="w-10 md:w-14 absolute" />
          <p className="text-[25px] md:text-[2.5vw] font-bold pl-20 pr-3"> {currentCityPinned.main?.temp.toFixed(1) ?? "Loading..."}&deg;</p>
          <div className="font-bold text-[15px] lg:text-[18px] gap-1">
            <p className="font-bold">
              {currentCityPinned.weather?.[0]?.description
                ? capitalizeWords(currentCityPinned.weather[0].description)
                : "Loading..."}
            </p>
            <p>Feels like {currentCityPinned.main?.feels_like.toFixed(1) ?? "Loading..."}&deg;</p>
          </div>
        </div>

        {daily && (<>

          <h3 className="text-[15px] my-2 lg:text-[1.3vw] mb-1">Forecast for coming days</h3>
          <div className="grid justify-center items-center grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-3 mx-auto">
            {daysComing.map((day) => (
              <CityForecastComingDays key={day} day={day} cityName={cityName} />
            ))}

          </div>
        </>
        )}
        <TableIndicator cityPinned={currentCityPinned} />
      </div>
    )
  )
}
export default CityWeatherPinned