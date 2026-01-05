export default function Home({onLoad}) {


  return (
    <div className="relative h-[100vh] w-full flex justify-end overflow-hidden">



      <div className=" md:max-w-[80vw] h-full flex items-center ml-auto relative z-10">

        {/* LEFT TEXT */}
        <div className=" hidden md:block z-10">
          <h1 className="
            font-bodoni
            tracking-wide
            

            md:text-4xl
            lg:text-[6.5rem]
            2xl:text-[11rem]

            uppercase
            flex
            flex-col
            gap-5
          ">
            <span className="block ml-0  ">color</span>
            <span className="block ml-10 lg:ml-25 2xl:ml-40 text-nowrap">in the</span>
            <span className="block ml-25 lg:ml-76 2xl:ml-118">skin</span>
          </h1>
        </div>

        {/* RIGHT IMAGE */}
        <div className="h-full md:-ml-5 lg:-ml-16 2xl:-ml-28">
          <img
            src="/images/portraits/home_main_portrait.jpg"
            alt="Painting"
            className="h-full object-cover"
            onLoad={onLoad}
          />
        </div>
      </div>

    </div>
  );
}
