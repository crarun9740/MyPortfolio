import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Assuming you're using framer-motion based on your Home component

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`w-full fixed top-0 right-0 z-50 px-4 sm:px-6 lg:px-10 py-3 md:py-5 flex justify-between items-center ${
        scrolled ? "bg-gray-950/95 backdrop-blur-sm shadow-lg" : "bg-gray-950"
      } transition-all duration-300`}
    >
      {/* Logo / Name */}
      <Link
        to="/"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          if (isMenuOpen) setIsMenuOpen(false);
        }}
        className="text-gray-500 text-lg sm:text-xl hover:text-blue-500 cursor-pointer transition duration-200 ml-2 sm:ml-4 md:ml-10"
      >
        Arun Ramesh Chavan.
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-5 lg:gap-7 text-gray-400 text-base lg:text-lg pr-2 lg:pr-10">
        <Link
          to="/"
          className="hover:text-blue-500 hover:scale-105 hover:underline transform transition-all duration-200 cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="hover:text-blue-500 hover:scale-105 hover:underline transform transition-all duration-200 cursor-pointer"
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
          className="hover:text-blue-500 hover:scale-105 hover:underline transform transition-all duration-200 cursor-pointer"
        >
          Projects
        </Link>

        <div>
          <Link
            to="/contact"
            className="bg-blue-500 text-white rounded-3xl px-3 py-2 transform transition-all duration-200 cursor-pointer hover:bg-blue-600 hover:underline"
          >
            Contact me
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-400 hover:text-blue-500 focus:outline-none transition duration-200"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 right-0 bg-gray-900 shadow-lg py-4 px-6 md:hidden"
        >
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              className="text-gray-400 hover:text-blue-500 py-2 border-b border-gray-800"
              onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-400 hover:text-blue-500 py-2 border-b border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-gray-400 hover:text-blue-500 py-2 border-b border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/projects"
              className="text-gray-400 hover:text-blue-500 py-2 border-b border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="bg-blue-500 text-white rounded-3xl py-2 px-4 text-center mt-2 hover:bg-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact me
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
