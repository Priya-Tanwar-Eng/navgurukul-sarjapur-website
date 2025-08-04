import React from 'react';
import campusImg from '../../assets/navgurukul.jpeg'; 

export default function CampusOverview() {
  return (
    <section className="px-6 py-16 bg-gradient-to-br from-blue-50 to-white"> 
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center"> 
        <div className="md:w-1/2 order-2 md:order-1"> 
          <h2 className="text-4xl md:text-5xl font-extrabold mb-5 text-gray-900 leading-tight">
            Our Campus: A Hub for <span className="text-indigo-800">Innovation & Community</span>
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 text-justify mb-4">
            Navgurukul Sarjapur transcends the traditional campus model. It is a vibrant ecosystem
            built on the pillars of equality, peer-learning, and radical self-governance. Here,
            every learner is an active participant in shaping their environment and future.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 text-justify">
            Our community fosters essential qualities like leadership, boundless curiosity, and deep collaboration.
            Through meaningful responsibilities, real-world projects, and shared decision-making,
            learners don't just acquire technical skills—they grow into confident, capable individuals
            ready to make an impact.
          </p>
        </div>
        <img
          src={campusImg}
          alt="Navgurukul Sarjapur Campus Overview"
          className="w-full md:w-1/2 rounded-2xl shadow-xl object-cover h-80 md:h-96 transform hover:scale-102 transition duration-300 order-1 md:order-2" 
        />
      </div>
    </section>
  );
}