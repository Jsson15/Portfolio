"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

interface CardData {
  title: string;
  content: string;
  link?: string;
}

const cardsData: CardData[] = [
  { title: "Tech-Jobb", content: "Under min utbildning så påbörjade jag min LIA period på IT- Systemutveckling på Region Kronoberg 14-10/24 - 14-03/25." },
  { title: "Utbildning", content: "Jag har pluggat progammering 1 på gymnasienivå samt läst Agile Javautvecklare på Edugrade mellan perioden 04-09/23 - 18-04/25" },
  { title: "Familj", content: "Jag lever i en familj med 4 barn, två bonusar på 15 och 9 år samt två egna där dottern är 1 år och sonen ligger fortfarande och bakas" },
  { title: "Intressen", content: "Mina intressen utanför systemutveckling är, Fotboll, Hockey, innebandy samt gaming. mina favoritlag som jag brinner för är Liverpool, AIK och Växjö Lakers. går på så många Lakers matcher som jag kan varje år. AIK går jag på om dem spelar när jag besöker mina kompisar uppe i Sthlm och Liverpool har jag varit på tre gånger, en gång 2010 och två gånger 2017." },
  { title: "Esport Karriär", content: "Spelade CS på en semiprofessionell nivå mellan åren 2018-2020 där jag gick under nicket 'Jsson'. Här finns en länk till min HLTV-profil:", link: "https://www.hltv.org/player/19016/jsson" },
  { title: "Erfarenheter", content: "Jag har en bred bakgrund inom systemutveckling med erfarenhet av flera programmeringsspråk som C#, Python, Java samt TypeScript/JavaScript, där jag bygger moderna webbapplikationer med Next.js och React. Jag bygger även backend med hjälp av bland annat SQL. Utöver traditionell utveckling har jag arbetat med automatiseringslösningar och testautomatisering, bland annat med Blue Prism, RPA och Selenium, vilket bidrar till effektiva och robusta system. Fullstack." },
];

export default function InfoCards() {
    const [activeCard, setActiveCard] = useState<number | null>(null);
  
    return (
      <div className="relative">
        {/* Grid med korten. När ett kort är aktivt tonas resten ut */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start transition-opacity duration-300 ${
            activeCard !== null ? "opacity-50" : "opacity-100"
          }`}
        >
          {cardsData.map((card, index) => (
            <div
              key={index}
              onClick={() => setActiveCard(index)}
              className="cursor-pointer bg-[#801818] hover:bg-[#5c0a0a] text-white rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold">{card.title}</h3>
            </div>
          ))}
        </div>
  
        {/* Expanderat kort (in-place modal) */}
        <AnimatePresence>
          {activeCard !== null && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center z-50"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
            >
              <motion.div
                className="bg-[#2D2D2D] text-white rounded-lg p-8 w-11/12 max-w-3xl shadow-xl relative"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              >
                <button
                  onClick={() => setActiveCard(null)}
                  className="absolute top-4 right-4 text-[#801818] hover:text-[#5c0a0a]"
                >
                  <FaTimes className="w-6 h-6" />
                </button>
                <h3 className="text-2xl font-bold mb-4">
                  {cardsData[activeCard].title}
                </h3>
                <p className="text-base">{cardsData[activeCard].content}</p>
                {cardsData[activeCard].link && (
                <a
                  href={cardsData[activeCard].link.trim()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-blue-500 hover:underline"
                >
                  HLTV
                </a>
              )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
