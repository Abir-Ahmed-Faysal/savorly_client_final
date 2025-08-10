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
import AddFood from "../Pages/AddFood/AddFood.jsx";
import MyFood from "../Pages/MyFood/MyFood.jsx";
import ErrorPage from "../Pages/ErrorPage.jsx";
import ErrorRoute from "./ErrorRoute.jsx";
import Spinner from "../Components/Spinner/Spinner.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, element: <Home></Home> },
      { path: "/log-in", element: <LogIn></LogIn> },
      { path: "/register", element: <Register></Register> },
      { path: "/gallery", element: <Gallery></Gallery> },
      { path: "/all-foods", element: <AllFoods></AllFoods> },
      {
        path: "/food-details/:id",
        hydrateFallbackElement: <Spinner></Spinner>,
        loader: ({ params }) =>
          fetch(`https://savorly-lime.vercel.app/recipes/${params.id}`),
        element: <SingleFood></SingleFood>,
      },
      {
        path: "/Purchase/:id",
        hydrateFallbackElement: <Spinner></Spinner>,
        loader: ({ params }) =>
          fetch(`https://savorly-lime.vercel.app/recipes/${params.id}`),
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
      {
        path: "/add-food",
        element: (
          <Secure>
            <AddFood></AddFood>
          </Secure>
        ),
      },
      {
        path: "/my-foods",
        element: (
          <Secure>
            <MyFood></MyFood>
          </Secure>
        ),
      },{
        path: '*', Component: ErrorRoute
      }
     
    ],
  },
]);
export default router;
