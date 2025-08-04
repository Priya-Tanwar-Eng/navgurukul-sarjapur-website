// Footer.jsx (New component, example structure)
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Social media icons

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Navgurukul</h3>
          <p className="text-sm leading-relaxed">
            Empowering underserved youth with free, high-quality software education and a path to successful tech careers.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-white transition duration-200">About Us</a></li>
            <li><a href="/programs" className="hover:text-white transition duration-200">Our Programs</a></li>
            <li><a href="/placements" className="hover:text-white transition duration-200">Placements</a></li>
            <li><a href="/contact" className="hover:text-white transition duration-200">Contact Us</a></li>
          </ul>
        </div>

        {/* Legal & Policy */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="/privacy-policy" className="hover:text-white transition duration-200">Privacy Policy</a></li>
            <li><a href="/terms-of-service" className="hover:text-white transition duration-200">Terms of Service</a></li>
            <li><a href="/guidelines" className="hover:text-white transition duration-200">Campus Guidelines</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Connect With Us</h3>
          <div className="flex space-x-4 text-2xl">
            <a href="https://facebook.com/navgurukul" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-200"><FaFacebook /></a>
            <a href="https://twitter.com/navgurukul" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-200"><FaTwitter /></a>
            <a href="https://linkedin.com/company/navgurukul" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-200"><FaLinkedin /></a>
            <a href="https://instagram.com/navgurukul" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-200"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-8">
        &copy; {new Date().getFullYear()} Navgurukul. All rights reserved.
      </div>
    </footer>
  );
}

// In Home.jsx, uncomment and import the Footer:
// import Footer from "../component/Footer";
// ...
// <CallToAction />
// <Footer />