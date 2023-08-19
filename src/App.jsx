import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
createBrowserRouter,
Outlet,
RouterProvider,
ScrollRestoration,
} from "react-router-dom";
import Cart from "./pages/Cart";
import { productsData } from "./api/Api";
import Product from "./components/Product";

const Layout = () =>{
  return(
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  )
};

const router = createBrowserRouter([
{
  path:"/",
  element:<Layout />,
  children: [
    {
      path:"/",
      element: <Home />,
      loader: productsData,
    },
    {
      path:"/product/:id",
      element:<Product/>
    },
    {
      path:"/cart",
      element:<Cart />
    },
  ]
}])

function App() {
  return (
    <div className="font-bodyFont">
      {/* <h1 className="text-red-600 text-2xl">Bazar E-commerce</h1> */}
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;