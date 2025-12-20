"use client";

import { galleryimages, galleryVideos } from "@/helper/GallerDataProvider";
import Link from "next/link";
import React, { useState, useEffect, useCallback, useRef } from "react";

const albums = [
  {
    id: 1,
    title: "প্রশিক্ষণ কার্যক্রম ২০২৪",
    cover:
      "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageCount: 8,
    images: [
      {
        url: "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption:
          "ইলেকট্রিক্যাল প্রশিক্ষণ ক্লাস ইলেকট্রিক্যাল প্রশিক্ষণ ক্লাস ইলেকট্রিক্যাল প্রশিক্ষণ ক্লাস ইলেকট্রিক্যাল প্রশিক্ষণ ক্লাস",
      },
      {
        url: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "ওয়েল্ডিং বিভাগের শিক্ষার্থীরা",
      },
      {
        url: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        url: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "কম্পিউটার প্রশিক্ষণ কেন্দ্র",
      },
      {
        url: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "অটোমোবাইল মেকানিক্স ক্লাস",
      },
      {
        url: "https://images.pexels.com/photos/3183170/pexels-photo-3183170.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        url: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "ড্রাফটিং বিভাগের কার্যক্রম",
      },
      {
        url: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
    ],
  },
  {
    id: 2,
    title: "সাংস্কৃতিক অনুষ্ঠান",
    cover:
      "https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageCount: 6,
    images: [
      {
        url: "https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "বার্ষিক সাংস্কৃতিক অনুষ্ঠান ২০২৪",
      },
      {
        url: "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "শিক্ষার্থীদের নৃত্য পরিবেশনা",
      },
      {
        url: "https://images.pexels.com/photos/1709003/pexels-photo-1709003.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        url: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "সংগীত পরিবেশনা",
      },
      {
        url: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        url: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "বিজয়ী দলের সাথে অধ্যক্ষ",
      },
    ],
  },
  {
    id: 3,
    title: "খেলাধুলা ও ক্রীড়া",
    cover:
      "https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageCount: 7,
    images: [
      {
        url: "https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "বার্ষিক ক্রীড়া প্রতিযোগিতা",
      },
      {
        url: "https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        url: "https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "বাস্কেটবল টুর্নামেন্ট",
      },
      {
        url: "https://images.pexels.com/photos/186076/pexels-photo-186076.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "ভলিবল ম্যাচ",
      },
      {
        url: "https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        url: "https://images.pexels.com/photos/257970/pexels-photo-257970.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "ফুটবল প্রতিযোগিতা",
      },
      {
        url: "https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
    ],
  },
  {
    id: 4,
    title: "সেমিনার ও কর্মশালা",
    cover:
      "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageCount: 5,
    images: [
      {
        url: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "জাতীয় কারিগরি সেমিনার ২০২৪",
      },
      {
        url: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "আন্তর্জাতিক বক্তার বক্তব্য",
      },
      {
        url: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        url: "https://images.pexels.com/photos/1181434/pexels-photo-1181434.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "প্রশিক্ষকদের কর্মশালা",
      },
      {
        url: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "সার্টিফিকেট প্রদান অনুষ্ঠান",
      },
    ],
  },
  {
    id: 5,
    title: "ক্যাম্পাস জীবন",
    cover:
      "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageCount: 6,
    images: [
      {
        url: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        url: "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "শিক্ষার্থীদের দৈনন্দিন জীবন",
      },
      {
        url: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "ক্যাম্পাস পরিবেশ",
      },
      {
        url: "https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        url: "https://images.pexels.com/photos/1516440/pexels-photo-1516440.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "লাইব্রেরিতে অধ্যয়নরত শিক্ষার্থীরা",
      },
      {
        url: "https://images.pexels.com/photos/1164572/pexels-photo-1164572.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
    ],
  },
  {
    id: 6,
    title: "পুরস্কার বিতরণী",
    cover:
      "https://images.pexels.com/photos/1007025/pexels-photo-1007025.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageCount: 4,
    images: [
      {
        url: "https://images.pexels.com/photos/1007025/pexels-photo-1007025.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "মেধাবী শিক্ষার্থীদের পুরস্কার প্রদান",
      },
      {
        url: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        url: "https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "শ্রেষ্ঠ শিক্ষার্থী সম্মাননা",
      },
      {
        url: "https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "অধ্যক্ষের সাথে বিজয়ীরা",
      },
    ],
  },
];

// Modal for Image Preview
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

// Video Modal
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

// Photo Gallery Content
const PhotoGalleryContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // শেষের তিনটি অ্যালবামের প্রথম ছবি নিচ্ছি
  const lastThreeAlbumImages = albums.slice(-3).map((album) => ({
    src: album.images[0].url,
    alt: album.images[0].caption || album.title,
  }));

  // galleryimages এর সাথে শেষের তিনটি অ্যালবামের ছবি যোগ করছি
  const allImages = [...galleryimages, ...lastThreeAlbumImages];

  const imagesPerView = 1;
  const totalSlides = Math.max(0, allImages.length - imagesPerView);

  const translateValue = `${currentIndex * (-100 / imagesPerView)}%`;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= totalSlides ? 0 : prev + 1));
  }, [totalSlides]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides : prev - 1));
  };

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
      <div className="flex justify-between items-center w-full border-b border-gray-300 pb-2 mb-4">
        <h3 className="text-center  font-semibold  text-3xl">গ্যালারি</h3>
        <Link
          href="/gallery"
          className="text-md font-medium  px-6 py-2 bg-[#72AB20] hover:bg-[#5d8c1a] text-white transition-colors"
        >
          আরও ছবি
        </Link>
      </div>

      <div className="relative w-full max-w-4xl group">
        <button
          onClick={prevSlide}
          className="absolute left-2 md:-left-2 top-1/2 -translate-y-1/2 z-10 shadow-md bg-white hover:bg-[#72AB20] hover:text-white text-gray-700 p-2 md:p-3 rounded-full transition-all md:opacity-0 md:group-hover:opacity-100"
        >
          &#10094;
        </button>

        <div className="overflow-hidden py-4 px-4 md:px-0" ref={containerRef}>
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(${translateValue})`,
            }}
          >
            {allImages.map((item, index) => (
              <div
                key={index}
                className="shrink-0 px-2"
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

        <button
          onClick={nextSlide}
          className="absolute right-2 md:-right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:bg-[#72AB20] hover:text-white text-gray-700 p-2 md:p-3 rounded-full transition-all md:opacity-0 md:group-hover:opacity-100"
        >
          &#10095;
        </button>
      </div>

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

      {isModalOpen && (
        <ImageModal src={selectedImage} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

// Video Gallery Content with YouTube API
const VideoGalleryContent = () => {
  const [videos, setVideos] = useState(galleryVideos);
  const [mainVideo, setMainVideo] = useState(galleryVideos[0]);
  const [modalVideoId, setModalVideoId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchYouTubeTitles = async () => {
      try {
        const videoIds = galleryVideos.map((v) => v.id).join(",");
        const response = await fetch(
          `https://www.youtube.com/oembed?url=http://www.youtube.com/watch?v=${galleryVideos[0].id}&format=json`
        );

        // Fallback: fetch each video individually using oEmbed
        const updatedVideos = await Promise.all(
          galleryVideos.map(async (video) => {
            try {
              const res = await fetch(
                `https://www.youtube.com/oembed?url=http://www.youtube.com/watch?v=${video.id}&format=json`
              );
              const data = await res.json();
              return { ...video, title: data.title || video.title };
            } catch (err) {
              console.error(`Failed to fetch title for ${video.id}:`, err);
              return video;
            }
          })
        );

        setVideos(updatedVideos);
        setMainVideo(updatedVideos[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching YouTube titles:", error);
        setLoading(false);
      }
    };

    fetchYouTubeTitles();
  }, []);

  const openVideoModal = (id) => {
    setModalVideoId(id);
  };

  const closeVideoModal = () => {
    setModalVideoId(null);
  };

  return (
    <div className="w-full max-w-5xl flex flex-col items-center gap-8">
      <div className="flex justify-between items-center w-full border-b border-gray-300 pb-2 mb-4">
        <h3 className="text-center  font-semibold  text-3xl">ভিডিও</h3>
        <Link
          href="/videos"
          className="text-md font-medium  px-6 py-2 bg-[#72AB20] hover:bg-[#5d8c1a] text-white transition-colors"
        >
          আরও ভিডিও
        </Link>
      </div>

      <div className="w-full flex flex-col gap-6 px-4 md:px-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {videos.map((video) => (
            <div
              key={video.id}
              onClick={() => {
                setMainVideo(video);
                openVideoModal(video.id);
              }}
              className={`cursor-pointer group relative overflow-hidden shadow-sm hover:shadow-lg transition-all  bg-white `}
            >
              <div className="aspect-video w-full relative">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />

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

              <div className="p-2 bg-gray-50">
                <p
                  className={`text-sm font-medium truncate ${
                    mainVideo.id === video.id
                      ? "text-[#72AB20]"
                      : "text-gray-700"
                  }`}
                >
                  {loading ? "Loading..." : video.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    

      {modalVideoId && (
        <VideoModal videoId={modalVideoId} onClose={closeVideoModal} />
      )}
    </div>
  );
};

// Main Gallery Component
const Gallery = () => {
  return (
    <section className="mx-auto flex gap-10 flex-col items-center">
      <div className="w-full py-10 md:py-15 px-4 bg-gray-200 border border-gray-400">
        <PhotoGalleryContent />
      </div>
      <div className="w-full py-10 md:py-15 px-4 bg-gray-200 border border-gray-400">
        <VideoGalleryContent />
      </div>
    </section>
  );
};

export default Gallery;
