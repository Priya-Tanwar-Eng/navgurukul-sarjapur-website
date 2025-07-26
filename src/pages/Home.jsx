import React from 'react';
import HeroCarousel from '../component/home/HeroCarousel';
import AboutCampus from '../component/home/AboutCampus';
import Testimonials from '../component/home/Testimonials';
import AlumniPlacements from '../component/home/AlumniPlacements';
import CallToAction from '../component/home/CallToAction';
import Footer from '../component/Footer';

export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      <HeroCarousel />
      <AboutCampus />
      <section className="py-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">Placed Students Say...</h2>
        <Testimonials />
      </section>
      <AlumniPlacements />
      <CallToAction />
      <Footer />
    </div>
  );
}
