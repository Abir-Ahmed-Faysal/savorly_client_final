import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";
import { ToastContainer } from "react-toastify";
// import useAuth from "../Hooks/useAuth";

const Root = () => {
  // const {loading}=useAuth()
  return (
    <div>
      <>
        <ToastContainer  />
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </>
    </div>
  );
};

export default Root;
