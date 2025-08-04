import React from "react";
import { FaGraduationCap, FaHourglassHalf } from 'react-icons/fa'; 

export default function EligibilitySection() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-3xl shadow-lg mb-12 border border-blue-100"> 
      <h2 className="text-3xl font-extrabold text-indigo-800 mb-6 text-center">Eligibility Requirements</h2>
      <p className="text-lg text-gray-700 text-center mb-6 max-w-2xl mx-auto">
        We look for dedicated individuals ready to commit to a transformative learning journey.
      </p>
      <ul className="grid md:grid-cols-2 gap-6 list-none p-0"> 
        <li className="flex items-start bg-white p-5 rounded-xl shadow-md border-l-4 ">
          <FaGraduationCap className="text-indigo-600 text-3xl mr-4 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">Educational Background</h3>
            <p className="text-gray-800 text-base leading-relaxed">
              Applicants must have successfully completed at least the 10th grade (or equivalent) from a recognized board.
            </p>
          </div>
        </li>
        <li className="flex items-start bg-white p-5 rounded-xl shadow-md border-l-4 ">
          <FaHourglassHalf className="text-indigo-600 text-3xl mr-4 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">Commitment to Learning</h3>
            <p className="text-gray-800 text-base leading-relaxed">
              A full-time commitment of 8 to 12 months is required, whether you choose our immersive on-campus experience or the flexible remote learning option.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}