import Image from "next/image";
import Link from "next/link";

const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Journey", href: "#journey" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between py-4 px-6 bg-[#f7f5f0] shadow-sm sticky top-0 z-40 transition-colors">
      <div className="flex items-center gap-2">
        <Image src="/logo.png" alt="Tamoko Whenua Development Collective logo" width={64} height={64} className="rounded shadow-md" priority />
        <span className="text-[#37513a] font-bold text-2xl md:text-3xl ml-4">Tamoko Whenua Development Collective</span>
      </div>
      <nav className="hidden md:flex gap-8">
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-[#37513a] font-semibold hover:text-[#8b3a2e] transition-colors focus:outline-none focus:underline"
          >
            {item.label}
          </a>
        ))}
      </nav>
      <button className="md:hidden text-[#37513a]" aria-label="Open navigation">
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path stroke="#37513a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
    </header>
  );
}
