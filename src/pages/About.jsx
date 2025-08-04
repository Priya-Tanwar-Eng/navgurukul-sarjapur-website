// About.jsx (Final Integrated Version)
import React from 'react';
import CampusOverview from '../component/about/CompusOverview'; // Corrected typo if existed
import CouncilsIntro from '../component/about/CouncilsIntro';
import CouncilRoles from '../component/about/CouncilRoles';
import MonthlySchedule from '../component/about/MonthlySchedule'; // Reordered for better flow
import CampusGallery from '../component/about/CampusGallery';
import Footer from '../component/Footer'; // Assuming you have a general Footer component

export default function About() {
  return (
    <div className="text-gray-800 bg-gray-50 min-h-screen flex flex-col"> {/* Added min-h-screen and flex for footer stickiness */}
      <main className="flex-grow"> {/* Main content area */}
        <CampusOverview />
        <CouncilsIntro /> {/* Introduce councils before detailing roles */}
        <CouncilRoles />
        <MonthlySchedule /> {/* Place schedule after councils, as it relates to operations */}
        <CampusGallery />
      </main>
     
    </div>
  );
}