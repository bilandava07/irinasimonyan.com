import { useTranslation } from 'react-i18next';

export default function Workshops() {

  const { t } = useTranslation();

  const bgImagePath = "/images/workshops/workshops_bg.jpg"
  return (
    <section className="section h-full w-full overflow-hidden">

      <div className="flex h-full w-full text-justify">


        <div className="flex flex-col justify-between  lg:mx-20 2xl:mx-40 flex-1 md:flex-[1] lg:flex-[3] 2xl:flex-[2] ">


          <div className='md:mt-5 lg:mt-30 2xl:mt-50'>

            <h1 className="lg:pb-9 2xl:pb-15 flex font-normal font-nanum justify-around lg:text-3xl 2xl:text-5xl">{t("workshops_header")}</h1>

            <div className="flex flex-col gap-5 font-thin lg:text-xl 2xl:text-3xl leading-snug">
              <p>{t("workshops_p1")}</p>
              <p>{t("workshops_p2")}</p>
              <p>{t("workshops_p3")}</p>
            </div>

            <div className='lg:text-xl 2xl:text-2xl lg:pt-10 2xl:pt-15  flex justify-end animate-float'>
              <a
                href="https://www.instagram.com/art.prostir.lutsk/"
                target="_blank"
                className="
                font-light
                hover:scale-110 transition-transform duration-300
                bg-gradient-to-r from-black via-fuchsia-500 to-pink-600
                bg-[length:300%_200%]
                bg-clip-text text-transparent
                animate-gradient
              "
              >
                @art.prostir.lutsk
              </a>
            </div>

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
    </section >
  );
}
