import React from "react";
import Myphoto from "/assets/Programming.png";
import Myphoto2 from "/assets/Ai.png";
import Myphoto3 from "/assets/Data.png";
import { FaEnvelope, FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "./variant";
import Icons from "./Icons";
import Services from "./Services";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="w-full min-h-[75vh]  bg-black text-white flex flex-col items-center justify-center">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center pl-20 ">
          {/* LEFT SIDE */}
          <div className="">
            <h1 className="text-4xl sm:text-5xl font-bold leading-snug mb-5 ">
              Hello 👋
            </h1>
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold mb-5">
                I'm <span className="text-blue-400 ">Arun Ramesh Chavan</span>
              </h2>
            </div>
            <p className="text-blue-200 text-xl mb-3">
              Frontend Developer & AI Enthusiast
            </p>
            <p className="text-gray-400 max-w-xl mb-5">
              Developer by passion, problem-solver by mindset. On a mission to
              build impactful tech with clean design and smart logic.
            </p>

            <div className="flex flex-row gap-5 ">
              <Link to="/Contact">
                <button className="flex items-center gap-2 bg-gray-700 hover:bg-blue-500 text-white px-5 py-2 rounded-full transition mt-10 cursor-pointer">
                  <FaBriefcase /> Hire Me
                </button>
              </Link>
              <Link to="/Contact">
                <button className="flex items-center gap-2 bg-gray-700 hover:bg-blue-500 text-white px-5 py-2 rounded-full transition mt-10 cursor-pointer">
                  <FaEnvelope /> Email Me
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE - Image */}
          <div className="w-full h-full flex items-center justify-center mr-20">
            <img
              src={"/assets/Programming.png"}
              alt="Profile"
              className="w-140 h-130 object-contain rounded-3xl shadow-2xl p-2 "
            />
          </div>
          <Icons />
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
