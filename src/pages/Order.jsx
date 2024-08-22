import { contextProviderContext } from "@/provider/ContextProviderContext";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { toast } from "react-hot-toast";

const Order = () => {
  const { token } = useContext(contextProviderContext);
  const [orders, setOrders] = useState([]);

  const getOrdersAll = async () => {
    try {
      await axios
        .request({
          url: import.meta.env.VITE_BASE_API + "/api/allorders",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        })
        .then((res) => {
          console.log(res.data.data);
          setOrders(res.data.data);
        });
    } catch (error) {
      toast.error("Failed to get orders");
      console.error(error);
    }
  };

  useEffect(() => {
    getOrdersAll();
  }, []);

  return (
    <div className="flex flex-col w-full md:w-[calc(100vw-250px)]">
      <div className="flex flex-col gap-3 md:px-10 px-4 md:mt-10 pb-5">
        <h1 className="md:text-2xl text-xl font-bold">Orders All</h1>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[350px]">Order ID</TableHead>
              <TableHead>User ID</TableHead>
              <TableHead>Address ID</TableHead>
              <TableHead>TotalPrice</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order, index) => (
              <TableRow key={order.order_id}>
                <TableCell className="font-medium">{order.order_id}</TableCell>
                <TableCell className="text-center">{order.user_id}</TableCell>
                <TableCell className="text-center">
                  {order.address_id}
                </TableCell>
                <TableCell className="text-center">
                  {order.totalPrice.toLocaleString()}
                </TableCell>
                <TableCell className="text-right">
                  {order.status.toUpperCase()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Order;
