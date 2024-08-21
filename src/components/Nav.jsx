import icons from "../images/pizza.png";
import {
  House,
  ShoppingBasket,
  Users,
  ImagePlus,
  LayoutList,
  LogOut,
  Menu
} from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import Toggle from "./Toggle";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { contextProviderContext } from "@/provider/ContextProviderContext";
import { useContext, useState } from "react";


const Nav = () => {
  const { localToken } = useContext(contextProviderContext);
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const menuData = [
    {
      name: "Home",
      link: "/",
      icon: <House size={23} strokeWidth={1.5} />,
    },
    {
      name: "Orders",
      link: "/orders",
      icon: <LayoutList size={23} strokeWidth={1.5} />,
    },
    {
      name: "Products",
      link: "/products",
      icon: <ShoppingBasket size={23} strokeWidth={1.5} />,
    },
    {
      name: "Add Product",
      link: "/addproducts",
      icon: <ImagePlus size={23} strokeWidth={1.5} />,
    },
    {
      name: "Customers",
      link: "/customers",
      icon: <Users size={23} strokeWidth={1.5} />,
    },
  ];

  const logOut = () => {
    toast.success("Logged Out Successfully");
    localToken(null);
    setTimeout(() => {
      navigate("/login");
    }, 500);
  };
  return (
    <div>
      {/* Mobile nav */}
      <div className="sticky w-[full] h-[40px] flex items-center justify-end md:hidden pr-2 gap-2 ">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger onClick={() => setOpen(true)}><Menu size={23} strokeWidth={1.5} /></SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div className="mt-5">
                  {menuData.map((data) => (
                    <Link to={data.link}>
                      <div
                        onClick={() => setOpen(false)}
                        className="flex gap-3 items-center cursor-pointer rounded-md hover:dark:bg-[#554545] hover:bg-[#eee8e8] p-2"
                      >
                        {data.icon}
                        <h1 className="text-lg font-semibold">{data.name}</h1>
                      </div>
                    </Link>
                  ))}

                  <div onClick={logOut}>
                    <div
                      onClick={() => setOpen(false)}
                      className="flex gap-3 items-center cursor-pointer rounded-md hover:dark:bg-[#554545] hover:bg-[#eee8e8] p-2"
                    >
                      <LogOut size={23} strokeWidth={1.5} />
                      <h1 className="text-lg font-semibold">Log out</h1>
                    </div>
                  </div>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <Toggle />
      </div>
      {/* Destop nav */}
      <div className="sticky flex-col items-center w-[250px] h-[100vh] border-2 shadow-md md:flex hidden">
        <div className="absolute top-2 left-2">
          <Toggle />
        </div>
        <div className="mt-12 flex items-center justify-center w-[100%]">
          <img src={icons} alt="" className="h-[100px] w-[180px]" />
        </div>

        <div className="flex flex-col gap-2 w-[90%] mt-10">
          {menuData.map((data) => (
            <Link to={data.link}>
              <div
                onClick={() => setOpen(false)}
                className="flex gap-3 items-center cursor-pointer rounded-md hover:dark:bg-[#554545] hover:bg-[#eee8e8] p-2"
              >
                {data.icon}
                <h1 className="text-lg font-semibold">{data.name}</h1>
              </div>
            </Link>
          ))}
          <div onClick={logOut}>
            <div className="flex gap-3 items-center cursor-pointer rounded-md hover:dark:bg-[#554545] hover:bg-[#eee8e8] p-2">
              <LogOut size={23} strokeWidth={1.5} />
              <h1 className="text-lg font-semibold">Log out</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
