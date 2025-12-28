"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaImages, FaSpinner, FaUser, FaCalendarAlt } from "react-icons/fa";
import { getAllAlbums } from "@/helper/dataProvider";

const toBengaliDate = (dateString) => {
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
  return dateString.replace(/[0-9]/g, (w) => digits[w]).replace(/-/g, "/");
};

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

export default function GalleryPage() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAlbums = async () => {
      setLoading(true);
      try {
        const result = await getAllAlbums();

        if (result && result.success) {
          setAlbums(result.data);
          console.log("Albums loaded:", result.data);
        } else {
          setError("অ্যালবাম লোড করতে সমস্যা হয়েছে।");
        }
      } catch (error) {
        console.error("Fetch error:", error);
        setError("অ্যালবাম লোড করতে ব্যর্থ হয়েছে।");
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();
  }, []);

  // Get poster name
  const getPosterName = (postedBy) => {
    if (!postedBy) return "অজানা";
    if (typeof postedBy === "object") {
      return `${postedBy.firstName || ""} ${postedBy.lastName || ""}`.trim();
    }
    return postedBy;
  };

  // Loading handle
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <FaSpinner className="animate-spin text-blue-600 text-4xl mx-auto mb-4" />
          <p className="text-gray-600 font-medium">লোড হচ্ছে...</p>
        </div>
      </div>
    );
  }

  // Error handle
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-xl font-bold text-red-500 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            আবার চেষ্টা করুন
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">   
      <section className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            গ্যালারি
          </h1>
          <p className="mt-2 text-base text-gray-600">
            আমাদের বিভিন্ন কার্যক্রমের ছবি ({toBengaliNumber(albums.length)} টি
            অ্যালবাম)
          </p>
        </div>
      </section>

      {/* Albums section */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {albums.length === 0 ? (
          <div className="text-center py-16">
            <FaImages className="text-gray-400 text-6xl mx-auto mb-4" />
            <p className="text-xl text-gray-500">কোন অ্যালবাম পাওয়া যায়নি।</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {albums.map((album) => (
              <Link
                key={album._id}
                href={`/album-details?id=${
                  album._id
                }&title=${encodeURIComponent(album.title)}`}
                className="group"
              >
                <div className="bg-white  shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
                  {/* Cover Image */}
                  <div className="relative aspect-video overflow-hidden bg-gray-200">
                    <img
                      src={
                        album.coverImage ||
                        album.images[0]?.imageUrl ||
                        "/placeholder-image.jpg"
                      }
                      alt={album.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = "/placeholder-image.jpg";
                      }}
                    />
                    {/* Image Count Badge */}
                    <div className="absolute top-3 right-3 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <FaImages size={14} />
                      {toBengaliNumber(album.images?.length || 0)}
                    </div>
                  </div>

                  {/* Album Information */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {album.title}
                    </h3>

                    {album.description && (
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {album.description}
                      </p>
                    )}

                    <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                      {/* Posted By */}
                      {album.postedBy && (
                        <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
                          <FaUser size={10} />
                          <span>{getPosterName(album.postedBy)}</span>
                        </div>
                      )}

                  
                      {album.createdAt && (
                        <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
                          <FaCalendarAlt size={10} />
                          <span>
                            {toBengaliDate(
                              new Date(album.createdAt).toLocaleDateString(
                                "en-CA"
                              )
                            )}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
