// components/SectionDivider.tsx
"use client";

interface SectionDividerProps {
  color?: string;       // Vilken färg själva "vågen" ska ha
  flip?: boolean;       // Om du vill kunna vända vågen upp-och-ned
  height?: number;      // Justera höjd i pixlar
}

export default function SectionDivider({
  color = "#000000",
  flip = false,
  height = 100,
}: SectionDividerProps) {
  return (
    <div className="relative w-full overflow-hidden leading-[0]">
      <svg
        className="absolute left-0 top-0 w-full"
        style={{ height: `${height}px`, transform: flip ? "rotate(180deg)" : "none" }}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path fill={color} fillOpacity="1" d="M0,256L80,234.7C160,213,320,171,480,176C640,181,800,235,960,234.7C1120,235,1280,181,1360,154.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
      </svg>
    </div>
  );
}
