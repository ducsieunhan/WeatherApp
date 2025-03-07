import { useSearchParams } from "react-router-dom"
import IndicatorMain from "./IndicatorMain"
import NearbyCitiesList from "./Nearby/NearbyCitiesList"
import Loading from "../Loading";
import RainQuantityMainCity from "./RainQuantityMainCity";
import ForecastForHour from "./ForecastForHour";
import ForecastForDays from "./ForecastForDays";
import ChartHourly from "./LineChart/ChartHourly";
import { useExtractDaily } from "../../hooks/useExtractDaily";
import ChartDaily from "./LineChart/ChartDaily";
import SunData from "../SunData";
import WeatherMap from "../WeatherMap";

const ForecastSpecificCity = () => {

  const [searchParams] = useSearchParams();
  const city = searchParams.get('city');
  const label = searchParams.get('label');

  console.log(find);
  const { data: weatherDaily, isLoading } = useExtractDaily({ cityName: city });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!weatherDaily) {
    return <div>No data available</div>;
  }


  const dailyForecast = weatherDaily.forecast?.forecastday || [];

  // console.log({ dailyForecast });

  // for chart
  const dataHourly = (dailyForecast[0].hour).slice(0, 11);
  // console.log({ dataHourly });

  //data for chart hourly
  const dataRainHourly = dataHourly.map(data => data.chance_of_rain);
  const dataTempHourly = dataHourly.map(data => data.temp_c);
  const dataTimeHourly = dataHourly.map(data => (data.time).split(' ')[1]);

  //data for chart daily
  const dataTimeDaily = dailyForecast.map(daily => (daily.date).split('-').slice(1, 3).join('/'));
  const dataRainDaily = dailyForecast.map(daily => daily.day.avghumidity);
  const dataTempDaily = dailyForecast.map(daily => daily.day.avgtemp_c);
  // const dataTimeDaily = dataHourly.map(daily => daily.day.);

  // console.log({ dataTimeDaily, dataTempDaily, dataRainDaily });


  if (isLoading) {
    return (<Loading />)
  }

  return (
    <div className="flex flex-col md:flex-row relative max-w-screen-xl mx-auto  md:items-start h-full justify-center  gap-5  text-black z-0 ">
      <div className="md:w-2/3 w-full h-full order-1 md:order-1  flex flex-col gap-3">
        <IndicatorMain cityName={city} />
        <RainQuantityMainCity cityName={city} label={label} quantity={dailyForecast[0].day.totalprecip_mm} description={dailyForecast[0].day.condition.text} />
        <ForecastForHour cityName={city} />
        <ChartHourly cityName={city} dataRain={dataRainHourly} dataTemp={dataTempHourly} dataTime={dataTimeHourly} />
        <ForecastForDays cityName={city} />
        <ChartDaily cityName={city} dataRain={dataRainDaily} dataTemp={dataTempDaily} dataTime={dataTimeDaily} />
      </div>
      <div className="md:w-1/3 w-full  md:flex-1 md:h-full order-2 md:top-0">
        <NearbyCitiesList label={label} />
        <SunData sunrise={dailyForecast[0].astro.sunrise} sunset={dailyForecast[0].astro.sunset} />
        <WeatherMap cityName={city} />
      </div>
    </div>
  )
}
export default ForecastSpecificCity