import { faDroplet } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ForecastCityList = () => {
  return (
    <div className="cursor-pointer text-20 w-40 h-44 bg-blue-900 hover:bg-blue-800 rounded-xl p-5 flex flex-col items-center gap-2 border border-slate-300">
      <h3>Ha Noi</h3>
      <div className="flex gap-5" >
        <img src="/public/icons/clouds.png" className="w-[40%]" />
        <span className="text-[14px]"><FontAwesomeIcon icon={faDroplet} /> 95%</span>
      </div>
      <h3>Cloudy</h3>
      <p className='font-bold text-[18px] flex justify-center items-center' >28 &deg;C / 28 &deg;C</p>
    </div>
  )
}
export default ForecastCityList