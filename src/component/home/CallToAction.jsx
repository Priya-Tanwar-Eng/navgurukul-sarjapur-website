import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CallToAction() {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-blue-600 text-white text-center px-6">
      <h2 className="text-3xl font-bold mb-4">Ready to Change Your Life?</h2>
      <p className="text-lg mb-6">Apply to Navgurukul Sarjapur and start your tech journey today.</p>
      <button
        onClick={() => navigate('/apply')}
        className="bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-blue-100"
      >
        Apply Now
      </button>
    </section>
  );
}
