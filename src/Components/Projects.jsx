import React from "react";
import Myphoto1 from "/assets/img-3.jpg";
import Myphoto2 from "/assets/zomato.png";
import Myphoto3 from "/assets/paytm.png";

const Projects = () => {
  return (
    <>
      <div className="">
        <div className="flex flex-col justify-center items-center mt-30 mb-10">
          <span className="text-blue-500 font-semibold text-3xl">
            <span className="text-white">My </span>Projects
          </span>
          <span className="text-xl mt-2 text-blue-200">
            Check out some of my recent work and personal projects
          </span>
        </div>

        <div className="mt-10 flex flex-row gap-5 justify-center items-center">
          <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/4 h-auto border border-gray-300 rounded-2xl shadow-lg overflow-hidden bg-gray-900 hover:shadow-blue-500">
            <div className="w-auto object-centre">
              <img
                src={Myphoto1}
                alt="project-img"
                className="w-full  h-[250px]  object-cover rounded-xl"
              />{" "}
            </div>

            <div className="p-4">
              <span className="font-semibold text-xl">Resume Builder</span>
              <p className="mt-3 text-sm text-blue-200">
                A full-stack web-application for Resume Builder integrated with
                AI.
              </p>
            </div>
            <div className="flex flex-wrap gap-5 p-4 justify-center items-center h-[120px]">
              <span className="w-15 h-8 text-center p-2 border rounded-xl text-sm">
                Html
              </span>
              <span className="w-15 h-8 text-center p-2 border rounded-xl text-sm">
                Css
              </span>
              <span className="w-15 h-8 text-center p-2 border rounded-xl text-sm">
                Js
              </span>
              <span className="w-15 h-8 text-center p-2 border rounded-xl text-sm">
                Python
              </span>
              <span className="w-15 h-8 text-center p-2 border rounded-xl text-sm">
                Flask
              </span>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 p-4">
              <button className="p-2 border-2 rounded-2xl text-sm hover:bg-blue-500 hover:text-white transition-all">
                View Project
              </button>
              <button className="p-2 border-2 rounded-2xl text-sm hover:bg-blue-500 hover:text-white transition-all">
                Source Code
              </button>
            </div>
          </div>
          <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/4 h-auto border border-gray-300 rounded-2xl shadow-lg overflow-hidden bg-gray-900  hover:shadow-blue-500">
            <div className="w-auto object-centre">
              <img
                src={Myphoto3}
                alt="project-img"
                className="w-full h-[250px]  object-cover rounded-xl p-1"
              />{" "}
            </div>

            <div className="p-4">
              <span className="font-semibold text-xl">Fintech UI/UX </span>
              <p className="mt-3 text-sm text-blue-200">
                A responsive front-end web-application for Resume Builder
                integrated with AI.
              </p>
            </div>
            <div className="flex flex-wrap gap-5 p-4 justify-center items-center h-[120px]">
              <span className="w-15 h-8 text-center p-2 border rounded-xl text-sm">
                Html
              </span>
              <span className="w-15 h-8 text-center p-2 border rounded-xl text-sm">
                Css
              </span>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 p-4">
              <button className="p-2 border-2 rounded-2xl text-sm hover:bg-blue-500 hover:text-white transition-all">
                View Project
              </button>
              <button className="p-2 border-2 rounded-2xl text-sm hover:bg-blue-500 hover:text-white transition-all">
                Source Code
              </button>
            </div>
          </div>

          <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/4 h-auto border border-gray-300 rounded-2xl shadow-lg overflow-hidden bg-gray-900  hover:shadow-blue-500">
            <div className="w-auto object-centre">
              <img
                src={Myphoto2}
                alt="project-img"
                className="w-full h-[250px] object-cover rounded-xl"
              />{" "}
            </div>

            <div className="p-4">
              <span className="font-semibold text-xl">
                Food Delievery UI/UX
              </span>
              <p className="mt-3 text-sm text-blue-200">
                Front-end web application that replicates the UI/UX of Food
                Delivery web-application.
              </p>
            </div>
            <div className="flex flex-wrap gap-5 p-4 justify-center items-center h-[120px]">
              <span className="w-15 h-8 text-center p-2 border rounded-xl text-sm">
                Html
              </span>
              <span className="w-15 h-8 text-center p-2 border rounded-xl text-sm">
                Css
              </span>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 p-4">
              <button className="p-2 border-2 rounded-2xl text-sm hover:bg-blue-500 hover:text-white transition-all">
                View Project
              </button>
              <button className="p-2 border-2 rounded-2xl text-sm hover:bg-blue-500 hover:text-white transition-all">
                Source Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
