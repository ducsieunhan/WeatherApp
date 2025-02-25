const RainQuantityMainCity = ({ cityName, label }) => {
  return (
    <div className="bg-white/[0.1] border border-slate-600 py-2 px-1 flex flex-col gap-4 text-[1vw]">
      <h1>Quantity rain in {cityName}</h1>
      <div className="flex flex-row justify-center items-center gap-3">
        <div className="md:w-[6.5vw] md:h-[6.5vw] rounded-full border border-slate-400 flex flex-col justify-center items-center">
          <p>0</p>
          <p>mm</p>
        </div>
        <div>
          <p>No rain</p>
          <p>Indicated in {cityName}</p>
        </div>
      </div>
      <div className="flex flex-row justify-between p-3">
        <div>
          <p>{cityName}</p>
          <p>Located in {label}</p>
        </div>
        <div className="flex flex-col items-end">
          <p>0 mm</p>
          <p>No rain</p>
        </div>
      </div>
    </div>
  )
}
export default RainQuantityMainCity