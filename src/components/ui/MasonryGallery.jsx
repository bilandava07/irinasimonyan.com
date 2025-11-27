import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function MasonryGallery({ photos, scrollRef, onPhotoClick }) {
  return (
    <div
      ref={scrollRef}
      className="w-full h-full overflow-hidden"
    >
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}>
        <Masonry className="p-5" > 
          {photos.map((photo) => (
            <img
              key={photo.id}
              src={photo.imageUrl}
              className="w-full p-3 block object-cover cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-101  "
              alt={`Painting ${photo.id}`}
              onClick={() => onPhotoClick(photo)}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}
