
import { useParams } from "react-router-dom"
import CityWeatherPinned from "../CityWeatherPinned"
import ForecastByDailyList from "./ForecastByDailyList";


const ForecastCityByDaily = () => {

  const { cityName } = useParams();
  const { days } = useParams();
  const dayCount = days.split(' ')[0];

  return (
    <div className="flex flex-col md:flex-row relative max-w-screen-xl mx-auto  md:items-start h-full justify-center  gap-1 p-5 text-white z-0">
      <div className="md:w-2/3 w-full h-full order-1 md:order-1 px-4 pt-7 pb-4 bg-white text-black">
        <h1 className="text-[1.5vw] border-b border-slate-300 py-3">Weather forecast in {cityName} by daily</h1>
        <ForecastByDailyList cityName={cityName} dayCount={dayCount} />
      </div>
      <div className="md:w-1/3 w-full  md:flex-1 md:h-full order-2 md:top-0 p-4 ">
        <CityWeatherPinned cityName={cityName} />
      </div>
    </div>
  )
}
export default ForecastCityByDaily