import React from 'react';

const testimonials = [
  {
    name: "Komal shukla",
    position: "Frontend Developer @ Zoho",
    quote: "Navgurukul changed my life! I had never coded before and now I’m working in a top tech company.",
  },
  {
    name: "Riya",
    position: "Backend Engineer @ Razorpay",
    quote: "The community, mentors, and curriculum helped me dream bigger and achieve it.",
  },
];

export default function Testimonials() {
  return (
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-6">
      {testimonials.map((t, i) => (
        <div key={i} className="bg-white shadow-lg p-6 rounded-lg">
          <p className="italic text-gray-600">“{t.quote}”</p>
          <div className="mt-4 font-semibold">{t.name}</div>
          <div className="text-sm text-gray-500">{t.position}</div>
        </div>
      ))}
    </div>
  );
}
