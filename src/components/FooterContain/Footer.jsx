const Footer = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-4 flex flex-row md:gap-4 justify-start items-center md:text-[15px] text-[12px]">
      <p>© 2025 TodayWeather.com</p>
      <p className="text-blue-600 cursor-pointer border-b border-white hover:border-b hover:border-b-blue-600">Global Weather</p>
      <p className="text-blue-600 cursor-pointer border-b border-white hover:border-b hover:border-b-blue-600">Widget</p>
      <p className="text-blue-600 cursor-pointer border-b border-white hover:border-b hover:border-b-blue-600">Terms of Use</p>
      <p className="text-blue-600 cursor-pointer border-b border-white hover:border-b hover:border-b-blue-600"> Privacy Policy</p>
      <p className="text-blue-600 cursor-pointer border-b border-white hover:border-b hover:border-b-blue-600">About Us</p>
    </div>
  )
}
export default Footer