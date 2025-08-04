import React from "react";
import navgurukul from "../../assets/navgurukul.png"

export default function AboutCampus() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center"> 
      <img
        src={navgurukul}
        alt="Navgurukul Sarjapur Campus"
        className="w-full h-72 md:w-1/2 md:h-96 object-cover rounded-2xl shadow-xl transform hover:scale-102 transition duration-300 ease-in-out" 
      />

      <div className="md:w-1/2">
        <h2 className="text-4xl font-extrabold mb-5 text-gray-900">About Navgurukul Sarjapur</h2> 
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          Navgurukul Sarjapur is a transformative residential tech campus dedicated to providing free,
          high-quality software education to deserving underserved youth. We cultivate a dynamic environment
          that fosters self-learning, intensive collaboration, and strong community bonds. Our students
          gain practical experience by building real-world projects, comprehensively preparing them
          for successful tech careers within a supportive, peer-driven ecosystem.
        </p>
        <ul className="mt-6 text-gray-700 space-y-2">
            <li className="flex items-center"><span className="text-indigo-800mr-2">✔</span> 100% Free & Residential Program</li>
            <li className="flex items-center"><span className="text-indigo-800 mr-2">✔</span> Hands-on Project-Based Learning</li>
            <li className="flex items-center"><span className="text-indigo-800 mr-2">✔</span> Strong Industry Placement Record</li>
        </ul>
      </div>
    </section>
  );
}