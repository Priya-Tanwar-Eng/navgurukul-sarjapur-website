import React from "react";
import { FaFileAlt, FaClipboardCheck, FaEnvelopeOpenText, FaLaptopHouse, FaTasks } from 'react-icons/fa'; 

export default function EnrollmentSteps() {
  const steps = [
    { icon: <FaFileAlt />, text: "Begin your journey by filling out our comprehensive online application form with all your relevant details." },
    { icon: <FaClipboardCheck />, text: "Participate in our entrance test and/or interview, designed to assess your potential and fit for the program." },
    { icon: <FaEnvelopeOpenText />, text: "Await your selection email; if shortlisted, you will receive an official offer to join Navgurukul." },
    { icon: <FaLaptopHouse />, text: "Choose your learning environment: join remotely from anywhere, or embrace the immersive experience on campus." },
    { icon: <FaTasks />, text: "Demonstrate consistent progress by clearing regular tasks and assessments to maintain your standing in the program and ensure continuous growth." },
  ];

  return (
    <section className="bg-gradient-to-l from-indigo-50 to-blue-50 p-8 rounded-3xl shadow-lg border border-indigo-100">
      <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-10">Your Path to Joining Navgurukul</h2>
      <ol className="relative border-l-4 border-indigo-300 space-y-8 ml-4 md:ml-12"> 
        {steps.map((step, i) => (
          <li key={i} className="mb-10 ml-6">
            <div className="absolute w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center -left-5 top-0 text-white text-xl shadow-md">
              {step.icon}
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="text-xl font-bold text-indigo-700 mb-2">Step {i + 1}</h3>
              <p className="text-gray-800 text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: step.text }}></p>
            </div>
          </li>
        ))}
      </ol>
      <p className="text-base mt-8 text-center italic text-gray-600">
        Note: Each program is meticulously designed with its own specific progress criteria, ensuring your performance and commitment align with our high standards for learning and success.
      </p>
    </section>
  );
}