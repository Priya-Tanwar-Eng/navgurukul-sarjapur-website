import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition">
      {blog.image && (
        <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
      )}
      {blog.video && (
        <iframe
          className="w-full h-48"
          src={blog.video}
          title={blog.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{blog.title}</h3>
        <p className="text-gray-600 mt-2 text-sm">{blog.content.slice(0, 100)}...</p>
        <p className="text-xs text-blue-600 mt-2 font-medium">{blog.category}</p>
        <Link to={`/blog/${blog.id}`} className="text-indigo-500 mt-3 inline-block text-sm hover:underline">
          Read More →
        </Link>
      </div>
    </div>
  );
}
