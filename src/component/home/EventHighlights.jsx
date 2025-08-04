import React from 'react';
import { FaLaptopCode, FaUsers, FaLightbulb, FaFemale } from 'react-icons/fa'; 

const events = [
  { text: "Hackathon 2025: 20+ apps built in 48 hrs", icon: <FaLaptopCode /> },
  { text: "Alumni Meet: 20+ professionals attended", icon: <FaUsers /> },
  { text: "Tech for Good Summit: AI & Social Impact", icon: <FaLightbulb /> },
  { text: "Women's Coding Week: 100+ women participated", icon: <FaFemale /> },
];

export default function EventHighlights() {
  return (
    <section className="py-16 bg-gray-100 px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Campus Highlights & Achievements</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="text-indigo-800 text-3xl mt-1">
              {event.icon}
            </div>
            <p className="text-lg text-gray-800 flex-1">
              {event.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

