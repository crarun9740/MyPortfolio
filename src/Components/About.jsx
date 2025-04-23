import React from "react";
import Myphoto from "/assets/c_r_arun.jpg";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaGithub,
  FaFlask,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiFlask } from "react-icons/si";
import Icons from "./Icons";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div className="bg-black text-white px-6 py-12 min-h-screen">
      {/* About Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center items-center ">
          <img
            src={Myphoto}
            alt="Arun Ramesh Chavan"
            className="w-100 h-auto object-cover rounded-lg shadow-lg mb-5 border-1 hover:border-blue-500 hover:shadow-blue-500"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white mb-10">
            {" "}
            About <span className="text-blue-500">Me</span>
          </h1>
          <p className="text-lg leading-relaxed mb-4">
            I'm{" "}
            <span className="text-blue-500 font-semibold">
              Arun Ramesh Chavan
            </span>
            , a passionate Full-Stack Developer currently pursuing my Bachelor's
            degree in Information Science and Engineering. I enjoy building
            intuitive, fast, and responsive web applications that improve lives
            and solve real-world problems.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Apart from coding, I'm actively involved in social impact
            initiatives through SS Care Trust and I've been part of hackathons
            and coding competitions. My tech journey is fueled by a love for
            learning and a vision to create a tech startup that impacts
            millions.
          </p>
        </div>
      </div>

      {/* Education Timeline */}
      <div className=" mx-auto mt-20 flex flex-col  ">
        <h2 className="text-3xl font-bold text-center text-blue-500 mb-12">
          Education
        </h2>

        <motion.div className="grid grid-cols-22">
          <div className="flex flex-col justify-between items-end col-span-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-gray-500 pl-3 flex justify-center item text-sm mb-2"
            >
              <div className="w-80 h-29 border-1 ml-1 flex flex-col gap-2 bg-gray-900 text-white justify-start p-2 rounded-2xl hover:border-blue-500">
                <span>2022-2026</span>
                <span>
                  {" "}
                  Bapuji Institute of Engineering and Technology Davanagere
                </span>
                <span className="">
                  B.E in Information Science and Engineering
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-500 pl-3 flex justify-center item text-sm mb-2"
            >
              <div className="w-80 h-29 border-1 ml-1 flex flex-col gap-2 bg-gray-900 text-white justify-start p-2 rounded-2xl hover:border-blue-500">
                <span>2019-2020</span>
                <span>Tungal Independent PU Science College Bijapur </span>
                <span className="">Pre-University Course</span>
              </div>
            </motion.div>
          </div>

          <div className="flex items-center justify-center flex-col col-span-2 ">
            {[...Array(3)].map((_, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="w-[6px] flex flex-col items-center justify-center"
              >
                <div className="bg-cyan-400 rounded-full h-6 w-6 border-4 border-black"></div>
                <div className="h-[100px] bg-gray-600 w-[3px]"></div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col items-start justify-center col-span-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-gray-500 pl-3 flex justify-center item text-sm mb-2"
            >
              <div className="w-80 h-29 border-1 ml-1 flex flex-col gap-2 bg-gray-900 text-white justify-start p-2 rounded-2xl hover:border-blue-500">
                <span>2019-2020</span>
                <span>Tungal Independent PU Science College Bijapur </span>
                <span className="">Pre-University Course</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Skills Section */}
      <div className="max-w-6xl mx-auto mt-24">
        <h2 className="text-3xl font-bold text-blue-500 mb-8 text-center">
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">
          {[
            {
              icon: (
                <FaHtml5 className="text-5xl text-orange-500 mx-auto mb-2" />
              ),
              label: "HTML",
            },
            {
              icon: (
                <FaCss3Alt className="text-5xl text-blue-500 mx-auto mb-2" />
              ),
              label: "CSS",
            },
            {
              icon: <FaJs className="text-5xl text-yellow-400 mx-auto mb-2" />,
              label: "JavaScript",
            },
            {
              icon: <FaReact className="text-5xl text-blue-500 mx-auto mb-2" />,
              label: "React",
            },
            {
              icon: (
                <SiTailwindcss className="text-5xl text-cyan-300 mx-auto mb-2" />
              ),
              label: "Tailwind CSS",
            },
            {
              icon: (
                <FaNodeJs className="text-5xl text-green-500 mx-auto mb-2" />
              ),
              label: "Node.js",
            },
            {
              icon: (
                <SiMongodb className="text-5xl text-green-400 mx-auto mb-2" />
              ),
              label: "MongoDB",
            },
            {
              icon: <FaJava className="text-5xl text-red-500 mx-auto mb-2" />,
              label: "Java",
            },
            {
              icon: (
                <FaPython className="text-5xl text-blue-500 mx-auto mb-2" />
              ),
              label: "Python",
            },
            {
              icon: (
                <SiFlask className="text-5xl text-blue-500  mx-auto mb-2" />
              ),
              label: "Flask",
            },
            {
              icon: <FaGithub className="text-5xl text-white mx-auto mb-2" />,
              label: "Github",
            },
          ].map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition border-gray-500 border-1 hover:border-blue-500"
            >
              {skill.icon}
              <p>{skill.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="ml-10">
        <Icons />
      </div>
    </div>
  );
};

export default AboutMe;
