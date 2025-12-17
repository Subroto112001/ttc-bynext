"use client";
import { albums } from "@/helper/GallerDataProvider";
import { useState } from "react";

export default function GalleryPage() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  return (
    <div className="min-h-screen ">
      {/* Header */}
      <section className="">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">গ্যালারি</h1>
              <p className="mt-1 text-sm text-gray-600">
                {selectedAlbum
                  ? selectedAlbum.title
                  : "আমাদের বিভিন্ন কার্যক্রমের ছবি"}
              </p>
            </div>
            {selectedAlbum && (
              <button
                onClick={() => setSelectedAlbum(null)}
                className="px-4 py-2 bg-green-600 text-white hover:bg-green-700 transition-colors"
              >
                ← সকল অ্যালবাম
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {!selectedAlbum ? (
          // Albums Grid View
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {albums.map((album) => (
              <div
                key={album.id}
                onClick={() => setSelectedAlbum(album)}
                className="bg-white shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
              >
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
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600">
                      {album.imageCount} টি ছবি
                    </p>
                    {album.createdDate && (
                      <p className="text-xs text-gray-500">
                        তৈরি:{" "}
                        {new Date(album.createdDate).toLocaleDateString(
                          "bn-BD",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Album Photos Grid View
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {selectedAlbum.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square bg-gray-200 overflow-hidden group cursor-pointer"
              >
                <img
                  src={image.url}
                  alt={image.caption || `Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute left-0 right-0 bottom-[-80px] 
                  bg-black bg-opacity-0 
                  group-hover:bottom-0 
                  group-hover:bg-opacity-70
                  transition-all duration-300"
                >
                  <div
                    className="w-full p-4 text-white 
                    transform translate-y-full 
                    group-hover:translate-y-0 
                    transition-transform duration-300"
                  >
                    {image.caption && (
                      <p className="text-sm font-medium mb-1">
                        {image.caption}
                      </p>
                    )}
                    {image.uploadDate && (
                      <p className="text-xs text-gray-300">
                        {new Date(image.uploadDate).toLocaleDateString(
                          "bn-BD",
                          {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          }
                        )}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State for Albums */}
        {!selectedAlbum && albums.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">কোনো অ্যালবাম পাওয়া যায়নি</p>
          </div>
        )}

        {/* Pagination (Optional) */}
        {selectedAlbum && selectedAlbum.images.length > 12 && (
          <div className="mt-8 flex justify-center">
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                পূর্ববর্তী
              </button>
              <button className="px-4 py-2 bg-green-600 text-white">1</button>
              <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                2
              </button>
              <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                পরবর্তী
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
