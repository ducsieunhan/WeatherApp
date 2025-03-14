import Breadcum from "../components/Breadcum"
import WeatherMap from "../components/WeatherMap"

const WeatherMapContain = () => {
  return (
    <div>
      <Breadcum />
      <h1 className="max-w-screen-xl mx-auto my-3 text-[3rem] font-bold">Live Weather Map</h1>
      <WeatherMap />
    </div>
  )
}
export default WeatherMapContain