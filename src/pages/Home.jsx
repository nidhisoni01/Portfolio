import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      id="home"
      className="flex flex-col justify-center items-center text-center p-10 min-h-screen"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">
        Hi, I’m Nidhi Soni 👋
      </h1>
      <p className="text-xl md:text-2xl mb-6 text-gray-300">
        Full Stack Developer | CSE Student | UI/UX Enthusiast | MERN Stack Developer
      </p>
      <div className="space-x-4">
        <a href="#projects" className="bg-blue-500 px-6 py-2 rounded-xl text-white hover:bg-blue-600 transition">
          View Projects
        </a>
        <a
  href="https://drive.google.com/file/d/1EIVunfegUxkkoWH37dKJuZ0WQeOqK8zO/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white text-blue-600 px-6 py-2 rounded-xl hover:bg-gray-100 transition"
>
  View Resume
</a>

      </div>
    </motion.div>
  );
};

export default Home;