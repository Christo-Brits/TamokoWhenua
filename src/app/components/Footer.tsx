import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full py-8 px-4 bg-[#e9e4da] flex flex-col md:flex-row items-center justify-between gap-4 border-t border-[#e4dfd7] mt-16">
      <div className="flex items-center gap-2">
        <Image src="/logo.png" alt="Tamoko Whenua Development Collective logo" width={36} height={36} className="inline-block mr-2 align-middle rounded" />
        <span className="text-[#37513a] font-semibold text-lg align-middle">Tamoko Whenua Development Collective</span>
      </div>
      <div className="flex gap-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#8b3a2e] text-[#37513a]">FB</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#8b3a2e] text-[#37513a]">IG</a>
        <a href="mailto:info@tamokowhenua.nz" className="hover:text-[#8b3a2e] text-[#37513a]">Email</a>
      </div>
      <div className="text-[#4b3c2a] text-sm text-center md:text-right">
        &copy; {new Date().getFullYear()} Tamoko Whenua Development Collective
      </div>
    </footer>
  );
}
