import bg from "../images/bg_login.png";
import bg2 from "../images/bg_login2.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Toggle from "@/components/Toggle";

import { useContext, useState } from "react";
import { useTheme } from "@/provider/Theme";
import { useNavigate } from "react-router-dom";
import { contextProviderContext } from "@/provider/ContextProviderContext";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { theme } = useTheme();
  const { localToken } = useContext(contextProviderContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      await axios
        .request({
          url: import.meta.env.VITE_BASE_API + "/api/admin/login",
          method: "POST",
          data: formData,
         
        })
        .then((res) => {
          // handle success
          localToken(res.data.token);
          toast.success(res.data.message);
          setTimeout(() => {
            navigate("/");
          }, 500);
        });
    } catch (error) {
      if (error.response.status == 404 || error.response.status == 400) {
        toast.error(error.response.data.error);
      } else {
        toast.error(error.response.data.error[0]);
      }
    }
  };
  return (
    <div
      className={`w-[100vw] h-[100vh] relative flex justify-center items-center`}
    >
      <div className="absolute top-2 right-2">
        <Toggle />
      </div>
      <img
        src={theme == "light" ? bg2 : bg}
        alt=""
        className="w-[100%] h-[100%] absolute -z-10"
      />

      <div className="relative flex flex-col gap-5 items-center h-[70%] w-[450px] bg-[#f5f5f5] dark:bg-[#0808088a] shadow-3xl rounded-3xl">
        <h1 className="text-3xl font-bold mt-10">Pizza admin </h1>
        <form
          onSubmit={login}
          className="w-[100%] flex flex-col items-center justify-center gap-5"
        >
          <div className="w-[80%] mt-5">
            <Label htmlFor="username" className="text-md">
              Username
            </Label>
            <Input
              id="username"
              name="username"
              type="text"
              placeholder="Username"
              className="mt-2 w-[100%]"
              onChange={handleChange}
              required
            />
          </div>

          <div className="w-[80%]">
            <Label htmlFor="password" className="text-sm">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              className="mt-2 w-[100%]"
              onChange={handleChange}
              required
            />
          </div>

          <Button
            variant="outline"
            type="submit"
            className="mt-10 w-[150px] text-xl font-bold"
          >
            Login
          </Button>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
