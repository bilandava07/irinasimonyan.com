
import { useState, useEffect, useRef } from "react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
    SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";


import { Link } from "react-router-dom";




export default function Navbar() {



    const [open, setOpen] = useState(false);

    const handleLinkClick = () => setOpen(false);


    const [isScrolled, setIsScrolled] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!navRef.current) return;

            const navHeight = navRef.current.offsetHeight;
            const heroHeight = window.innerHeight; // or measure hero section dynamically if needed

            if (window.scrollY > heroHeight - navHeight) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // initial check in case page is not at top

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    return (
        <nav ref={navRef} className="fixed top-0 left-0 w-full z-30">
            {/* Background */}
            <div className={`w-full h-18 border-b-2 border-foreground transition-colors duration-100 backdrop-blur-md ${isScrolled ? "bg-background/90 shadow-md" : "bg-transparent backdrop-blur-none"
                }`}></div>

            {/* Content */}
            <div className={`absolute h-[100%] inset-0 flex items-center justify-between px-4 md:px-8 ${isScrolled ? "text-foreground/90" : "text-black/90"}`}>
                {/* Logo Name */}

                <Link to="/" className="text-2xl font-bold">
                    <h1>Iryna Symonian</h1>
                </Link>



                {/* Middle Section */}
                <div className="flex items-center space-x-1 md:space-x-6">
                    {/* Desktop links */}
                    <div className="hidden md:flex items-center space-x-6 text-lg ">
                        <Link to="/"
                            className="inline-block hover:scale-105 transition-transform duration-300"
                        >
                            Home
                        </Link>
                        <Link to="/"
                            className="inline-block  hover:scale-105 transition-transform duration-300"
                        >
                            Paintings
                        </Link>
                        <Link to="/workshops"
                            className="inline-block  hover:scale-105 transition-transform duration-300"
                        >
                            Workshops
                        </Link>
                        <Link to="/about"
                            className="inline-block  hover:scale-105 transition-transform duration-300"
                        >
                            about
                        </Link>

                    </div>





                    {/* Mobile Menu (hamburger) */}
                    <div className="md:hidden   ">
                        <Sheet open={open} onOpenChange={setOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu className="w-6 h-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="p-6 space-y-4 max-w-[50vw]">
                                <SheetHeader>
                                    <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
                                    <SheetDescription className="sr-only">
                                        Navigation links for the mobile view of the site.
                                    </SheetDescription>
                                </SheetHeader>

                                <a
                                    href="#hero"
                                    className="block text-lg font-medium"
                                    onClick={handleLinkClick}
                                >
                                    Home
                                </a>
                                <a
                                    href="#portfolio"
                                    className="block text-lg font-medium"
                                    onClick={handleLinkClick}
                                >
                                    Portfolio
                                </a>
                                <a
                                    href="#contact"
                                    className="block text-lg font-medium"
                                    onClick={handleLinkClick}
                                >
                                    Contact
                                </a>
                            </SheetContent>
                        </Sheet>
                    </div>

                </div>
                {/* Language Selection */}
                <div className="hidden md:flex items-center space-x-6 text-lg ">
                    ua | en
                </div>

            </div>
        </nav>
    );
}