import React from 'react';
import { FaCalendarAlt, FaHandsHelping, FaUtensils } from 'react-icons/fa'; 
export default function MonthlySchedule() {
  const schedule = [
    { icon: <FaUtensils />, text: "Each learner group, consisting of 4 members, is assigned kitchen duty twice a month to ensure shared responsibility and a healthy environment." },
    { icon: <FaHandsHelping />, text: "Crucial weekly council meetings are held every Saturday, where learners discuss progress, challenges, and collaboratively make decisions affecting campus life." },
    { icon: <FaCalendarAlt />, text: "A monthly community planning session brings everyone together to strategize for the upcoming month, fostering collective ownership and direction." },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Our Vibrant Campus Rhythm</h2>
        <div className="space-y-8">
          {schedule.map((item, index) => (
            <div key={index} className="flex items-start bg-blue-50 p-6 rounded-lg shadow-md ">
              <div className="text-indigo-800 text-3xl mr-5 mt-1">{item.icon}</div>
              <p className="text-lg text-gray-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.text }}></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}