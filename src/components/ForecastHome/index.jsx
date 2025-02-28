import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ForecastCityList from "./ForecastCityList"
import { useEffect, useState } from "react"
import CountrySelector from "./CountrySelector"
import Loading from "../Loading"
import CityWeatherPinned from "../CityWeatherPinned"

const ForecastOverall = () => {

  const [currentCountry, setCurrentCountry] = useState({
    value: 'VN',
    label: 'Viet Nam'
  });
  const [isOpenCountryList, setIsOpenCountryList] = useState(false);
  const [cityListId, setCityListId] = useState([]);
  const [countryWeatherList, setCountryWeatherList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch(`http://api.geonames.org/searchJSON?country=${currentCountry.value}&maxRows=100&username=ducsieunhan&featureClass=P&style=SHORT`, {
      method: 'GET',
      headers: {
        accept: 'application/json'
      }
    })
      .then(async (res) => {
        const data = await res.json();
        // console.log({ data });
        const currentCityList = (data.geonames || []).slice(0, 12);
        const currentCityListId = currentCityList.map(city => city.geonameId);
        // console.log({ currentCityListId });
        setCityListId(currentCityListId);
      })
  }, [currentCountry])

  useEffect(() => {
    if (cityListId.length === 0) return;
    setIsLoading(true);

    fetch(`https://api.openweathermap.org/data/2.5/group?id=${cityListId.join(",")}&units=metric&appid=848cd758e03e69227688affa4a80e700`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
      }
    })
      .then(async (res) => {
        const data = await res.json();
        setCountryWeatherList(data.list || []);
        // console.log({ countryWeatherList });
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, [cityListId]);


  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="flex flex-col md:flex-row relative max-w-screen-xl mx-auto  md:items-start h-full justify-center  gap-1 p-5 text-white z-0">
      <div className="md:w-2/3 w-full h-full order-1 md:order-1 p-4">
        <h3 className="mb-3"><FontAwesomeIcon icon={faMagnifyingGlass} /> Weather Forecast of cities in <span onClick={() => setIsOpenCountryList(!isOpenCountryList)} className="underline decoration-dotted cursor-pointer">{currentCountry.label ? currentCountry.label : "Vietnam"}
        </span></h3>
        {isOpenCountryList && <CountrySelector setIsOpenCountryList={setIsOpenCountryList} currentCountry={currentCountry} setCurrentCountry={setCurrentCountry} />}
        <ForecastCityList countryWeatherList={countryWeatherList} />
      </div>
      <div className="md:w-1/3 w-full  md:flex-1 md:h-full order-2 md:top-0 p-4">
        <CityWeatherPinned />
      </div>
    </div>
  )
}
export default ForecastOverall