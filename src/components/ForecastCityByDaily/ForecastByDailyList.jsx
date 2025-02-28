import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useExtractDaily } from "../../hooks/useExtractDaily";
import { faCloudRain, faDroplet, faGauge, faSun, faTemperature1, faTemperature3, faTemperature4, faWind } from "@fortawesome/free-solid-svg-icons";
import DailyCard from "./DailyCard";

const ForecastByDailyList = ({ cityName, dayCount }) => {

  const { data: weatherDaily, isLoading } = useExtractDaily({ cityName });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!weatherDaily) {
    return <div>No data available</div>;
  }

  const dailyForecast = (weatherDaily.forecast?.forecastday).slice(0, dayCount) || [];
  // const currentForecast = weatherDaily.current || {};

  console.log({ dailyForecast });

  const dateExtract = (date) => {
    return date.split('-').join('/');
  }
  const textExtract = (text) => {
    return text.split(' ').slice(0, 2).join(' ');
  }

  return (
    <div>
      {
        dailyForecast.map(daily => (
          <DailyCard key={daily.date_epoch} humidity={daily.day.avghumidity} name={dateExtract(daily.date)} tempMin={daily.day.maxtemp_c} tempMax={daily.day.mintemp_c}
            description={textExtract(daily.day.condition.text)} condition={daily.day.condition.text} precipitation={daily.day.totalprecip_mm} uv={daily.day.uv} visibility={daily.day.avgvis_km}
            sunrise={daily.astro.sunrise} sunset={daily.astro.sunset} windSpeed={daily.day.maxwind_kph}
          />
        ))
      }
    </div>
  )
}
export default ForecastByDailyList