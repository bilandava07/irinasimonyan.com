export default function Home({ onLoad }) {

  const bgImagePath = "/images/home/home_main_portrait.jpg";



  return (
    <div className="relative md:h-full w-full flex justify-end overflow-hidden">


      {/* Desktop usual flex flow elements */}
      <div className="hidden md:flex md:max-w-[80vw] md:h-full flex items-center ml-auto relative z-10">

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

        {/* DESKTOP IMAGE */}
        <div className="h-full md:-ml-5 lg:-ml-16 2xl:-ml-28">
          <img
            src={bgImagePath}
            alt="Background Image Portrait Painting"
            className="h-full object-cover"
            onLoad={onLoad}
          />
        </div>
      </div>

      {/* Mobile vertical flex no fixed height */}

      <div className="w-full md:hidden relative h-[100vh] flex-1 pt-14  overflow-hidden">
        {/* Background image */}
        <img
          src={bgImagePath}
          alt="Background Image Portrait Painting"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center -z-20"
        />

        {/* Foreground content */}
        <div className='flex flex-col  justify-start h-full relative z-10 '>


          <div className="flex justify-end z-10 pt-4 px-1  text-white">


            <h1 className="
                font-bodoni
                tracking-wide

                text-2xl
                
                uppercase
                flex
                flex-col
                gap-1
              ">
              <span className="block ml-0  ">color</span>
              <span className="block ml-10  text-nowrap">in the</span>
              <span className="block ml-20 ">skin</span>
            </h1>
          </div>



        </div>

        <div className="absolute inset-0 h-1/3 bg-gradient-to-b from-black opacity-90 z-5"></div>

      </div>

    </div>
  );
}
