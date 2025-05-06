import React from "react";
import {
  FaLaptopCode,
  FaChartBar,
  FaCode,
  FaServer,
  FaMobileAlt,
  FaBrain,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Icons from "./Icons";

const Services = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const services = [
    {
      icon: <FaLaptopCode className="text-5xl" />,
      title: "Frontend Development",
      description:
        "I create visually appealing, user-friendly interfaces using HTML, CSS, JavaScript, React, and Tailwind CSS.",
      color: "from-blue-600 to-cyan-400",
    },
    {
      icon: <FaServer className="text-5xl" />,
      title: "Fullstack Web Development",
      description:
        "I design clean and dynamic user interfaces with React while building secure and scalable backends with Node.js and MongoDB.",
      color: "from-indigo-600 to-purple-500",
    },
    {
      icon: <FaChartBar className="text-5xl" />,
      title: "Data Visualization & Dashboards",
      description:
        "I create interactive data visualizations and dashboards using Tablue and PowerBI. I help turn raw data into meaningful insights.",
      color: "from-emerald-500 to-teal-400",
    },
    {
      icon: <FaMobileAlt className="text-5xl" />,
      title: "Responsive Web Design",
      description:
        "I develop websites that work beautifully on all devices, ensuring optimal user experience on desktops, tablets, and mobile phones.",
      color: "from-rose-500 to-pink-500",
    },
  ];

  return (
    <div className="w-full min-h-screen py-24 bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-blue-500">My</span> Services
          </h2>
          <div className="h-1 w-24 bg-blue-500 rounded-full"></div>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl text-center">
            I offer comprehensive solutions tailored to your unique needs,
            combining cutting-edge technology with creative design.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl"></div>
              <div className="relative backdrop-blur-sm bg-gray-900/40 border border-gray-800 rounded-2xl p-8 h-full flex flex-col transition-all duration-300 group-hover:translate-y-[-5px] group-hover:shadow-lg group-hover:shadow-blue-900/20 group-hover:border-blue-500/30">
                <div
                  className={`w-16 h-16 rounded-full mb-6 flex items-center justify-center bg-gradient-to-br ${service.color} p-3`}
                >
                  {service.icon}
                </div>
                <h3 className="font-bold text-xl text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 flex-grow">{service.description}</p>
                <div className="mt-6 pt-4 border-t border-gray-800/50"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <div className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 p-[1px] rounded-full overflow-hidden"></div>
        </motion.div>
      </div>

      <div className="pl-20">
        <Icons />
      </div>
    </div>
  );
};

export default Services;
