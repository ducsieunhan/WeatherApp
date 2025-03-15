import { faAngleDown, faCertificate, faDroplet, faEye, faGauge, faWind } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";
import cloud from "/public/icons/clouds.png"


const PerTime = ({ humidity, pressure, temp_min, temp_max, time, uv, description, windSpeed }) => {
  const [isOpenExtra, setIsOpenExtra] = useState(false);

  return (
    <div className="flex flex-col cursor-pointer border-b pb-2 border-slate-300/80">
      <div className="grid grid-cols-4 md:grid-cols-11 gap-1 w-full items-center" onClick={() => setIsOpenExtra(!isOpenExtra)}>
        <p className="md:col-span-2">{time}</p>
        <div className="justify-self-start md:col-span-2"><span className="hidden md:inline-block text-[20px]">{temp_min}°C /</span><span className="font-bold text-[23px] text-black">{temp_max}°C</span></div>
        <div className="flex items-center gap-2 justify-self-center md:col-span-2">
          <img src={cloud} className="w-[40px] md:w-[3vw]" />
          <p className="max-w-[50px] ">{description}</p>
        </div>
        <div className=" gap-2 justify-self-end hidden md:flex md:col-span-2">
          <p><FontAwesomeIcon icon={faDroplet} />{humidity}%</p>
        </div>
        <div className=" gap-2 justify-self-end hidden md:flex md:col-span-2">
          <p className=""><FontAwesomeIcon icon={faWind} />{windSpeed} km/h</p>
        </div>
        <FontAwesomeIcon icon={faAngleDown} className="justify-self-end col-span-1" />
      </div>

      {isOpenExtra && <div className="flex flex-row justify-between pt-3 transform">
        <div className="flex flex-row gap-2 items-center">
          <FontAwesomeIcon icon={faCertificate} className="text-[1.2vw]" />
          <div>
            <h2>UV indicator</h2>
            <p>{uv}</p>
          </div>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <FontAwesomeIcon icon={faEye} className="text-[1.2vw]" />
          <div>
            <h2>Visibility</h2>
            <p>10 km</p>
          </div>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <FontAwesomeIcon icon={faGauge} className="text-[1.2vw]" />
          <div>
            <h2>Pressure</h2>
            <p>{pressure}</p>
          </div>
        </div>
      </div>}
    </div>
  )
}
export default PerTime