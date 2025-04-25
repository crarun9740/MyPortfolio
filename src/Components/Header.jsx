import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full fixed top-0 right-0 z-50 px-10 py-5 flex justify-between items-center rounded-1xl bg-gray-950 ">
      <Link
        to="/"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="text-gray-500 text-xl hover:text-blue-500  cursor-pointer ml-10 "
      >
        Arun Ramesh Chavan.
      </Link>

      <nav className="flex gap-7 text-gray-400 text-lg pr-10">
        <Link
          to="/"
          className="hover:text-blue-500 hover:scale-105 hover:underline transform transition-all duration-200 cursor-pointer "
        >
          Home
        </Link>
        <Link
          to="/about"
          className="hover:text-blue-500 hover:scale-105 hover:underline transform transition-all duration-200 cursor-pointer  "
        >
          About
        </Link>
        <Link
          to="/services"
          className="hover:text-blue-500 hover:scale-105 hover:underline transform transition-all duration-200 cursor-pointer"
        >
          Services
        </Link>
        <Link
          to="/projects"
          className="hover:text-blue-500 hover:scale-105 hover:underline transform transition-all duration-200 cursor-pointer  "
        >
          Projects
        </Link>

        <div className="">
          <Link
            to="/contact"
            className="bg-blue-500 text-white rounded-3xl p-3 transform transition-all duration-200 cursor-pointer hover:underline "
          >
            Contact me
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
