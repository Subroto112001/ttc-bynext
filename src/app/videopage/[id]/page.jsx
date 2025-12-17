"use client";

import { getYouTubeThumbnail, videoAlbums } from "@/helper/GallerDataProvider";
import { useRouter, useParams } from "next/navigation";
import { useState } from "react";

export default function SingleVideoAlbumPage() {
  const router = useRouter();
  const params = useParams();
  const albumId = parseInt(params.id);

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Find the album by ID
  const album = videoAlbums.find((a) => a.id === albumId);

  const openVideoModal = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedVideo(null), 300);
  };

  // If album not found
  if (!album) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            অ্যালবাম খুঁজে পাওয়া যায়নি
          </h2>
          <button
            onClick={() => router.push("/videoalbumpage")}
            className="px-6 py-2 bg-green-600 text-white hover:bg-green-700 transition-colors"
          >
            ভিডিও গ্যালারিতে ফিরে যান
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section>
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {album.title}
              </h1>
              <p className="mt-1 text-sm text-gray-600">
                {album.videoCount} টি ভিডিও
                {album.createdDate && (
                  <span className="ml-2">
                    • তৈরি:{" "}
                    {new Date(album.createdDate).toLocaleDateString("bn-BD", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                )}
              </p>
            </div>
            <button
              onClick={() => router.push("/videoalbumpage")}
              className="px-4 py-2 bg-green-600 text-white hover:bg-green-700 transition-colors"
            >
              ← সকল অ্যালবাম
            </button>
          </div>
        </div>
      </section>

      {/* Videos Grid */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {album.videos.map((video, index) => (
            <div
              key={index}
              onClick={() => openVideoModal(video)}
              className="bg-white shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative aspect-video overflow-hidden bg-gray-200">
                <img
                  src={getYouTubeThumbnail(video.url)}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center hover:bg-opacity-50 transition-all">
                  <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform">
                    <svg
                      className="w-8 h-8 text-green-600 ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                {video.duration && (
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2">
                  {video.title}
                </h3>
                {video.uploadDate && (
                  <p className="text-xs text-gray-500">
                    {new Date(video.uploadDate).toLocaleDateString("bn-BD", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Video Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-5xl bg-white rounded-lg shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Video Player */}
            <div className="aspect-video bg-black">
              <iframe
                src={selectedVideo?.url}
                title={selectedVideo?.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video Info */}
            <div className="p-6 bg-white">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {selectedVideo?.title}
              </h2>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                {selectedVideo?.duration && (
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {selectedVideo.duration}
                  </span>
                )}
                {selectedVideo?.uploadDate && (
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {new Date(selectedVideo.uploadDate).toLocaleDateString(
                      "bn-BD",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
