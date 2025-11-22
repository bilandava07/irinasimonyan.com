import { CATEGORIES } from "@/constants/photo_categories";
import PhotoCard from "./PhotoCard";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


export default function PortfolioGrid({ photos, onPhotoClick }) {





  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES.PORTRAITS);

  // Filter photos based on selected category
  const filteredPhotos = photos.filter(
    (photo) =>
      photo.category === selectedCategory
  );


  return (
    <>
      <div>
        <div className="pt-2 md:pt-10 lg:pt-20 text-center">


          <div className='flex justify-center py-3 md:py-10 '>

            <div className="flex flex-wrap justify-center items-center text-base gap-x-5 gap-y-2  sm:gap-x-4 md:gap-x-3 lg:gap-x-10 text-center md:text-xl">
              {Object.keys(CATEGORIES).map((catKey) => (
                <li
                  key={catKey}
                  onClick={() => setSelectedCategory(CATEGORIES[catKey])}
                  className={`inline-block cursor-pointer hover:scale-105 transition-transform duration-200 ${selectedCategory === CATEGORIES[catKey] ? "text-foreground" : "text-foreground/60"
                    }`}
                >
                  <span className="hidden md:block">{CATEGORIES[catKey]}</span>
                </li>
              ))}
            </div>



          </div>
        </div>
      </div>

      <div className="
          grid
          gap-2
          md:gap-4
          lg:gap-7                
          grid-flow-dense
          [grid-template-columns:repeat(auto-fit,minmax(clamp(150px,20%,280px),1fr))]
          [grid-auto-rows:min-content]
          box-border
          max-w-full


          lg:min-h-[50vw]
        ">
        <AnimatePresence>
          {filteredPhotos.map((photo) => (
            <PhotoCard
              key={`${photo.id}-${selectedCategory}`} // key changes when category changes
              id={photo.id}
              title={photo.title}
              imageUrl={photo.imageUrl}
              orientation={photo.orientation}
              onClick={() => onPhotoClick(photo)}
            />
          ))}
        </AnimatePresence>
      </div>



    </>

  );
}
