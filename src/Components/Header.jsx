import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Optional: Detect which section is in view to highlight active nav item
      const sections = ["home", "about", "services", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
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

  // Navigation items
  const navItems = [
    { path: "/", name: "Home", id: "home" },
    { path: "/about", name: "About", id: "about" },
    { path: "/services", name: "Services", id: "services" },
    { path: "/projects", name: "Projects", id: "projects" },
  ];

  return (
    <header
      className={`w-full fixed top-0 right-0 z-50 px-4 sm:px-6 lg:px-10 py-4 flex justify-between items-center transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/90 backdrop-blur-md shadow-lg shadow-blue-900/10"
          : "bg-transparent"
      }`}
    >
      {/* Logo / Name */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          to="/"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            if (isMenuOpen) setIsMenuOpen(false);
            setActiveSection("home");
          }}
          className="relative group flex items-center"
        >
          <div className="absolute -left-3 -top-3 w-12 h-12 rounded-full bg-blue-500/20 group-hover:bg-blue-500/30 transition-all duration-300"></div>
          <span className="text-xl sm:text-2xl font-bold relative">
            <span className="text-white">Arun Ramesh Chavan</span>
            <span className="text-blue-500">.</span>
          </span>
        </Link>
      </motion.div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-1 lg:gap-2">
        <ul className="flex gap-1 lg:gap-3 items-center">
          {navItems.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                to={item.path}
                className={`relative px-3 py-2 text-sm rounded-full transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
                onClick={() => setActiveSection(item.id)}
              >
                {activeSection === item.id && (
                  <motion.span
                    layoutId="activeNavItem"
                    className="absolute inset-0 bg-gray-800/80 rounded-full -z-10"
                  ></motion.span>
                )}
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="ml-4"
        >
          <Link
            to="/contact"
            className="relative inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full px-5 py-2 overflow-hidden transition-all duration-300 group"
            onClick={() => setActiveSection("contact")}
          >
            <span className="relative z-10">Contact</span>
            <span className="relative z-10 hidden sm:inline">me</span>
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
          </Link>
        </motion.div>
      </nav>

      {/* Mobile Menu Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="md:hidden relative w-10 h-10 flex items-center justify-center text-gray-300 focus:outline-none z-50"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <div className="relative">
          <span
            className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out mt-1.5 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out mt-1.5 ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </div>
      </motion.button>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-3/4 sm:w-2/3 bg-gray-900/95 backdrop-blur-lg shadow-lg md:hidden z-40 flex flex-col"
          >
            <div className="pt-20 px-6 flex flex-col h-full">
              <ul className="flex flex-col gap-3">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className={`block py-3 px-2 ${
                        activeSection === item.id
                          ? "text-blue-500 font-medium border-l-2 border-blue-500 pl-4"
                          : "text-gray-300 border-l-2 border-transparent hover:border-gray-600 hover:pl-4"
                      } transition-all duration-300`}
                      onClick={() => {
                        setIsMenuOpen(false);
                        setActiveSection(item.id);
                      }}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="mt-auto mb-12"
              >
                <Link
                  to="/contact"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 text-center font-medium transition-colors duration-300"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setActiveSection("contact");
                  }}
                >
                  Contact me
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="text-center text-gray-500 text-sm mb-6"
              >
                &copy; {new Date().getFullYear()} Arun Ramesh Chavan
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay for mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-30"
            onClick={() => setIsMenuOpen(false)}
          ></motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
