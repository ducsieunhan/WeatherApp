
import { useLocation, useParams } from "react-router-dom"
import CityWeatherPinned from "../CityWeatherPinned"
import ForecastByTimeList from "./ForecastByTimeList"
import SunData from "../SunData";
import Loading from "../Loading";
import { useSpeCity } from "../../hooks/useSpeCity";
import { useExtractDaily } from "../../hooks/useExtractDaily";
import ChartHourly from "../ForecastCity/LineChart/ChartHourly";
import WeatherMap from "../WeatherMap";

const ForecastCityByTime = () => {

  const { cityName } = useParams();
  const location = useLocation();
  const { pathname } = location;
  const isTomorrow = pathname.includes('/Tomorrow');

  const { data: currentCity, isLoading: isLoading } = useSpeCity({
    url: `/weather?q=${cityName}&units=metric&`
  })

  const { data: weatherDaily, isLoading2 } = useExtractDaily({ cityName: cityName });

  if (isLoading2) {
    return <div>Loading...</div>;
  }

  if (!weatherDaily) {
    return <div>No data available</div>;
  }

  const dailyForecast = weatherDaily.forecast?.forecastday || [];

  let currentTime = null;
  let formatCurrentTime = null;
  if (pathname.includes('/byHours')) {
    currentTime = weatherDaily.location?.localtime;
    formatCurrentTime = currentTime.split(" ")[1].slice(0, 2);
  }

  // console.log({ dailyForecast });

  let dataHourly = null
  // for chart
  pathname.includes('/byHours') ?
    dataHourly = (dailyForecast[0].hour).slice(formatCurrentTime, parseInt(formatCurrentTime) + 11)
    :
    dataHourly = (dailyForecast[1].hour).slice(0, 24);
  // console.log({ dataHourly });

  //data for chart hourly
  const dataRainHourly = dataHourly.map(data => data.chance_of_rain);
  const dataTempHourly = dataHourly.map(data => data.temp_c);
  const dataTimeHourly = dataHourly.map(data => (data.time).split(' ')[1]);


  function formatTimeFromUnix(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  console.log({ currentCity });

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="flex flex-col md:flex-row relative max-w-screen-xl mx-auto  md:items-start h-full justify-center  gap-5  text-white z-0">
      <div className="md:w-2/3 w-full h-full order-1 md:order-1  bg-white text-black flex flex-col gap-5">
        <div className=" border border-slate-300/80 px-4 pt-7 pb-4">
          <h1 className="text-[20px] md:text-[35px]   py-3">Weather forecast in {cityName} {isTomorrow ? "tomorrow" : "by hour"}</h1>
          <ForecastByTimeList cityName={cityName} currentTime={formatCurrentTime} />
        </div>
        <ChartHourly cityName={cityName} dataRain={dataRainHourly} dataTemp={dataTempHourly} dataTime={dataTimeHourly} isTomorrow={isTomorrow} />
      </div>
      <div className="md:w-1/3 w-full  md:flex-1 md:h-full order-2 md:top-0  ">
        <CityWeatherPinned cityName={cityName} currentCity={currentCity} isLoading={isLoading} />
        <SunData sunrise={formatTimeFromUnix(currentCity?.sys?.sunrise)} sunset={formatTimeFromUnix(currentCity?.sys?.sunset)} />
        <WeatherMap />

      </div>
    </div>
  )
}
export default ForecastCityByTime