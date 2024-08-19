import Nav from "./components/Nav"
import { Toaster } from "react-hot-toast"
import { Outlet } from "react-router-dom"


const Layout = () => {
  return (
    <div className="flex ">
      <Nav />
      <Toaster />
      <Outlet />
    </div>
  );
}

export default Layout