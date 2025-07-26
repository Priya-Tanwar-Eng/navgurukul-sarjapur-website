import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
    

  return (
    <nav className="relative w-full h-16 bg-white flex justify-between px-6 md:px-10 rounded-lg shadow-lg">
      <div className="h-10 w-16">
        <img
          src="https://tse3.mm.bing.net/th/id/OIP.Lw8-rA35CPhJbb0oi4D5AAHaHb?pid=Api"
          alt="Logo"
        />
      </div>
      <div className="md:hidden ">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none flex flex-col md:flex-row md:space-x-2 items-center md:mt-0 z-10 transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden md:flex'}`}>
        <Link to="/" className="py-2 px-4">Home</Link>
        <Link to="/about" className="py-2 px-4">About-Us</Link>
        <Link to="/council" className="py-2 px-4">Council</Link>
        <Link to="/blogs" className="py-2 px-4">Blogs</Link>
        <Link to="/enroll" className="py-2 px-4">Enroll</Link>
        <Link to="/contact" className="py-2 px-4">Contact-Us</Link>
      </div>
    </nav>
  );
}
