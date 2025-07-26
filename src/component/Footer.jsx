import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p>© {new Date().getFullYear()} Navgurukul Sarjapur</p>
          <p className="text-sm text-gray-400">Privacy | Guidelines</p>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-blue-400"><Facebook size={20} /></a>
          <a href="#" className="hover:text-blue-400"><Twitter size={20} /></a>
          <a href="#" className="hover:text-blue-400"><Linkedin size={20} /></a>
        </div>
      </div>
    </footer>
  );
}
