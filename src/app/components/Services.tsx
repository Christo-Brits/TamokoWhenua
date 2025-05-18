import React from "react";

const services = [
  {
    title: "Footpaths & Walkways",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#37513a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 21v-2a4 4 0 014-4h0a4 4 0 014 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    ),
    desc: "Safe, durable pathways for communities and papakāinga."
  },
  {
    title: "Site Preparation",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#8b3a2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="7" rx="2"/><path d="M16 11V7a4 4 0 00-8 0v4"/></svg>
    ),
    desc: "Earthworks, clearing, and groundwork for future projects."
  },
  {
    title: "Papakāinga Groundwork",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#37513a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10"/><path d="M6 20V14"/><path d="M18 20v-4"/><path d="M2 20h20"/><path d="M7 10l5-6 5 6"/></svg>
    ),
    desc: "Supporting whenua-based living and sustainable development."
  },
  {
    title: "Small Subdivisions",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#8b3a2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="7" height="7" rx="2"/><rect x="14" y="11" width="7" height="7" rx="2"/><rect x="9" y="3" width="6" height="7" rx="2"/></svg>
    ),
    desc: "Subdivision groundwork for whānau and community projects."
  },
];

export default function Services() {
  return (
    <section className="w-full py-16 px-4 bg-gradient-to-br from-[#f7f5f0] to-[#e9e4da]" id="services">
      <h2 className="text-2xl md:text-4xl font-bold text-[#1b3a1b] text-center mb-10">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((service) => (
          <div
            key={service.title}
            className="group bg-white/90 backdrop-blur rounded-xl shadow-md p-8 flex flex-col items-center text-center border border-[#e4dfd7] hover:shadow-xl hover:-translate-y-1 hover:bg-[#f2e9e1] transition-all duration-300 cursor-pointer min-h-[260px]"
          >
            <div className="mb-4 transition-transform group-hover:scale-110" aria-hidden>{service.icon}</div>
            <h3 className="text-lg font-semibold text-[#37513a] mb-2">{service.title}</h3>
            <p className="text-[#4b3c2a] text-sm leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
