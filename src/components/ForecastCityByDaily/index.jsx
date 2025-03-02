
import { useParams } from "react-router-dom"
import CityWeatherPinned from "../CityWeatherPinned"
import ForecastByDailyList from "./ForecastByDailyList";
import { useSpeCity } from "../../hooks/useSpeCity";
import { useExtractDaily } from "../../hooks/useExtractDaily";
import Loading from "../Loading";
import ChartHourly from "../ForecastCity/LineChart/ChartHourly";
import SunData from "../SunData";
import ChartDaily from "../ForecastCity/LineChart/ChartDaily";



const ForecastCityByDaily = () => {

  const { cityName } = useParams();
  const { days } = useParams();
  const dayCount = days.split(' ')[0];



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

  // console.log({ dailyForecast });

  // for chart

  //data for chart daily
  const dataTimeDaily = dailyForecast.map(daily => (daily.date).split('-').slice(1, 3).join('/'));
  const dataRainDaily = dailyForecast.map(daily => daily.day.avghumidity);
  const dataTempDaily = dailyForecast.map(daily => daily.day.avgtemp_c);


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
          <h1 className="text-[25px] md:text-[35px]   py-3">Weather forecast in {cityName} by hour</h1>
          <ForecastByDailyList cityName={cityName} dayCount={dayCount} />
        </div>
        <ChartDaily cityName={cityName} dataRain={dataRainDaily} dataTemp={dataTempDaily} dataTime={dataTimeDaily} />
      </div>
      <div className="md:w-1/3 w-full  md:flex-1 md:h-full order-2 md:top-0  ">
        <CityWeatherPinned cityName={cityName} currentCity={currentCity} isLoading={isLoading} />
        <SunData sunrise={formatTimeFromUnix(currentCity?.sys?.sunrise)} sunset={formatTimeFromUnix(currentCity?.sys?.sunset)} />
      </div>
    </div>
  )
}
export default ForecastCityByDaily