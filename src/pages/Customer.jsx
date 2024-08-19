import { contextProviderContext } from "@/provider/ContextProviderContext";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Customer = () => {
  const { token } = useContext(contextProviderContext);
  const [user, setUser] = useState([]);

  const getCustomers = async () => {
    try {
      await axios
        .request({
          url: import.meta.env.VITE_BASE_API + "/api/users",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        })
        .then((res) => {
          console.log(res.data.data);
          setUser(res.data.data);
        });
    } catch (error) {
      toast.error("Failed to get customers");
      console.error(error);
    }
  };
  useEffect(() => {
    getCustomers();
  }, []);
  return (
    <div className="flex flex-col w-[calc(100vw-250px)]">
      <div className="flex flex-col gap-3 px-10 mt-10">
        <h1 className="md:text-2xl text-xl font-bold">All users</h1>
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow>
              <TableHead className="w-[70px]">USER ID</TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Username</TableHead>
              <TableHead>First name</TableHead>
              <TableHead>Last name</TableHead>
              <TableHead className="text-right">Birth day</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {user.map((user, index) => (
              <TableRow key={user.user_id}>
                <TableCell className="font-medium">{user.user_id}</TableCell>
                <TableCell>
                  <img
                    src={import.meta.env.VITE_BASE_API + user.image}
                    alt=""
                    className="h-[55px] w-[55px] rounded-full shadow-md"
                  />
                </TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.firstName}</TableCell>
                <TableCell>{user.lastName}</TableCell>
                <TableCell className="text-right">{user.birth}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Customer;
