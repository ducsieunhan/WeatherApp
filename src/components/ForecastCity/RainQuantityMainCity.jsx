/* eslint-disable react/prop-types */
const RainQuantityMainCity = ({ cityName, label, quantity, description }) => {
  return (
    <div className=" border border-slate-300/80 py-2 px-1 flex flex-col gap-4 text-[15px] md:text-[20px]">
      <h1 className="text-[15px] md:text-[25px]">Quantity rain in {cityName}</h1>
      <div className="flex flex-row justify-center items-center gap-3 ">
        <div className="w-[50px] h-[50px] md:w-[6.5vw] md:h-[6.5vw] rounded-full border border-medium flex flex-col justify-center items-center">
          <p>{quantity}</p>
          <p>mm</p>
        </div>
        <div className="font-bold text-[15px] md:text-[25px]">
          <p >{description}</p>
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