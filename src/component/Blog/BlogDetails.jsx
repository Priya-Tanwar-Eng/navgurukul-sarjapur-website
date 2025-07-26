import React from "react";
import { useParams } from "react-router-dom";

export default function BlogDetail() {
  const { id } = useParams();
  // You would fetch real data here
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Blog Detail Page - ID {id}</h1>
      <p className="text-gray-600">You can render full content here with dynamic fetch or context.</p>
    </div>
  );
}
