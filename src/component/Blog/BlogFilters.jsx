import React from "react";

const categories = ["All", "Event", "Story", "Success"]; 

export default function BlogFilters({ selected, onSelect }) {
  return (
    <div className="flex justify-center flex-wrap gap-4 mb-8"> 
      {categories.map((cat) => (
        <button
          key={cat}
          className={`px-5 py-2 rounded-full text-base font-semibold transition-all duration-300 ease-in-out ${
            selected === cat
              ? "bg-indigo-800 text-white shadow-md" 
              : "bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-indigo-600"
          }`}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}