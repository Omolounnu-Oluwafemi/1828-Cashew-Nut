// import React from "react"
import Footer from "../Footer/Footer"
import NavBar from "../NavBar/NavBar"
import Home from "../../pages/Home"

// import PropTypes from 'prop-types';

const Layout = () => {
  return (
    <div>
      <NavBar />
      {/* <main>
        {children}
      </main> */}
      <Home/>
      <Footer />
    </div>
  );
};



export default Layout;

