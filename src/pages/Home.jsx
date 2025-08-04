import React from "react";
import HeroCarousel from "../component/home/HeroCarousel";
import AboutCampus from "../component/home/AboutCampus";
import Testimonials from "../component/home/Testimonials";
import AlumniPlacements from "../component/home/AlumniPlacements";
import CallToAction from "../component/home/CallToAction";
import Footer from "../component/Footer";
import EventHighlights from "../component/home/EventHighlights";


export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      <div className="relative">
        <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-white text-center bg-black bg-opacity-40 p-4"> {/* Increased opacity slightly for better contrast */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg uppercase font-sans leading-tight"> {/* Adjusted font and size */}
            Navgurukul Sarjapur
          </h1>
          <p className="text-lg md:text-2xl mt-3 font-medium italic drop-shadow-sm max-w-2xl">
            Empowering underserved youth with free, high-quality tech education for a brighter future. {/* More descriptive tagline */}
          </p>
        </div>
        <HeroCarousel />
      </div>
       <AboutCampus />
       <EventHighlights />
     <section className="py-12 bg-gray-50">
  <Testimonials />
 </section>
      <AlumniPlacements />
      <CallToAction />
      {/* <Footer /> */}
    </div>
  );
}

  
