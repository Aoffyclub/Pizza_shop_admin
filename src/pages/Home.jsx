import {
  ShoppingBag,
  ShoppingBasket,
  UserRound,
  HandCoins,
} from "lucide-react";
import axios from "axios";
import { contextProviderContext } from "@/provider/ContextProviderContext";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const Home = () => {
  const { token } = useContext(contextProviderContext);
  const [report, setReport] = useState({});

  useEffect(() => {
    if (token) {
      getReport();
    }
  }, []);

  const getReport = async () => {
    try {
      await axios
        .request({
          url: import.meta.env.VITE_BASE_API + "/api/reportdata",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        })
        .then((res) => {
          console.log(res.data.data);
          setReport(res.data.data);
        });
    } catch (error) {
      toast.error("Failed to fetch report data");
    }
  };

  return (
    <div className="flex flex-col w-full md:w-[calc(100vw-250px)] md:h-[100vh] overflow-scroll no-scrollbar">
      <div className="flex flex-col gap-3 md:px-10 px-4 md:mt-10 mt-[60px] pb-5">
        <h1 className="md:text-2xl text-xl font-bold">Report Data</h1>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mt-5">
          <div className="flex items-center gap-4 h-[120px] border-2 rounded-xl shadow-md p-4">
            <div className="flex items-center justify-center h-[60px] w-[60px] rounded-full border-2 shadow-sm bg-[#f1ecec] dark:bg-[#353232]">
              <ShoppingBag />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-xl">Orders</p>
              <p className="font-semibold text-lg">
                {report.totalOrders?.toLocaleString() || 0}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 h-[120px] border-2 rounded-xl shadow-md p-4">
            <div className="flex items-center justify-center h-[60px] w-[60px] rounded-full border-2 shadow-sm bg-[#f1ecec] dark:bg-[#353232]">
              <HandCoins />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-xl">Total</p>
              <p className="font-semibold text-lg">
                {report.totalPrice?.toLocaleString() || 0}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 h-[120px] border-2 rounded-xl shadow-md p-4">
            <div className="flex items-center justify-center h-[60px] w-[60px] rounded-full border-2 shadow-sm bg-[#f1ecec] dark:bg-[#353232]">
              <ShoppingBasket />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-xl">Products</p>
              <p className="font-semibold text-lg">
                {report.totalProducts?.toLocaleString() || 0}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 h-[120px] border-2 rounded-xl shadow-md p-4">
            <div className="flex items-center justify-center h-[60px] w-[60px] rounded-full border-2 shadow-sm bg-[#f1ecec] dark:bg-[#353232]">
              <UserRound />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-xl">Users</p>
              <p className="font-semibold text-lg">
                {report.totalUsers?.toLocaleString() || 0}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
