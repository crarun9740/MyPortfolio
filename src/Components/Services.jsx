import React from "react";
import { FaLaptopCode, FaChartBar, FaCode } from "react-icons/fa";
import Social from "../../../Common/Social";

const Services = () => {
  return (
    <>
      <div className="w-full py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col justify-start items-center gap-8">
            <h2 className="font-semibold text-3xl text-blue-200 hover:text-blue-500 transition-colors duration-300 cursor-pointer">
              <span className="text-blue-500"> My </span>Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
              {/* Fullstack Web-Development */}
              <div className="border-gray-700 border-2 rounded-2xl flex flex-col justify-center items-center p-6 hover:shadow-xl hover:shadow-blue-900/20 hover:border-blue-500/50 transition duration-300 cursor-pointer bg-black/40">
                <span className="text-blue-500 text-4xl mb-4">
                  <FaLaptopCode />
                </span>
                <h3 className="font-semibold text-xl text-blue-200 mb-3">
                  Fullstack Web-Development
                </h3>
                <p className="text-gray-300 text-center">
                  I design clean and dynamic user interfaces with HTML, CSS,
                  JavaScript, and React. I also build secure and scalable
                  backends with Node.js and MongoDB.
                </p>
              </div>

              {/* Data Visualization & Dashboards */}
              <div className="border-gray-700 border-2 rounded-2xl flex flex-col justify-center items-center p-6 hover:shadow-xl hover:shadow-blue-900/20 hover:border-blue-500/50 transition duration-300 cursor-pointer bg-black/40">
                <span className="text-blue-500 text-4xl mb-4">
                  <FaChartBar />
                </span>
                <h3 className="font-semibold text-xl text-blue-200 mb-3">
                  Data Visualization & Dashboards
                </h3>
                <p className="text-gray-300 text-center">
                  I create interactive data visualizations and dashboards using
                  Chart.js, D3.js, and TailwindCSS. I help turn raw data into
                  meaningful insights.
                </p>
              </div>

              {/* Frontend Development */}
              <div className="border-gray-700 border-2 rounded-2xl flex flex-col justify-center items-center p-6 hover:shadow-xl hover:shadow-blue-900/20 hover:border-blue-500/50 transition duration-300 cursor-pointer bg-black/40">
                <span className="text-blue-500 text-4xl mb-4">
                  <FaCode />
                </span>
                <h3 className="font-semibold text-xl text-blue-200 mb-3">
                  Frontend Development
                </h3>
                <p className="text-gray-300 text-center">
                  I build responsive and accessible user interfaces using React,
                  Tailwind CSS, and Next.js to deliver modern user experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 ml-21">
        <Social />
      </div>
    </>
  );
};

export default Services;
