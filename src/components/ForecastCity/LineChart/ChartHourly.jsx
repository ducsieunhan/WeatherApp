import LineChartData from "./LineChartData"

const ChartHourly = ({ cityName, dataRain, dataTemp, dataTime, isTomorrow = false }) => {
  return (
    <div className=" border border-slate-300/80 py-2 px-1 flex flex-col gap-4">
      <p className="text-[15px] md:text-[25px]">
        Temperature and precipitation of  {" "}
        <span className="underline decoration-dotted cursor-pointer text-medium">
          {cityName}
        </span>{" "}
        {isTomorrow ? "tomorrow" : "of next 12 hours"}
      </p>
      <div>
        <LineChartData dataLine1={dataRain} dataLine2={dataTemp} labelX={dataTime} />
      </div>

    </div>
  )
}
export default ChartHourly