import { Outlet } from "react-router-dom"
import Header from "../components/HeadContain/Header"

const RootLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
export default RootLayout