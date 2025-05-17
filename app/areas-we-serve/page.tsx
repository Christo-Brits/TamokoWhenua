import Link from "next/link";

export default function AreasWeServePage() {
  return (
    <main>
      <h1>Areas We Serve</h1>
      <section>
        <p>We proudly serve all of Northland. Learn more about our work in each district below.</p>
        <ul>
          <li><Link href="/areas-we-serve/far-north-district">Far North District</Link></li>
          <li><Link href="/areas-we-serve/whangarei-district">Whangārei District</Link></li>
          <li><Link href="/areas-we-serve/kaipara-district">Kaipara District</Link></li>
        </ul>
        <p>Not sure if you’re in our service area? <Link href="/contact-us">Contact us</Link>.</p>
        <p><Link href="/partner-with-us">Partner with Us</Link></p>
      </section>
    </main>
  );
}
