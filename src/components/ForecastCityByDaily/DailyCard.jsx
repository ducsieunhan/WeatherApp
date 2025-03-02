import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCertificate, faCloudRain, faDroplet, faGauge, faSun, faTemperature1, faTemperature3, faWind } from '@fortawesome/free-solid-svg-icons'
import useWeatherConditionIcon from '../../hooks/useWeatherConditionIcon';


const DailyCard = ({ humidity, name, tempMin, tempMax, description, condition, precipitation, uv, visibility, sunrise, sunset, windSpeed }) => {

  const weatherIcon = useWeatherConditionIcon({
    condition
  });

  return (
    <div className='mb-7'>
      <h1 className="text-center text-[22px] ">{name}</h1>
      <div className="grid grid-col-1 md:grid-cols-2 gap-10 text-[18px]">
        <div>
          <div className="flex items-center gap-2" >
            <img src={weatherIcon} className="w-[50px] md:w-[70px]"></img>
            <p className="text-[4vw]">20°</p>
            <div className="flex flex-col ml-3">
              <p className="ld">{description}</p>
              <p className="">Feels like {tempMax}</p>
            </div>
          </div>
          <div className="flex justify-between items-center border-b border-slate-300 py-3">
            <div className="flex items-center gap-2 " >
              <FontAwesomeIcon icon={faTemperature3} />
              <p>High/Low</p>
            </div>
            <div>
              {tempMin}°/{tempMax}°
            </div>
          </div>
          <div className="flex justify-between items-center border-b border-slate-300 py-3">
            <div className="flex items-center gap-2 " >
              <FontAwesomeIcon icon={faDroplet} />
              <p>Humidity</p>
            </div>
            <div>
              {humidity} %
            </div>
          </div>
          <div className="flex justify-between items-center border-b border-slate-300 py-3">
            <div className="flex items-center gap-2 " >
              <FontAwesomeIcon icon={faCloudRain} />
              <p>Precipitation</p>
            </div>
            <div>
              {precipitation} mm
            </div>
          </div>
        </div>

        <div className="mt-3">
          <div className="flex justify-between items-center border-b border-slate-300 py-3">
            <div className="flex items-center gap-2 " >
              <FontAwesomeIcon icon={faTemperature1} />
              <p>Day/Night</p>
            </div>
            <div>
              {tempMax}°/{tempMin}°
            </div>
          </div>
          <div className="flex justify-between items-center border-b border-slate-300 py-3">
            <div className="flex items-center gap-2 " >
              <FontAwesomeIcon icon={faCertificate} />
              <p>UV Index</p>
            </div>
            <div>
              {uv}
            </div>
          </div>
          <div className="flex justify-between items-center border-b border-slate-300 py-3">
            <div className="flex items-center gap-2 " >
              <FontAwesomeIcon icon={faGauge} />
              <p>Visibility</p>
            </div>
            <div>
              {visibility} km
            </div>
          </div>
          <div className="flex justify-between items-center border-b border-slate-300 py-3">
            <div className="flex items-center gap-2 " >
              <FontAwesomeIcon icon={faWind} />
              <p>Wind speed</p>
            </div>
            <div>
              {windSpeed} km/h
            </div>
          </div>
          <div className="flex justify-between items-center border-b border-slate-300 py-3">
            <div className="flex items-center gap-2 " >
              <FontAwesomeIcon icon={faSun} />
              <p>Sunrise/Sunset</p>
            </div>
            <div>
              {sunrise}/{sunset}
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
export default DailyCard