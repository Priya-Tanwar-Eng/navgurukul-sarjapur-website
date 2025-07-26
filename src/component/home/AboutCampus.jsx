import React from 'react';
import campusImg from '../../assets/1.png';

export default function AboutCampus() {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto flex flex-col md:flex-row gap-6 items-center">
      <img
        src={campusImg}
        alt="Navgurukul Sarjapur Campus"
        className="w-full md:w-1/2 rounded-xl shadow-lg"
      />
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">About Navgurukul Sarjapur</h2>
        <p className="text-lg text-gray-700 leading-7 text-justify">
          Navgurukul Sarjapur is a residential tech campus that provides free, high-quality software education to underserved youth. It fosters a culture of self-learning, collaboration, and community. Students build real projects and prepare for tech careers in a supportive peer environment.
        </p>
      </div>
    </section>
  );
}
