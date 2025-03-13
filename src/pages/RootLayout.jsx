import { Outlet } from "react-router-dom"
import Header from "../components/HeadContain/Header"
import Footer from "../components/FooterContain/footer"

const RootLayout = () => {
  return (
    <div>
      <div className="w-full border-b border-slate-300"><Header /></div>
      <Outlet />
      <div className="w-full border-t border-slate-300"><Footer /></div>
    </div>
  )
}
export default RootLayout