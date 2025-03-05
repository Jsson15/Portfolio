"use client";
import Link from "next/link";
import { FaEnvelope, FaLinkedin, FaGithub, FaSteam } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="w-full max-w-4xl mx-auto p-8 text-center">
      <h2 className="text-4xl font-bold mb-4 text-white">Kontakt</h2>
      <p className="text-lg text-gray-300 mb-8">
        Kontakta mig gärna vid intresse på någon av dessa nedan:
      </p>
      <div className="flex flex-col gap-4 items-center justify-center">
        <a
          href="mailto:henric.k.johansson@telia.com"
          className="flex items-center gap-2 bg-[#801818] text-white px-4 py-2 rounded-full hover:bg-[#5c0a0a] transition"
        >
          <FaEnvelope className="w-6 h-6" />
          E-Mail
        </a>
        <a
          href="https://www.linkedin.com/in/henric-johansson-112a03237/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#801818] text-white px-4 py-2 rounded-full hover:bg-[#5c0a0a] transition"
        >
          <FaLinkedin className="w-6 h-6" />
          LinkedIn
        </a>
        <a
          href="https://github.com/Jsson15"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#801818] text-white px-4 py-2 rounded-full hover:bg-[#5c0a0a] transition"
        >
          <FaGithub className="w-6 h-6" />
          GitHub
        </a>
        <a
          href="https://steamcommunity.com/id/jsson99"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#801818] text-white px-4 py-2 rounded-full hover:bg-[#a02121] transition"
        >
          <FaSteam className="w-6 h-6" />
          Steam
        </a>
      </div>
    </div>
  );
}
