import { faCertificate, faCloudRain, faSearch, faSortDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Location from "./Location"
import { useState } from "react"

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex h-14 lg:h-20 items-center 
        justify-evenly border border-b-slate-300 text-10 sm:text-[1.6vw]">
      <div className="flex justify-center items-center gap-2 cursor-pointer">
        <img className="w-6 sm:w-8" src="/cloudy.png" />
        <label className="font-bold"><span className="text-orange-500">Today</span>Weather</label>
      </div>
      <div className="relative">
        <FontAwesomeIcon icon={faSearch} className="mr-[1vw] absolute left-1 top-1/2 -translate-y-1/2 text-blue-400" />
        <input placeholder="Find your city" type="text" className="border border-slate-400 pl-5 lg:pl-7 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400" />
      </div>
      <ul className="flex gap-5 h-3/4">
        <li className="cursor-pointer flex gap-1 items-center justify-center border-[2px] border-transparent hover:border-[2px] hover:border-b-blue-500"
          onClick={() => setIsOpen(!isOpen)}>
          <span>Location</span>
          <FontAwesomeIcon icon={faSortDown} />
        </li>
        <li className="cursor-pointer flex gap-1 items-center justify-center border-[2px] border-transparent hover:border-[2px] hover:border-b-blue-500">
          <FontAwesomeIcon icon={faCloudRain} className="text-blue-400" />
          <a>Rainfall</a>
        </li>
        <li className="cursor-pointer flex gap-1 items-center justify-center border-[2px] border-transparent hover:border-[2px] hover:border-b-blue-500">
          <FontAwesomeIcon icon={faCertificate} className="text-red-400" />
          <a>Air Quality</a>
        </li>
      </ul>
      {isOpen && <Location />}
    </header>
  )
}
export default Header