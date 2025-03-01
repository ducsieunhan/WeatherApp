import Breadcum from "../components/Breadcum"
import ForecastSpecificCity from "../components/ForecastCity"

const CityDetail = () => {
  return (
    <div className="relative bg-[#275eaf] h-full w-full text-white">
      {/* <div className="absolute inset-0 bg-black/10 z-0"></div> */}

      <div className="relative z-10">
        <Breadcum />
        <ForecastSpecificCity />
      </div>
    </div>

  )
}
export default CityDetail