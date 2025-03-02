import { faBars, faCertificate, faCloudRain, faLocation, faLocationDot, faSearch, faSortDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Location from "./Location"
import { useState } from "react"

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="flex w-full md:w-[80%] mx-auto h-14 lg:h-20 items-center 
        gap-5 md:gap-10 justify-center  text-10 sm:text-[1.3vw]">
        <div className="flex justify-center items-center gap-2 cursor-pointer">
          <img className="w-6 sm:w-8" src="/cloudy.png" />
          <div className="font-bold text-[15px] md:text-[1.5vw]"><span className="text-orange-500">Today</span>Weather</div>
        </div>
        <div className="relative flex gap-2 h-[50%] md:h-[65%] w-[200px] lg:w-[500px]">
          <FontAwesomeIcon icon={faSearch} className="mr-[1vw] absolute left-2 top-1/2 -translate-y-1/2 text-blue-400" />
          <input placeholder="Find your city" type="text" className="text-[15px] md:text-[25px] h-full w-[80%] border border-slate-400 pl-5 lg:pl-10 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400" />
          <p className="flex items-center cursor-pointer h-full border border-slate-400 px-4 hover:bg-blue-400 hover:text-white transition duration-200">
            Search
          </p>
        </div>
        <ul className="hidden sm:flex gap-5 h-3/4">
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
        {/* Menu Icon for smaller screens */}
        <div className="sm:hidden relative">
          <FontAwesomeIcon
            icon={faBars}
            className="cursor-pointer text-[20px]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </header>


      {isMenuOpen && (
        <div className=" sm:hidden fixed top-14 left-0 w-full bg-white border-b border-slate-300 shadow-lg z-10">
          <ul className="py-2 flex flex-col justify-center">
            <li
              className="cursor-pointer text-center px-4 py-2 hover:bg-blue-400 hover:text-white"
              onClick={() => {
                setIsOpen(!isOpen);
                setIsMenuOpen(false);
              }}
            >
              <FontAwesomeIcon icon={faLocationDot} className="text-red-500 mr-1" />
              Location
            </li>
            <li className="cursor-pointer text-center px-4 py-2 hover:bg-blue-400 hover:text-white">
              <FontAwesomeIcon icon={faCloudRain} className="text-blue-400 mr-2" />
              Rainfall
            </li>
            <li className="cursor-pointer text-center px-4 py-2 hover:bg-blue-400 hover:text-white">
              <FontAwesomeIcon icon={faCertificate} className="text-red-400 mr-2" />
              Air Quality
            </li>
          </ul>
        </div>
      )}

      {/* Location Dropdown */}
      {isOpen && <Location />}
    </>

  );
};
export default Header