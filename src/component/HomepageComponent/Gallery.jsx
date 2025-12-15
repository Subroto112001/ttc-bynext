"use client"; // Required for Next.js App Router

import { galleryimages } from "@/helper/GallerImageProvider";
import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";

// Minimal Modal Component
const ImageModal = ({ src, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md transition-all"
      onClick={onClose}
    >
      <div
        className="relative max-w-[90vw] max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 md:-right-8 text-white/70 hover:text-white transition-colors text-4xl font-light leading-none outline-none"
          aria-label="Close"
        >
          &times;
        </button>

        <img
          src={src}
          alt="Selected Gallery Image"
          className="max-w-full max-h-[85vh] object-contain rounded-sm shadow-2xl border border-white/10"
        />
      </div>
    </div>
  );
};

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageSrc, setSelectedImageSrc] = useState("");

  const imagesPerView = 3;

  // 1. Calculate total slides available (moved outside useEffect so buttons can use it)
  const totalSlides = galleryimages.length - imagesPerView;

  // 2. Define Next/Prev functions
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

  // 3. Auto-play useEffect
  useEffect(() => {
    if (totalSlides <= 0) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [totalSlides, nextSlide]);

  const openModal = (src) => {
    setSelectedImageSrc(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImageSrc("");
  };

  if (galleryimages.length < imagesPerView) {
    return (
      <div className="px-4 py-6 w-full bg-gray-200 border border-gray-400 text-center">
        <h3 className="text-xl font-semibold">গ্যালারি</h3>
        <p>স্লাইডারের জন্য পর্যাপ্ত ইমেজ নেই।</p>
      </div>
    );
  }

  // (300px width + 16px gap)
  const translateValue = currentIndex * (300 + 16);

  return (
    <>
      <div className="px-2 py-3 w-full bg-gray-200 border border-gray-400 flex flex-col gap-4 justify-center items-center relative overflow-hidden group">
        <h3 className="text-xl font-semibold">গ্যালারি</h3>

        {/* Slider Container Wrapper with Relative Positioning for Buttons */}
        <div className="relative w-full max-w-[948px]">
          {/* --- Previous Button --- */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-[#72AB20] text-white p-2 rounded-full backdrop-blur-sm transition-all shadow-md opacity-0 group-hover:opacity-100"
            aria-label="Previous Slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {/* --- Slider Window --- */}
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-700 ease-in-out gap-4"
              style={{ transform: `translateX(-${translateValue}px)` }}
            >
              {galleryimages.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[300px] cursor-pointer group/image overflow-hidden rounded-md shadow-lg"
                  onClick={() => openModal(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-[300px] h-[250px] object-cover transition-transform duration-300 group-hover/image:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* --- Next Button --- */}
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-[#72AB20] text-white p-2 rounded-full backdrop-blur-sm transition-all shadow-md opacity-0 group-hover:opacity-100"
            aria-label="Next Slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>

        <Link
          href={"#"}
          className="text-md font-medium bg-[#72AB20] text-white px-4 py-2 rounded-md hover:bg-[#5e8f1a] transition-colors"
        >
          আরও দেখুন
        </Link>
      </div>

      {isModalOpen && (
        <ImageModal src={selectedImageSrc} onClose={closeModal} />
      )}
    </>
  );
};

export default Gallery;
