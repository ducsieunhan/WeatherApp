import IndicatorMain from "./IndicatorMain"

const ForecastSpecificCity = () => {
  return (
    <div className="flex flex-col md:flex-row relative max-w-screen-xl mx-auto  md:items-start h-full justify-center  gap-1 p-5 text-white z-0 bg-white">
      <div className="md:w-2/3 w-full h-full order-1 md:order-1 p-4 bg-slate-600">
        <IndicatorMain />
      </div>
      <div className="md:w-1/3 w-full  md:flex-1 md:h-full order-2 md:top-0 p-4 bg-black">
      </div>
    </div>
  )
}
export default ForecastSpecificCity