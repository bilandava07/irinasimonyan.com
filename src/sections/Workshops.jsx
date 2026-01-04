export default function Workshops() {

  const bgImagePath = "/images/workshops_bg.webp"
  return (
    <section className="section h-full w-full overflow-hidden">

      <div className="flex h-full w-full">

        <div className="my-30 lg:mx-20 2xl:mx-40 flex-1 md:flex-[1] lg:flex-[3] 2xl:flex-[2] flex flex-col">

          <h1 className="p-15  flex font-normal justify-around lg:text-3xl 2xl:text-5xl">Workshops</h1>

          <div className="flex flex-col gap-5 font-thin    lg:text-2xl 2xl:text-3xl leading-snug">
            <p>I run painting workshops for both adults and children. My goal is to show that anyone can paint</p>
            <p>I am fascinated by the interaction with people, especially the moment when fear yields to the desire to create. I always say, “Trust the process.” Seeing the surprise and joy on people’s faces when they look at their work and ask, “Did I really create this?” is one of the most rewarding parts of my journey.</p>
            <p>During the sessions, I guide you step by step – from developing the idea to choosing colours and letting go of the fear of making mistakes. My workshops are suitable both for complete beginners and for those who simply want to spend time creatively.</p>
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
