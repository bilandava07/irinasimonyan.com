import { useEffect, useState, useRef } from "react";
import Navbar from "@/components/ui/Navbar";
import Home from "@/sections/Home";
import Paintings from "@/sections/Paintings";
import Workshops from "@/sections/Workshops";
import About from "@/sections/About";

const sections = ["home", "paintings", "workshops", "about"];

export default function MainLayout() {
  const [activeSection, setActiveSection] = useState("home");
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // 60% visible
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex w-full ">
      
      {/* Scrollable Content */}
      <div
      
        className="flex-1 h-full overflow-y-hidden scroll-smooth"
      >
        <section id="home" className="h-screen"><Home /></section>
        <section id="paintings" className="h-screen"><Paintings /></section>
        <section id="workshops" className="h-screen"><Workshops /></section>
        <section id="about" className="h-screen"><About /></section>
      </div>

      {/* Navbar */}
      <div className="w-[12%] min-w-[120px] border-l h-full ">
        <Navbar activeSection={activeSection} />
      </div>
    </div>
  );
}
