import React from "react";
import { FaCode, FaChartLine, FaPaintBrush } from 'react-icons/fa'; 

const programs = [
  {
    title: "SOP: School of Programming",
    color: "indigo",
    icon: <FaCode />,
    content: [
      "Duration: 18 months, intensive and practical.",
      "Syllabus: Comprehensive curriculum covering HTML, CSS, JavaScript, React, Backend Development (Node.js/Python), Data Structures, and Algorithms.",
      "Assessments: Weekly coding tasks, challenging project submissions, and participation in hackathons to build a strong portfolio."
    ],
  },
  {
    title: "SOB: School of Business",
    color: "green",
    icon: <FaChartLine />,
    content: [
      "Focus Areas: Develop expertise in Effective Communication, Entrepreneurship Fundamentals, Business Operations, and Core Business Principles.",
      "Skills Required: Strong Logical Thinking, Proactive Leadership, and Collaborative Teamwork are essential for success."
    ],
  },
  {
    title: "SODA: School of Digital Arts",
    color: "pink",
    icon: <FaPaintBrush />,
    content: [
      "Modules: Dive into Graphic Design, Professional Video Editing, intuitive UI/UX Design principles, and impactful Digital Storytelling techniques.",
      "Learning Style: Hands-on, creative, and technical project-based learning to build a versatile portfolio."
    ],
  },
];

export default function ProgramsOffered() {
  return (
    <section className="mb-12 py-8 bg-white rounded-3xl shadow-xl"> 
      <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-10">Our Transformative Programs</h2>
      <div className="grid md:grid-cols-3 gap-8 px-6"> 
        {programs.map((prog, i) => (
          <div
            key={i}
            className={`border-t border-gray-300 bg-white rounded-xl shadow-lg p-7 transform hover:scale-[1.02] transition duration-300 ease-in-out flex flex-col`} 
          >
            <div className={`text-${prog.color}-600 text-5xl mb-4 text-center`}>
              {prog.icon}
            </div>
            <h3 className={`text-2xl font-bold text-${prog.color}-700 mb-4 text-center`}>
              {prog.title}
            </h3>
            <ul className="list-none pl-0 text-gray-700 space-y-3 flex-grow"> 
              {prog.content.map((line, index) => (
                <li key={index} className="flex items-start text-base">
                  <span className="text-indigo-800 mr-2 flex-shrink-0 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  </span>
                  <span dangerouslySetInnerHTML={{ __html: line }}></span> 
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}