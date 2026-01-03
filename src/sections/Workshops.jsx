export default function Workshops() {

  const bgImagePath = "/images/workshops_bg.webp"
  return (
    <section className="section h-full relative overflow-hidden">
      <img
       src={bgImagePath}
       alt="Artist giving instructions during the workshop"
       loading="lazy"
       className="absolute inset-0 w-full h-auto object-cover "
        />

    </section>
  );
}
