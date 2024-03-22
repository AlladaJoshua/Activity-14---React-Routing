import React from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Service from "./Components/Service";
import Redirect from "./Components/NotFound";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* Route for the home page */}
          <Route path="/" element={<Home />} />

          {/* Route for the about page */}
          <Route path="/about" element={<About />} />

          {/* Route for the service page */}
          <Route path="/service" element={<Service />} />

          {/* Route for the contact page */}
          <Route path="/contact" element={<Contact />} />

          {/* 404 Route */}
          <Route path="*" element={<Redirect />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
