import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message submitted successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.div
      className="max-w-6xl mx-auto p-6 mt-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-cyan-400 text-center mb-8">Get in Touch</h2>

      <div className="grid md:grid-cols-2 gap-10 text-gray-300">
        {/* Left: Contact Info */}
        <div className="space-y-4 text-lg">
          <p>
            Email:{" "}
            <a className="text-cyan-400 hover:underline" href="mailto:soninidhi630@gmail.com">
              soninidhi630@gmail.com
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              className="text-cyan-400 hover:underline"
              href="https://www.linkedin.com/in/nidhi-soni-b06449250"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/nidhi-soni
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              className="text-cyan-400 hover:underline"
              href="https://github.com/nidhisoni01"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/nidhisoni01
            </a>
          </p>
          <p>Phone: <span className="text-cyan-400">+91-9817466140</span></p>
          <p>You can also drop a message using the form 👉</p>
        </div>

        {/* Right: Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-slate-800 p-6 rounded-lg shadow-md text-left space-y-4"
        >
          <div>
            <label className="block text-sm mb-1" htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-2 rounded bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm mb-1" htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-2 rounded bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm mb-1" htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows="4"
              className="w-full p-2 rounded bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-cyan-500 text-white px-6 py-2 rounded hover:bg-cyan-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
