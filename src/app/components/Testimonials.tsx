import React, { useState, useRef } from "react";

const testimonials = [
  {
    quote: "The team delivered on time and with real care for our whenua.",
    name: "Community Leader"
  },
  {
    quote: "Professional, transparent, and always listening to our needs.",
    name: "Project Partner"
  },
  {
    quote: "We trusted Tamoko Whenua with our papakāinga groundwork—excellent work!",
    name: "Whānau Representative"
  }
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const prev = () => setIdx((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const dx = touchEndX.current - touchStartX.current;
      if (dx > 40) prev();
      else if (dx < -40) next();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="w-full py-20 px-4 bg-gradient-to-br from-[#f7f5f0] to-[#e9e4da]" id="testimonials">
      <h2 className="text-2xl md:text-4xl font-bold text-[#1b3a1b] text-center mb-12">Testimonials</h2>
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        <div
          className="bg-white/90 backdrop-blur rounded-xl shadow-md p-8 text-center border border-[#e4dfd7] min-h-[160px] flex flex-col justify-center relative transition-all duration-300 w-full"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <p className="text-lg text-[#37513a] mb-4 font-medium">“{testimonials[idx].quote}”</p>
          <span className="text-[#8b3a2e] font-semibold">— {testimonials[idx].name}</span>
        </div>
        <div className="flex gap-6 mt-6">
          <button
            aria-label="Previous testimonial"
            onClick={prev}
            className="rounded-full bg-[#e9e4da] p-2 hover:bg-[#37513a] hover:text-white transition-colors"
          >&larr;</button>
          <button
            aria-label="Next testimonial"
            onClick={next}
            className="rounded-full bg-[#e9e4da] p-2 hover:bg-[#37513a] hover:text-white transition-colors"
          >&rarr;</button>
        </div>
        <div className="flex gap-2 mt-4 justify-center">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`inline-block w-2 h-2 rounded-full ${i === idx ? "bg-[#37513a]" : "bg-[#e4dfd7]"}`}
              aria-label={i === idx ? "Current testimonial" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
