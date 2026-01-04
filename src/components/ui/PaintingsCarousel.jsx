import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { ChevronLeft, ChevronRight } from "lucide-react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import photos from "@/data/photos.js";

import { useTranslation } from 'react-i18next';


export default function PaintingsCarousel({ onPhotoClick }) {

    const { t } = useTranslation();


    const squarePhotos = photos.filter(photo => photo.orientation === "square");
    const verticalPhotos = photos.filter(photo => photo.orientation === "tall");

    const interleavedPhotos = [];
    const maxLength = Math.max(squarePhotos.length, verticalPhotos.length);
    for (let i = 0; i < maxLength; i++) {
        if (squarePhotos[i]) interleavedPhotos.push(squarePhotos[i]);
        if (verticalPhotos[i]) interleavedPhotos.push(verticalPhotos[i]);
    }

    const latestInterleaverPhotos = interleavedPhotos.slice(0, 8)

    const [api, setApi] = React.useState()



    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    )

    return (
        <>

            <div className="relative w-full lg:px-5 2xl:px-15">

                <Carousel
                    className="w-full   mx-auto"
                    setApi={setApi}
                    opts={{
                        align: "start",       
                        containScroll: "trim",
                        loop: true,
                    }}
                >
                    <h2 className="absolute flex justify-center items-center lg:-translate-y-10 2xl:-translate-y-30 w-full lg:text-2xl 2xl:text-3xl font-light mb-6">{t("gallery")}</h2>

                    {/* SLIDES */}
                    <CarouselContent >
                        {latestInterleaverPhotos.map((photo) => (
                            <CarouselItem
                                key={photo.id}
                                className="py-20  md:basis-1/4 lg:basis-1/4 2xl:basis-1/5 flex justify-center items-center"
                            >

                                <img
                                    src={photo.imageUrl}
                                    alt={`Painting ${photo.id}`}
                                    className={`${photo.orientation === "square" ? "lg:w-50 xl:w-90 2xl:w-120 " : "lg:w-45 xl:w-70 2xl:w-110 "} md:p-2 lg:p-2 xl:p-3 2xl:p-4h cursor-pointer transition-transform duration-300 hover:scale-103 shadow-2xl`}
                                    onClick={() => onPhotoClick(photo)}
                                />


                            </CarouselItem>



                        ))}
                    </CarouselContent>






                    <div className="absolute lg:translate-10 2xl:translate-20 flex lg:gap-3 2xl:gap-5 ">
                        <button
                            className="chevron-container"
                            onClick={() => api?.scrollPrev()}
                        >
                            <ChevronLeft className="chevron-sizing" />
                        </button>

                        <button
                            className="chevron-container "
                            onClick={() => api?.scrollNext()}
                        >
                            <ChevronRight className="chevron-sizing" />
                        </button>




                    </div>
                </Carousel>
            </div>

        </>
    )
}
