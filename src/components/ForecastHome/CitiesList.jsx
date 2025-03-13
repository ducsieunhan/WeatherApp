/* eslint-disable react/prop-types */
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Link } from "react-router-dom"

const CitiesList = ({ countryName, cityListName }) => {

  const [isClose, setIsClose] = useState(false);

  const sortCountryName = isClose === false ? cityListName.slice(0, 27) : cityListName;

  console.log(sortCountryName);

  return (
    <div className="max-w-screen-xl mx-auto border border-slate-300 md:text-[18px] text-[13px] my-4">
      <h3 className="bg-slate-300/50 p-3 border-b border-slate-300">Cities weather forecast in {countryName}</h3>
      <div className="grid grid-cols-3 justify-start py-4 px-10 gap-3">
        {
          sortCountryName?.map(city => (
            <Link key={city.geonameId} to={`city?city=${city.name}&label=${countryName}`} className="text-blue-600 hover:text-blue-800 px-1 py-2  shadow "><FontAwesomeIcon className="text-[13px]" icon={faArrowRight} /> {city.name}</Link>
          ))
        }
      </div>
      <div className="text-blue-600 hover:text-blue-900 cursor-pointer px-10 mb-5" onClick={() => setIsClose(!isClose)}>
        <span className="border-b border-blue-700">{isClose === false ? "Shore more" : "Show less"}</span>
      </div>
    </div>
  )
}
export default CitiesList