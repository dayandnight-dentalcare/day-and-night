import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ChevronRight, ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

async function getPost(slug: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/public/blogs?slug=${slug}`, { cache: 'no-store' });
  const data = await res.json();
  return data.post;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.seo_title || post.title,
    description: post.excerpt,
    keywords: post.keywords || "",
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) return notFound();

  // Format the date for reading
  const dateStr = new Date(post.created_at).toLocaleDateString('en-IN', {
    day: 'numeric', month: 'long', year: 'numeric'
  });

  return (
    <article className="pt-32 pb-24 px-6 min-h-screen bg-neutral-50 text-gray-900">
      <div className="container mx-auto max-w-4xl bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden pb-16">
        
        <div className="w-full aspect-[21/9] relative">
          <Image src={post.image_url} alt={post.title} fill className="object-cover" />
        </div>

        <div className="px-8 md:px-16 pt-12">
          <div className="flex justify-between items-center mb-8 border-b pb-4">
            <Link href="/blog" className="flex items-center text-gray-500 hover:text-primary">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back
            </Link>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

          <div className="flex gap-6 text-gray-500 text-sm mb-10">
            <div className="flex items-center"><Calendar className="w-4 h-4 mr-2 text-primary" /> {dateStr}</div>
            <div className="flex items-center"><User className="w-4 h-4 mr-2 text-primary" /> {post.author}</div>
          </div>

          {/* HTML Content Rendered directly from DB */}
          <div 
            className="prose max-w-none text-gray-700 leading-relaxed space-y-6" 
            dangerouslySetInnerHTML={{ __html: post.content_html }} 
          />

          <div className="mt-16 p-8 bg-primary/5 rounded-xl text-center">
            <h3 className="text-xl font-bold mb-4">Ready for your smile transformation?</h3>
            <Link href="/appointment" className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg">
              Book Appointment <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}