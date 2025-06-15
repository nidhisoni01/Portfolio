import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projectList = [
  {
    name: "AI-CODING-ASSISTANT",
    tech: ["HTML, CSS, JS", "OpenAI API"],
    description: "Developed a Chrome extension that integrates AI assistance into maang.in (AlgoZenith) for real-time problem-solving support. Implemented a responsive chat UI with light/dark mode, API key management, and seamless interaction using HTML, CSS, and JavaScript. Utilized Google Gemini AI API to provide hints, explanations, and solutions directly within the problem interface, enhancing the user's coding experience.",
    link: "https://github.com/nidhisoni01/AI-CODING-ASSISTANT"
  },
  {
    name: "Website Clones (UI Replication Projects)",
    tech: ["Web Development"],
    description: "Replicated popular website interfaces using HTML, CSS, and JavaScript to strengthen frontend skills and design precision. Focused on responsive layouts, and interactive elements.",
  },
  {
    name: "SLEEK-SPORTS-CARS",
    tech: ["HTML", "CSS", "JavaScript"],
    description: "Created a dynamic and visually appealing landing page for a sports car brand using HTML, CSS, andv JavaScript. Implemented responsive layouts, interactive animations, and smooth scrolling. Focused on modern UI/UX practices, including hover effects, transitions, and call-to-action elements to deliver a premium web experience.",
    link: "https://github.com/nidhisoni01/SLEEK-SPORTS-CARS"
  }
];

const Projects = () => {
  return (
    <motion.div
      className="max-w-6xl mx-auto p-6 mt-20"
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="projects"
    >
      <h2 className="text-3xl font-bold text-cyan-400 text-center mb-10">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projectList.map((proj, index) => (
          <motion.div
            key={index}
            className="bg-slate-800 p-6 rounded-xl shadow-lg flex flex-col justify-between hover:shadow-cyan-500/20 transition-shadow duration-500"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">{proj.name}</h3>
              <div className="flex flex-wrap gap-2 mb-2">
                {proj.tech.map((stack, idx) => (
                  <span key={idx} className="bg-cyan-600/20 text-cyan-300 text-xs px-2 py-1 rounded-full">
                    {stack}
                  </span>
                ))}
              </div>
              <p className="text-gray-300 text-sm mb-4">{proj.description}</p>
            </div>
            <div className="flex items-center justify-end">
              <motion.a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
              >
                <div className="p-3 rounded-full bg-cyan-500 hover:bg-cyan-400 transition duration-300 shadow-md">
                  <ArrowUpRight size={22} color="white" />
                </div>
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
