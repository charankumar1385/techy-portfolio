import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt, FaTimes } from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Projects from "./components/Projects"; 

export default function Portfolio() {
  const [showModal, setShowModal] = useState(false);
  const [activeDashboard, setActiveDashboard] = useState(null);
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesOptions = {
    background: { color: { value: "#000000" } },
    fpsLimit: 60,
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" }, resize: true },
      modes: { repulse: { distance: 100, duration: 0.4 } },
    },
    particles: {
      color: { value: "#a855f7" },
      links: { color: "#a855f7", distance: 120, enable: true, opacity: 0.3, width: 1 },
      move: { enable: true, speed: 1, outModes: "out" },
      number: { density: { enable: true, area: 800 }, value: 60 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  const closeModal = () => {
    setShowModal(false);
    setActiveDashboard(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100 font-sans scroll-smooth relative overflow-hidden">
      <Particles id="tsparticles" init={particlesInit} options={particlesOptions} className="absolute inset-0 -z-10" />

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-800 bg-gray-950 bg-opacity-60 backdrop-blur-md sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-purple-400">Charan Kumar</h1>
        <div className="flex space-x-6">
          <a href="#about" className="hover:text-purple-400 transition">About</a>
          <a href="#skills" className="hover:text-purple-400 transition">Skills</a>
          <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
          <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
        </div>
      </nav>

{/* Hero Section */}
<section className="py-20">
  <div className="container mx-auto max-w-6xl px-6 flex flex-col md:flex-row-reverse items-center md:items-start gap-10">
<motion.div
  className="relative w-52 h-52 shrink-0 rounded-full border-4 border-purple-500 shadow-xl mb-8 md:mb-0 md:mr-12 overflow-hidden hover:scale-105 transition-transform duration-500 hover:shadow-purple-500/50"
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ duration: 1 }}
>
  <img
    src="/profile.jpg"
    alt="Profile"
    className="w-full h-full object-cover rounded-full"
  />
</motion.div>


    <div className="text-center md:text-left">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Power BI | Microsoft Fabric | Power Automate | SQL | Data Warehouse
      </motion.h2>

      <p className="text-gray-400 max-w-xl md:max-w-2xl mb-6 mx-auto md:mx-0">
        I’m a passionate Data Analyst specialized in Power BI, Microsoft Fabric, and Power Automate.
        I build interactive dashboards, automate data workflows, and deliver actionable insights.
      </p>

      <div className="flex flex-wrap gap-3 justify-center md:justify-start">
        <button
          className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-2 rounded-lg transition"
          onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
        >
          Projects
        </button>

        <a
          href="/resume.pdf"
          download
          className="border border-purple-500/70 text-purple-300 hover:bg-purple-600 hover:text-white font-medium px-6 py-2 rounded-lg transition"
        >
          Download Resume
        </a>

        <button
          className="border border-purple-500/70 text-purple-300 hover:bg-purple-600 hover:text-white font-medium px-6 py-2 rounded-lg transition"
          onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
        >
          Contact Me
        </button>
      </div>

      <div className="flex space-x-6 mt-6 justify-center md:justify-start">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin size={28} /></a>
        <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub size={28} /></a>
        <a href="mailto:your@email.com"><FaEnvelope size={28} /></a>
        <a href="/resume.pdf" target="_blank" rel="noreferrer"><FaFileAlt size={28} /></a>
      </div>
    </div>
  </div>
</section>


{/* About Section */}
<section id="about" className="py-20 bg-gray-900">
  <div className="container mx-auto max-w-4xl px-6 text-center md:text-left">
    <motion.h3
      className="text-3xl font-semibold text-purple-400 mb-8 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      About Me
    </motion.h3>

    <motion.p
      className="text-gray-300 leading-relaxed text-lg md:text-xl tracking-wide"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      Transforming complex data into meaningful business intelligence — backed by 14+ years of experience delivering end-to-end analytics solutions.  
      I specialize in connecting business goals with powerful visual storytelling and automation across modern Microsoft technologies like Power BI, Fabric, and Power Automate.
    </motion.p>
  </div>
</section>


{/* Skills Section */}
<section id="skills" className="py-20 bg-black">
  <div className="container mx-auto max-w-6xl px-6">
    <motion.h3
      className="text-3xl font-semibold text-purple-400 mb-12 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Skills & Tools
    </motion.h3>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
      {[
        { name: "Power BI", icon: "/icons/PowerBI_scalable.svg" },
        { name: "Power Automate", icon: "/icons/PowerAutomate_scalable.svg" },
        { name: "Microsoft Fabric", icon: "/icons/fabric_32_color.svg" },
        { name: "SQL", icon: "/icons/sql-database-generic-svgrepo-com.svg" },
        { name: "Data Warehouse", icon: "/icons/data_warehouse_32_color.svg" },
      ].map((skill, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.1, y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex flex-col items-center bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 w-40 shadow-lg hover:shadow-purple-600/30 transition-all duration-300"
        >
          <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-4" />
          <p className="text-gray-200 font-medium text-sm text-center tracking-wide">{skill.name}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Projects Section */}
<section id="projects" className="py-20 bg-gray-900">
  <div className="container mx-auto max-w-6xl px-6">
    <motion.h3
      className="text-3xl font-semibold text-purple-400 mb-12 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      My Projects
    </motion.h3>

    {/* Firebase upload component */}
    <Projects />
  </div>
</section>


      {/* Modal Placeholder (for Firebase dashboards) */}
      <AnimatePresence>
        {showModal && activeDashboard && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-gray-900 rounded-xl p-6 w-11/12 md:w-3/4 lg:w-2/3 h-[80vh]"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ duration: 0.4 }}
            >
              <button className="absolute top-4 right-4 text-gray-400 hover:text-white" onClick={closeModal}>
                <FaTimes size={24} />
              </button>
              <h2 className="text-2xl text-purple-400 mb-4 text-center font-semibold">
                {activeDashboard.title}
              </h2>
              <iframe src={activeDashboard.src} title={activeDashboard.title} width="100%" height="90%" frameBorder="0" allowFullScreen></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

{/* Contact Section */}
<section id="contact" className="py-20 bg-gray-950">
  <div className="container mx-auto max-w-4xl px-6 text-center">
    <motion.h3
      className="text-3xl font-semibold text-purple-400 mb-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Contact Me
    </motion.h3>

    <motion.p
      className="text-gray-400 text-lg mb-10 leading-relaxed"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      Let’s collaborate on building powerful data-driven solutions!  
      Whether you’re looking for freelance Power BI work, analytics consulting, or long-term projects — I’d love to connect.
    </motion.p>

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="flex flex-col sm:flex-row items-center justify-center gap-4"
    >
      <a
        href="mailto:your@email.com"
        className="bg-purple-600 hover:bg-purple-700 text-white text-lg font-medium px-6 py-3 rounded-lg transition w-48"
      >
        Send Email
      </a>

      <a
        href="https://www.linkedin.com/in/charankumar1385/"
        target="_blank"
        rel="noreferrer"
        className="border border-purple-500/70 text-purple-400 hover:bg-purple-600 hover:text-white text-lg font-medium px-6 py-3 rounded-lg transition w-48"
      >
        LinkedIn
      </a>
    </motion.div>

    <div className="mt-10 text-gray-500 text-sm">
      Or reach me directly at <span className="text-purple-400">charan1385@gmail.com</span>
    </div>
  </div>
</section>


      <footer className="text-center text-gray-500 py-6 border-t border-gray-800 text-sm">
        © 2025 Charan Kumar | Built with React & Tailwind | Inspired by BuiltatLightspeed
      </footer>
    </div>
  );
}
