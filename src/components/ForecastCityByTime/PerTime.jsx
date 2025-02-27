import { faAngleDown, faCertificate, faDroplet, faEye, faGauge, faWind } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";
import cloud from "/public/icons/clouds.png"


const PerTime = () => {
  const [isOpenExtra, setIsOpenExtra] = useState(false);

  return (
    <div className="flex flex-col cursor-pointer border-b pb-2 border-slate-200">
      <div className="flex flex-row justify-between items-center" onClick={() => setIsOpenExtra(!isOpenExtra)}>
        <p>08:00</p>
        <div><span>15.1°C</span>/<span className="font-bold text-[1.2vw] text-black">15.2°C</span></div>
        <div className="flex items-center gap-2">
          <img src={cloud} className="w-14 md:w-[3vw]" />
          <p>Overclouds</p>
        </div>
        <div className="flex gap-2">
          <p><FontAwesomeIcon icon={faDroplet} />100%</p>
          <p><FontAwesomeIcon icon={faWind} />1.3 km/h</p>
        </div>
        <FontAwesomeIcon icon={faAngleDown} />
      </div>

      {isOpenExtra && <div className="flex flex-row justify-between pt-3">
        <div className="flex flex-row gap-2 items-center">
          <FontAwesomeIcon icon={faCertificate} className="text-[1.2vw]" />
          <div>
            <h2>UV indicator</h2>
            <p>0.51</p>
          </div>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <FontAwesomeIcon icon={faEye} className="text-[1.2vw]" />
          <div>
            <h2>UV indicator</h2>
            <p>0.51</p>
          </div>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <FontAwesomeIcon icon={faGauge} className="text-[1.2vw]" />
          <div>
            <h2>UV indicator</h2>
            <p>0.51</p>
          </div>
        </div>
      </div>}
    </div>
  )
}
export default PerTime