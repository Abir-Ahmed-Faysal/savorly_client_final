import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "../Root/Root.jsx";
import Home from "../Pages/Home/Home.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [{ index:true, element: <Home></Home> },{path:'/'}],
  },
]);
export default router;
