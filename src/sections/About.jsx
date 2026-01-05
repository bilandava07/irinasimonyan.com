import { useTranslation } from 'react-i18next';

export default function About() {

  const { t } = useTranslation();

  const bgImagePath = "/images/about/about_me_bg.jpg"
  return (
    <section className="relative section md:h-full w-full overflow-hidden">

      <div className="flex flex-col-reverse md:flex-row md:h-full w-full text-justify">

        {/* Mobile footer */}
        <div className='md:hidden flex justify-center p-1'>

          <div className="text-[0.5em] text-gray-500">
            @ 2026 Irina Simonyan. All rights reserved
          </div>

        </div>

        <div className="pb-3 md:pb-0 lg:mt-25 2xl:mt-40 lg:mx-20 2xl:mx-40 flex-1 md:flex-[1] lg:flex-[3] 2xl:flex-[2] flex flex-col">

          <h1 className="hidden md:flex lg:pb-8 2xl:pb-15 flex font-normal font-nanum justify-around lg:text-3xl 2xl:text-5xl">{t("about_me_header")}</h1>

          <div className="flex flex-col gap-3 md:gap-5 font-thin text-base p-4 lg:text-xl 2xl:text-3xl leading-snug">
            <p>{t("about_me_p1")}</p>
            <p>{t("about_me_p2")}</p>
            <p>{t("about_me_p3")}</p>
          </div>


        </div>

        {/* Desktop Image (usual flex flow) */}

        <div className="hidden md:block md:h-full  flex-1 md:flex-[1] lg:flex-[3] overflow-hidden">
          <img
            src={bgImagePath}
            alt="Artist giving instructions during the workshop"
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* Mobile Image (bg only with heading on top) */}

        <div className="md:hidden relative min-h-[80vh] flex-1  overflow-hidden">
          {/* Background image */}
          <img
            src={bgImagePath}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-center -z-20"
          />

          {/* Foreground content */}
          <div className="relative flex flex-col justify-start h-[80vh] relative z-10">
            <div className="flex justify-end pt-5 px-5 text-white relative">
              <h1 className="text-4xl font-nanum relative z-20 text-shadow">
                {t("about_me_header")}
              </h1>
            </div>

            <div className="absolute inset-0 h-1/4 bg-gradient-to-b from-black opacity-95 z-10"></div>
          </div>


        </div>


      </div>




      <div className="hidden md:block absolute bottom-0 left-0 px-2 py-1  text-sm text-gray-500">
        @ 2026 Irina Simonyan. All rights reserved
      </div>





    </section>
  );
}


