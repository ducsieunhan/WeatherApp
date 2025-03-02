import Breadcum from "../components/Breadcum"
import ForecastSpecificCity from "../components/ForecastCity"

const CityDetail = () => {
  return (
    <div className="relative bg-white h-full w-full text-black">

      <div className="relative z-10">
        <Breadcum />
        <ForecastSpecificCity />
      </div>
    </div>

  )
}
export default CityDetail