/* eslint-disable react/prop-types */
import { faDroplet } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { capitalizeWords } from "../libs/utils"
import useWeatherConditionIcon from "../hooks/useWeatherConditionIcon"
import { Link } from "react-router-dom"


const ForecastSpeCity = ({ humidity, name, tempMin, tempMax, description, condition, label,
  bg = "bg-blue-900/70", bgHover = "hover:bg-blue-900", border = "border-slate-300 ", className = "", isCity = true }) => {

  const iconWeather = useWeatherConditionIcon({ condition });

  return (
    <Link to={isCity ? `/city?city=${name}&label=${label}` : '#'}
      onClick={(e) => !isCity && e.preventDefault()}
      className={`cursor-pointer text-20 w-44 h-48 ${bg} ${bgHover} rounded-xl p-5 flex flex-col items-center gap-3 border ${border} ${className}`}>
      <h3>{name}</h3>
      <div className="flex gap-5" >
        <img src={iconWeather} className="w-[40%]" />
        <span className="text-[14px]"><FontAwesomeIcon icon={faDroplet} /> {humidity} %</span>
      </div>
      <h3>{capitalizeWords(description)}</h3>
      <p className='font-bold text-[16px] flex justify-center items-center' >{tempMin.toFixed(1)} &deg;C / {tempMax.toFixed(1)} &deg;C</p>
    </Link>
  )
}
export default ForecastSpeCity