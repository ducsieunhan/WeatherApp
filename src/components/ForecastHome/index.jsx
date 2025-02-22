import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ForecastOverall = () => {
  return (
    <div className="flex relative max-w-screen-2xl mx-auto bg-black/50 h-screen items-center justify-center gap-5 p-5 text-white z-0">
      <div className="flex-[2] w-full h-full bg-slate-600">
        <h3><FontAwesomeIcon icon={faMagnifyingGlass} /> Weather Forecast of cities in <span className="underline decoration-dotted cursor-pointer">Vietnam</span></h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 "></div>
      </div>
      <div className="flex-1 w-full h-full bg-slate-600"></div>
    </div>
  )
}
export default ForecastOverall