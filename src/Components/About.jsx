import React from "react";
import Myphoto from "../assets/Img-2.jpg";
import Social from "../../../Common/Social";

const About = () => {
  return (
    <>
      <section className="w-full py-20 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center pr-">
          {/* Text Section */}
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl font-bold text-blue-200 hover:text-blue-500 transition duration-300 cursor-pointer">
              About Me
            </h2>
            <p className="text-lg text-gray-300">
              I'm{" "}
              <span className="font-semibold text-blue-400">
                Arun Ramesh Chavan
              </span>
              , a
              <span className="text-blue-200 font-semibold">
                {" "}
                Frontend Developer & AI Enthusiast
              </span>{" "}
              passionate about building clean, responsive web interfaces and
              exploring smart tech solutions.
            </p>
            <p className="text-lg text-gray-400">
              With a strong foundation in{" "}
              <span className="text-blue-200 font-medium">
                Java, JavaScript, and modern frameworks
              </span>
              , I thrive on solving real-world problems through elegant code and
              thoughtful design.
            </p>
            <p className="text-lg text-gray-400">
              From crafting intuitive UIs to experimenting with AI-driven
              innovations, I’m always learning and striving to turn ideas into
              impactful digital experiences.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src={Myphoto}
              alt="About"
              className="w-80 h-auto object-cover rounded-3xl shadow-lg hover:shadow-blue-700 transition duration-300"
            />
          </div>
        </div>
        <div className="pl-22">
          <Social />
        </div>
      </section>
    </>
  );
};

export default About;
