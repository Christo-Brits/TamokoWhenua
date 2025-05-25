import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Tamoko Whenua Development Collective",
  description: "Foundational site structure for Tamoko Whenua Development Collective",
  openGraph: {
    images: ["/og-image.png"],
    title: "Tamoko Whenua Development Collective",
    description: "Māori-led civil construction and trades training in Northland.",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        {/* ... your header/nav/footer as before ... */}
        {children}
      </body>
    </html>
  );
}
