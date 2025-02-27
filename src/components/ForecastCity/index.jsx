import { useSearchParams } from "react-router-dom"
import IndicatorMain from "./IndicatorMain"
import NearbyCitiesList from "./Nearby/NearbyCitiesList"
import { useEffect, useState } from "react";
import Loading from "../Loading";
import RainQuantityMainCity from "./RainQuantityMainCity";
import ForecastForHour from "./ForecastForHour";
import { UseExtractWeatherData } from "../../hooks/useExtractWeatherData";

const ForecastSpecificCity = () => {

  const [searchParams] = useSearchParams();
  const city = searchParams.get('city');
  const label = searchParams.get('label');

  const [isLoading, setIsLoading] = useState(false);
  const [cityListId, setCityListId] = useState([]);
  const randomNum = Math.round(Math.random() * 5);

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
        console.log({ currentCityListId });
        setCityListId(currentCityListId);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, [label])

  if (isLoading) {
    return (<Loading />)
  }

  return (
    <div className="flex flex-col md:flex-row relative max-w-screen-xl mx-auto  md:items-start h-full justify-center  gap-5 p-5 text-white z-0 ">
      <div className="md:w-2/3 w-full h-full order-1 md:order-1 p-4  flex flex-col gap-3">
        <IndicatorMain cityName={city} />
        <RainQuantityMainCity cityName={city} label={label} />
        <ForecastForHour cityName={city} />
      </div>
      <div className="md:w-1/3 w-full  md:flex-1 md:h-full order-2 md:top-0 p-4 bg-white/[0.1] border border-slate-600">
        <NearbyCitiesList cityListId={cityListId} />
      </div>
    </div>
  )
}
export default ForecastSpecificCity