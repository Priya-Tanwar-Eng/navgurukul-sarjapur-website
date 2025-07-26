import React from 'react';
import img1 from '../../assets/4.png';
import img2 from '../../assets/5.png';
import img3 from '../../assets/6.png';

const images = [img1, img2, img3];

export default function CampusGallery() {
  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Campus Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Campus ${index + 1}`}
              className="rounded-lg shadow-md object-cover w-full h-64"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
