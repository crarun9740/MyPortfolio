import React from "react";
import { FaEnvelope, FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "./variant";
import Icons from "./Icons";
import Services from "./Services";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { Link } from "react-router-dom";

// Floating Elements Component
const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Blue circle */}
      <motion.div
        className="absolute h-32 w-32 rounded-full bg-blue-500/10 backdrop-blur-md"
        style={{ top: "10%", right: "15%" }}
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Purple square */}
      <motion.div
        className="absolute h-24 w-24 rounded-lg bg-purple-500/10 backdrop-blur-md"
        style={{ bottom: "25%", left: "10%" }}
        animate={{
          y: [0, 15, 0],
          x: [0, -10, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* Small cyan circle */}
      <motion.div
        className="absolute h-16 w-16 rounded-full bg-cyan-500/10 backdrop-blur-md"
        style={{ top: "30%", left: "25%" }}
        animate={{
          y: [0, 10, 0],
          x: [0, 5, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Indigo rectangle */}
      <motion.div
        className="absolute h-20 w-32 rounded-xl bg-indigo-500/10 backdrop-blur-md"
        style={{ bottom: "15%", right: "20%" }}
        animate={{
          y: [0, 12, 0],
          x: [0, -8, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />
    </div>
  );
};

// Wave SVG Component
const WaveAnimation = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden z-0">
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full"
        >
          <path
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,101.3C960,117,1056,139,1152,133.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="#3b82f6"
            fillOpacity="0.1"
          />
          <path
            d="M0,96L48,101.3C96,107,192,117,288,133.3C384,149,480,171,576,154.7C672,139,768,85,864,69.3C960,53,1056,75,1152,85.3C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="#60a5fa"
            fillOpacity="0.08"
          />
        </svg>
      </motion.div>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <div className="w-full min-h-[75vh] bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">
        {/* Floating elements in background */}
        <FloatingElements />

        {/* Wave animation at bottom */}
        <WaveAnimation />

        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center pl-10 relative z-10">
          {/* LEFT SIDE */}
          <div className="">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-bold leading-snug mb-5"
            >
              Hello 👋
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl sm:text-4xl font-semibold mb-5">
                I'm <span className="text-blue-400">Arun Ramesh Chavan</span>
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-blue-200 text-xl mb-3"
            >
              Frontend Developer & AI Enthusiast
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-gray-400 max-w-xl mb-5"
            >
              Developer by passion, problem-solver by mindset. On a mission to
              build impactful tech with clean design and smart logic.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-row gap-5"
            >
              <Link to="/Contact">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#3b82f6" }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-gray-700 hover:bg-blue-500 text-white px-5 py-2 rounded-full transition mt-10 cursor-pointer"
                >
                  <FaBriefcase /> Hire Me
                </motion.button>
              </Link>
              <Link to="/Contact">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#3b82f6" }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-gray-700 hover:bg-blue-500 text-white px-5 py-2 rounded-full transition mt-10 cursor-pointer"
                >
                  <FaEnvelope /> Email Me
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* RIGHT SIDE - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full flex items-center justify-center mr-20"
          >
            <img
              src={"/assets/Programming.png"}
              alt="Profile"
              className="w-140 h-130 object-contain rounded-3xl shadow-2xl p-2"
            />

            {/* Floating glow effect around image */}
            <motion.div
              className="absolute rounded-full bg-blue-500/20 filter blur-3xl"
              style={{ width: "80%", height: "80%", zIndex: -1 }}
              animate={{
                opacity: [0.4, 0.6, 0.4],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
          <div className="mb-20">
            <Icons />
          </div>
        </div>
      </div>

      <div className="mt-[4rem]">
        <About />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <Projects />
      </div>
      <Contact />
    </>
  );
};

export default Home;
