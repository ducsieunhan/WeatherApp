import { Link } from "react-router-dom"

const DailyCard = ({ dailyName, cityName }) => {
  return (
    <Link to={`/${cityName}/${dailyName}`} className="cursor-pointer p-1 w-20 text-center bg-slate-300/[0.2] hover:bg-slate-600/[0.4] transition-[0.2s]">{dailyName}</Link>
  )
}
export default DailyCard