import React from 'react';

export default function MonthlySchedule() {
  const schedule = [
    "👩‍🍳 3 kitchen turns per learner group (per week)",
    "📅 Weekly council meetings every Saturday",
    "📆 Monthly community planning session",
    "📚 Weekend peer-led workshops",
  ];

  return (
    <section className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Monthly Schedule</h2>
        <ul className="list-disc list-inside space-y-3 text-lg text-gray-700">
          {schedule.map((item, index) => (
            <li key={index} className="leading-7">{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
