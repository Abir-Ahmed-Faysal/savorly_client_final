import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";
import { ToastContainer } from "react-toastify";
// import useAuth from "../Hooks/useAuth";

const Root = () => {
  
  return (
    <div className="relative">
    
        <ToastContainer />
        <Navbar></Navbar>
        <div className="min-h-screen ">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
     
    </div>
  );
};

export default Root;
