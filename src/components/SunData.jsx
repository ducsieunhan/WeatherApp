/* eslint-disable react/prop-types */
const SunData = ({ sunrise, sunset }) => {
  return (
    <div className=" h-28 relative my-2">
      <img className="absolute -z-10 object-cover w-full h-full" src="/sunrise.jpg" />
      <div className="p-3 h-full z-10 flex flex-col justify-between text-[18px] bg-black/10 text-white shadow-2xl">
        <p>Sunrise / Sunset</p>
        <div className="flex flex-row justify-between ">
          <p>{sunrise}</p>
          <p>{sunset}</p>
        </div>
      </div>
    </div>
  )
}
export default SunData