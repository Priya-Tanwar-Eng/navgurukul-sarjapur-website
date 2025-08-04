import React from 'react';
import { FaHeartbeat, FaUserTie, FaCode, FaUtensils, FaBookOpen, FaTools, FaShieldAlt } from 'react-icons/fa'; 

const councils = [
  {
    title: "Health Facilitator",
    description: "Ensures physical and mental well-being through health checks, awareness sessions, and accessible emotional support channels.",
    icon: <FaHeartbeat />
  },
  {
    title: "Placement Coordinator",
    description: "Spearheads resume building workshops, conducts mock interviews, and provides comprehensive placement preparation for final-year learners.",
    icon: <FaUserTie />
  },
  {
    title: "Hackathon Incharge",
    description: "Organizes stimulating monthly hackathons and coding contests, fostering innovation, problem-solving, and collaborative teamwork.",
    icon: <FaCode />
  },
  {
    title: "Food Coordinator",
    description: "Oversees kitchen cleanliness, manages grocery budgets, and ensures balanced nutrition for the community with team support.",
    icon: <FaUtensils />
  },
  {
    title: "English Coordinator",
    description: "Promotes English proficiency via interactive speaking clubs, grammar sessions, and regular practice, crucial for academic and career growth.",
    icon: <FaBookOpen />
  },
  {
    title: "Facility Manager",
    description: "Manages campus infrastructure, including maintenance, repairs, and cleanliness, ensuring seamless operation of all facilities.",
    icon: <FaTools />
  },
  {
    title: "Discipline Coordinator",
    description: "Maintains a safe, respectful, and productive campus environment by guiding learners on community guidelines and conflict resolution.",
    icon: <FaShieldAlt />
  }
];

export default function CouncilRoles() {
  return (
    <section className="py-16 px-6 bg-gray-50"> 
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Our Learner-Led Council Roles</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"> 
          {councils.map((council, i) => (
            <div key={i} className="bg-white p-7 shadow-lg rounded-xl border border-gray-100 transform hover:scale-102 hover:shadow-xl transition duration-300 ease-in-out flex flex-col items-center text-center"> 
              <div className="text-indigo-800 text-4xl mb-4">
                {council.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{council.title}</h3>
              <p className="text-gray-700 text-base leading-relaxed">{council.description}</p> 
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}