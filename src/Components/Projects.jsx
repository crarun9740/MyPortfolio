import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";

export default function Projects() {
  const [filter, setFilter] = useState(null);

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
      description: "A responsive front-end web-application to calculate BMI.",
      image: "/assets/bmi.jpg",
      technologies: ["HTML", "CSS"],
      projectUrl: "https://bmi-calculator-88.netlify.app/",
      sourceCodeUrl: "https://github.com/crarun9740/BMI-Calculator",
    },
    {
      id: 3,
      title: "Food Delivery UI/UX",
      description:
        "Front-end web application that replicates the UI/UX of Food Delivery apps.",
      image: "/assets/zomato.png",
      technologies: ["HTML", "CSS"],
      projectUrl: "https://arun-zomato.netlify.app/",
      sourceCodeUrl: "https://github.com/crarun9740/zomato-clone",
    },
    {
      id: 4,
      title: "Tic-Tac-Toe Game",
      description:
        "Simple two-player game with real-time move updates and restart option.",
      image: "/assets/tic-tac-toe.jpg",
      technologies: ["HTML", "CSS", "JavaScript"],
      projectUrl: "https://arun-tictactoe.netlify.app/",
      sourceCodeUrl: "https://github.com/crarun9740/Tic-Tac-Toe",
    },
    {
      id: 5,
      title: "Paytm Interface",
      description:
        "Recreation of the Paytm payment interface with responsiveness.",
      image: "/assets/paytm.png",
      technologies: ["HTML", "CSS"],
      projectUrl: "https://arun-tm.netlify.app/",
      sourceCodeUrl: "https://github.com/crarun9740/paytm-clone",
    },
  ];

  const allTechnologies = Array.from(
    new Set(projects.flatMap((p) => p.technologies))
  );

  const filteredProjects = filter
    ? projects.filter((p) => p.technologies.includes(filter))
    : projects;

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const regularProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-gray-950 text-white py-16 px-4 sm:px-6 lg:px-8">
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

      {/* Container for all projects */}
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 flex items-center">
              <FaStar className="mr-2 text-yellow-400" /> Featured Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} isFeatured />
              ))}
            </div>
          </div>
        )}

        {/* Regular Projects */}
        {regularProjects.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold mb-8 flex items-center">
              All Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

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
    </div>
  );
}

// Shared Project Card Component
function ProjectCard({ project, isFeatured = false }) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 flex flex-col h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -5,
        boxShadow: "0 10px 30px -15px rgba(59, 130, 246, 0.5)",
      }}
    >
      {isFeatured && (
        <div className="absolute top-0 right-0 z-10 m-2">
          <span className="inline-block py-1 px-3 text-xs font-semibold rounded-full bg-yellow-500/20 text-yellow-300 border-yellow-500/50">
            Featured
          </span>
        </div>
      )}
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
        <p className="text-blue-200 text-sm mb-4 flex-grow">
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
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-4 rounded-full bg-blue-500 text-white flex items-center gap-2"
          >
            <FaExternalLinkAlt size={16} /> View
          </a>
          <a
            href={project.sourceCodeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-4 rounded-full border border-blue-500 text-blue-500 flex items-center gap-2"
          >
            <FaGithub size={16} /> Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}
