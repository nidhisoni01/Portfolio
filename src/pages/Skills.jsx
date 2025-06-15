import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code2 } from "lucide-react";
import collegeLogo from "../assets/mru-logo.png"; // Add your logo to public or assets folder

const Skills = () => {
  return (
    <motion.div
      className="max-w-6xl mx-auto p-6 mt-20"
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="skills"
    >
      <h2 className="text-3xl font-bold text-cyan-400 text-center mb-10">
        Skills / Education
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {/* Skills Card */}
        <motion.div
          className="bg-slate-800 border border-cyan-500/40 rounded-2xl p-6 shadow-lg hover:shadow-cyan-400/20 transform transition duration-300 hover:-translate-y-1 hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center mb-4 gap-3">
            <Code2 className="text-cyan-300 w-6 h-6" />
            <h4 className="text-cyan-300 text-xl font-semibold">Technical Skills</h4>
          </div>
          <div className="text-sm text-gray-300 space-y-4">
            <div>
              <p className="text-blue-300 font-medium">Languages:</p>
              <p className="ml-2">Java, JavaScript, SQL, HTML, CSS</p>
            </div>
            <div>
              <p className="text-blue-300 font-medium">Developer Tools:</p>
              <p className="ml-2">VS Code, IntelliJ IDEA, Eclipse, Git, GitHub</p>
            </div>
            <div>
              <p className="text-blue-300 font-medium">Technologies / Frameworks:</p>
              <p className="ml-2">ReactJS, NextJS, NodeJS, ExpressJS, MongoDB, Tailwind CSS, Jenkins, Docker, Maven</p>
            </div>
          </div>
        </motion.div>

        {/* Education Card */}
        <motion.div
          className="bg-slate-800 border border-cyan-500/40 rounded-2xl p-6 shadow-lg hover:shadow-cyan-400/20 transform transition duration-300 hover:-translate-y-1 hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center mb-4 gap-3">
            <GraduationCap className="text-cyan-300 w-6 h-6" />
            <h4 className="text-cyan-300 text-xl font-semibold">Education</h4>
          </div>
          <div className="flex items-start gap-4">
            <img src={collegeLogo} alt="MRU Logo" className="w-10 h-10 object-contain mt-1" />
            <div className="text-sm text-gray-300 leading-relaxed">
              <p className="font-semibold">Manav Rachna University (MRU)</p>
              <p>B. Tech/BE (Bachelor of Technology/Bachelor of Engineering)</p>
              <p>2022 - Present</p>
              <p className="flex items-center gap-1">📍 <span>Faridabad</span></p>
              <p className="mt-2">CGPA : 7.7</p>
              <p className="mt-2">
                Pursuing B.Tech in Computer Science and Engineering with a specialization in Cloud, DevOps, and Full-Stack Development. Equipped with a strong understanding of modern web technologies, cloud computing, and CI/CD practices. Actively building scalable applications, exploring deployment workflows, and gaining hands-on experience through academic projects and practical implementations. Passionate about leveraging technology to solve real-world challenges and eager to contribute to impactful tech-driven solutions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <h2 className="text-3xl font-bold text-cyan-400 text-center mb-10">
        Internships / Experience
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Internship 1 */}
        <motion.div
          className="bg-slate-800 border border-blue-500/40 rounded-2xl p-6 shadow-md hover:shadow-blue-400/20 transform transition duration-300 hover:-translate-y-1 hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center mb-2 gap-3">
            <Briefcase className="text-blue-300 w-5 h-5" />
            <h4 className="text-blue-300 text-lg font-semibold">Web Development Intern</h4>
          </div>
          <p className="text-gray-300 text-sm mb-1 italic">Oasis Infobyte</p>
          <p className="text-gray-300 text-sm mb-2">
            As a Web Development Intern, I gained hands-on experience in building responsive and visually appealing web
interfaces using HTML, CSS, and JavaScript. I developed a strong understanding of front-end design
principles, user experience, and modern UI practices.
          </p>
          <a
            href="https://drive.google.com/file/d/14YkNE1fOX-hKkPs6TnMjPLAKM7zhBuUY/view?usp=drive_link"
            className="text-cyan-400 text-sm underline hover:text-cyan-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Certificate
          </a>
        </motion.div>

        {/* Internship 2 */}
        <motion.div
          className="bg-slate-800 border border-blue-500/40 rounded-2xl p-6 shadow-md hover:shadow-blue-400/20 transform transition duration-300 hover:-translate-y-1 hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center mb-2 gap-3">
            <Briefcase className="text-blue-300 w-5 h-5" />
            <h4 className="text-blue-300 text-lg font-semibold">Teaching Assistant</h4>
          </div>
          <p className="text-gray-300 text-sm mb-1 italic">Coding Ninjas</p>
          <p className="text-gray-300 text-sm mb-2">
            As a Teaching Assistant, I helped students understand concepts and guided them in solving specific problems.
This role enhanced my communication, problem-solving, and mentoring abilities. I actively engaged in
doubt-clearing sessions and provided individual support to improve learning outcomes. It also deepened my
own understanding of the subject through collaborative discussions.
          </p>
          <a
            href="https://drive.google.com/drive/folders/1vL_zNuMx2xgKrBwh2dHnN172us28Swo3?usp=drive_link"
            className="text-cyan-400 text-sm underline hover:text-cyan-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Certificate
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
