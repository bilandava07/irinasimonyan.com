import { useEffect, useState, useRef } from "react";
import Navbar from "@/components/ui/Navbar";
import Home from "@/sections/Home";
import Paintings from "@/sections/Paintings";
import Workshops from "@/sections/Workshops";
import About from "@/sections/About";
import PhotoOverlay from "../components/ui/PhotoOverlay";

const sections = ["home", "paintings", "workshops", "about"];

export default function MainLayout() {

  const [selectedPhoto, setSelectedPhoto] = useState(null);


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


  function handlePhotoClick(photo) {
    setSelectedPhoto(photo);
  }

  function handleCloseOverlay() {
    setSelectedPhoto(null);
  }


    // Disable scroll when any overlay is open
    const isOverlayOpen = selectedPhoto !== null ;

    useEffect(() => {
        if (isOverlayOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOverlayOpen]);


  return (
    <>



      <div className="flex w-full ">
        {/* LOGO — POSITIONED ABSOLUTELY & INDEPENDENTLY */}
        <div className="fixed top-6 left-6 z-50">
          <h2 className="text-3xl md:text-3xl font-light whitespace-nowrap">
            Irina Simonyan
          </h2>
        </div>

        {/* Scrollable Content */}
        <div

          className="flex-1 h-full overflow-y-hidden scroll-smooth"
        >
          <section id="home" className="h-screen"><Home /></section>
          <section id="paintings" className="h-screen"><Paintings onPhotoClick={handlePhotoClick} /></section>
          <section id="workshops" className="h-screen"><Workshops /></section>
          <section id="about" className="h-screen"><About /></section>
        </div>

        {/* Navbar */}
        <div className="w-[12%] min-w-[120px] border-l h-full ">
          <Navbar activeSection={activeSection} />
        </div>
      </div>


      <PhotoOverlay selectedPhoto={selectedPhoto} handleCloseOverlay={handleCloseOverlay} />

    </>



  );
}
