import React from "react";
import { motion } from "framer-motion";
import myImage from "../assets/my-image.jpg";

const About = () => {
  return (
    <motion.div
      id="about"
      className="max-w-4xl mx-auto p-6 mt-10 text-center min-h-screen flex flex-col justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-4 text-cyan-400">About Me</h2>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img src={myImage} alt="Myself" className="w-40 h-40 rounded-full object-cover" />
        <p className="text-lg text-gray-300 leading-relaxed">
          Full-Stack Developer with a strong academic foundation in Computer Science and Engineering, currently pursuing a B.Tech with a specialization in Cloud, DevOps, and Full-Stack Development from Manav Rachna University. I bring hands-on experience in developing responsive, scalable, and user-centric web applications using technologies like React, Node.js, Express, and MongoDB, coupled with deployment and automation tools such as Docker, Jenkins, and Maven.

          I have actively worked on projects that integrate AI APIs, clone popular UIs for precision and practice, and deliver seamless frontend/backend experiences. My work reflects a deep understanding of RESTful API development, and version control using Git and GitHub.
          

        </p>
      </div>
    </motion.div>
  );
};

export default About;