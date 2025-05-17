import Link from "next/link";

export default function BlogPostPage() {
  return (
    <main>
      <h1>[Blog Post Title]</h1>
      <p>By [Author Name] on [Date]</p>
      <section>
        <p>This is a sample post—replace with your own story or update.</p>
      </section>
      <section>
        <h2>Related Services:</h2>
        <ul>
          <li><Link href="/footpath-construction">Footpath Construction & Renewals</Link></li>
          <li><Link href="/earthworks">Earthworks & Site Levelling</Link></li>
        </ul>
        <p>
          Learn more about our kaupapa: <Link href="/our-story">Our Story & Kaupapa</Link>
        </p>
        <p>
          Contact us or partner with Tamoko Whenua: <Link href="/contact-us">Contact Us</Link> | <Link href="/partner-with-us">Partner with Us</Link>
        </p>
      </section>
    </main>
  );
}
