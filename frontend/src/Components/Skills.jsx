import { useEffect, useState, useRef } from "react";
import Marquee from "react-fast-marquee";
// If you were using the vanilla marquee before, remove it from this file.

function useWindowWidth() {
  const [w, setW] = useState(0);
  useEffect(() => {
    // Guard for SSR and ensure we re-measure on resize
    const getW = () => (typeof window !== "undefined" ? window.innerWidth : 0);
    setW(getW());
    const onResize = () => setW(getW());
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return w;
}

function Skills() {
  const width = useWindowWidth();

  // Your image list
  const imgs = ["/01.svg", "/02.svg", "/03.svg", "/04.svg"];

  return (
    <div className="flex flex-col items-center justify-center overflow-hidden">
      <h1 className="mt-4 mb-6 font-bold text-5xl">Skills</h1>
      <Marquee
        key={width}
        speed={50}
        autoFill 
        gradient
        gradientColor={[191, 219, 254]}
        gradientWidth={100}
        className="w-full"
      >
        {imgs.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Skill ${i + 1}`}
            className="h-20 mx-10 rounded-xl"
          />
        ))}
      </Marquee>
    </div>
  );
}

export default Skills;
