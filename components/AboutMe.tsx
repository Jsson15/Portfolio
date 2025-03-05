
"use client";
import InfoCards from "@/components/InfoCards";

export default function AboutMe() {
  return (
    <div className="w-full max-w-4xl mx-auto p-8 text-center">
      <h2 className="text-4xl font-bold mb-4 text-white">Om mig</h2>
      <p className="text-lg text-gray-300 mb-8">
        Här är en kort presentation och lite extra info om mig.
      </p>
      <InfoCards />
    </div>
  );
}
