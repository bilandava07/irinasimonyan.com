import PaintingsCarousel from "../components/ui/PaintingsCarousel";

export default function Paintings({ onPhotoClick }) {


  return (
    <section className="section h-full  flex flex-col items-center justify-center ">


      <PaintingsCarousel onPhotoClick={onPhotoClick}/>
      
    </section>
  );
}
