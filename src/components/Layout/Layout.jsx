// import React from "react"
import Footer from "../Footer/Footer"
import NavBar from "../NavBar/NavBar"
import { Outlet } from "react-router";


const Layout = () => {
  return (
    <div>
      <NavBar />
      <Outlet/>
      <Footer />
    </div>
  );
};



export default Layout;

