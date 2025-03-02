import { Outlet } from "react-router-dom"
import Header from "../components/HeadContain/Header"

const RootLayout = () => {
  return (
    <div>
      <div className="w-full border-b border-slate-300"><Header /></div>
      <Outlet />
    </div>
  )
}
export default RootLayout