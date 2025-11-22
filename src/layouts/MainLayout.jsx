import { Outlet } from "react-router-dom";
import Navbar from "@/components/ui/Navbar";

export default function MainLayout() {
  return (
    <>
      {/* Navbar at the top */}
      <Navbar />

      {/* Page content wrapper with responsive margins/padding */}
      <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-12 pt-6">
        <Outlet /> {/* Render the routed page content here */}
      </div>

      {/* TODO: footer */}


    </>
  );
}
