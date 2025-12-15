"use client"; // Required for Next.js if using App Router because we are using useState

import { galleryimages } from "@/helper/GallerImageProvider";
import Link from "next/link";
import React, { useState } from "react";

const Gallery = () => {
  const latestImages = galleryimages.slice(-3);

  // State to track the currently selected image for the modal
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to close the modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="px-2 py-3 w-full bg-gray-200 border border-gray-400 flex flex-col gap-4 justify-center items-center relative">
      <h3 className="text-xl font-semibold">গ্যালারি</h3>

      {/* Thumbnails Section */}
      <div className="flex justify-between gap-4 overflow-x-auto">
        {latestImages.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer group overflow-hidden"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-[300px] h-[250px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      <Link
        href={"#"}
        className="text-md font-medium bg-[#72AB20] text-white px-4 py-2 rounded-md hover:bg-[#5e8f1a] transition-colors"
      >
        আরও দেখুন
      </Link>

      {/* --- MODAL SECTION --- */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-transparent backdrop-blur-sm p-4"
          onClick={closeModal} // Close when clicking the background
        >
          <div
            className="relative max-w-5xl w-full flex justify-center"
            onClick={(e) => e.stopPropagation()} // Prevent close when clicking the image itself
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white text-3xl font-bold hover:text-gray-300 z-50 cursor-pointer"
            >
              &times;
            </button>

            {/* Full Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[90vh] w-auto object-contain rounded-lg shadow-2xl border-2 border-white/20"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
