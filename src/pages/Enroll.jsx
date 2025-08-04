import React from "react";
import EligibilitySection from "../component/Enroll/EligibilitySection";
import ProgramsOffered from "../component/Enroll/ProgramsOffered";
import EnrollmentSteps from "../component/Enroll/EnrollmentSteps";
import { Link } from "react-router-dom";

export default function EnrollPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 bg-white"> 
      <header className="text-center mb-16 pt-8 pb-4"> 
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-5 leading-tight">
          Ready to <span className="text-indigo-800">Transform</span> Your Future?
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
          Embark on an extraordinary learning journey with Navgurukul. Discover our programs, understand the simple steps to join, and unlock your potential.
        </p>
        <div className="mt-8">
          <Link
            to="/contact"
            className="inline-flex items-center bg-indigo-800 text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:bg-indigo-600 transition duration-300 transform hover:scale-105"
          >
            Apply Now & Start Your Journey
            <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </Link>
        </div>
      </header>

      <ProgramsOffered /> 
      <EnrollmentSteps />
      <EligibilitySection />

      <section className="text-center mt-16 bg-blue-100 p-8 rounded-2xl shadow-inner">
        <h2 className="text-3xl font-bold text-indigo-800 mb-4">Have Questions?</h2>
        <p className="text-lg text-gray-700 mb-6">
          Our team is here to help you every step of the way. Reach out to us for more information.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center bg-indigo-800 text-white font-bold px-6 py-3 rounded-full text-lg shadow hover:bg-indigo-600 transition duration-300"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
}