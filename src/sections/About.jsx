export default function About() {

  const bgImagePath = "/images/about_me_bg.webp"
  return (
    <section className="section h-full overflow-hidden">

      <div className="flex h-full justify-end ">

        <div className="py-30 font-thin flex flex-col">

          <h1 className=" py-10 flex justify-around text-8xl"> About the artist</h1>

          <h1 className="text-4xl px-30"> Sme text about me Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut qui quibusdam quia quasi, accusantium sint quod itaque saepe debitis repellat eaque ex. Sapiente culpa neque expedita aliquid quos obcaecati esse?</h1>

        </div>

        <img
          src={bgImagePath}
          alt="Artist giving instructions during the workshop"
          loading="lazy"
          className=" h-full object-containt block"
        />

      </div>
    </section>
  );
}
