"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  FaChevronRight,
  FaSpinner,
  FaArrowLeft,
  FaCalendarAlt,
  FaImages,
} from "react-icons/fa";
import { getImagesByAlbum } from "@/helper/dataProvider";

// number translator
const toBengaliNumber = (num) => {
  const digits = {
    0: "০",
    1: "১",
    2: "২",
    3: "৩",
    4: "৪",
    5: "৫",
    6: "৬",
    7: "৭",
    8: "৮",
    9: "৯",
  };
  return String(num)
    .split("")
    .map((digit) => digits[digit] || digit)
    .join("");
};

// date translator
const toBengaliDate = (dateString) => {
  if (!dateString) return "";
  const digits = {
    0: "০",
    1: "১",
    2: "২",
    3: "৩",
    4: "৪",
    5: "৫",
    6: "৬",
    7: "৭",
    8: "৮",
    9: "৯",
  };
  const date = new Date(dateString).toLocaleDateString("en-CA"); 
  return date.replace(/[0-9]/g, (w) => digits[w]).replace(/-/g, "/");
};

export default function AlbumDetailPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const albumId = searchParams.get("id");
  const albumTitle = searchParams.get("title") || "অ্যালবাম";

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      if (!albumId) {
        setError("অ্যালবাম আইডি পাওয়া যায়নি।");
        setLoading(false);
        return;
      }
      setLoading(true);
      try {
        const result = await getImagesByAlbum(albumId);
        if (result && result.statusCode === 200) {
          setImages(result.data.images);
        } else {
          setError("ছবি লোড করতে সমস্যা হয়েছে।");
        }
      } catch (error) {
        setError("ছবি লোড করতে ব্যর্থ হয়েছে।");
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, [albumId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <FaSpinner className="animate-spin text-[#72AB20] text-4xl mx-auto mb-4" />
          <p className="text-gray-600 font-medium">লোড হচ্ছে...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-50">
        <p className="text-xl font-bold text-red-500">{error}</p>
        <button
          onClick={() => router.push("/gallery")}
          className="px-6 py-2 bg-[#72AB20] text-white rounded hover:bg-[#5d8c1a] transition-colors"
        >
          গ্যালারিতে ফিরে যান
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gray-50 shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-2">
              গ্যালারি
              <span className="text-gray-400 text-xl">
                <FaChevronRight />
              </span>
              <span className="text-[#72AB20]">{albumTitle}</span>
            </h1>
            <p className="text-sm text-gray-600 mt-1 flex items-center gap-2">
              <FaImages className="text-gray-400" />
              মোট ছবি: {toBengaliNumber(images.length)} টি
            </p>
          </div>
          <button
            onClick={() => router.push("/gallery")}
            className="px-4 py-2 bg-[#72AB20] hover:bg-[#5d8c1a] text-white rounded transition-colors flex items-center gap-2"
          >
            <FaArrowLeft size={14} /> ফিরে যান
          </button>
        </div>
      </section>

      {/* Images Grid */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {images.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">এই অ্যালবামে কোনো ছবি নেই।</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div
                key={image._id || index}
                onClick={() => setSelectedImage(image)}
                className="relative aspect-square bg-gray-100 overflow-hidden cursor-pointer group rounded-sm border border-gray-200"
              >
                <img
                  src={image.imageUrl}
                  alt={image.title || ""}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Caption overlay on hover */}
                <div className="absolute left-0 right-0 bottom-[-160px] bg-black bg-opacity-0 group-hover:bottom-0 group-hover:bg-opacity-60 transition-all duration-300">
                  <div className="w-full p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm font-medium line-clamp-1">
                      {image.description || "Untitled"}
                    </p>
                    <p className="text-xs mt-1 flex items-center gap-1">
                      <FaCalendarAlt size={10} />
                      {toBengaliDate(image.createdAt)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Modal Section */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-10 right-0 text-white text-lg hover:text-[#72AB20] transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ✕ বন্ধ করুন
            </button>

            <img
              src={selectedImage.imageUrl}
              alt={selectedImage.title || "Full view"}
              className="max-h-[80vh] mx-auto shadow-2xl border border-white/10"
            />

            <div className="mt-4 text-center">
              <h3 className="text-white text-xl font-bold">
                {selectedImage.title}
              </h3>
              {selectedImage.description && (
                <p className="text-gray-300 mt-2 max-w-2xl mx-auto">
                  {selectedImage.description}
                </p>
              )}
              <p className="text-gray-400 text-sm mt-2">
                প্রকাশকাল: {toBengaliDate(selectedImage.createdAt)}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
