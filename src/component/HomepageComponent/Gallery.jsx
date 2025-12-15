"use client";

import { galleryimages, galleryVideos } from "@/helper/GallerDataProvider";
import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";

// --- Modal for Image Preview ---
const ImageModal = ({ src, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md transition-all"
      onClick={onClose}
    >
      <div className="relative p-4" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-red-500 transition-colors text-4xl leading-none z-50"
        >
          &times;
        </button>
        <img
          src={src}
          alt="Selected"
          className="max-w-full max-h-[85vh] object-contain rounded-sm shadow-2xl border border-white/10"
        />
      </div>
    </div>
  );
};

// ==========================================
// 1. Photo Gallery Content
// ==========================================
const PhotoGalleryContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const imagesPerView = 3;
  const totalSlides = Math.max(0, galleryimages.length - imagesPerView);
  const translateValue = currentIndex * (300 + 16); // 300px width + 16px gap

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= totalSlides ? 0 : prev + 1));
  }, [totalSlides]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides : prev - 1));
  };

  // Auto slide
  useEffect(() => {
    if (totalSlides <= 0) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [totalSlides, nextSlide]);

  const openModal = (src) => {
    setSelectedImage(src);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full  flex flex-col items-center gap-6">
      {/* Header */}
      <h3 className="text-2xl font-bold text-gray-800 border-b-4 border-[#72AB20] pb-1">
        ছবি
      </h3>

      {/* Slider Container */}
      <div className="relative w-full max-w-[948px] group">
        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute -left-4 md:-left-2 top-1/2 -translate-y-1/2 z-10 shadow-md bg-white hover:bg-[#72AB20] hover:text-white text-gray-700 p-3 rounded-full transition-all opacity-0 group-hover:opacity-100"
        >
          &#10094;
        </button>

        {/* Slides */}
        <div className="overflow-hidden py-4">
          <div
            className="flex transition-transform duration-700 ease-in-out gap-4"
            style={{ transform: `translateX(-${translateValue}px)` }}
          >
            {galleryimages.map((item, index) => (
              <div
                key={index}
                className="shrink-0 w-[300px] h-[220px] cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all bg-white"
                onClick={() => openModal(item.src)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute -right-4 md:-right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:bg-[#72AB20] hover:text-white text-gray-700 p-3 rounded-full transition-all opacity-0 group-hover:opacity-100"
        >
          &#10095;
        </button>
      </div>

      <Link
        href="#"
        className="text-md font-medium bg-[#72AB20] text-white details-button"
      >
        আরও ছবি দেখুন
      </Link>

      {isModalOpen && (
        <ImageModal src={selectedImage} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

// ==========================================
// 2. Video Gallery Content
// ==========================================
const VideoGalleryContent = () => {
  // Default to the first video
  const [mainVideo, setMainVideo] = useState(galleryVideos[0]);

  return (
    <div className="w-full max-w-5xl flex flex-col items-center gap-8 mt-10 pt-10  border-t border-gray-300/50">
      {/* Header */}
      <h3 className="text-2xl font-bold text-gray-800 border-b-4 border-[#72AB20] pb-1">
        ভিডিও
      </h3>

      {/* Layout: Main Video Top, List Bottom */}
      <div className="w-full flex flex-col gap-6">
        {/* 1. Main Featured Video (Big) */}
        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-gray-300 bg-black">
          <iframe
            width="100%"
            height="100%"
            // autoplay=1 enables autoplay. mute=1 is often required for browsers to allow autoplay.
            src={`https://www.youtube.com/embed/${mainVideo.id}?autoplay=1&mute=1&rel=0`}
            title={mainVideo.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
        <div className="text-xl font-semibold text-gray-800">
          এখন চলছে: <span className="text-[#72AB20]">{mainVideo.title}</span>
        </div>

        {/* 2. Small Videos List (Bottom) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => setMainVideo(video)}
              className={`cursor-pointer group relative rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all border-2 bg-white ${
                mainVideo.id === video.id
                  ? "border-[#72AB20]"
                  : "border-transparent"
              }`}
            >
              {/* Thumbnail */}
              <div className="aspect-video w-full relative">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                {/* Play Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-all">
                  <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#72AB20"
                      className="w-4 h-4 ml-0.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Title */}
              <div className="p-2 bg-gray-50">
                <p
                  className={`text-sm font-medium truncate ${
                    mainVideo.id === video.id
                      ? "text-[#72AB20]"
                      : "text-gray-700"
                  }`}
                >
                  {video.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Link
        href="#"
        className="text-md font-medium bg-[#72AB20] text-white details-button"
      >
        আরও ভিডিও দেখুন
      </Link>
    </div>
  );
};

// ==========================================
// Main Export Layout
// ==========================================
const Gallery = () => {
  return (
    // Single Section wrapper with the requested background and border
    <section className="w-full py-15 bg-gray-200 border border-gray-400">
      <h3 className="text-3xl font-bold text-gray-800  text-center pb-10">
        - গ্যালারি - 
      </h3>
      <div className="mx-auto px-4 flex flex-col items-center">
        <PhotoGalleryContent />
        <VideoGalleryContent />
      </div>
    </section>
  );
};

export default Gallery;
