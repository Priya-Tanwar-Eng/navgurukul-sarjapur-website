import React from 'react';
import CampusOverview from '../component/about/CompusOverview';
import MonthlySchedule from '../component/about/MonthlySchedule';
import CouncilsIntro from '../component/about/CouncilsIntro';
import CouncilRoles from '../component/about/CouncilRoles';
import CampusGallery from '../component/about/CampusGallery';
import Footer from '../component/Footer';

export default function About() {
  return (
    <div className="text-gray-800">
      <CampusOverview />
      <MonthlySchedule />
      <CouncilsIntro />
      <CouncilRoles />
      <CampusGallery />
      {/* <Footer /> */}
    </div>
  );
}
