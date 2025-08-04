import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaCalendarAlt, FaShareAlt, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import blogPlaceholder from '../../assets/blog-placeholder.jpg';

export default function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null); 

  useEffect(() => {

    const mockBlogData = {
      id: parseInt(id), 
      title: "Hackathon 2025: Innovation Unleashed in 48 Hours",
      category: "Event",
      image: blogPlaceholder,
      date: "July 25, 2025",
      author: "Navgurukul Team",
      fullContent: `
        <p>The Navgurukul Sarjapur campus buzzed with energy last weekend as students immersed themselves in our annual <strong>48-hour Hackathon!</strong> This year, the challenge was to build innovative applications that address real-world community problems, encouraging out-of-the-box thinking and collaborative problem-solving.</p>
        <p>Over <strong>20 unique applications</strong> were developed, ranging from educational tools for rural communities to sustainable waste management solutions. The dedication and creativity displayed by our learners were truly inspiring.</p>
        <h3>Highlights of the Event:</h3>
        <ul>
          <li><strong>Diverse Solutions:</strong> Projects covered a wide spectrum of domains, demonstrating the breadth of skills acquired at Navgurukul.</li>
          <li><strong>Teamwork in Action:</strong> Students worked tirelessly in teams, showcasing exceptional collaboration and peer-learning.</li>
          <li><strong>Mentorship:</strong> Industry experts and alumni provided invaluable guidance, helping teams refine their ideas and overcome technical hurdles.</li>
          <li><strong>Pitches & Prizes:</strong> The hackathon culminated in exciting pitch sessions, where teams presented their prototypes to a panel of judges, with top projects receiving recognition and prizes.</li>
        </ul>
        <p>We believe such events are crucial for practical skill development and fostering a culture of innovation. Congratulations to all the participants for their incredible efforts!</p>
        <p>Stay tuned for more exciting events and updates from Navgurukul Sarjapur!</p>
      `,
    };
    setBlog(mockBlogData);
  }, [id]);

  if (!blog) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10 text-center text-gray-600">
        Loading blog post...
      </div>
    );
  }

  const shareUrl = window.location.href;

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 bg-white shadow-xl rounded-xl my-8">
      {blog.image && (
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-80 object-cover rounded-lg mb-8 shadow-md"
        />
      )}
      {blog.video && (
        <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden shadow-md">
          <iframe
            className="w-full h-full"
            src={blog.video}
            title={blog.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}

      <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
        {blog.title}
      </h1>
      <div className="flex items-center text-gray-500 text-sm mb-6 space-x-4">
        <span className="flex items-center">
          <FaCalendarAlt className="mr-2" /> {blog.date}
        </span>
        <span className="font-medium text-blue-600 uppercase">{blog.category}</span>
        {blog.author && <span>By {blog.author}</span>}
      </div>

      <div
        className="prose prose-lg max-w-none text-gray-700 leading-relaxed blog-content"
        dangerouslySetInnerHTML={{ __html: blog.fullContent }} 
      />

      <div className="mt-10 pt-6 border-t border-gray-200 flex items-center justify-between">
        <div className="text-lg font-semibold text-gray-800">
          Share This Article:
        </div>
        <div className="flex space-x-4 text-2xl">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-800 hover:text-blue-900 transition-colors duration-200"
            aria-label="Share on Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${encodeURIComponent(blog.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-800 hover:text-indigo-900 transition-colors duration-200"
            aria-label="Share on Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${encodeURIComponent(blog.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 hover:text-blue-900 transition-colors duration-200"
            aria-label="Share on LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="mt-16 border-t border-gray-200 pt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">More from Our Blog</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-5 rounded-lg shadow-sm hover:shadow-md transition duration-300">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">The Power of Peer Learning at Navgurukul</h3>
            <p className="text-gray-600 text-sm">Discover how our collaborative environment fosters rapid growth.</p>
            <Link to="/blog/2" className="text-blue-600 text-sm mt-2 inline-block hover:underline">Read More →</Link>
          </div>
          <div className="bg-gray-50 p-5 rounded-lg shadow-sm hover:shadow-md transition duration-300">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Alumni Spotlight: From Campus to Microsoft</h3>
            <p className="text-gray-600 text-sm">Read the inspiring journey of a Navgurukul graduate.</p>
            <Link to="/blog/3" className="text-blue-600 text-sm mt-2 inline-block hover:underline">Read More →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}