/* eslint-disable react/prop-types */
import { faDroplet } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { capitalizeWords } from "../libs/utils"
import useWeatherConditionIcon from "../hooks/useWeatherConditionIcon"
import { Link } from "react-router-dom"


const ForecastSpeCity = ({ humidity, name, tempMin, tempMax, description, condition, label,
  bg = "bg-white", bgHover = "", border = "shadow-xl !h-52 !w-48 ", className = "", isCity = true, redirect = false }) => {

  const iconWeather = useWeatherConditionIcon({ condition });

  return (
    <Link
      to={isCity ? `/city?city=${name}&label=${label}` : "#"}
      onClick={(e) => !isCity && e.preventDefault()}
      className={` text-[17px] w-[80%] mx-auto h-48 md:w-44 md:h-48 ${bg} ${redirect ? "group relative overflow-hidden z-0" : ""
        } ${bgHover} rounded-xl p-5 flex flex-col items-center gap-3 border ${border} ${className} `}
    >
      <h3 className={redirect ? "transition-all duration-300 ease-out group-hover:text-white" : ""}>
        {name}
      </h3>
      <div className="flex gap-5">
        <img src={iconWeather} className="w-[55px]" />
        <span className={`text-[14px] ${redirect ? "transition-all duration-300 ease-out group-hover:text-white/80" : ""}`}>
          <FontAwesomeIcon icon={faDroplet} /> {humidity} %
        </span>
      </div>
      <h3 className={redirect ? "transition-all duration-300 ease-out group-hover:text-white" : ""}>
        {capitalizeWords(description)}
      </h3>
      <p className={`font-bold text-[16px] flex justify-center items-center ${redirect ? "transition-all duration-300 ease-out group-hover:text-white" : ""
        }`}>
        {tempMin.toFixed(1)} &deg;C / {tempMax.toFixed(1)} &deg;C
      </p>

      {/* only for redirect elements */}
      {redirect && (
        <>
          <div className="absolute top-0 right-0 w-8 h-8 flex items-center justify-center overflow-hidden bg-light rounded-tr-lg rounded-bl-[32px]">
            <div className="text-white font-courier -mt-1 -mr-1">→</div>
          </div>
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-light rounded-full scale-100 origin-center transition-transform duration-700 ease-out group-hover:scale-[21] -z-10"></div>
        </>
      )}
    </Link>

  )
}
export default ForecastSpeCity