/* eslint-disable no-undef */
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ForecastCityList from "./ForecastCityList"
import { useEffect, useState } from "react"
import CountrySelector from "./CountrySelector"
import Loading from "../Loading"
import CityWeatherPinned from "../CityWeatherPinned"
import { useSpeCity } from "../../hooks/useSpeCity"
import SunData from "../SunData"
import WeatherMap from "../WeatherMap"
import CitiesList from "./CitiesList"

const ForecastOverall = () => {

  const [currentCountry, setCurrentCountry] = useState({
    value: 'VN',
    label: 'Viet Nam'
  });
  // const [isOpenCountryList, setIsOpenCountryList] = useState(false);
  const [cityListId, setCityListId] = useState([]);
  const [cityListName, setCityListName] = useState([]);
  const [countryWeatherList, setCountryWeatherList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { data: currentCityHome, isLoading: isLoading2 } = useSpeCity({
    url: `/weather?q=Hanoi&units=metric&`
  })

  // console.log({ currentCityHome });


  // get cities list of a country selector 
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
        // const currentCityList = (data.geonames || []).slice(0, 12);
        const currentCityList = (data.geonames || []);
        // console.log({ currentCityList });
        const currentCityListId = currentCityList.map(city => city.geonameId);
        // console.log({ currentCityListId });
        setCityListId(currentCityListId);
        const currentCityListName = currentCityList.map(({ geonameId, name }) =>
        (
          {
            geonameId, name
          }
        ));
        console.log({ currentCityListName });
        setCityListName(currentCityListName);

      })
  }, [currentCountry])

  useEffect(() => {
    if (cityListId.length === 0) return;
    setIsLoading(true);
    const limitedCityListId = cityListId.slice(0, 12);
    fetch(`https://api.openweathermap.org/data/2.5/group?id=${limitedCityListId.join(",")}&units=metric&appid=848cd758e03e69227688affa4a80e700`, {
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

  function formatTimeFromUnix(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  if (isLoading) {
    return <Loading />
  }
  return (
    <div>
      <div className="flex flex-col md:flex-row relative max-w-screen-xl mx-auto  md:items-start h-full justify-center  gap-5 py-5 text-black z-0">
        <div className="md:w-2/3 w-full h-full order-1 md:order-1 ">
          <h3 className="mb-3 md:text-[25px]"><FontAwesomeIcon icon={faMagnifyingGlass} /> Weather Forecast of cities in <span onClick={() => setIsOpenCountryList(!isOpenCountryList)} className="underline decoration-dotted cursor-pointer hover:text-medium">{currentCountry.label ? currentCountry.label : "Vietnam"}
          </span></h3>
          <CountrySelector currentCountry={currentCountry} setCurrentCountry={setCurrentCountry} />
          <ForecastCityList countryWeatherList={countryWeatherList} />
        </div>
        <div className="md:w-1/3 w-full  md:flex-1 md:h-full order-2 md:top-0 p-4 flex flex-col gap-3">
          <CityWeatherPinned cityName={'Hanoi'} currentCity={currentCityHome} isLoading={isLoading2} daily={false} />
          <SunData sunrise={formatTimeFromUnix(currentCityHome?.sys?.sunrise)} sunset={formatTimeFromUnix(currentCityHome?.sys?.sunset)} />
        </div>
      </div>
      <WeatherMap />
      <CitiesList countryName={currentCountry.label} cityListName={cityListName} />
    </div>
  )
}
export default ForecastOverall