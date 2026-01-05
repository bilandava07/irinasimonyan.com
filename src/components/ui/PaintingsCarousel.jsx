import * as React from "react"
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

    const [desktopApi, setDesktopApi] = React.useState();
    const [mobileApi, setMobileApi] = React.useState();






    return (
        <>

            <div className="relative w-full h-full md:h-auto lg:px-5 2xl:px-15">


                {/* DEKSTOP specific Carousel */}
                <Carousel
                    className="hidden md:block w-full mx-auto"
                    setApi={setDesktopApi}
                    opts={{
                        align: "start",
                        containScroll: "trim",
                        loop: true,
                    }}
                >
                    {/* Desktop absolutely positioned Gallery heading */}
                    <h2 className="hidden md:flex absolute justify-center items-center font-nanum lg:-translate-y-10 2xl:-translate-y-30 w-full lg:text-2xl 2xl:text-3xl  mb-6">{t("gallery")}</h2>

                    {/* DEKSTOP SLIDES */}
                    <CarouselContent >
                        {latestInterleaverPhotos.map((photo) => (
                            <CarouselItem
                                key={photo.id}
                                className="hidden md:flex py-20  md:basis-1/4 lg:basis-1/4 2xl:basis-1/5 flex justify-center items-center"
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


                    {/* Desktop absolutely positioned chevrons */}
                    <div className="hidden md:flex absolute lg:translate-10 2xl:translate-20 flex gap-5 lg:gap-3 2xl:gap-5 ">
                        <button
                            className="chevron-container"
                            onClick={() => desktopApi?.scrollPrev()}
                        >
                            <ChevronLeft className="chevron-sizing" />
                        </button>

                        <button
                            className="chevron-container "
                            onClick={() => desktopApi?.scrollNext()}
                        >
                            <ChevronRight className="chevron-sizing" />
                        </button>

                    </div>


                </Carousel>



                {/* Mobile Verision of the Carousel */}

                <Carousel
                    className=" md:hidden w-full h-full mx-auto"
                    setApi={setMobileApi}
                    opts={{
                        align: "start",
                        containScroll: "trim",
                        loop: true,
                    }}
                >






                    <div className="flex flex-col justify-center h-full gap-14 pt-20">

                        {/* Mobile Centered heading in flex flow */}
                        <h2 className="md:hidden flex justify-center items-center font-nanum text-2xl  w-full mb- ">{t("gallery")}</h2>

                        {/* Mobile SLIDES */}
                        <CarouselContent >
                            {latestInterleaverPhotos.map((photo) => (
                                <CarouselItem 
                                    key={photo.id}
                                    className="hidden md:flex basis-1/4 flex justify-center items-center p-[0.23rem]"
                                >
                                    <div
                                        className={`overflow-hidden flex justify-center items-center 
                                        ${photo.orientation === "square" ? "h-75" : "h-92"}`}
                                    >
                                        <img
                                            src={photo.imageUrl}
                                            alt={`Painting ${photo.id}`}
                                            className={`object-cover 
                                            ${photo.orientation === "square" ? "h-full" : "h-full"}`}
                                            onClick={() => onPhotoClick(photo)}
                                        />
                                    </div>
                                </CarouselItem>



                            ))}
                        </CarouselContent>


                        {/* Mobiel centered chevrons in flex flow */}
                        <div className=" flex gap-7 justify-center p-5">
                            <button
                                className="chevron-container"
                                onClick={() => mobileApi?.scrollPrev()}
                            >
                                <ChevronLeft className="chevron-sizing" />
                            </button>

                            <button
                                className="chevron-container "
                                onClick={() => mobileApi?.scrollNext()}
                            >
                                <ChevronRight className="chevron-sizing" />
                            </button>

                        </div>



                    </div>

                </Carousel>




            </div>

        </>
    )
}
