import InstagramIcon from "@/icons/InstagramIcon.svg?react";
import EmailIcon from "@/icons/EmailIcon.svg?react";
import ThreadsIcon from "@/icons/ThreadsIcon.svg?react";

import { useTranslation } from 'react-i18next';


export default function Navbar({ activeIndex, onNavigate }) {
    const labels = ["home_nav_link", "paintings_nav_link", "workshops_nav_link", "about_nav_link"];

    const { t, i18n } = useTranslation();

    const switchLanguage = (lng) => i18n.changeLanguage(lng);


    return (
        <nav className="flex flex-col justify-between h-full p-10 fixed right-0 top-0 w-[12vw] min-w-[120px]">
            {/* Top: language */}
            <div className="flex justify-end">

                <div className={` ${i18n.language === 'ua' ? "font-semibold" : "font-normal"} md:text-sm xl:text-xl cursor-pointer "`} onClick={() => switchLanguage('ua')}>
                    ua
                </div>

                <div className="md:text-sm xl:text-xl md:mx-1 xl:mx-2 2xl:mx-3">|</div>


                <div className={` ${i18n.language === 'en' ? "font-semibold" : "font-normal"} md:text-sm xl:text-xl cursor-pointer "`} onClick={() => switchLanguage('en')}>
                    en
                </div>

            </div>

            {/* Middle: section links */}
            <div className="flex flex-col items-end space-y-6  md:text-sm xl:text-base 2xl:text-xl">
                {labels.map((label, i) => (
                    <button
                        key={i}
                        className={`${activeIndex === i ? "font-medium scale-105 text-black" : "font-light text-gray-700"} cursor-pointer link-hover`}
                        onClick={() => onNavigate(i)}
                    >
                        {t(label)}
                    </button>
                ))}
            </div>

            {/* Bottom: contact */}
            <div className="flex justify-end">

                <div className="flex flex-col  space-y-4 transition-all">
                    <a href="mailto:ira@example.com" target="_blank" className=" flex justify-center">️

                        <EmailIcon className="md: w-5 xl:w-6 2xl:w-8 fill-black icon-hover" />

                    </a>
                    <a href="https://www.threads.com/@iriina.simonyan?igshid=NTc4MTIwNjQ2YQ==" target="_blank" className=" flex justify-center">

                        <ThreadsIcon className=" md: w-6 xl:w-7 2xl:w-9 fill-black icon-hover" />

                    </a>
                    <a href="https://www.instagram.com/iriina.simonyan?igsh=MTNtbnFvMmZldzlheA%3D%3D&utm_source=qr" target="_blank" className="flex justify-center">

                        <InstagramIcon className="md: w-7 xl:w-8 2xl:w-10 fill-black icon-hover" />

                    </a>


                </div>

            </div>
        </nav>
    );
}
