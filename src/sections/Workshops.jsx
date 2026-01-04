import { useTranslation } from 'react-i18next';

export default function Workshops() {

  const { t } = useTranslation();

  const bgImagePath = "/images/workshops_bg.webp"
  return (
    <section className="section h-full w-full overflow-hidden">

      <div className="flex h-full w-full">

        <div className="my-30 lg:mx-20 2xl:mx-40 flex-1 md:flex-[1] lg:flex-[3] 2xl:flex-[2] flex flex-col">

          <h1 className="p-15 flex font-normal justify-around lg:text-3xl 2xl:text-5xl">{t("workshops_header")}</h1>

          <div className="flex flex-col gap-5 font-thin    lg:text-2xl 2xl:text-3xl leading-snug">
            <p>{t("workshops_p1")}</p>
            <p>{t("workshops_p2")}</p>
            <p>{t("workshops_p3")}</p>
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
    </section>
  );
}
