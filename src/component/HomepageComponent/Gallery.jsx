"use client";


import { getAllImages } from "@/helper/dataProvider";
import { galleryVideos } from "@/helper/GallerDataProvider";
import Link from "next/link";
import React, { useState, useEffect, useCallback, useRef } from "react";

// Modal for Image Preview
const ImageModal = ({ src, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md"
      onClick={onClose}
    >
      <div className="relative p-4" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-red-500 transition-colors text-4xl"
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

// Video Modal
const VideoModal = ({ videoId, onClose }) => {
  if (!videoId) return null;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative p-4 w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-red-500 transition-colors text-4xl"
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

// Photo Gallery Content
const PhotoGalleryContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [apiImages, setApiImages] = useState([]); 
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);

  // getting images from API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const result = await getAllImages();
        if (result && result.data && result.data.images) {
          // latest 3 pictures
          const formattedImages = result.data.images.slice(0, 3).map((img) => ({
            src: img.imageUrl,
            alt: img.title || "Gallery Image",
          }));
          setApiImages(formattedImages);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const totalSlides = Math.max(0, apiImages.length - 1);

  const nextSlide = useCallback(() => {
    if (totalSlides > 0) {
      setCurrentIndex((prev) => (prev >= totalSlides ? 0 : prev + 1));
    }
  }, [totalSlides]);

  const prevSlide = () => {
    if (totalSlides > 0) {
      setCurrentIndex((prev) => (prev === 0 ? totalSlides : prev - 1));
    }
  };

  // auto slider
  useEffect(() => {
    if (totalSlides <= 0) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [totalSlides, nextSlide]);

  if (loading)
    return (
      <div className="text-center py-10 font-medium">ছবি লোড হচ্ছে...</div>
    );

  // if no images found
  if (apiImages.length === 0)
    return <div className="text-center py-10">কোনো ছবি পাওয়া যায়নি।</div>;

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <div className="flex justify-between items-center w-full border-b border-gray-300 pb-2 mb-4">
        <h3 className="font-semibold text-3xl">গ্যালারি</h3>
        <Link
          href="/gallery"
          className="text-md font-medium px-6 py-2 bg-[#72AB20] hover:bg-[#5d8c1a] text-white transition-colors"
        >
          আরও ছবি
        </Link>
      </div>

      <div className="relative w-full max-w-4xl group">
        {/* Navigation Buttons */}
        {apiImages.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-[#72AB20] hover:text-white p-2 rounded-full shadow-md"
            >
              &#10094;
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-[#72AB20] hover:text-white p-2 rounded-full shadow-md"
            >
              &#10095;
            </button>
          </>
        )}

        <div className="overflow-hidden py-4 px-4 md:px-0" ref={containerRef}>
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {apiImages.map((item, index) => (
              <div key={index} className="w-full shrink-0 px-2">
                <div
                  className="w-full h-[300px] md:h-[450px] cursor-pointer rounded-lg overflow-hidden shadow-md bg-white"
                  onClick={() => {
                    setSelectedImage(item.src);
                    setIsModalOpen(true);
                  }}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dots Indicator */}
      {apiImages.length > 1 && (
        <div className="flex gap-2">
          {apiImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-[#72AB20] w-6" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}

      {isModalOpen && (
        <ImageModal src={selectedImage} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

// Video Gallery Content (Keep as is)
const VideoGalleryContent = () => {
  const [modalVideoId, setModalVideoId] = useState(null);

  return (
    <div className="w-full max-w-5xl flex flex-col items-center gap-8">
      <div className="flex justify-between items-center w-full border-b border-gray-300 pb-2 mb-4">
        <h3 className="font-semibold text-3xl">ভিডিও</h3>
        <Link
          href="/videos"
          className="text-md font-medium px-6 py-2 bg-[#72AB20] hover:bg-[#5d8c1a] text-white transition-colors"
        >
          আরও ভিডিও
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full px-4">
        {galleryVideos.slice(0, 4).map((video) => (
          <div
            key={video.id}
            onClick={() => setModalVideoId(video.id)}
            className="cursor-pointer group relative bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all"
          >
            <div className="aspect-video relative">
              <img
                src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-all">
                <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                  <span className="text-[#72AB20] ml-0.5">▶</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {modalVideoId && (
        <VideoModal
          videoId={modalVideoId}
          onClose={() => setModalVideoId(null)}
        />
      )}
    </div>
  );
};

// Main Gallery Component
const Gallery = () => {
  return (
    <section className="mx-auto flex gap-10 flex-col items-center py-10">
      <div className="w-full py-10 px-4 bg-gray-100 border border-gray-300">
        <PhotoGalleryContent />
      </div>
      <div className="w-full py-10 px-4 bg-gray-100 border border-gray-300">
        <VideoGalleryContent />
      </div>
    </section>
  );
};

export default Gallery;
