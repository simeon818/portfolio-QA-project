import React, { useState, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Logo from "./assets/logo";

const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));
const Projects = lazy(() => import("./Projects"));

function App() {
  return (
    <Router>
      <Navbar />

      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contact />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

function Navbar() {
  return (
    <div className="navbar">
      <a href="/about" className="nav-item">
        About
      </a>
      <a href="/projects" className="nav-item">
        Projects
      </a>
      <a href="/contacts" className="nav-item">
        Contacts
      </a>
      <div>
        <Logo />
      </div>
    </div>
  );
}

export default App;
