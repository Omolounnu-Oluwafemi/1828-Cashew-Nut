import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./components/Layout/Layout";
// import Home from "./pages/Home";
// import Gallery from "./pages/Gallery";

function App( ) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="/gallery" element={<Gallery />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
