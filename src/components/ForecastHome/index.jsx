import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ForecastCityList from "./ForecastCityList"
import { useEffect, useState } from "react"
import CountrySelector from "./CountrySelector"
import Loading from "../Loading"

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
        console.log({ currentCityListId });
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
        console.log({ countryWeatherList });
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
    <div className="flex relative max-w-screen-xl mx-auto h-screen items-center justify-center gap-5 p-5 text-white z-0">
      <div className="flex-[2] w-full h-full">
        <h3 className="mb-3"><FontAwesomeIcon icon={faMagnifyingGlass} /> Weather Forecast of cities in <span onClick={() => setIsOpenCountryList(!isOpenCountryList)} className="underline decoration-dotted cursor-pointer">{currentCountry.label ? currentCountry.label : "Vietnam"}
        </span></h3>
        {isOpenCountryList && <CountrySelector setIsOpenCountryList={setIsOpenCountryList} currentCountry={currentCountry} setCurrentCountry={setCurrentCountry} />}
        <ForecastCityList countryWeatherList={countryWeatherList} />
      </div>
      <div className="flex-1 w-full h-full "></div>
    </div>
  )
}
export default ForecastOverall