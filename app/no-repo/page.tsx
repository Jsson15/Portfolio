import Link from "next/link";
import { FaUser } from "react-icons/fa";

export default function NoRepoPage() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center bg-[#2D2D2D] text-white p-10">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-8">
        Ingen GitHub-repo ännu!
      </h1>
      <p className="max-w-2xl text-center text-xl md:text-2xl mb-10">
        Detta projekt har ännu inte något offentligt GitHub-repo, eller så är det privat.
        Kontakta mig gärna om du är intresserad av att se koden eller vill veta mer!
      </p>
      <Link
        href="/#contact"
        className="flex items-center gap-2 bg-[#801818] text-white px-6 py-3 rounded-full hover:bg-[#5c0a0a] transition"
      >
        <FaUser className="w-6 h-6" />
        Kontakta mig
      </Link>
    </main>
  );
}
