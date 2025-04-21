import React from "react";
import Myphoto from "../assets/Img-1.jpg";
import Social from "../../../Common/Social";
import { FaEnvelope, FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="w-full py-20 bg-black text-white">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center pl-20">
        {/* LEFT SIDE */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold leading-snug">
            Hello 👋
          </h1>
          <h2 className="text-3xl sm:text-4xl font-semibold">
            I'm <span className="text-blue-400">Arun Ramesh Chavan</span>
          </h2>
          <p className="text-blue-200 text-xl">
            Frontend Developer & AI Enthusiast
          </p>
          <p className="text-gray-400 max-w-xl">
            Developer by passion, problem-solver by mindset. On a mission to
            build impactful tech with clean design and smart logic.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="flex items-center gap-2 bg-gray-700 hover:bg-blue-500 text-white px-5 py-2 rounded-full transition">
              <FaBriefcase /> Hire Me
            </button>
            <button className="flex items-center gap-2 bg-gray-700 hover:bg-blue-500 text-white px-5 py-2 rounded-full transition">
              <FaEnvelope /> Email Me
            </button>
          </div>
        </div>

        {/* RIGHT SIDE - Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={Myphoto}
            alt="Profile"
            className="w-72 h-72 object-cover rounded-full shadow-2xl border-4 border-blue-400 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-10">
        <Social />
      </div>
    </div>
  );
};

export default Home;
