import React from "react";
import Image from "next/image";

const team = [
  {
    name: "Ben Mahanga",
    role: "Co-Founder",
    img: "/Ben-Mahanga.png",
    bio: "Ben is passionate about sustainable land development and empowering Māori communities."
  },
  {
    name: "Christo Brits",
    role: "Co-Founder",
    img: "/Christo-Brits.png",
    bio: "Christo brings years of experience in civil engineering and community engagement."
  },
];

export default function Team() {
  return (
    <section className="w-full py-20 px-4 bg-gradient-to-br from-[#e9e4da] to-[#f7f5f0]" id="team">
      <h2 className="text-2xl md:text-4xl font-bold text-[#1b3a1b] text-center mb-12">Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 max-w-3xl mx-auto justify-center">
        {team.map((member) => (
          <div
            key={member.name}
            className="bg-white/90 backdrop-blur rounded-xl shadow-md p-8 flex flex-col items-center text-center border border-[#e4dfd7] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-h-[320px]"
          >
            <Image
              src={member.img}
              alt={member.name}
              className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-[#37513a] shadow-md"
              width={96}
              height={96}
              loading="lazy"
            />
            <h3 className="text-lg font-semibold text-[#37513a] mb-1">{member.name}</h3>
            <span className="text-[#8b3a2e] font-medium text-sm mb-2">{member.role}</span>
            <p className="text-[#4b3c2a] text-sm leading-relaxed">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
