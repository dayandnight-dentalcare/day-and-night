"use client";

import { motion } from "framer-motion";
import { Search, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";

interface GalleryImage {
  id: number;
  image_url: string;
  alt_text: string;
}

export default function Gallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/public/gallery`, { 
          cache: 'no-store' 
        });
        const data = await res.json();
        if (data.success) {
          setImages(data.images);
        }
      } catch (error) {
        console.error("Failed to load gallery:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-neutral-50 text-gray-900">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-5xl md:text-6xl font-bold mb-6 text-gray-900"
          >
            The Art of the Smile
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            A curated collection of our finest transformations. Notice the natural translucency, perfect alignment, and brilliant harmony.
          </motion.p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 text-primary animate-spin" />
          </div>
        ) : images.length === 0 ? (
          <div className="text-center text-gray-500 py-20">
            Check back soon for our latest smile transformations!
          </div>
        ) : (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {images.map((img, idx) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 3) * 0.1 }}
                className="relative overflow-hidden rounded-2xl break-inside-avoid group cursor-pointer border border-gray-200 shadow-sm"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.image_url}
                  alt={img.alt_text || `Gallery image ${idx + 1}`}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <div className="w-16 h-16 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center">
                    <Search className="text-primary w-6 h-6" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-center z-20 pointer-events-none">
                  <span className="bg-white/90 text-gray-900 text-sm font-medium px-4 py-1.5 rounded-full backdrop-blur-md border border-gray-200 shadow-sm inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    {img.alt_text || "Smile Transformation"}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}