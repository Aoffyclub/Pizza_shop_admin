import { useContext, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import toast from "react-hot-toast";
import axios from "axios";
import { ImageUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contextProviderContext } from "@/provider/ContextProviderContext";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [addProduct, setAddproduct] = useState({
    name: "",
    category_id: "",
    description: "",
    price: "",
    imageUrl: "",
  });

  const { token } = useContext(contextProviderContext);
  const navigate = useNavigate();

  const handlerChange = (event) => {
    const { name, value } = event.target;
    setAddproduct((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const changeSelect = (event) => {
    setAddproduct((prevInputs) => ({
      ...prevInputs,
      ["category_id"]: event,
    }));
  };

  const handleImage = async (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const formData = new FormData();
    formData.append("productImage", file);

    try {
      await axios
        .request({
          method: "POST",
          url: import.meta.env.VITE_BASE_API + "/api/upload/product",
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + token,
          },
          data: formData,
        })
        .then((res) => {
          toast.success(res.data.message);
          console.log(res.data.imageUrl);

          setAddproduct((prevInputs) => ({
            ...prevInputs,
            ["imageUrl"]: res.data.imageUrl,
          }));

          console.log(addProduct);
        });
    } catch (error) {
      toast.error("Can't upload image");
    }
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios
        .request({
          method: "POST",
          url: import.meta.env.VITE_BASE_API + "/api/product",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          data: addProduct,
        })
        .then((res) => {
          toast.success(res.data.message);
          navigate("/products");
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
    <div className="flex flex-col w-[calc(100vw-250px)] h-[100vh] overflow-scroll">
      <div className="px-10 w-[600px] mt-10">
        <h1 className="md:text-2xl text-xl font-bold">Add Product</h1>

        <form
          onSubmit={handlerSubmit}
          className="flex flex-col gap-3 mt-10 mb-10"
        >
          <div className="flex gap-2 items-center ">
            <Label htmlFor="name" className="w-[140px] font-bold">
              Product name :
            </Label>
            <Input
              type="text"
              id="name"
              name="name"
              className="font-bold"
              onChange={handlerChange}
              required
            />
          </div>
          <div className="flex gap-2 items-center ">
            <Label htmlFor="price" className="w-[140px] font-bold">
              Price :
            </Label>
            <Input
              type="number"
              id="price"
              name="price"
              className="font-bold"
              onChange={handlerChange}
              required
            />
          </div>
          <div className="flex gap-2 items-center ">
            <Label htmlFor="description" className="w-[110px] font-bold">
              Description :
            </Label>
            <Textarea
              type="text"
              id="description"
              name="description"
              className="h-[250px]"
              onChange={handlerChange}
              required
            />
          </div>
          <div className="flex gap-2 items-center ">
            <Select required onValueChange={changeSelect}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a size" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Size</SelectLabel>
                  <SelectItem value="small">Small</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="large">Large</SelectItem>
                  <SelectItem value="extraLarge">Extra Large</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid w-full max-w-sm items-center gap-2">
            {addProduct.imageUrl ? (
              <img
                src={import.meta.env.VITE_BASE_API + addProduct.imageUrl}
                alt=""
                className="w-[200px] h-[200px] rounded-xl"
              />
            ) : (
              <ImageUp size={200} strokeWidth={0.5} />
            )}

            <Label htmlFor="imageUrl">Upload picture</Label>
            <Input
              id="imageUrl"
              type="file"
              className="font-bold"
              name="imageUrl"
              onChange={handleImage}
            />
          </div>
          <div>
            <Button variant="outline" type="submit">
              Add product
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
