import React, { useState } from "react";
import BlogCard from "../component/Blog/BlogCard";
import BlogFilters from "../component/Blog/BlogFilters";

const blogData = [
  {
    id: 1,
    title: "Hackathon 2025: 20+ apps built in 48 hrs",
    category: "Event",
    image: "/images/hackathon.jpg",
    video: "",
    content: "Learners built innovative apps to solve real-life problems during our 48-hour hackathon.",
  },
  {
    id: 2,
    title: "My Navgurukul Journey - Priya",
    category: "Story",
    image: "/images/story.jpg",
    video: "",
    content: "A personal journey of growth, struggles, and success at Navgurukul.",
  },
  {
    id: 3,
    title: "Guest Lecture: Women in Tech",
    category: "Guest Lecture",
    image: "",
    video: "https://www.youtube.com/embed/VIDEO_ID",
    content: "Industry leaders shared experiences and tips to grow in the tech field.",
  },
];

export default function Blog() {
  const [filter, setFilter] = useState("All");

  const filteredBlogs =
    filter === "All"
      ? blogData
      : blogData.filter((blog) => blog.category === filter);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800"> Navgurukul Blog</h2>
      <BlogFilters selected={filter} onSelect={setFilter} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
