// app/videos/page.jsx
"use client";
import React, { useState, useEffect } from "react";

export default function YouTubeVideosPage() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
 
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("/api/youtube-videos");
      if (!response.ok) throw new Error("server_error");
      const data = await response.json();
      if (data.error) throw new Error("server_error");
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


  const closeModal = () => setSelectedVideo(null);

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
            <button
              onClick={fetchVideos}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              আবার চেষ্টা করুন
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Search */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">ভিডিও</h1>
          <p className="text-gray-600 mb-6">মোট {videos.length}টি ভিডিও</p>
          <div className="relative">
            <input
              type="text"
              placeholder="ভিডিও খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-lg shadow-sm outline-none"
            />
          </div>
        </div>

        {/* Videos Grid */}
        {filteredVideos.length === 0 ? (
          <div className="text-center py-16 text-gray-500">
            কোনো ভিডিও পাওয়া যায়নি
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                onClick={() => setSelectedVideo(video)} // ক্লিক করলে ভিডিও সিলেক্ট হবে
                className="bg-white overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              >
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
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600">
                    {video.title}
                  </h3>
                  <div className="text-sm text-gray-600">
                    {video.publishedTime && <p>{video.publishedTime}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Refresh Button */}
        <div className="mt-8 text-center">
          <button
            onClick={fetchVideos}
            className="px-6 py-3 bg-[#72AB20] text-white rounded-lg hover:bg-[#81ce16]"
          >
            রিফ্রেশ করুন
          </button>
        </div>
      </div>

      {/* --- Video Modal --- */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4 animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white text-3xl hover:text-gray-300 transition-colors"
            >
              ✕
            </button>

            {/* Video Wrapper */}
            <div className="relative pt-[56.25%]">
              {" "}
              {/* 16:9 Aspect Ratio */}
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video Info In Modal */}
            <div className="p-4 bg-white">
              <h2 className="text-xl font-bold text-gray-900 line-clamp-1">
                {selectedVideo.title}
              </h2>
            </div>
          </div>

          {/* ক্লিক করলে বাইরে বন্ধ হওয়ার জন্য ব্যাকড্রপ */}
          <div className="absolute inset-0 -z-10" onClick={closeModal}></div>
        </div>
      )}
    </div>
  );
}
