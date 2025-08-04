import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa'; 

export default function CallToAction() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-800 text-white text-center px-6 shadow-inner"> {/* Gradient background and shadow */}
      <h2 className="text-4xl font-bold mb-5 leading-tight">Ready to Transform Your Future?</h2> {/* Stronger heading */}
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Apply to Navgurukul Sarjapur today and embark on a life-changing journey towards a fulfilling tech career.
      </p>
      <button
        onClick={() => navigate('/contact')}
        className="bg-white text-indigo-800 font-extrabold px-8 py-4 rounded-full hover:bg-blue-100 hover:text-blue-900 transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center mx-auto text-lg" // Enhanced button styling
      >
        Apply Now <FaArrowRight className="ml-3 text-xl" />
      </button>
    </section>
  );
}