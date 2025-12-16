"use client";

import { galleryimages, galleryVideos } from "@/helper/GallerDataProvider";
import React, { useState, useEffect, useCallback, useRef } from "react";

 

 

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

// video modal
const VideoModal = ({ videoId, onClose }) => {
  if (!videoId) return null;

  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md transition-all"
      onClick={onClose}
    >
      <div
        className="relative p-4 w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-red-500 transition-colors text-4xl leading-none z-50"
        >
          &times;
        </button>
        <div className="relative aspect-video rounded-lg shadow-2xl border-4 border-white/10 overflow-hidden">
          <iframe
            className="w-full h-full"
            src={embedUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

// 1. Photo Gallery Content
const PhotoGalleryContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

 const displayImages = galleryimages.slice(-3);

 const imagesPerView = 1;
 const totalSlides = Math.max(0, displayImages.length - imagesPerView);

  // Calculate translation
  const translateValue = `${currentIndex * (-100 / imagesPerView)}%`;

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
    <div className="w-full flex flex-col items-center gap-6">
      {/* Header */}
      <h3 className="text-2xl font-bold text-gray-800 border-b-4 border-[#72AB20] pb-1">
        গ্যালারি
      </h3>

      {/* Slider Container */}
      <div className="relative w-full max-w-4xl group">
        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:-left-2 top-1/2 -translate-y-1/2 z-10 shadow-md bg-white hover:bg-[#72AB20] hover:text-white text-gray-700 p-2 md:p-3 rounded-full transition-all md:opacity-0 md:group-hover:opacity-100"
        >
          &#10094;
        </button>

        {/* Slides */}
        <div className="overflow-hidden py-4 px-4 md:px-0" ref={containerRef}>
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(${translateValue})`,
            }}
          >
            {galleryimages.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-2"
                style={{ width: `${100 / imagesPerView}%` }}
              >
                <div
                  className="w-full h-[280px] md:h-[400px] cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all bg-white"
                  onClick={() => openModal(item.src)}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-2 md:-right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:bg-[#72AB20] hover:text-white text-gray-700 p-2 md:p-3 rounded-full transition-all md:opacity-0 md:group-hover:opacity-100"
        >
          &#10095;
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex gap-2">
        {Array.from({ length: totalSlides + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-[#72AB20] w-6" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      <a
        href="#"
        className="text-md font-medium bg-[#72AB20] text-white px-6 py-2 rounded hover:bg-[#5d8c1a] transition-colors"
      >
        আরও ছবি দেখুন
      </a>

      {isModalOpen && (
        <ImageModal src={selectedImage} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

// 2. Video Gallery Content
const VideoGalleryContent = () => {
  const [mainVideo, setMainVideo] = useState(galleryVideos[0]);
  const [modalVideoId, setModalVideoId] = useState(null);

  const openVideoModal = (id) => {
    setModalVideoId(id);
  };

  const closeVideoModal = () => {
    setModalVideoId(null);
  };

  return (
    <div className="w-full max-w-5xl flex flex-col items-center gap-8 mt-10 pt-10 border-t border-gray-300/50">
      {/* Header */}
      <h3 className="text-2xl font-bold text-gray-800 border-b-4 border-[#72AB20] pb-1">
        ভিডিও
      </h3>

      {/* Layout: Main Video Top, List Bottom */}
      <div className="w-full flex flex-col gap-6 px-4 md:px-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => {
                setMainVideo(video);
                openVideoModal(video.id);
              }}
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

      <a
        href="#"
        className="text-md font-medium bg-[#72AB20] text-white px-6 py-2 rounded hover:bg-[#5d8c1a] transition-colors"
      >
        আরও ভিডিও দেখুন
      </a>

      {/* Video Modal Render */}
      {modalVideoId && (
        <VideoModal videoId={modalVideoId} onClose={closeVideoModal} />
      )}
    </div>
  );
};


// Main Export Layout

const Gallery = () => {
  return (
    <section className="w-full py-15 bg-gray-200 border border-gray-400">
      <div className="mx-auto px-4 flex flex-col items-center">
        <PhotoGalleryContent />
        <VideoGalleryContent />
      </div>
    </section>
  );
};

export default Gallery;
