import React from 'react';

const placements = [
  { name: "Anjali Singh", company: "Microsoft", year: 2025, logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Aarti Passwan", company: "Microsoft", year: 2025, logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Indu", company: "Microsoft", year: 2025, logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Subhadra Parida", company: "Google", year: 2024, logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Priya Sharma", company: "Infosys", year: 2024, logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
  { name: "Babita Pal", company: "TCS", year: 2023, logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg" },
];

const placementsByYear = placements.reduce((acc, p) => {
  if (!acc[p.year]) {
    acc[p.year] = [];
  }
  acc[p.year].push(p);
  return acc;
}, {});

export default function AlumniPlacements() {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Our Alumni Success Stories</h2>
      <div className="relative border-l-4 border-blue-400 ml-4 md:ml-0"> 
        {Object.entries(placementsByYear).sort(([yearA], [yearB]) => yearB - yearA).map(([year, yearPlacements]) => (
          <div key={year} className="mb-10 ml-8 relative"> 
            <div className="absolute -left-10 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-md">
              {year}
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{year} Placements</h3>
            <div className="space-y-4">
              {yearPlacements.map((p, i) => (
                <div key={i} className="bg-white p-5 rounded-lg shadow-md flex items-center gap-4 border border-gray-100">
                  {p.logo && (
                    <img src={p.logo} alt={p.company} className="h-8 w-auto object-contain" />
                  )}
                  <div className="text-lg text-gray-700">
                    <span className="font-semibold text-gray-900">{p.name}</span> placed at <strong>{p.company}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}