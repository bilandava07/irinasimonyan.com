import { useState } from "react";
import { useTranslation } from 'react-i18next';

export default function NavbarMobile({ activeSection }) {
  const [open, setOpen] = useState(false);

  const { t, i18n } = useTranslation();
  const switchLanguage = (lng) => i18n.changeLanguage(lng);

  const navItemsMobile = [
    { id: "home", label: "home_nav_link" },
    { id: "gallery", label: "gallery_nav_link" },
    // { id: "paintings", label: "paintings_nav_link" },
    { id: "workshops", label: "workshops_nav_link" },
    { id: "about", label: "about_nav_link" }
  ];

  return (
    <>
      {/* Top bar */}
      <div className="flex items-center justify-between h-14 p-3 bg-white border-b-[0.5px] border-black ">
        <a href="#home" className="w-30 ">
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

          <div className=" w-full h-full bg-white">

            <div className="flex justify-between p-4 h-14 border-b-[0.5px] border-black ">

              {/* Top: language */}
              <div className="flex justify-end items-center">

                <div className={` ${i18n.language === 'ua' ? "font-base" : "font-thin"} text-lg cursor-pointer "`} onClick={() => switchLanguage('ua')}>
                  ua
                </div>

                <div className="text-lg font-thin mx-1">|</div>


                <div className={` ${i18n.language === 'en' ? "font-base" : "font-thin"} text-lg cursor-pointer "`} onClick={() => switchLanguage('en')}>
                  en
                </div>

              </div>


              <button
                className="text-xl"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>



            </div>
            {navItemsMobile.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`block py-4 px-4  text-lg ${activeSection === item.id ? "font-base" : "font-thin"
                  }`}
              >
                {t(item.label)}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
