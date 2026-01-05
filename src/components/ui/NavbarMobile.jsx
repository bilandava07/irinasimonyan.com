import { useState } from "react";

export default function NavbarMobile({ activeSection }) {
  const [open, setOpen] = useState(false);




  return (
    <>
      {/* Top bar */}
      <div className="flex items-center justify-between p-4 bg-white border-b-[0.5px] border-black backdrop-blur-md">
        <a href="#home" className="w-35 ">
          <img className="hover:scale-105 transition-transform duration-300" src="/images/logo.png " />
        </a>


        <button
          onClick={() => setOpen(true)}
          className="text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Overlay menu */}
      {open && (
        <div className="fixed inset-0 z-50 ">
          <div className="absolute top-0 right-0 w-full h-full bg-white p-6">
            <button
              className="mb-6 text-xl"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

            {["home", "gallery", "paintings", "workshops", "about"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className={`block py-4 text-lg ${activeSection === id ? "font-bold" : ""
                  }`}
              >
                {id}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
