const RainQuantityMainCity = ({ cityName, label, quantity }) => {
  return (
    <div className="bg-white/[0.05] border border-[rgba(255,255,255,0.08)] py-2 px-1 flex flex-col gap-4 text-[1vw]">
      <h1>Quantity rain in {cityName}</h1>
      <div className="flex flex-row justify-center items-center gap-3 ">
        <div className="md:w-[6.5vw] md:h-[6.5vw] rounded-full border border-[rgba(255,255,255,0.5)] flex flex-col justify-center items-center">
          <p>{quantity}</p>
          <p>mm</p>
        </div>
        <div>
          <p>No rain</p>
          <p>Indicated in {cityName}</p>
        </div>
      </div>
      <div className="flex flex-row justify-between p-3 ">
        <div>
          <p>{cityName}</p>
          <p>Located in {label}</p>
        </div>
        <div className="flex flex-col items-end">
          <p>{quantity} mm</p>
          <p>No rain</p>
        </div>
      </div>
    </div>
  )
}
export default RainQuantityMainCity