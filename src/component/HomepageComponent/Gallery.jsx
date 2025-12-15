"use client";

import { galleryimages } from "@/helper/GallerImageProvider";
import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";

// --- ১. ভিডিও ডেটা (আপনি এটি আপনার helper ফাইলে নিয়ে যেতে পারেন) ---
// ইউটিউব ভিডিওর শুধু ID টি ব্যবহার করবেন (যেমন: https://www.youtube.com/watch?v=VIDEO_ID)
const galleryVideos = [
  { id: "yNyrfoqcfZI", title: "Sample Video 1" }, // Example ID: Replace with yours
  { id: "HTnl9c7zwbM", title: "Sample Video 2" },
  { id: "27ee3LhccCA", title: "Sample Video 3" },
  { id: "fYlXXXxohTA", title: "Sample Video 4" },
];

// --- ২. আপডেটেড মডাল (ছবি এবং ভিডিও দুইটাই সাপোর্ট করবে) ---
const MediaModal = ({ src, type, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md transition-all"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl flex flex-col items-center p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-4 md:-right-4 text-white/70 hover:text-white transition-colors text-4xl font-light leading-none outline-none z-50"
          aria-label="Close"
        >
          &times;
        </button>

        {type === "image" ? (
          <img
            src={src}
            alt="Selected Gallery"
            className="max-w-full max-h-[85vh] object-contain rounded-sm shadow-2xl border border-white/10"
          />
        ) : (
          <div className="w-full aspect-video rounded-md overflow-hidden shadow-2xl border border-white/10 bg-black">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${src}?autoplay=1&rel=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

const Gallery = () => {
  // --- State ---
  const [activeTab, setActiveTab] = useState("photo"); // 'photo' or 'video'
  const [currentIndex, setCurrentIndex] = useState(0);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMediaSrc, setSelectedMediaSrc] = useState("");
  const [selectedMediaType, setSelectedMediaType] = useState("image"); // 'image' or 'video'

  const imagesPerView = 3;

  // বর্তমান ট্যাবে কোন ডেটা দেখাবো তা নির্ধারণ করা
  const currentItems = activeTab === "photo" ? galleryimages : galleryVideos;

  // --- Logic ---
  const totalSlides = Math.max(0, currentItems.length - imagesPerView);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= totalSlides ? 0 : prevIndex + 1
    );
  }, [totalSlides]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides : prevIndex - 1
    );
  };

  // ট্যাব পরিবর্তন হলে স্লাইডার রিসেট হবে
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentIndex(0);
  };

  // অটো-প্লে ইফেক্ট
  useEffect(() => {
    if (totalSlides <= 0) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // ভিডিওর ক্ষেত্রে একটু সময় বাড়ালাম (4s)
    return () => clearInterval(interval);
  }, [totalSlides, nextSlide, activeTab]); // activeTab বদলালে টাইমার রিসেট হবে

  // মডাল ওপেন ফাংশন
  const openModal = (src, type) => {
    setSelectedMediaSrc(src);
    setSelectedMediaType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMediaSrc("");
  };

  const translateValue = currentIndex * (300 + 16);

  return (
    <>
      <div className="px-2 py-6 w-full bg-gray-100 border-t border-b border-gray-300 flex flex-col gap-6 justify-center items-center relative overflow-hidden group">
        {/* --- Header & Tabs --- */}
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-2xl font-bold text-gray-800">গ্যালারি</h3>

          {/* Tab Buttons */}
          <div className="flex bg-gray-200 p-1 rounded-full gap-1">
            <button
              onClick={() => handleTabChange("photo")}
              className={`px-6 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeTab === "photo"
                  ? "bg-[#72AB20] text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-300"
              }`}
            >
              ছবি
            </button>
            <button
              onClick={() => handleTabChange("video")}
              className={`px-6 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeTab === "video"
                  ? "bg-[#72AB20] text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-300"
              }`}
            >
              ভিডিও
            </button>
          </div>
        </div>

        {/* --- Slider Section --- */}
        {currentItems.length < imagesPerView ? (
          <div className="text-center py-10 text-gray-500">
            পর্যাপ্ত {activeTab === "photo" ? "ছবি" : "ভিডিও"} নেই।
          </div>
        ) : (
          <div className="relative w-full max-w-[948px]">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="absolute -left-2 md:left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-[#72AB20] hover:text-white text-gray-800 p-2 rounded-full backdrop-blur-sm transition-all shadow-md opacity-0 group-hover:opacity-100 border border-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            {/* Slider Window */}
            <div className="overflow-hidden w-full py-4">
              {" "}
              {/* Added py-4 for shadow clipping */}
              <div
                className="flex transition-transform duration-700 ease-in-out gap-4"
                style={{ transform: `translateX(-${translateValue}px)` }}
              >
                {currentItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[300px] cursor-pointer group/card relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white"
                    onClick={() =>
                      openModal(
                        activeTab === "photo" ? item.src : item.id,
                        activeTab === "photo" ? "image" : "video"
                      )
                    }
                  >
                    {/* Image / Video Thumbnail */}
                    <img
                      src={
                        activeTab === "photo"
                          ? item.src
                          : `https://img.youtube.com/vi/${item.id}/hqdefault.jpg`
                      }
                      alt={item.title || "Gallery item"}
                      className="w-[300px] h-[220px] object-cover transition-transform duration-500 group-hover/card:scale-110"
                    />

                    {/* Play Icon Overlay for Videos */}
                    {activeTab === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover/card:bg-black/40 transition-all">
                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover/card:scale-110 transition-transform">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#72AB20"
                            className="w-6 h-6 ml-1"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="absolute -right-2 md:right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-[#72AB20] hover:text-white text-gray-800 p-2 rounded-full backdrop-blur-sm transition-all shadow-md opacity-0 group-hover:opacity-100 border border-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        )}

        <Link
          href={"#"}
          className="text-sm font-semibold bg-[#72AB20] text-white px-6 py-2 rounded-full hover:bg-[#5e8f1a] transition-colors shadow-sm"
        >
          আরও দেখুন
        </Link>
      </div>

      {isModalOpen && (
        <MediaModal
          src={selectedMediaSrc}
          type={selectedMediaType}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default Gallery;
