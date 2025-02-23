/* eslint-disable react/prop-types */
import { faDroplet } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ForecastSpeCity = ({ humidity, name, tempMin, tempMax, description }) => {
  return (
    <div className="cursor-pointer text-20 w-40 h-44 bg-blue-900 hover:bg-blue-800 rounded-xl p-5 flex flex-col items-center gap-3 border border-slate-300">
      <h3>{name}</h3>
      <div className="flex gap-5" >
        <img src="/public/icons/clouds.png" className="w-[40%]" />
        <span className="text-[14px]"><FontAwesomeIcon icon={faDroplet} /> {humidity} %</span>
      </div>
      <h3>{description}</h3>
      <p className='font-bold text-[16px] flex justify-center items-center' >{tempMin.toFixed(1)} &deg;C / {tempMax.toFixed(1)} &deg;C</p>
    </div>
  )
}
export default ForecastSpeCity