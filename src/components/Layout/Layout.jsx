// import React from "react"
import Footer from "../Footer/Footer"
import NavBar from "../NavBar/NavBar"
import Home from "../../pages/Home"

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
  )
}

export default Layout
