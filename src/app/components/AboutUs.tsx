import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="w-full py-20 px-4 bg-gradient-to-br from-[#e9e4da] to-[#f7f5f0]" id="about">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* Left: Text */}
        <div className="flex-1 w-full md:w-1/2">
          <h2 className="text-2xl md:text-4xl font-bold text-[#1b3a1b] mb-6">About Us</h2>
          <p className="text-[#4b3c2a] mb-6 leading-relaxed text-lg">
            Tamoko Whenua Development Collective is a Māori-led civil works group dedicated to empowering Northland communities through sustainable, whenua-based development. Our mission is to build strong foundations for future generations, guided by integrity, respect, and kaitiakitanga.
          </p>
          <ul className="list-disc pl-6 text-[#37513a] space-y-2 text-base mb-4">
            <li>Community-focused, whānau-driven</li>
            <li>Deep respect for land and people</li>
            <li>Experienced, skilled team</li>
            <li>Quality, safety, and transparency</li>
          </ul>
        </div>
        {/* Right: Image */}
        <div className="flex-1 w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-full max-w-[400px] aspect-[4/3] rounded-xl overflow-hidden shadow-xl border-4 border-[#e4dfd7] bg-[#f7f5f0]">
            <Image
              src="/logo.png"
              alt="Tamoko Whenua Development Collective logo"
              fill
              style={{objectFit:'contain'}}
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-contain p-6"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
