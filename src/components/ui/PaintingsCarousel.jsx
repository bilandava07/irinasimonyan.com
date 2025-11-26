import React, { useRef, useEffect, useState } from "react";
import photos from "@/data/photos.js";

const PaintingCarousel = ({onPhotoClick}) => {


    const squarePhotos = photos.filter(photo => photo.orientation === "square");
    const verticalPhotos = photos.filter(photo => photo.orientation === "tall");

    const interleavedPhotos = [];
    const maxLength = Math.max(squarePhotos.length, verticalPhotos.length);
    for (let i = 0; i < maxLength; i++) {
        if (squarePhotos[i]) interleavedPhotos.push(squarePhotos[i]);
        if (verticalPhotos[i]) interleavedPhotos.push(verticalPhotos[i]);
    }

    const latestInterleaverPhotos = interleavedPhotos.slice(0,8)


    const carouselRef = useRef(null);
    const [slideWidth, setSlideWidth] = useState(0);



    // Measure the width of one slide dynamically
    useEffect(() => {
        const firstSlide = carouselRef.current?.querySelector(".carousel-slide");
        if (firstSlide) {
            setSlideWidth(firstSlide.offsetWidth + 16); // 16 = gap-4 in px
        }
    }, []);

    const scroll = (direction) => {
        if (carouselRef.current && slideWidth) {
            carouselRef.current.scrollBy({
                left: direction === "left" ? -slideWidth : slideWidth,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="relative w-full">
   


            {/* Carousel */}
            <div
                ref={carouselRef}
                className="flex flex-row-reverse gap-5 overflow-hidden scroll-smooth py-4 px-2"
            >
                {latestInterleaverPhotos.map((photo) => (
                    <div
                        key={photo.id}
                        className={`
            carousel-slide
            flex-shrink-0
            overflow-hidden
            cursor-pointer
            transition-transform
            hover:scale-105
            duration-300
            flex
            items-center
            justify-center
            ${photo.orientation === "square" ? "lg:w-50 xl:w-90 2xl:w-110 " : "lg:w-45 xl:w-80 2xl:w-90 "}
            `}
                    >
                        <img
                            src={photo.imageUrl}
                            alt={`Painting ${photo.id}`}
                            className="w-full h-auto object-cover"
                            onClick={()=>onPhotoClick(photo)}
                        />
                    </div>
                ))}

            </div>


            {/* Scroll Buttons */}

            <div className="ml-5 flex gap-2">

                <button
                    onClick={() => scroll("left")}
                    className="  z-10 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow"
                >
                    ◀
                </button>
                <button
                    onClick={() => scroll("right")}
                    className="z-10 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow"
                >
                    ▶
                </button>


            </div>
        </div>
    );
};

export default PaintingCarousel;
