// app/videos/page.jsx
"use client";
import React, { useState, useEffect } from "react";

export default function YouTubeVideosPage() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("/api/youtube-videos");

      if (!response.ok) {
        throw new Error("server_error");
      }

      const data = await response.json();

      if (data.error) {
        throw new Error("server_error");
      }

      setVideos(data.videos || []);
    } catch (err) {
      console.error("Error fetching videos:", err);
      setError("server_error");
      setVideos([]);
    } finally {
      setLoading(false);
    }
  };

  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg text-gray-700">লোড হচ্ছে...</p>
        </div>
      </div>
    );
  }

  if (error === "server_error") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="bg-red-100 border-2 border-red-400 rounded-lg p-8">
            <div className="text-red-600 text-5xl mb-4">⚠️</div>
            <h2 className="text-2xl font-bold text-red-800 mb-2">
              সার্ভারজনিত সমস্যা
            </h2>
            <p className="text-gray-700 mb-6">
              ভিডিও লোড করতে সমস্যা হচ্ছে। অনুগ্রহ করে পরে আবার চেষ্টা করুন।
            </p>
            <button
              onClick={fetchVideos}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              আবার চেষ্টা করুন
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen  py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">ভিডিও</h1>
          <p className="text-gray-600 mb-6">মোট {videos.length}টি ভিডিও</p>

          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="ভিডিও খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-lg shadow-sm  outline-none"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Videos Grid */}
        {filteredVideos.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-gray-400 text-6xl mb-4">📹</div>
            <p className="text-gray-600 text-xl font-medium mb-2">
              কোনো ভিডিও নাই
            </p>
            {searchTerm && (
              <>
                <p className="text-gray-500 mb-4">
                  "{searchTerm}" এর জন্য কোনো ফলাফল পাওয়া যায়নি
                </p>
                <button
                  onClick={() => setSearchTerm("")}
                  className="text-[#2C5F8D] hover:text-[#2C5F8D] underline"
                >
                  সার্চ রিসেট করুন
                </button>
              </>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredVideos.map((video) => (
              <a
                key={video.id}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white  overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video bg-gray-200">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;
                    }}
                  />
                  {video.duration && (
                    <span className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600">
                    {video.title}
                  </h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    {video.viewCount && <p>{video.viewCount}</p>}
                    {video.publishedTime && <p>{video.publishedTime}</p>}
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* Refresh Button */}
        <div className="mt-8 text-center">
          <button
            onClick={fetchVideos}
            disabled={loading}
            className="px-6 py-3 bg-[#72AB20] text-white rounded-lg hover:bg-[#81ce16] disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
          >
            {loading ? "লোড হচ্ছে..." : "রিফ্রেশ করুন"}
          </button>
        </div>
      </div>
    </div>
  );
}
