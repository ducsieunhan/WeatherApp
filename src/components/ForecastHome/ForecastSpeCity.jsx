/* eslint-disable react/prop-types */
import { faDroplet } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import sun from '/public/icons/sun.png'
import cloud from "/public/icons/clouds.png"
import fog from '/public/icons/fog.png'
import rain from '/public/icons/rain.png'
import snow from '/public/icons/snow.png'
import storm from '/public/icons/storm.png'
import wind from '/public/icons/windy.png'
import clear from '/public/icons/clear.png'
import { useEffect, useState } from "react"


const ForecastSpeCity = ({ humidity, name, tempMin, tempMax, description, condition }) => {
  const [iconWeather, setIconWeather] = useState();

  useEffect(() => {
    if (condition) {
      if (condition.toLowerCase().includes('sun')) {
        setIconWeather(sun);
      }
      else if (condition.toLowerCase().includes('clouds')) {
        setIconWeather(cloud);
      }
      else if (condition.toLowerCase().includes('fog')) {
        setIconWeather(fog);
      }
      else if (condition.toLowerCase().includes('rain')) {
        setIconWeather(rain);
      }
      else if (condition.toLowerCase().includes('snow')) {
        setIconWeather(snow);
      }
      else if (condition.toLowerCase().includes('storm')) {
        setIconWeather(storm);
      }
      else if (condition.toLowerCase().includes('wind')) {
        setIconWeather(wind);
      }
      else if (condition.toLowerCase().includes('clear')) {
        setIconWeather(clear);
      }

    }
  })

  const capitalizeWords = (str) =>
    str.split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');



  return (
    <div className="cursor-pointer text-20 w-44 h-48 bg-blue-900 hover:bg-blue-800 rounded-xl p-5 flex flex-col items-center gap-3 border border-slate-300">
      <h3>{name}</h3>
      <div className="flex gap-5" >
        <img src={iconWeather} className="w-[40%]" />
        <span className="text-[14px]"><FontAwesomeIcon icon={faDroplet} /> {humidity} %</span>
      </div>
      <h3>{capitalizeWords(description)}</h3>
      <p className='font-bold text-[16px] flex justify-center items-center' >{tempMin.toFixed(1)} &deg;C / {tempMax.toFixed(1)} &deg;C</p>
    </div>
  )
}
export default ForecastSpeCity