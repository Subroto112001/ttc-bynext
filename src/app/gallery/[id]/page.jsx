"use client";
import { albums } from "@/helper/GallerDataProvider";
import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FaChevronRight } from "react-icons/fa";

export default function AlbumDetailPage() {
  const { id } = useParams();

  const album = albums.find((a) => String(a.id) === String(id));
  const [selectedImage, setSelectedImage] = useState(null);

  if (!album)
    return (
      <div className="p-10 text-center text-red-500">
        অ্যালবাম খুঁজে পাওয়া যায়নি!
      </div>
    );

  return (
    <div className="min-h-screen">
      <section className="bg-gray-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
              গ্যালারি
              <span className="">
                <FaChevronRight />
              </span>
              {album.title}
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              মোট ছবি: {album.images.length}
            </p>
          </div>
          <Link
            href="/gallery"
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
          >
            ← ফিরে যান
          </Link>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {album.images.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image)}
              className="relative aspect-square bg-gray-100 overflow-hidden cursor-pointer group"
            >
              <img
                src={image.url}
                alt={image.caption || ""}
                className="w-full h-full object-cover transition-all duration-300"
              />

              {/* Caption overlay on hover */}
              {image.caption && (
                <div
                  className="absolute left-0 right-0 bottom-[-60px] 
                    bg-black bg-opacity-0 
                    group-hover:bottom-0 
                    group-hover:bg-opacity-60
                    transition-all duration-300"
                >
                  <div
                    className="w-full p-4 text-white 
                      transform translate-y-full 
                      group-hover:translate-y-0 
                      transition-transform duration-300"
                  >
                    <p className="text-sm font-medium ">
                      {image.caption}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <button className="absolute cursor-pointer -top-12 right-0 text-white text-xl hover:text-gray-300">
              ✕ বন্ধ করুন
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.caption || "Full view"}
              className="max-h-[85vh] mx-auto shadow-2xl rounded-lg"
            />
            {selectedImage.caption && (
              <p className="text-white text-center mt-4 text-lg">
                {selectedImage.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
