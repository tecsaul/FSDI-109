import "./App.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Catalog from "./pages/catalog";
import Home from "./pages/home";
import About from "./pages/about";
import Admin from "./pages/admin";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar></NavBar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>

        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
