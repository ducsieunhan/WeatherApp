import { faCertificate, faDroplet, faHome, faMapPin, faWind } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import IndicatorType from "./IndicatorType"
import { faTemperature2 } from "@fortawesome/free-solid-svg-icons/faTemperature2"
import { capitalizeWords } from "../../libs/utils"
import { useSpeCity } from "../../hooks/useSpeCity"
import Loading from "../Loading"
import { faEye } from "@fortawesome/free-regular-svg-icons"
import useWeatherConditionIcon from "../../hooks/useWeatherConditionIcon"


const IndicatorMain = ({ cityName }) => {

  const { data: currentCity, isLoading: isLoading } = useSpeCity({
    url: `/weather?q=${cityName}&units=metric&`
  })

  const currentCityPinned = currentCity || [];
  // console.log({ currentCityPinned });

  const calculateDewPoint = (temp, humidity) => {
    return temp - ((100 - humidity) / 5);
  };
  const temp = currentCityPinned.main?.temp; // Nhiệt độ (°C)
  const humidity = currentCityPinned.main?.humidity; // Độ ẩm (%)
  const dewPoint = temp && humidity ? calculateDewPoint(temp, humidity).toFixed(1) : "N/A";

  const weatherIcon = useWeatherConditionIcon({
    condition: currentCityPinned.weather?.[0]?.main
  });

  return (

    isLoading ? <Loading /> : (

      <div className="flex flex-col bg-white/[0.05] border border-[rgba(255,255,255,0.08)] py-2 px-1" >
        <h3 className="cursor-pointer"><FontAwesomeIcon icon={faMapPin} /> Weather forecast at {cityName}   <FontAwesomeIcon className="pl-3" icon={faHome} /></h3>
        <div className="flex p-4  gap-3">
          <img src={weatherIcon} className="w-14 md:w-[3vw]" />
          <p className="font-bold text-[15px] md:text-[1.7vw]">{currentCityPinned.main?.temp.toFixed(1) ?? "Loading..."}&deg;</p>
          <div className="text-[17px]">
            <p> {currentCityPinned.weather?.[0]?.description
              ? capitalizeWords(currentCityPinned.weather[0].description)
              : "Loading..."}</p>
            <p>Feels like {currentCityPinned.main?.feels_like.toFixed(1) ?? "Loading..."}&deg;.</p>
          </div>
        </div>
        <div className="grid grid-cols-3 md:flex justify-evenly text-[2vw] md:text-[20px] ">
          <IndicatorType name={"Low/High"} indicator={currentCityPinned.main?.temp_min.toFixed(1) ?? "Loading..."} icon={faTemperature2} unit={'°'} />
          <IndicatorType name={"Humidity"} indicator={currentCityPinned.main?.humidity ?? "Loading..."} icon={faDroplet} unit={'%'} />
          <IndicatorType name={"Visibility"} indicator={currentCityPinned.visibility ?? "Loading..."} icon={faEye} unit={'km'} />
          <IndicatorType name={"Wind"} indicator={currentCityPinned.wind?.speed ?? "Loading..."} icon={faWind} unit={'km/h'} />
          <IndicatorType name={"Dew Point"} indicator={dewPoint ?? "Loading..."} icon={faCertificate} unit={'°C'} />
        </div>
      </div>
    )
  )
}
export default IndicatorMain