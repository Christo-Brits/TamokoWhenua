"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);
  
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }
  
  return (
    <main>
      <h1>Contact Tamoko Whenua Collective</h1>
      <section>
        <p>We'd love to hear from you. Please reach out with any questions or enquiries using the details or form below.</p>
        <div>
          <h2>Contact Details</h2>
          <ul>
            <li>Phone: 09 123 4567</li>
            <li>Email: info@tamokowhenua.nz</li>
            <li>Address: 123 Whenua Lane, Whangārei, Northland</li>
          </ul>
        </div>
        <form aria-label="Contact form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" style={{ outline: '2px solid #00796b', marginBottom: 8 }} required />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" style={{ outline: '2px solid #00796b', marginBottom: 8 }} required />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" style={{ outline: '2px solid #00796b', marginBottom: 8 }} required />
          <button type="submit" style={{ outline: '2px solid #00796b', background: '#00796b', color: '#fff', padding: '8px 16px', borderRadius: 4 }}>Submit</button>
        </form>
        {submitted && (
          <div style={{ marginTop: 16, color: '#00796b', fontWeight: 'bold' }} role="status">
            Thank you for your enquiry! We'll be in touch soon.
          </div>
        )}
        <p>
          Prefer to partner with us?{' '}
          <Link href="/partner-with-us">Partner with Us</Link>
        </p>
      </section>
    </main>
  );
}

