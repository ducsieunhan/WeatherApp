
import CityWeatherPinned from "../CityWeatherPinned"
import ForecastByTimeList from "./ForecastByTimeList"

const ForecastCityByTime = () => {

  return (
    <div className="flex flex-col md:flex-row relative max-w-screen-xl mx-auto  md:items-start h-full justify-center  gap-1 p-5 text-white z-0">
      <div className="md:w-2/3 w-full h-full order-1 md:order-1 px-4 pt-20 pb-4 bg-white text-black">
        <h1 className="text-[1.5vw] border-b border-slate-200 py-3">Weather forecast by hour</h1>
        <ForecastByTimeList />
      </div>
      <div className="md:w-1/3 w-full  md:flex-1 md:h-full order-2 md:top-0 p-4 ">
        <CityWeatherPinned />
      </div>
    </div>
  )
}
export default ForecastCityByTime