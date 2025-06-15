// src/components/Navbar.js
import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 py-4 px-8 flex justify-between items-center fixed top-0 left-0 right-0 z-50 shadow-md">
      <h1 className="text-xl font-bold text-blue-400">Nidhi Soni</h1>
      <div className="space-x-6 text-white">
        <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-cyan-400">Home</Link>
        <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-cyan-400">About</Link>
        <Link to="skills" smooth={true} duration={500} className="cursor-pointer hover:text-cyan-400">Skills</Link>
        <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-cyan-400">Projects</Link>
        <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-cyan-400">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
