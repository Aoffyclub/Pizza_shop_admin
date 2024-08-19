import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./provider/Theme";
import "./index.css";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import Product from "./pages/Product.jsx";
import Customer from "./pages/Customer.jsx";
import Login from "./pages/Login";
import AddProduct from "./pages/AddProduct";
import Order from "./pages/Order";

import { ContextProvider } from "./provider/ContextProviderContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/orders",
        element: <Order />,
      },
      {
        path: "/products",
        element: <Product />,
      },
      {
        path: "/addproducts",
        element: <AddProduct />,
      },
      {
        path: "/customers",
        element: <Customer />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

createRoot(document.getElementById("root")).render(
  <ThemeProvider defaultTheme="dark" storageKey="theme">
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </ThemeProvider>
);
