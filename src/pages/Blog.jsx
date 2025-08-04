import React, { useState } from "react";
import BlogCard from "../component/Blog/BlogCard";
import BlogFilters from "../component/Blog/BlogFilters";
import blogImage1 from "../assets/nav8.jpeg"; 
import blogImage2 from "../assets/nav5.jpeg"; 
import blogImage3 from "../assets/nav7.jpeg"; 

const blogData = [
  {
    id: 1,
    title: "Hackathon 2025: Innovation Unleashed in 48 Hours",
    category: "Event",
    image: blogImage1,
    video: "",
    content: "Students built innovative apps to solve real-life problems during our intense 48-hour hackathon, showcasing remarkable creativity and teamwork.",
    date: "July 25, 2025",
  },
  {
    id: 2,
    title: "My Navgurukul Journey: Priya's Path to Tech Success",
    category: "Story",
    image: blogImage2,
    video: "",
    content: "A deeply personal account of growth, overcoming challenges, and achieving dreams through the Navgurukul experience.",
    date: "July 18, 2025",
  },
  {
    id: 3,
    title: "Guest Lecture Series: Empowering Women in Tech",
    category: "Event",
    image: blogImage3, 
    video: "", 
    content: "Inspiring industry leaders shared their valuable experiences, career insights, and practical tips for success in the ever-evolving tech field.",
    date: "July 10, 2025",
  },
  {
    id: 4,
    title: "Alumni Spotlight: From Campus to Microsoft",
    category: "Success",
    image: "",
    video: "",
    content: "Read the inspiring journey of one of our graduates who successfully secured a position at Microsoft, sharing their advice and triumphs.",
    date: "July 01, 2025",
  },
  {
    id: 5,
    title: "Community Impact: Tech for Good Initiatives",
    category: "Event",
    image: "",
    video: "",
    content: "Explore how Navgurukul students are leveraging technology to create positive social change in their communities.",
    date: "June 25, 2025",
  },
];

export default function Blog() {
  const [filter, setFilter] = useState("All");

  const filteredBlogs =
    filter === "All"
      ? blogData
      : blogData.filter((blog) => blog.category === filter);

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* <div className="bg-blue-700 text-white py-16 text-center shadow-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Our Latest Insights & Stories</h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto opacity-90">
          Stay updated with campus events, student journeys, and tech trends from Navgurukul.
        </p>
      </div> */}

      <div className="max-w-6xl mx-auto px-4 py-12"> 
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Navgurukul Blog Posts</h2>
        <BlogFilters selected={filter} onSelect={setFilter} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
          {filteredBlogs.length === 0 && (
            <div className="col-span-full text-center py-10 text-gray-600 text-lg">
              No blog posts found for this category.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}