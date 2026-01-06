import PaintingsCarousel from "../components/ui/PaintingsCarousel";

export default function Gallery({ onPhotoClick }) {


  return (
    <div className="h-full bg-gray-50 flex flex-col items-center justify-center ">


      <PaintingsCarousel onPhotoClick={onPhotoClick}/>
      
    </div>
  );
}
