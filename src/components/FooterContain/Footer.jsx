const Footer = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-4 grid grid-cols-3  md:flex md:flex-row md:gap-4 md:justify-center lg:justify-start items-center md:text-[18px] text-[14px] ">
      <p className="md:text-start text-center">© 2025 TodayWeather.com</p>
      <p className="md:text-start text-center  text-blue-600 cursor-pointer border-b border-white hover:border-b hover:border-b-blue-600">Global Weather</p>
      <p className="md:text-start text-center  text-blue-600 cursor-pointer border-b border-white hover:border-b hover:border-b-blue-600">Widget</p>
      <p className="md:text-start text-center  text-blue-600 cursor-pointer border-b border-white hover:border-b hover:border-b-blue-600">Terms of Use</p>
      <p className="md:text-start text-center  text-blue-600 cursor-pointer border-b border-white hover:border-b hover:border-b-blue-600"> Privacy Policy</p>
      <p className="md:text-start text-center  text-blue-600 cursor-pointer border-b border-white hover:border-b hover:border-b-blue-600">About Us</p>
    </div>
  )
}
export default Footer