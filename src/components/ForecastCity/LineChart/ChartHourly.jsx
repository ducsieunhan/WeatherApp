import LineChartData from "./LineChartData"

const ChartHourly = ({ cityName, dataRain, dataTemp, dataTime }) => {
  return (
    <div className="bg-white/[0.05] border border-[rgba(255,255,255,0.08)] py-2 px-1 flex flex-col gap-4">
      <p className="text-[18px]">
        Temperature and precipitation of  {" "}
        <span className="underline decoration-dotted cursor-pointer">
          {cityName}
        </span>{" "}
        of next 12 hours
      </p>
      <div>
        <LineChartData dataLine1={dataRain} dataLine2={dataTemp} labelX={dataTime} />
      </div>

    </div>
  )
}
export default ChartHourly