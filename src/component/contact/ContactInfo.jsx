import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactInfo() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl shadow-xl mb-12 border border-blue-100">
      <h2 className="text-3xl font-extrabold text-indigo-800 mb-8 text-center">Campus Location & Reach Us</h2>

      <div className="grid md:grid-cols-3 gap-8 text-gray-700 mb-10">
        <div className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-md border-b-2  transform hover:scale-105 transition duration-300">
          <MapPin className="text-indigo-600 w-10 h-10 mb-4" />
          <h3 className="font-bold text-xl text-indigo-800 mb-2">Our Address</h3>
          <p className="text-base leading-relaxed">
            Navgurukul Campus,<br />Sarjapur Road, Bangalore,<br />Karnataka, India
          </p>
        </div>

        <div className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-md border-b-2  transform hover:scale-105 transition duration-300">
          <Phone className="text-indigo-600 w-10 h-10 mb-4" />
          <h3 className="font-bold text-xl text-indigo-800 mb-2">Call Us</h3>
          <a href="tel:+919876543210" className="text-base text-blue-600 hover:underline">
            +91 98765 43210
          </a>
        </div>

        <div className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-md border-b-2  transform hover:scale-105 transition duration-300">
          <Mail className="text-indigo-600 w-10 h-10 mb-4" />
          <h3 className="font-bold text-xl text-indigo-800 mb-2">Email Us</h3>
          <a href="mailto:contact@navgurukul.org" className="text-base text-blue-600 hover:underline">
            contact@navgurukul.org
          </a>
        </div>
      </div>

      <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.314980649525!2d77.77884487508362!3d12.89436448740264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13982f1b49cf%3A0x1d3a51f0c2d3a3d!2sNavgurukul%20Sarjapur%20Campus!5e0!3m2!1sen!2sin!4v1701000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Navgurukul Sarjapur Campus Location"
        ></iframe>
      </div>
    </section>
  );
}