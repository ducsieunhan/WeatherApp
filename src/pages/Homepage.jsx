import BackgroundLayout from "../components/BackgroundLayout"
import ForecastOverall from "../components/ForecastHome"

function Homepage() {
  return (
    <div className="relative bg-white text-black">
      {/* <BackgroundLayout /> */}
      <ForecastOverall />
    </div>
  )
}

export default Homepage
