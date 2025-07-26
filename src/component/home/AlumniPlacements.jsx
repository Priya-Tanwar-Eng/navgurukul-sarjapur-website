import React from 'react';

const placements = [
  { name: "Anjali Singh", company: "Microsoft", year: 2023 },
  { name: "Aarti Passwan", company: "Paytm", year: 2022 },
  { name: "Indu", company: "Google", year: 2021 },
];

export default function AlumniPlacements() {
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Alumni Placement Timeline</h2>
      <div className="space-y-6">
        {placements.map((p, i) => (
          <div key={i} className="flex items-center gap-4 border-l-4 border-blue-600 pl-4">
            <div className="font-semibold">{p.year}</div>
            <div className="text-gray-700">{p.name} placed at <strong>{p.company}</strong></div>
          </div>
        ))}
      </div>
    </section>
  );
}
