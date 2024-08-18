import icons from "../images/pizza.png";
import {
  House,
  ShoppingBasket,
  Users,
  ImagePlus,
  LayoutList,
  LogOut,
} from "lucide-react";
import Toggle from "./Toggle";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="sticky flex flex-col items-center w-[250px] h-[100vh] border-2 shadow-md">
      <div className="absolute top-2 left-2">
        <Toggle />
      </div>
      <div className="mt-12 flex items-center justify-center w-[100%]">
        <img src={icons} alt="" className="h-[100px] w-[180px]" />
      </div>

      <div className="flex flex-col gap-2 w-[90%] mt-10">
        <Link to={"/"}>
          <div className="flex gap-3 items-center cursor-pointer rounded-md hover:dark:bg-[#554545] hover:bg-[#eee8e8] p-2">
            <House size={23} strokeWidth={1.5} />
            <h1 className="text-lg font-semibold">Home</h1>
          </div>
        </Link>
        <Link to={"/orders"}>
          <div className="flex gap-3 items-center cursor-pointer rounded-md hover:dark:bg-[#554545] hover:bg-[#eee8e8] p-2">
            <LayoutList size={23} strokeWidth={1.5} />
            <h1 className="text-lg font-semibold">Orders</h1>
          </div>
        </Link>
        <Link to={"/products"}>
          <div className="flex gap-3 items-center cursor-pointer rounded-md hover:dark:bg-[#554545] hover:bg-[#eee8e8] p-2">
            <ShoppingBasket size={23} strokeWidth={1.5} />
            <h1 className="text-lg font-semibold">Products</h1>
          </div>
        </Link>
        <Link to={"/addproducts"}>
          <div className="flex gap-3 items-center cursor-pointer rounded-md hover:dark:bg-[#554545] hover:bg-[#eee8e8] p-2">
            <ImagePlus size={23} strokeWidth={1.5} />
            <h1 className="text-lg font-semibold">Add Product</h1>
          </div>
        </Link>
        <Link to={"/customers"}>
          <div className="flex gap-3 items-center cursor-pointer rounded-md hover:dark:bg-[#554545] hover:bg-[#eee8e8] p-2">
            <Users size={23} strokeWidth={1.5} />
            <h1 className="text-lg font-semibold">Customers</h1>
          </div>
        </Link>
        <Link to={"/login"}>
          <div className="flex gap-3 items-center cursor-pointer rounded-md hover:dark:bg-[#554545] hover:bg-[#eee8e8] p-2">
            <LogOut size={23} strokeWidth={1.5} />
            <h1 className="text-lg font-semibold">Log out</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
