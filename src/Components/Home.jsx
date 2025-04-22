import React from "react";
import Myphoto from "../assets/Img-1.jpg";
import Social from "../../../Common/Social";
import { FaEnvelope, FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "./variant";

const Home = () => {
  return (
    <div className="w-full py-20 bg-black text-white">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center pl-20">
        {/* LEFT SIDE */}
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl font-bold leading-snug ">
            Hello 👋
          </h1>
          <h2 className="text-3xl sm:text-4xl font-semibold">
            I'm <span className="text-blue-400 ">Arun Ramesh Chavan</span>
          </h2>
          <p className="text-blue-200 text-xl">
            Frontend Developer & AI Enthusiast
          </p>
          <p className="text-gray-400 max-w-xl">
            Developer by passion, problem-solver by mindset. On a mission to
            build impactful tech with clean design and smart logic.
          </p>

          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <button className="flex items-center gap-2 bg-gray-700 hover:bg-blue-500 text-white px-5 py-2 rounded-full transition">
              <FaBriefcase /> Hire Me
            </button>
            <button className="flex items-center gap-2 bg-gray-700 hover:bg-blue-500 text-white px-5 py-2 rounded-full transition">
              <FaEnvelope /> Email Me
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE - Image */}
        <div className="flex justify-center">
          <img
            src={Myphoto}
            alt="Profile"
            className="w-72 h-72 object-cover rounded- shadow-xl"
          />
        </div>
      </div>

      {/* Social Links */}
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="mt-30 ml-21"
      >
        <Social />
      </motion.div>
    </div>
  );
};

export default Home;
