// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Product from "./pages/Product";
import About from "./pages/About";
import Career from "./pages/Career.jsx";
import Contact from "./pages/Contact";
import "./css/main.css";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfServices from "./pages/TermsOfServices";
import CookiesPolicy from "./pages/CookiesPolicy";
import LegalAgreement from "./pages/LegalAgreement";
import KnowledgeBase from "./pages/KnowledgeBase";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy/>} />
        <Route path="/terms" element={<TermsOfServices/>} />
        <Route path="/cookies" element={<CookiesPolicy/>} />
        <Route path="/legalagreement" element={<LegalAgreement/>} />
        <Route path="/knowbase" element={<KnowledgeBase/>} />
      </Routes>
    </Router>
  );
}

export default App;
