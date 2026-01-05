import { useEffect, useState, useRef } from "react";
import Navbar from "@/components/ui/Navbar";
import Home from "@/sections/Home";
import Gallery from "@/sections/Gallery";
import Portfolio from "@/sections/Portfolio";
import About from "@/sections/About";
import PhotoOverlay from "@/components/ui/PhotoOverlay";
import Workshops from "./sections/Workshops";
import { Spinner } from '@/components/ui/spinner';
import NavbarMobile from "@/components/ui/NavbarMobile";

const sections = ["home", "gallery", "paintings", "workshops", "about"];
function App() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);


  const [activeSection, setActiveSection] = useState("home");

  const [loading, setLoading] = useState(true);


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
  const isOverlayOpen = selectedPhoto !== null;

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

      {/* Loading screen */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center z-[9999] bg-white">
          <Spinner className="h-30 w-30 text-black " />
        </div>
      )}



      {/* Main content only rendered after loading */}
      <div
        className={`flex flex-col md:flex-row
           w-full
           h-screen
           transition-opacity
           duration-500 ${loading ? "opacity-0 pointer-events-none" : "opacity-100"}
          `}
      >
        {/* LOGO — POSITIONED ABSOLUTELY & INDEPENDENTLY FOR DESKTOP */}
        <div className="fixed
         top-0
         left-0
         md:p-3
         lg:p-4
         xl:p-5
         2xl:p-6
         rounded-br-4xl
         z-20
         backdrop-blur-md 

         hidden
         md:block

         
         sm:w-20
         md:w-45
         xl:w-55
         2xl:w-70
          
         ">

          <a href="#home">
            <img className="hover:scale-105 transition-transform duration-300" src="/images/logo.png" />
          </a>



        </div>

        {/* Scrollable Content */}
        <div
          className="md:flex-1 h-full overflow-y-auto md:scroll-smooth md:snap-y md:snap-mandatory scrollbar-hide"
        >
          <section id="home" className="h-screen snap-start"><Home onLoad={() => setLoading(false)} /></section>
          <section id="gallery" className="h-screen snap-start"><Gallery onPhotoClick={handlePhotoClick} /></section>
          <section id="paintings" className="hidden md:flexh-screen snap-start"><Portfolio onPhotoClick={handlePhotoClick} /></section>
          <section id="workshops" className="min-h-screen md:h-screen scroll-mt-14 md:scroll-m-0 snap-start"><Workshops /></section>
          <section id="about" className="min-h-screen md:h-screen scroll-mt-14 md:scroll-m-0 snap-start"><About /></section>
        </div>

        {/* Desktop Navbar */}
        <div className=" hidden md:block w-[12%] min-w-[120px] border-l h-full">
          <Navbar activeSection={activeSection} />
        </div>

        {/* Mobile Navbar */}
        <div className="fixed top-0 left-0 right-0 z-10 md:hidden">
          <NavbarMobile activeSection={activeSection} />
        </div>


      </div>


      <PhotoOverlay selectedPhoto={selectedPhoto} handleCloseOverlay={handleCloseOverlay} />

    </>



  );
}
export default App;
