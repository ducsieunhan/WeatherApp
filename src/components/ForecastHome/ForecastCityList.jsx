import ForecastSpeCity from "../ForecastSpeCity"


const ForecastCityList = ({ countryWeatherList }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {
        countryWeatherList.map(country => <ForecastSpeCity key={country.id} humidity={country.main.humidity}
          name={country.name} tempMax={country.main.temp_max} tempMin={country.main.temp_min} description={country.weather[0].description}
          condition={country.weather[0].main} label={country.sys.country} />)
      }
    </div>
  )
}
export default ForecastCityList