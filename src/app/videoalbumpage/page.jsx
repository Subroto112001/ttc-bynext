"use client";

import { getYouTubeThumbnail, videoAlbums } from "@/helper/GallerDataProvider";
import { useRouter } from "next/navigation";

export default function VideoAlbumsPage() {
  const router = useRouter();

  const handleAlbumClick = (albumId) => {
    router.push(`/videopage/${albumId}`);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section>
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                ভিডিও গ্যালারি
              </h1>
              <p className="mt-1 text-sm text-gray-600">
                আমাদের বিভিন্ন কার্যক্রমের ভিডিও
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Albums Grid */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoAlbums.map((album) => (
            <div
              key={album.id}
              onClick={() => handleAlbumClick(album.id)}
              className="bg-white shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={getYouTubeThumbnail(
                    `https://www.youtube.com/embed/${album.videoId}`
                  )}
                  alt={album.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0  flex items-center justify-center hover:bg-opacity-40 transition-all">
                  <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-green-600 ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {album.title}
                </h3>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">
                    {album.videoCount} টি ভিডিও
                  </p>
                  {album.createdDate && (
                    <p className="text-xs text-gray-500">
                      তৈরি:{" "}
                      {new Date(album.createdDate).toLocaleDateString("bn-BD", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {videoAlbums.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              কোনো ভিডিও অ্যালবাম পাওয়া যায়নি
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
