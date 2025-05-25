import React from "react";

export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center justify-center text-center py-20 bg-[#e9e4da] relative overflow-hidden" style={{backgroundImage: 'url(/Hero-Image.png)', backgroundSize: 'cover', backgroundPosition: 'center'}} aria-label="Hero section with background image">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
        Building Futures on Solid Ground
      </h1>
      <p className="text-lg md:text-2xl text-white mb-8 max-w-2xl mx-auto">
        Tamoko Whenua Development Collective: Māori-led civil works for Northland, NZ
      </p>
      <a
        href="#contact"
        className="inline-block px-8 py-3 rounded-full bg-[#37513a] text-white font-semibold shadow-lg hover:bg-[#8b3a2e] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#37513a]"
      >
        Book a Call
      </a>
    </section>
  );
}
