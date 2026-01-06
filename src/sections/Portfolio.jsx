import MasonryGallery from "../components/ui/MasonryGallery";
import photos from "../data/photos";
import { useRef, useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

import { useTranslation } from 'react-i18next';

const categories = [
  { id: "portraits", label: "cat_portraits" },
  { id: "landscapes", label: "cat_landscapes" },
  { id: "still", label: "cat_still" },
  { id: "animals", label: "cat_animals" },
];

export default function Portfolio({ onPhotoClick }) {

  const { t } = useTranslation();

  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);

  // Filter photos based on selected category
  const filteredPhotos = photos.filter(
    (photo) => photo.category === selectedCategory
  );



  const scrollRef = useRef(null); // create the scrollRef here

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 400;
    scrollRef.current.scrollBy({
      top: direction === "up" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="h-full  flex items-center justify-center">

      {/* Left sidebar */}

      <div className="w-1/5 p-4 flex flex-col justify-center gap-2 h-full">

        <div className="
            flex
            flex-col
            justify-between 
            h-full 
            p-10 
            w-[12vw] 
            min-w-[120px]
            bg-white"
        >

          <div className=""></div>






          {/* Top: filters */}
          <div className="flex flex-col space-y-6 items-start gap-2 md:text-sm xl:text-base 2xl:text-xl whitespace-nowrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex justify-start cursor-pointer link-hover ${selectedCategory === cat.id
                    ? "font-medium scale-105 text-black"
                    : "font-light text-gray-700"
                  }`}
              >
                {t(cat.label)}
              </button>
            ))}
          </div>







          <div className="flex justify-start">

            <div className="flex flex-col gap-6 mb-5 ">
              <button
                className="chevron-container"
                onClick={() => scroll("up")}
              >
                <ChevronUp className="chevron-sizing" />
              </button>

              <button
                className="chevron-container"
                onClick={() => scroll("down")}
              >
                <ChevronDown className="chevron-sizing" />
              </button>




            </div>
          </div>


        </div>

      </div>

      <div className="flex h-full md:p-4 lg:p-5 2xl:p-15 w-full">

        {/* Portfolio */}
        <MasonryGallery photos={filteredPhotos} scrollRef={scrollRef} onPhotoClick={onPhotoClick} />
      </div>
    </div>
  );
}
