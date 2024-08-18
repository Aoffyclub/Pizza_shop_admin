import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
import { useEffect, useState } from "react";
const Product = () => {
  const [product, setProduct] = useState([]);

  const getProduct = async () => {
    try {
      await axios
        .request({
          url: import.meta.env.VITE_BASE_API + "/api/product",
          method: "GET",
        })
        .then((res) => {
          setProduct(res.data.data);
        });
    } catch (error) {
      toast.error("Failed to fetch product.");
      console.error(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const deleteProduct = async (productId) => {
    console.log(productId);
    
  }
  return (
    <div className="flex flex-col w-[calc(100vw-250px)]">
      <div className="flex flex-col gap-3 px-10 mt-10">
        <h1 className="md:text-2xl text-xl font-bold">Products</h1>

        <Table>
          <TableCaption>A list of your all products.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px]">Category</TableHead>
              <TableHead className="w-[100px]">Product ID</TableHead>
              <TableHead className="w-[150px]">Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">Remove</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {product.map((item) => (
              <TableRow key={item.product_id}>
                <TableCell className="font-medium">
                  {item.category_id}
                </TableCell>
                <TableCell>{item.product_id}</TableCell>
                <TableCell>
                  <img
                    src={item.imageUrl}
                    alt="Product image"
                    className="h-[100px] w-[100px] rounded-md"
                    loading="lazy"
                  />
                </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell className="text-right">{item.price}</TableCell>
                <TableCell className="text-right">
                  <Button
                    onClick={() => {
                      deleteProduct(item.product_id);
                    }}
                  >
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
        </Table>
      </div>
    </div>
  );
};

export default Product;
