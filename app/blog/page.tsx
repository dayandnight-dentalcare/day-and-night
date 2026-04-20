"use client";

import { BLOG_POSTS } from "./data";
import Image from "next/image";
import Link from "next/link";

export default function BlogList() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-neutral-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

        {BLOG_POSTS.map((post) => (
          <div key={post.slug} className="bg-white rounded-xl overflow-hidden shadow">

            <div className="relative h-56">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5">
              <h2 className="font-bold text-lg mb-2">{post.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>

              <Link href={`/blog/${post.slug}`} className="text-primary font-semibold">
                Read More →
              </Link>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}