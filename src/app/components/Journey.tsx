import React from "react";

const steps = [
  "Kaupapa Discovery",
  "Whānau Consultation",
  "Site Assessment",
  "Planning & Design",
  "Permitting",
  "Mobilisation",
  "Groundworks & Build",
  "Quality Review",
  "Handover & Support",
];

export default function Journey() {
  return (
    <section className="w-full py-20 px-4 bg-gradient-to-br from-[#f7f5f0] to-[#e9e4da]" id="journey">
      <h2 className="text-2xl md:text-4xl font-bold text-[#1b3a1b] text-center mb-12">Our Journey</h2>
      <div className="overflow-x-auto">
        <ol className="flex flex-row md:justify-center gap-6 md:gap-8 max-w-6xl mx-auto px-2 md:px-0 relative">
          {steps.map((step, idx) => (
            <li key={step} className="flex flex-col items-center min-w-[120px] relative">
              <div className={`w-10 h-10 flex items-center justify-center rounded-full font-bold text-white bg-[#37513a] border-4 border-[#e4dfd7] z-10 mb-2 transition-all duration-300 shadow-md`}>{idx + 1}</div>
              <span className="text-xs md:text-sm font-medium text-[#37513a] text-center w-24 md:w-32">{step}</span>
              {/* Connector */}
              {idx < steps.length - 1 && (
                <div className="absolute top-5 left-full w-16 h-1 bg-[#8b3a2e] opacity-70 rounded md:block hidden" style={{zIndex: 1}}></div>
              )}
              {/* Mobile connector */}
              {idx < steps.length - 1 && (
                <div className="block md:hidden absolute top-5 left-full w-10 h-1 bg-[#8b3a2e] opacity-70 rounded" style={{zIndex: 1}}></div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
