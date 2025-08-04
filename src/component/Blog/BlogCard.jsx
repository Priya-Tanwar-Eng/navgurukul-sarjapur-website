import React from "react";
import { Link } from "react-router-dom";
import { FaPlayCircle, FaCalendarAlt } from 'react-icons/fa'; 

export default function BlogCard({ blog }) {
  const mediaContent = blog.image ? (
    <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out" />
  ) : blog.video ? (
    <div className="relative w-full h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
      <iframe
        className="w-full h-full object-cover"
        src={blog.video.replace("watch?v=", "embed/")} 
        title={blog.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <FaPlayCircle className="text-white text-5xl" />
      </div>
    </div>
  ) : (
    <div className="w-full h-48 bg-blue-100 flex items-center justify-center text-indigo-800 text-lg font-semibold px-4 text-center">
      No Image/Video Available
    </div>
  );

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition duration-300 ease-in-out group">
      {mediaContent}
      <div className="p-5 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug">{blog.title}</h3>
          <p className="text-gray-600 mt-2 text-base line-clamp-3">{blog.content}</p> 
        </div>
        <div className="mt-4">
          <p className="text-xs text-indigo-800 font-bold uppercase tracking-wider mb-2">{blog.category}</p>
          {blog.date && (
            <p className="text-sm text-gray-500 flex items-center">
              <FaCalendarAlt className="mr-2 text-gray-400" /> {blog.date}
            </p>
          )}
          <Link
            to={`/blog/${blog.id}`}
            className="mt-4 inline-flex items-center text-indigo-800 font-semibold text-base hover:text-indigo-600 transition duration-300"
          >
            Read More <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </Link>
        </div>
      </div>
    </div>
  );
}