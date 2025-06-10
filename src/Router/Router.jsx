import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "../Root/Root.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
  },
]);
export default router;
