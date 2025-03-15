import { faBars, faCertificate, faCloudRain, faLocationDot, faMapLocation, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Location from "./Location"
import SearchCity from "./SearchCity"
import { useEffect, useState } from "react"
import { useSpeCity } from "../../hooks/useSpeCity"
import Loading from "../Loading"
import { Link } from "react-router-dom"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userLocation, setUserLocation] = useState({
    latitude: 21.0245, longitude: 105.8412
  });
  const [cityName, setCityName] = useState('Hanoi');

  const reverseGeocode = async (latitude, longitude) => {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_GOOGLE_MAPS_API_KEY`
    );
    const data = await response.json();
    return data.results[0]?.address_components.find(component =>
      component.types.includes('locality') || component.types.includes('administrative_area_level_1')
    )?.long_name;
  };

  useEffect(() => {
    const fetchLocation = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            setUserLocation({ latitude, longitude });

            const city = await reverseGeocode(latitude, longitude);
            if (city) {
              setCityName(city);
            }
          },
          (error) => {
            console.error('Error getting user location:', error);
            setUserLocation({ latitude: 21.0245, longitude: 105.8412 });
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    };

    fetchLocation();
  }, []);

  const { data: currentCity, isLoading: isLoading } = useSpeCity({
    url: `/weather?q=${cityName}&units=metric&`
  })

  // console.log({ currentCity });
  if (isLoading) {
    return <Loading />
  }
  return (
    <>
      <header className="flex w-full max-w-screen-xl mx-auto h-14 lg:h-20 items-center 
        gap-5 md:gap-5 justify-around  text-[15px] lg:text-[25px]">
        <Link to={'/'} className="flex justify-center items-center gap-2 cursor-pointer ">
          <img className="w-6 sm:w-8" src="/cloudy.png" />
          <div className="font-bold text-[15px] md:text-[1.5vw]"><span className="text-orange-500">Today</span>Weather</div>
        </Link>
        <SearchCity />
        <ul className="hidden sm:flex gap-5 h-3/4">
          <li className="cursor-default flex gap-1 items-center justify-center border-[2px] border-transparent hover:border-[2px] hover:border-b-blue-500"
          >
            {userLocation && (<>
              <span className="font-bold">{currentCity?.name} {currentCity?.main?.temp.toFixed(1)}°c</span>
              <img className="w-6 sm:w-8 " src="/clear-sky.png" />
            </>
            )}
          </li>
          <Link to={'/WeatherMap'} className="cursor-pointer flex gap-1 items-center justify-center border-[2px] border-transparent hover:border-[2px] hover:border-b-blue-500">
            <span className="font-bold">Map</span>
            <img className="w-4 sm:w-6" src="/map.png" />
          </Link>
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
        <div className=" sm:hidden fixed top-14 left-0 w-full bg-white z-50 border-b border-slate-300 shadow-lg z-10">
          <ul className="py-2 flex flex-col justify-center gap-3">
            <li className=" py-3 hover:bg-black/20 flex gap-1 items-center justify-center  "
            >
              {userLocation && (<>
                <span className="font-bold">{currentCity?.name} {currentCity?.main?.temp.toFixed(1)}°c</span>
                <img className="w-6 sm:w-8 " src="/clear-sky.png" />
              </>
              )}
            </li>
            <li className="cursor-pointer py-3 hover:bg-black/20 flex gap-1 items-center justify-center ">
              <span className="font-bold">Map</span>
              <img className="w-4 sm:w-6" src="/map.png" />
            </li>
          </ul>
        </div>
      )}

      {/* Location Dropdown */}
      {/* {isOpen && <Location />} */}
    </>

  );
};
export default Header