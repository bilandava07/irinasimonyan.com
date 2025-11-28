import { useEffect, useState, useRef } from "react";
import Navbar from "@/components/ui/Navbar";
import Home from "@/sections/Home";
import Gallery from "@/sections/Gallery";
import Portfolio from "@/sections/Portfolio";
import About from "@/sections/About";
import PhotoOverlay from "@/components/ui/PhotoOverlay";

const sections = ["home", "gallery", "paintings",  "about"];
function App() {
const [selectedPhoto, setSelectedPhoto] = useState(null);


  const [activeSection, setActiveSection] = useState("home");

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



      <div className="flex w-full h-screen  ">
        {/* LOGO — POSITIONED ABSOLUTELY & INDEPENDENTLY */}
        <div className="fixed top-0 left-0  lg: p-4 2xl:p-6 rounded-br-4xl  z-20 backdrop-blur-md sd:w-20 md:w-40 xl:w-50  2xl:w-80  ">
          <img 
            src="/images/logo.png"
            />


        </div>

        {/* Scrollable Content */}
        <div

          className="flex-1 h-full overflow-y-auto scroll-smooth snap-y snap-mandatory scrollbar-hide"
        >
          <section id="home" className="h-screen snap-start"><Home /></section>
          <section id="gallery" className="h-screen snap-start"><Gallery onPhotoClick={handlePhotoClick}/></section>
          <section id="paintings" className="h-screen snap-start"><Portfolio onPhotoClick={handlePhotoClick}/></section>
          <section id="about" className="h-screen snap-start"><About /></section>
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
export default App;
