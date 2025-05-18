"use client";

import Link from "next/link";

export default function Page() {
  return (
    <main role="main">
      {/* Hero Section */}
      <section className="hero">
        <h1>Empowering Northland—Māori-led Civil Works & Training</h1>
        <p className="subheading">Civil construction. Community careers. Lasting legacy.</p>
        <Link href="/partner-with-us" className="cta-button">Partner with Us</Link>
      </section>

      {/* Introduction */}
      <section>
        <p>
          Tamoko Whenua Development Collective delivers small-to-medium civil infrastructure projects across Northland, combining quality earthworks and site services with trades training for rangatahi. We work as one to leave a lasting mark—on land and in people’s lives.
        </p>
      </section>

      {/* Service Overview */}
      <section>
        <h2>Our Services</h2>
        <ul className="card-grid">
          <li className="card"><Link href="/footpath-construction"><strong>Footpath Construction & Renewals</strong></Link><br />Safe, accessible pathways for our communities.</li>
          <li className="card"><Link href="/earthworks"><strong>Earthworks & Site Levelling</strong></Link><br />Preparing whenua for homes, parks, and progress.</li>
          <li className="card"><Link href="/roading"><strong>Minor Roading & Pavement Repairs</strong></Link><br />Keeping Northland connected and moving.</li>
          <li className="card"><Link href="/drainage"><strong>Drainage & Utilities Trenches</strong></Link><br />Smart, sustainable solutions for water and services.</li>
          <li className="card"><Link href="/subdivisions"><strong>Subdivisions</strong></Link><br />Building new opportunities for whānau and business.</li>
          <li className="card"><Link href="/retaining-walls"><strong>Retaining Walls</strong></Link><br />Protecting land and supporting safe development.</li>
          <li className="card"><Link href="/workforce-development"><strong>Apprenticeship/Workforce Development</strong></Link><br />Real skills, real jobs for rangatahi Māori.</li>
        </ul>
      </section>

      {/* Featured Location Section */}
      <section>
        <h2>Serving Northland</h2>
        <p>Serving Far North, Whangārei, and Kaipara Districts</p>
      </section>

      {/* Kaupapa & Story Teaser */}
      <section>
        <h2>Our Story & Kaupapa</h2>
        <p>
          Learn more about our collective journey and kaupapa.{' '}
          <Link href="/our-story">Read Our Story</Link>
        </p>
      </section>

      {/* Latest News/Blog Teaser */}
      <section>
        <h2>News & Insights</h2>
        <p>
          Stay tuned for updates.{' '}
          <Link href="/blog">Go to Blog</Link>
        </p>
      </section>

      {/* Contact/Partner CTA */}
      <section>
        <h2>Get Involved</h2>
        <p>
          Interested in partnering or learning more?{' '}
          <Link href="/partner-with-us">Partner with Us</Link> or{' '}
          <Link href="/contact-us">Contact Us</Link>.
        </p>
      </section>
    </main>
  );
}
