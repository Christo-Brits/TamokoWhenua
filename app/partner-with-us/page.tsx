import Link from "next/link";

export default function PartnerWithUsPage() {
  return (
    <main>
      <h1>Partner with Tamoko Whenua</h1>
      <section>
        <p>We welcome councils, contractors, iwi, and training providers to join our kaupapa. Let’s work together to build a better Northland!</p>
        <ul>
          <li>Clients (Councils, Developers, Community Groups)</li>
          <li>Subcontractors</li>
          <li>Apprenticeship/Training Providers</li>
          <li>Iwi/Māori Organisations</li>
          <li>Suppliers</li>
          <li>Other partners</li>
        </ul>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="organisation">Organisation</label>
          <input type="text" id="organisation" name="organisation" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" />

          <button type="submit">Submit</button>
        </form>
        <p>
          Want to learn more about our story?{' '}
          <Link href="/our-story">Our Story</Link>
        </p>
      </section>
    </main>
  );
}
