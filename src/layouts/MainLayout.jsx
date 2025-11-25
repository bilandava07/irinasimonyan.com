import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Home from "@/sections/Home";
import Paintings from "@/sections/Paintings";
import Workshops from "@/sections/Workshops";
import About from "@/sections/About";

const sectionsList = [Home, Paintings, Workshops, About];

export default function MainLayout() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  const containerRef = useRef(null);

  // Handle wheel scroll
  const handleWheel = (e) => {
    if (scrolling) return; // lock during animation
    if (e.deltaY > 0 && activeIndex < sectionsList.length - 1) {
      scrollToSection(activeIndex + 1);
    } else if (e.deltaY < 0 && activeIndex > 0) {
      scrollToSection(activeIndex - 1);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [activeIndex, scrolling]);

  const scrollToSection = (index) => {
    setScrolling(true);
    setActiveIndex(index);
    // optional: use Framer Motion animation to slide out/in
    setTimeout(() => {
      setScrolling(false);
    }, 800); // match animation duration
  };


  return (
    <div className="flex w-full h-screen">
      {/* Left 90%: content */}
      <div
        ref={containerRef}
        className="relative flex-1 h-full overflow-hidden"
      >
        {sectionsList.map((SectionComponent, i) => (
          <motion.div
            key={i}
            initial={{ y: "100%", opacity: 0 }}
            animate={{
              y: i === activeIndex ? 0 : i < activeIndex ? "-100%" : "100%",
              opacity: i === activeIndex ? 1 : 0,
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full"
          >
            <SectionComponent />
          </motion.div>
        ))}
      </div>

      {/* Right 10%: fixed navbar */}
      <div className="w-[12%] min-w-[120px] border-l h-full">
        <Navbar activeIndex={activeIndex} onNavigate={scrollToSection} />
      </div>
    </div>
  );
}
