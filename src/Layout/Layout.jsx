import { Outlet } from "react-router-dom"

import Navbar from '../components/Navbar'
import Leftbar from '../components/Leftbar'
import Rightbar from '../components/Rightbar'

const Layout = () => {
  return (
    <div className="bg-whiteBg dark:bg-customDark2 overflow-hidden">
      <Navbar />
        <div className="flex py-5 max-w-[1350px] m-auto items-start md:gap-8 gap-4">
          <Leftbar/>
          <div className="flex-[2] px-3 ms:px-0">
            <Outlet />
          </div>
          <Rightbar />
        </div>
    </div>
  )
}

export default Layout