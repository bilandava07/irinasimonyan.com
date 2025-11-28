import PaintingsCarousel from "../components/ui/PaintingsCarousel";

export default function Gallery({ onPhotoClick }) {


  return (
    <section className="section h-full bg-gray-50 flex flex-col items-center justify-center ">


      <PaintingsCarousel onPhotoClick={onPhotoClick}/>
      
    </section>
  );
}
