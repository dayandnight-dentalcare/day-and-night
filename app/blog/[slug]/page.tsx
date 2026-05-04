import { BLOG_POSTS } from "../data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ChevronRight, ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) {
    return { title: "Post Not Found" };
  }
  return {
    title: (post as any).seoTitle || post.title,
    description: post.excerpt,
    keywords: (post as any).keywords || "",
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ✅ FIX

  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return notFound();
  }

  return (
    <article className="pt-32 pb-24 px-6 min-h-screen bg-neutral-50 text-gray-900">
      <div className="container mx-auto max-w-4xl bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden pb-16">

        {/* Image */}
        <div className="w-full aspect-[21/9] relative">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="px-8 md:px-16 pt-12">

          {/* Back */}
          <div className="flex justify-between items-center mb-8 border-b pb-4">
            <Link href="/blog" className="flex items-center text-gray-500 hover:text-primary">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back
            </Link>

            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

          {/* Meta */}
          <div className="flex gap-6 text-gray-500 text-sm mb-10">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-primary" />
              {post.date}
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2 text-primary" />
              {post.author}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {(post as any).contentHTML ? (
              <div 
                className="prose max-w-none text-gray-700 leading-relaxed space-y-6" 
                dangerouslySetInnerHTML={{ __html: (post as any).contentHTML }} 
              />
            ) : (
              post.content?.split("\n\n").map((para, i) => (
                <p key={i} className="text-gray-700 leading-relaxed">
                  {para}
                </p>
              ))
            )}
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-primary/5 rounded-xl text-center">
            <h3 className="text-xl font-bold mb-4">Ready for your smile transformation?</h3>
            <Link
              href="/appointment"
              className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg"
            >
              Book Appointment <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

        </div>
      </div>
    </article>
  );
}