import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Science from "./pages/Science.jsx";
import Quality from "./pages/Quality.jsx";
import Guide from "./pages/Guide.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Navbar/>
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/science" element={<Science/>}/>
            <Route path="/quality" element={<Quality/>}/>
            <Route path="/guide" element={<Guide/>}/>
            <Route path="/buyers-guide" element={<Guide/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="*" element={
              <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 12 }}>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 64, color: "#e4e6eb" }}>404</div>
                <div style={{ color: "#64748b" }}>Page not found</div>
                <a href="/" style={{ color: "#1877F2", fontSize: 13 }}>← Back to home</a>
              </div>
            }/>
          </Routes>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}
