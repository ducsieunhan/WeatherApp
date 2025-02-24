import { faHome, faMapPin } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import cloud from "/public/icons/clouds.png"
import IndicatorType from "./IndicatorType"
import { faTemperature2 } from "@fortawesome/free-solid-svg-icons/faTemperature2"
import { capitalizeWords } from "../../libs/utils"
import { useSpeCity } from "../../hooks/useSpeCity"
import Loading from "../Loading"


const IndicatorMain = () => {


  const { data: currentCity, isLoading: isLoading } = useSpeCity({
    url: `/weather?q=Ha%20Noi&units=metric&`
  })

  const currentCityPinned = currentCity || [];

  return (

    isLoading ? <Loading /> : (

      <div className="flex flex-col">
        <h3 className="cursor-pointer"><FontAwesomeIcon icon={faMapPin} /> Weather forecast at Da Nang   <FontAwesomeIcon className="pl-3" icon={faHome} /></h3>
        <div className="flex p-4  gap-3">
          <img src={cloud} className="w-[3vw]" />
          <p className="font-bold text-[1.7vw]">{currentCityPinned.main?.temp.toFixed(1) ?? "Loading..."}&deg;</p>
          <div className="text-[17px]">
            <p> {currentCityPinned.weather?.[0]?.description
              ? capitalizeWords(currentCityPinned.weather[0].description)
              : "Loading..."}</p>
            <p>Feels like {currentCityPinned.main?.feels_like.toFixed(1) ?? "Loading..."}&deg;.</p>
          </div>
        </div>
        <div className="flex justify-evenly">
          <IndicatorType name={"Low/High"} indicator={currentCityPinned.main?.temp_min.toFixed(1) ?? "Loading..."} icon={faTemperature2} unit={'°'} />
          <IndicatorType name={"Low/High"} indicator={currentCityPinned.main?.temp_min.toFixed(1) ?? "Loading..."} icon={faTemperature2} unit={'°'} />
          <IndicatorType name={"Low/High"} indicator={currentCityPinned.main?.temp_min.toFixed(1) ?? "Loading..."} icon={faTemperature2} unit={'°'} />
          <IndicatorType name={"Low/High"} indicator={currentCityPinned.main?.temp_min.toFixed(1) ?? "Loading..."} icon={faTemperature2} unit={'°'} />
          <IndicatorType name={"Low/High"} indicator={currentCityPinned.main?.temp_min.toFixed(1) ?? "Loading..."} icon={faTemperature2} unit={'°'} />
        </div>
      </div>
    )
  )
}
export default IndicatorMain