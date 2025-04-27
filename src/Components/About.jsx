import React from "react";
import Myphoto from "/assets/img-2.jpg";
import { Link } from "react-router-dom";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaGithub,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiFlask } from "react-icons/si";
import Icons from "./Icons";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div className="text-white py-16 min-h-screen bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-blue-500">Me</span>
          </h1>
          <div className="h-1 w-24 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* About Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center items-center"
          >
            <div className="relative group">
              <img
                src={Myphoto}
                alt="Arun Ramesh Chavan"
                className="w-full max-w-md h-auto object-cover rounded-lg shadow-xl border border-gray-800 group-hover:border-blue-500 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Hello, I'm{" "}
              <span className="text-blue-500">Arun Ramesh Chavan</span>
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-300">
              A passionate Full-Stack Developer currently pursuing my Bachelor's
              degree in Information Science and Engineering. I enjoy building
              intuitive, fast, and responsive web applications that improve
              lives and solve real-world problems.
            </p>
            <p className="text-lg leading-relaxed mb-8 text-gray-300">
              Apart from coding, I'm actively involved in social impact
              initiatives through SS Care Trust and I've been part of hackathons
              and coding competitions. My tech journey is fueled by a love for
              learning and a vision to create a tech startup that impacts
              millions.
            </p>
            <div className="flex space-x-4">
              <Link to="/Contact">
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300">
                  Contact Me
                </button>
              </Link>
              <Link to="/projects">
                <button className="px-6 py-3 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-medium rounded-lg transition-colors duration-300">
                  My Projects
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Education Timeline */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-500 mb-4">Education</h2>
            <div className="h-1 w-24 bg-blue-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700"></div>

            {/* Timeline Items */}
            <div className="relative z-10">
              {/* Item 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center mb-16"
              >
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800 hover:border-blue-500 transition-all duration-300 inline-block">
                    <h3 className="text-xl font-bold mb-2">
                      B.E in Information Science and Engineering
                    </h3>
                    <p className="text-blue-400 font-medium mb-2">2022-2026</p>
                    <p className="text-gray-400">
                      Bapuji Institute of Engineering and Technology, Davanagere
                    </p>
                  </div>
                </div>
                <div className="md:w-8 relative">
                  <div className="h-8 w-8 bg-blue-500 rounded-full border-4 border-gray-900 absolute top-0 left-1/2 transform -translate-x-1/2"></div>
                </div>
                <div className="md:w-1/2 md:pl-12"></div>
              </motion.div>

              {/* Item 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center mb-16"
              >
                <div className="md:w-1/2 md:pr-12"></div>
                <div className="md:w-8 relative">
                  <div className="h-8 w-8 bg-blue-500 rounded-full border-4 border-gray-900 absolute top-0 left-1/2 transform -translate-x-1/2"></div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left mb-6 md:mb-0">
                  <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800 hover:border-blue-500 transition-all duration-300 inline-block">
                    <h3 className="text-xl font-bold mb-2">
                      Pre-University Course
                    </h3>
                    <p className="text-blue-400 font-medium mb-2">2019-2020</p>
                    <p className="text-gray-400">
                      Tungal Independent PU Science College, Bijapur
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Item 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center"
              >
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800 hover:border-blue-500 transition-all duration-300 inline-block">
                    <h3 className="text-xl font-bold mb-2">
                      SSLC (Secondary School Leaving Certificate)
                    </h3>
                    <p className="text-blue-400 font-medium mb-2">2008-2018</p>
                    <p className="text-gray-400">
                      Tungal Independent PU Science College, Bijapur
                    </p>
                  </div>
                </div>
                <div className="md:w-8 relative">
                  <div className="h-8 w-8 bg-blue-500 rounded-full border-4 border-gray-900 absolute top-0 left-1/2 transform -translate-x-1/2"></div>
                </div>
                <div className="md:w-1/2 md:pl-12"></div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-500 mb-4">Skills</h2>
            <div className="h-1 w-24 bg-blue-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[
              {
                icon: (
                  <FaHtml5 className="text-5xl text-orange-500 mx-auto mb-3" />
                ),
                label: "HTML",
              },
              {
                icon: (
                  <FaCss3Alt className="text-5xl text-blue-500 mx-auto mb-3" />
                ),
                label: "CSS",
              },
              {
                icon: (
                  <FaJs className="text-5xl text-yellow-400 mx-auto mb-3" />
                ),
                label: "JavaScript",
              },
              {
                icon: (
                  <FaReact className="text-5xl text-blue-400 mx-auto mb-3" />
                ),
                label: "React",
              },
              {
                icon: (
                  <SiTailwindcss className="text-5xl text-cyan-400 mx-auto mb-3" />
                ),
                label: "Tailwind CSS",
              },
              {
                icon: (
                  <FaNodeJs className="text-5xl text-green-500 mx-auto mb-3" />
                ),
                label: "Node.js",
              },
              {
                icon: (
                  <SiMongodb className="text-5xl text-green-400 mx-auto mb-3" />
                ),
                label: "MongoDB",
              },
              {
                icon: <FaJava className="text-5xl text-red-500 mx-auto mb-3" />,
                label: "Java",
              },
              {
                icon: (
                  <FaPython className="text-5xl text-blue-500 mx-auto mb-3" />
                ),
                label: "Python",
              },
              {
                icon: (
                  <SiFlask className="text-5xl text-gray-300 mx-auto mb-3" />
                ),
                label: "Flask",
              },
              {
                icon: <FaGithub className="text-5xl text-white mx-auto mb-3" />,
                label: "Github",
              },
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -5 }}
                className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800 hover:border-blue-500 transition-all duration-300 text-center"
              >
                {skill.icon}
                <p className="font-medium">{skill.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Icons Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Icons />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
