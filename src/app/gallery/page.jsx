"use client";
import { albums } from "@/helper/GallerDataProvider";
import Link from "next/link";

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gray-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">গ্যালারি</h1>
          <p className="mt-1 text-sm text-gray-600">
            আমাদের বিভিন্ন কার্যক্রমের ছবি
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {albums.map((album) => (
            /* এখানে href="/gallery/${album.id}" ব্যবহার করুন */
            <Link key={album.id} href={`/gallery/${album.id}`}>
              <div className="bg-white shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={album.cover}
                    alt={album.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {album.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {album.imageCount} টি ছবি
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
