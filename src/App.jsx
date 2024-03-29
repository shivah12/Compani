import React, { useEffect } from 'react';
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You may need to adjust the path depending on the location of the AOS CSS file
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import './App.css'

function App() {
  useEffect(() => {
    AOS.init({}); // Initialize AOS
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<div>404 - Not Found</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
