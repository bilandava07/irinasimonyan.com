import { useTranslation } from 'react-i18next';

export default function About() {

  const { t } = useTranslation();

  const bgImagePath = "/images/about/about_me_bg.jpg"
  return (
    <section className="relative section h-full w-full overflow-hidden">

      <div className="flex h-full w-full text-justify">


        <div className="lg:mt-20 2xl:mt-40 lg:mx-20 2xl:mx-40 flex-1 md:flex-[1] lg:flex-[3] 2xl:flex-[2] flex flex-col">

          <h1 className="lg:pb-8 2xl:pb-15  flex font-normal font-nanum justify-around lg:text-3xl 2xl:text-5xl">{t("about_me_header")}</h1>

          <div className="flex flex-col gap-5 font-thin    lg:text-xl 2xl:text-3xl leading-snug">
            <p>{t("about_me_p1")}</p>
            <p>{t("about_me_p2")}</p>
            <p>{t("about_me_p3")}</p>
          </div>


        </div>

        <div className="h-full  flex-1 md:flex-[1] lg:flex-[3] overflow-hidden">
          <img
            src={bgImagePath}
            alt="Artist giving instructions during the workshop"
            className="h-full w-full object-cover object-center"
          />
        </div>

      </div>

      <div className="absolute bottom-0 left-0 px-2 py-1  text-sm text-gray-500">
        @ 2026 Irina Simonyan. All rights reserved
      </div>

    </section>
  );
}


