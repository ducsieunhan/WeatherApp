import { Link } from "react-router-dom"

const DailyCard = ({ dailyName, cityName }) => {
  return (
    <Link to={`/${cityName}/${dailyName}`} className="text-[16px] cursor-pointer p-1 w-20 text-center bg-medium/[0.9] hover:bg-medium text-white border border-medium">{dailyName}</Link>
  )
}
export default DailyCard