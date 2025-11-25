export default function Home() {

  
  return (
    <div className="relative h-[100vh] w-full flex justify-end overflow-hidden">

      {/* LOGO — POSITIONED ABSOLUTELY & INDEPENDENTLY */}
      <div className="absolute top-6 left-6 z-50">
        <h2 className="text-3xl md:text-3xl font-light whitespace-nowrap">
          Irina Simonyan
        </h2>
      </div>

      <div className=" max-w-[80vw] h-full flex items-center ml-auto relative z-10">
        {/* LEFT TEXT */}
        <div className="relative z-10">
          <h1 className="text-6xl md:text-9xl font-bold uppercase tracking-wide">
            <span className="block ml-0">color</span>
            <span className="block ml-20">in the</span>
            <span className="block ml-70">skin</span>
          </h1>
        </div>

        {/* RIGHT IMAGE */}
        <div className="h-full -ml-20">
          <img
            src="/images/portraits/test.png"
            alt="Painting"
            className="h-full object-cover"
          />
        </div>
      </div>

    </div>
  );
}
