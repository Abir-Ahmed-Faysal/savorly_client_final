import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "../Root/Root.jsx";
import Home from "../Pages/Home/Home.jsx";
import LogIn from "../Pages/LogIn/LogIn.jsx";
import Register from "../Pages/Register/Register.jsx";
import AllFoods from "../Pages/AllFoods.jsx/AllFoods.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { index: true, element: <Home></Home> },
      { path: "/log-in", element: <LogIn></LogIn> },
      { path: "/register", element: <Register></Register> },
      { path: "/gallery", element: <div>hi</div> },
      { path: "/all-foods", element: <AllFoods></AllFoods>},
    ],
  },
]);
export default router;
