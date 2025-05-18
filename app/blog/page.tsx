import Link from "next/link";

export default function BlogPage() {
  return (
    <main>
      <h1>News & Insights</h1>
      <section>
        <p>Latest news, project updates, and community insights from Tamoko Whenua Development Collective.</p>
      </section>
      <section>
        <h2>Featured Post</h2>
        <p>[Featured/latest post preview placeholder]</p>
      </section>
      <section>
        <h2>Recent Posts</h2>
        <ul>
          <li><Link href="/blog/sample-post">Sample Post Title</Link></li>
          <li><Link href="/blog/another-post">Another Post Title</Link></li>
        </ul>
        <p>Explore our kaupapa, services, and community stories.</p>
      </section>
    </main>
  );
}
