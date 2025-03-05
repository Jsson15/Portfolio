import Landing from "@/components/Landing";
import WorkProjects from "@/components/WorkProjects";
import SchoolProjects from "@/components/SchoolProjects";
import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import ParallaxSection from "@/components/ParallaxSection";

export default function Home() {
  return (
    <main className="w-full min-h-screen m-0 p-0">
      {/* === SEKTION 1: Landing (bg-gray-200) === */}
      <section className="relative w-full min-h-screen bg-gray-200 flex items-center justify-center">
        <Landing />
        {/* Divider: från bg-gray-200 till sektion 2 (bg-[#2D2D2D]) */}
        <div className="absolute bottom-0 w-full overflow-hidden leading-[0]">
          <svg
            className="block w-full h-[100px]"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path fill="#2D2D2D" d="M0,320 C720,0 720,0 1440,320 Z" />
          </svg>
        </div>
      </section>

      {/* Du kan exempelvis lägga in ParallaxSection här om du vill ha en parallax-effekt */}
      {/* <ParallaxSection /> */}

      {/* === SEKTION 2: WorkProjects (bg-[#2D2D2D]) === */}
      <section className="relative w-full min-h-screen bg-[#2D2D2D] flex flex-col items-center justify-center pt-16 pb-32">
        <div className="w-full max-w-5xl px-4">
          <WorkProjects />
        </div>
        {/* Divider: från bg-[#2D2D2D] till sektion 3 (bg-[#3F3F3F]) */}
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

      {/* === SEKTION 3: SchoolProjects (bg-[#3F3F3F]) === */}
      <section className="relative w-full min-h-screen bg-[#3F3F3F] flex flex-col items-center justify-start pt-16 pb-32">
        <div className="w-full max-w-5xl px-4">
          <SchoolProjects />
        </div>
        {/* Divider: från bg-[#3F3F3F] till sektion 4 (bg-gray-100) */}
        <div className="absolute bottom-0 w-full overflow-hidden leading-[0]">
          <svg
            className="block w-full h-[100px]"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            {/* Tailwinds bg-gray-300 motsvarar vanligtvis #D1D5DB */}
            <path fill="#4b4b4b" d="M0,320 C720,0 720,0 1440,320 Z" />
          </svg>
        </div>
      </section>

      {/* === SEKTION 4: Om mig (AboutMe, bg-gray-100) === */}
      <section className="relative w-full min-h-screen bg-[#4b4b4b] flex items-center justify-center">
        <div className="w-full max-w-4xl px-4">
          <AboutMe />
        </div>
        {/* Divider: från bg-gray-100 till sektion 5 (bg-gray-200) */}
        <div className="absolute bottom-0 w-full overflow-hidden leading-[0]">
          <svg
            className="block w-full h-[100px]"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            {/* Tailwinds bg-gray-200 motsvarar vanligtvis #e5e7eb */}
            <path fill="#646464" d="M0,320 C720,0 720,0 1440,320 Z" />
          </svg>
        </div>
      </section>

      {/* === SEKTION 5: Kontakt (Contact, bg-gray-200) === */}
      <section id="contact" className="relative w-full min-h-screen bg-[#646464] flex items-center justify-center">
        <div className="w-full max-w-4xl px-4">
          <Contact />
        </div>
      </section>
    </main>
  );
}
