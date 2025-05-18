import React from "react";

export default function OurStoryPage() {
  return (
    <main>
      <h1>Our Story & Kaupapa</h1>
      <section className="kaupapa-highlight">
        <h2>Our Logo & Kaupapa</h2>
        <p>
          Our logo weaves together the strength of whānau, whenua, and mahi. The koru and taaniko patterns symbolise growth, unity, and the enduring legacy we strive to create—tamoko left on the land and in the lives of our people.
        </p>
      </section>
      {/* Meet the Team */}
      <section>
        <h2>Meet the Team</h2>
        <ul>
          <li>Managing Director: Christo Brits</li>
          <li>Operations Manager: [Placeholder]</li>
          <li>Project Lead: [Placeholder]</li>
          <li>Community Liaison: [Placeholder]</li>
          <li>Whānau</li>
          <li>Manaakitanga</li>
          <li>Kaitiakitanga</li>
          <li>Community uplift</li>
          <li>Māori-led development</li>
        </ul>
      </section>
      {/* The Journey So Far */}
      <section>
        <h2>The Journey So Far</h2>
        <p>
          [Timeline or key milestones to be added here. Placeholder: Our journey began with a shared vision to uplift Northland communities through civil works and training.]
        </p>
      </section>
      {/* CTA */}
      <section>
        <p>
          Want to join our kaupapa?{' '}
          <a href="/partner-with-us">Partner with us</a>
        </p>
      </section>
    </main>
  );
}
