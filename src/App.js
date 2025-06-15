// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills"; // You’ll create this page below
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-slate-900 text-white min-h-screen font-sans scroll-smooth">
      <Navbar />
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </div>
  );
}

export default App;
