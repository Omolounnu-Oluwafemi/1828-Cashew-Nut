import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./components/Layout/Layout";
// import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Processing from "./pages/Services/Processing";
import Sourcing from "./pages/Services/Sourcing";
import Precooling from "./pages/Services/Precooling";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import Modal from "./components/Modal/Modal";
import MessageModal from "./components/Modal/MessageModal";

function App( ) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MessageModal />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/processing" element={<Processing />} />
          <Route path="/sourcing" element={<Sourcing />} />
          <Route path="/exportation" element={<Precooling />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
