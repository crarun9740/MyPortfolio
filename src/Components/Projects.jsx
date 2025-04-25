import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";

export default function Projects() {
  // Filter state
  const [filter, setFilter] = useState(null); // No need for type annotation here in JavaScript

  // Project data
  const projects = [
    {
      id: 1,
      title: "Resume Builder",
      description:
        "A full-stack web-application for Resume Builder integrated with AI.",
      image: "/assets/img-3.jpg",
      technologies: ["HTML", "CSS", "JavaScript", "Python", "Flask"],
      projectUrl: "https://usual-coral-arun-org-7d067dbb.koyeb.app/login",
      sourceCodeUrl: "https://github.com/crarun9740/EliteResumeLabs",
      featured: true,
    },
    {
      id: 2,
      title: "BMI Calculator",
      description:
        "A responsive front-end web-application for Resume Builder integrated with AI.",
      image: "/assets/bmi.jpg",
      technologies: ["HTML", "CSS"],
      projectUrl: "https://bmi-calculator-88.netlify.app/",
      sourceCodeUrl: "https://github.com/crarun9740/BMI-Calculator",
    },
    {
      id: 3,
      title: "Food Delivery UI/UX",
      description:
        "Front-end web application that replicates the UI/UX of Food Delivery web-application.",
      image: "/assets/zomato.png",
      technologies: ["HTML", "CSS"],
      projectUrl: "https://arun-zomato.netlify.app/",
      sourceCodeUrl: "https://github.com/crarun9740/zomato-clone",
    },
    {
      id: 4,
      title: "Tic-Tac-Toe Game",
      description:
        "It features a simple two-player gameplay mechanic, with real-time move updates and a restart option, making it an enjoyable experience.",
      image: "/assets/tic-tac-toe.jpg",
      technologies: ["HTML", "CSS", "JavaScript"],
      projectUrl: "https://app.netlify.com/sites/arun-tictactoe/overview",
      sourceCodeUrl: "https://github.com/crarun9740/Tic-Tac-Toe",
    },
    {
      id: 5,
      title: "Paytm Interface",
      description:
        "Recreation of the Paytm payment interface with responsive design.",
      image: "/assets/paytm.png",
      technologies: ["HTML", "CSS"],
      projectUrl: "https://app.netlify.com/sites/arun-tm/overview",
      sourceCodeUrl: "https://github.com/crarun9740/paytm-clone",
    },
  ];

  // Get unique technologies for filter
  const allTechnologies = Array.from(
    new Set(projects.flatMap((project) => project.technologies))
  );

  // Filter projects based on selected technology
  const filteredProjects = filter
    ? projects.filter((project) => project.technologies.includes(filter))
    : projects;

  // Separate featured projects
  const featuredProjects = filteredProjects.filter(
    (project) => project.featured
  );
  const regularProjects = filteredProjects.filter(
    (project) => !project.featured
  );

  return (
    <div className="min-h-screen bg-gray-950 text-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-white">My </span>
          <span className="text-blue-500">Projects</span>
        </h1>
        <p className="text-xl text-blue-200 max-w-2xl mx-auto">
          Check out some of my recent work and personal projects
        </p>
      </motion.div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        <button
          className={`py-2 px-4 rounded-full ${
            filter === null
              ? "bg-blue-500 text-white"
              : "bg-transparent border border-blue-500 text-blue-500"
          }`}
          onClick={() => setFilter(null)}
        >
          All
        </button>
        {allTechnologies.map((tech) => (
          <button
            key={tech}
            className={`py-2 px-4 rounded-full ${
              filter === tech
                ? "bg-blue-500 text-white"
                : "bg-transparent border border-blue-500 text-blue-500"
            }`}
            onClick={() => setFilter(tech)}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <div className="mb-16 px-4 md:px-10">
          <h2 className="text-2xl font-semibold mb-8 flex items-center justify-center md:justify-start">
            <FaStar className="mr-2 text-yellow-400" /> Featured Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {featuredProjects.map((project) => (
              <FeaturedProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}

      {/* Regular Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ml-10 mr-10">
        {regularProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* No results message */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <p className="text-xl text-gray-400">
            No projects found with the selected technology.
          </p>
          <button
            className="mt-4 py-2 px-4 border border-blue-500 text-blue-500 rounded-full"
            onClick={() => setFilter(null)}
          >
            Show all projects
          </button>
        </div>
      )}
    </div>
  );
}

// Featured Project Card Component
function FeaturedProjectCard({ project }) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="absolute top-0 right-0 z-10 m-2">
        <span className="inline-block py-1 px-3 text-xs font-semibold rounded-full bg-yellow-500/20 text-yellow-300 border-yellow-500/50">
          Featured
        </span>
      </div>

      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-blue-500/10 z-10"></div>
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
        <p className="text-blue-200 mb-6">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-block py-1 px-3 text-xs font-semibold rounded-full bg-gray-700 text-white"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.projectUrl}
            className="py-2 px-4 rounded-full bg-blue-500 text-white flex items-center gap-2"
          >
            <FaExternalLinkAlt size={16} /> View Project
          </a>
          <a
            href={project.sourceCodeUrl}
            className="py-2 px-4 rounded-full border border-blue-500 text-blue-500 flex items-center gap-2"
          >
            <FaGithub size={16} /> Source Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}

// Regular Project Card Component
function ProjectCard({ project }) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl bg-gray-900 border border-gray-800 h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -5,
        boxShadow: "0 10px 30px -15px rgba(59, 130, 246, 0.5)",
      }}
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300 z-10"></div>
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
      </div>

      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-blue-200 text-sm flex-grow mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-block py-1 px-3 text-xs font-semibold rounded-full bg-gray-700 text-white"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-auto">
          <a
            href={project.projectUrl}
            className="py-2 px-4 rounded-full bg-blue-500 text-white flex items-center gap-2"
          >
            <FaExternalLinkAlt size={16} /> View Project
          </a>
          <a
            href={project.sourceCodeUrl}
            className="py-2 px-4 rounded-full border border-blue-500 text-blue-500 flex items-center gap-2"
          >
            <FaGithub size={16} /> Source Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}
