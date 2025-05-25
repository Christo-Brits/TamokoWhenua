import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-20 px-4 bg-[#e6d6c3] border-t border-[#d5c5b2]">
      <h2 className="text-2xl md:text-4xl font-bold text-[#1b3a1b] text-center mb-12">Contact Us</h2>
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-10 items-start">
        <form className="flex-1 bg-white/90 backdrop-blur rounded-xl shadow-md p-8 border border-[#e4dfd7] flex flex-col gap-4" autoComplete="off">
          <label className="text-[#37513a] font-semibold" htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required className="rounded border border-[#e4dfd7] p-2 focus:outline-none focus:ring-2 focus:ring-[#37513a] bg-[#f7f5f0]" />
          <label className="text-[#37513a] font-semibold" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required className="rounded border border-[#e4dfd7] p-2 focus:outline-none focus:ring-2 focus:ring-[#37513a] bg-[#f7f5f0]" />
          <label className="text-[#37513a] font-semibold" htmlFor="message">Message</label>
          <textarea id="message" name="message" required rows={4} className="rounded border border-[#e4dfd7] p-2 focus:outline-none focus:ring-2 focus:ring-[#37513a] bg-[#f7f5f0]" />
          <button type="submit" className="mt-4 px-6 py-2 rounded-full bg-[#8b3a2e] text-white font-semibold hover:bg-[#37513a] transition-colors">Send</button>
        </form>
        <div className="flex-1 bg-[#f7f5f0] rounded-xl shadow-md p-8 border border-[#e4dfd7] flex flex-col gap-4 min-w-[220px]">
          <div>
            <span className="block text-[#37513a] font-semibold">Email</span>
            <span className="text-[#4b3c2a]">info@tamokowhenua.nz</span>
          </div>
          <div>
            <span className="block text-[#37513a] font-semibold">Location</span>
            <span className="text-[#4b3c2a]">Northland, Aotearoa NZ</span>
          </div>
        </div>
      </div>
    </section>
  );
}
