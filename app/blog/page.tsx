import Image from "next/image";
import Link from "next/link";

// Because this is a Server Component, we can fetch securely directly during the page load!
export const dynamic = "force-dynamic";

export default async function BlogList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/public/blogs`, { cache: 'no-store' });
  const data = await res.json();
  const posts = data.posts || [];

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-neutral-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {posts.length === 0 ? (
          <p className="text-gray-500 text-center col-span-3 py-20">No blog posts published yet.</p>
        ) : (
          posts.map((post: any) => (
            <div key={post.slug} className="bg-white rounded-xl overflow-hidden shadow">
              <div className="relative h-56">
                <Image src={post.image_url} alt={post.title} fill className="object-cover" />
              </div>
              <div className="p-5">
                <div className="text-xs font-bold text-primary mb-2 uppercase">{post.category}</div>
                <h2 className="font-bold text-lg mb-2 line-clamp-2">{post.title}</h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-primary font-semibold hover:underline">
                  Read More →
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}