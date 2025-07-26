import React from "react";

const categories = ["All", "Event", "Story", "Guest Lecture"];

export default function BlogFilters({ selected, onSelect }) {
  return (
    <div className="flex justify-center flex-wrap gap-3">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            selected === cat
              ? "bg-indigo-600 text-white"
              : "bg-gray-100 text-gray-800 hover:bg-indigo-100"
          }`}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
