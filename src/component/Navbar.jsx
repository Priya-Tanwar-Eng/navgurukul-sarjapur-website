import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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

      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none flex flex-col md:flex-row md:space-x-2 items-center md:mt-0 z-50 transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden md:flex"
        }`}
      >
        <NavLink
          to="/" className={({ isActive }) =>  `py-2 px-4 hover:text-indigo-400 ${ isActive ? "text-indigo-800 font-semibold" : ""}`}
        >
          Home
        </NavLink>

        <NavLink
          to="/about" className={({ isActive }) => `py-2 px-4 hover:text-indigo-400 ${  isActive ? "text-indigo-800 font-semibold" : ""}`}
         >
          About-Us
        </NavLink>

        {/* <NavLink to="/council" className="py-2 px-4">Council</NavLink> */}

        <NavLink
          to="/blogs" className={({ isActive }) => `py-2 px-4 hover:text-indigo-400 ${  isActive ? "text-indigo-800 font-semibold" : "" }`}
        >
          Blogs
        </NavLink>

        <NavLink
          to="/enroll" className={({ isActive }) => `py-2 px-4 hover:text-indigo-400 ${ isActive ? "text-indigo-800 font-semibold" : ""  }`}
        >
          Enroll
        </NavLink>

        <NavLink
          to="/contact" className={({ isActive }) => `py-2 px-4 hover:text-indigo-400 ${isActive ? "text-indigo-800 font-semibold" : "" }` }
        >
          Contact-Us
        </NavLink>
      </div>
    </nav>
  );
}
