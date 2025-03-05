"use client";
import { motion } from "framer-motion";
import { projects } from "@/data/projectsData";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function SchoolProjects() {
  const schoolProjects = projects.filter((p) => p.category === "school");

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative w-full text-white"
    >
      <h2 className="text-5xl font-bold mb-10 text-center tracking-tight">
        Skolprojekt
      </h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
      >
        {schoolProjects.map((project, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="p-6 bg-[#2D2D2D] rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.03] relative group"
          >
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="text-gray-300">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-[#801818] hover:bg-[#5c0a0a] text-white font-bold py-2 px-4 rounded transition"
            >
              Github
            </a>
            <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition duration-300 rounded-lg pointer-events-none" />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
