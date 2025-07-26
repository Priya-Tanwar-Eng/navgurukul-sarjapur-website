import React from 'react';

const councils = [
  {
    title: "Health Facilitator",
    description: "Ensures physical and mental wellbeing through health checks, awareness sessions, and emotional support channels.",
  },
  {
    title: "Placement Coordinator",
    description: "Supports resume building, practice interviews, and placement preparation for final-year learners.",
  },
  {
    title: "Hackathon Incharge",
    description: "Organizes monthly hackathons and coding contests to enhance problem-solving and teamwork.",
  },
  {
    title: "Food Coordinator",
    description: "Monitors kitchen cleanliness, grocery budgets, and ensures balanced nutrition with the help of teams.",
  },
  {
    title: "Operations & Others",
    description: "Includes library, discipline, visitor management, peer-learning, and tech lab councils.",
  },
];

export default function CouncilRoles() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Council Roles & Responsibilities</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {councils.map((council, i) => (
            <div key={i} className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{council.title}</h3>
              <p className="text-gray-700 text-sm">{council.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
