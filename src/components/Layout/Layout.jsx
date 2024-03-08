// import React from "react"
import Footer from "../Footer/Footer"
import NavBar from "../NavBar/NavBar"
// import Home from "../../pages/Home"
// import Gallery from "../../pages/Gallery";
// import Processing from "../../pages/Services/Processing";
import { Outlet } from "react-router";

// import PropTypes from 'prop-types';

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

