import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ForecastCityList from "./ForecastCityList"

const ForecastOverall = () => {
  return (
    <div className="flex relative max-w-screen-xl mx-auto h-screen items-center justify-center gap-5 p-5 text-white z-0">
      <div className="flex-[2] w-full h-full">
        <h3><FontAwesomeIcon icon={faMagnifyingGlass} /> Weather Forecast of cities in <span className="underline decoration-dotted cursor-pointer">Vietnam</span></h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <ForecastCityList />
          <ForecastCityList />
          <ForecastCityList />
          <ForecastCityList />
          <ForecastCityList />
        </div>
      </div>
      <div className="flex-1 w-full h-full "></div>
    </div>
  )
}
export default ForecastOverall