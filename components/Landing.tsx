"use client";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <section className="relative w-full min-h-screen bg-[#3a3a3a] flex items-center justify-center overflow-hidden">
      {/* Innehåll */}
      <div className="z-10 text-center text-white px-4 max-w-3xl">
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Henric Johanssons{" "}
          <span className="italic text-gray-300">Portfolio</span>
        </motion.h1>

        <motion.p
          className="mt-4 text-lg sm:text-xl text-gray-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Min professionella portfolio med projekt och erfarenhet som systemutvecklare
        </motion.p>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
         
        </motion.div>
      </div>

      {/* Vågen i botten som övergår till nästa sektion (ex. #3F3F3F) */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-[0]">
        <svg
          className="block w-full h-[100px]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path fill="#3F3F3F" d="M0,320 C720,0 720,0 1440,320 Z" />
        </svg>
      </div>
    </section>
  );
}
