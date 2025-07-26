import React from 'react';
import campusImg from '../../assets/10.png';

export default function CampusOverview() {
  return (
    <section className="px-6 py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 items-center">
        <img src={campusImg} alt="Campus" className="w-full md:w-1/2 rounded-lg shadow-md" />
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Our Campus & Values</h2>
          <p className="text-lg leading-7 text-gray-700 text-justify">
            Navgurukul Sarjapur is more than just a tech campus. It is a space for equality, peer-learning,
            and self-governance. Our community fosters leadership, curiosity, and collaboration. 
            Learners grow through responsibilities, projects, and shared decision-making.
          </p>
        </div>
      </div>
    </section>
  );
}
