import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import NearByCity from "./NearByCity"
import { useEffect, useState } from "react";
import Loading from "../../Loading";

const NearbyCitiesList = ({ label }) => {

  const [countryWeatherList, setCountryWeatherList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const randomNum = Math.round(Math.random() * 5);
  const [cityListId, setCityListId] = useState([]);


  useEffect(() => {
    setIsLoading(true);
    fetch(`http://api.geonames.org/searchJSON?country=${label}&maxRows=100&username=ducsieunhan&featureClass=P&style=SHORT`, {
      method: 'GET',
      headers: {
        accept: 'application/json'
      }
    })
      .then(async (res) => {
        const data = await res.json();
        // console.log({ data });
        const currentCityList = (data.geonames || []).slice(0 + randomNum, 7 + randomNum);
        const currentCityListId = currentCityList.map(city => city.geonameId);
        // console.log({ currentCityListId });
        setCityListId(currentCityListId);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, [label])




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
    <div className="text-white p-4 bg-light border rounded-md border-[rgba(255,255,255,0.08)] mb-2">
      <h3 className="mb-2"><FontAwesomeIcon icon={faLocationDot} /> Nearby Weather</h3>
      <div className="flex flex-col gap-2">
        {
          countryWeatherList.map((city) => <NearByCity key={city.id} name={city.name} tempMax={city.main.temp_max} label={city.sys.country}
            tempMin={city.main.temp_min} description={city.weather[0].description} condition={city.weather[0].main} />)
        }
      </div>
    </div>
  )
}
export default NearbyCitiesList