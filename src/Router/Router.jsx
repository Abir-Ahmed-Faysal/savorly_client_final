import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "../Root/Root.jsx";
import Home from "../Pages/Home/Home.jsx";
import LogIn from "../Pages/LogIn/LogIn.jsx";
import Register from "../Pages/Register/Register.jsx";
import SingleFood from "../Pages/SingleFood/SingleFood.jsx";
import AllFoods from "../Pages/AllFoods/AllFoods.jsx";
import Gallery from "../Pages/Gallery/Gallery.jsx";
import PurchaseFood from "../Pages/PurchaseFood/PurchaseFood.jsx";
import Secure from "../Secure/Secure.jsx";
import MyOrders from "../Pages/MyOrders/MyOrders.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { index: true, element: <Home></Home> },
      { path: "/log-in", element: <LogIn></LogIn> },
      { path: "/register", element: <Register></Register> },
      { path: "/gallery", element: <Gallery></Gallery> },
      { path: "/all-foods", element: <AllFoods></AllFoods> },
      {
        path: "/food-details/:id",
        hydrateFallbackElement: <div>Loading...</div>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/recipes/${params.id}`),
        element: <SingleFood></SingleFood>,
      },
      {
        path: "/Purchase/:id",
        hydrateFallbackElement: <div>Loading...</div>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/recipes/${params.id}`),
        element: (
          <Secure>
            <PurchaseFood></PurchaseFood>
          </Secure>
        ),
      },
      {
        path: "/my-orders",
        element: (
          <Secure>
            <MyOrders></MyOrders>
          </Secure>
        ),
      },
    ],
  },
]);
export default router;
