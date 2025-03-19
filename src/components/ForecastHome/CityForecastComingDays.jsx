/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const CityForecastComingDays = ({ day, cityName }) => {
  return (
    <Link to={day === "Tomorrow" ? `/${cityName}/byHours` : `/${cityName}/${day}`} className="bg-strong/90 hover:bg-blue-700 h-full w-full px-1 py-1 rounded-sm cursor-pointer text-center text-white">
      {day}
    </Link>
  )
}
export default CityForecastComingDays