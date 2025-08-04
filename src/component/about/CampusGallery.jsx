import React from 'react';
import img1 from '../../assets/nav4.jpeg';
import img2 from '../../assets/nav5.jpeg';
import img3 from '../../assets/nav6.jpeg';
import img4 from '../../assets/nav7.jpeg';
import img5 from '../../assets/nav8.jpeg';
import img6 from '../../assets/nav9.jpeg';
import img7 from '../../assets/nav10.jpeg';
import img8 from '../../assets/nav11.jpeg';
import img9 from '../../assets/nav5.jpeg'; 

const images = [
  { src: img1, alt: "Students collaborating in a coding session" },
  { src: img2, alt: "Campus greenery and outdoor study area" },
  { src: img3, alt: "Hackathon in progress, students engaged" },
  { src: img4, alt: "A group of students presenting a project" },
  { src: img5, alt: "Common area for relaxation and discussion" },
  { src: img6, alt: "Library or reading nook on campus" },
  { src: img7, alt: "Campus dining area or kitchen" },
  { src: img8, alt: "Students participating in an outdoor activity" },
  { src: img9, alt: "Evening view of the campus buildings" },
];

export default function CampusGallery() {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-white to-blue-50"> 
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">A Glimpse Into Campus Life</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"> 
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer" 
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500 ease-in-out" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 group-hover:bg-opacity-0 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}