import PaintingsCarousel from "../components/ui/PaintingsCarousel";

export default function Paintings({ onPhotoClick }) {


  return (
    <section className="section h-full bg-gray-100 flex flex-col items-center justify-center ">


      <PaintingsCarousel onPhotoClick={onPhotoClick}/>
    </section>
  );
}
