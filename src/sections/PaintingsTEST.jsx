import PortfolioGrid from "@/components/ui/PortfolioGrid";

import { useState, useEffect } from "react";

import photos from "@/data/photos.js";
import { Overlay } from "@radix-ui/react-dialog";
import PhotoOverlay from "../components/ui/PhotoOverlay";
import MasonryGallery from "../components/ui/MasonryGallery";


export default function PaintingsPage() {

    const [selectedPhoto, setSelectedPhoto] = useState(null);

    // Disable scroll when any overlay is open
    const isOverlayOpen = selectedPhoto !== null;

    useEffect(() => {
        if (isOverlayOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOverlayOpen]);


    function handlePhotoClick(photo) {
        /* Open photo overlay */
        setSelectedPhoto(photo);
    }

    function handleCloseOverlay() {
        setSelectedPhoto(null);
    }



    return (
        <>

            <h1>Paintings Page</h1>

            <PortfolioGrid onPhotoClick={handlePhotoClick} photos={photos} />

             {/* Only shown when photo is selected */}

            <PhotoOverlay selectedPhoto={selectedPhoto} handleCloseOverlay={handleCloseOverlay} />




        </>

    )
}



