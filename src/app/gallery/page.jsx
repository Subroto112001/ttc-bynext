"use client";
import { useState } from "react";

export default function GalleryPage() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);

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

  return (
    <div className="min-h-screen ">
      {/* Header */}
      <section className="">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">গ্যালারি</h1>
              <p className="mt-1 text-sm text-gray-600">
                {selectedAlbum
                  ? selectedAlbum.title
                  : "আমাদের বিভিন্ন কার্যক্রমের ছবি"}
              </p>
            </div>
            {selectedAlbum && (
              <button
                onClick={() => setSelectedAlbum(null)}
                className="px-4 py-2 bg-green-600 text-white hover:bg-green-700 transition-colors"
              >
                ← সকল অ্যালবাম
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {!selectedAlbum ? (
          // Albums Grid View
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {albums.map((album) => (
              <div
                key={album.id}
                onClick={() => setSelectedAlbum(album)}
                className="bg-white shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={album.cover}
                    alt={album.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {album.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {album.imageCount} টি ছবি
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Album Photos Grid View
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {selectedAlbum.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square bg-gray-200 overflow-hidden group cursor-pointer overflow-none"
              >
                <img
                  src={image.url}
                  alt={image.caption || `Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {image.caption && (
                  <div
                    className="absolute left-0 right-0 bottom-[-60px] 
                    bg-black bg-opacity-0 
                    group-hover:bottom-0 
                    group-hover:bg-opacity-60
                    transition-all duration-300"
                  >
                    <div
                      className="w-full p-4 text-white 
                      transform translate-y-full 
                      group-hover:translate-y-0 
                      transition-transform duration-300"
                    >
                      <p className="text-sm font-medium truncate">{image.caption}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Empty State for Albums */}
        {!selectedAlbum && albums.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">কোনো অ্যালবাম পাওয়া যায়নি</p>
          </div>
        )}

        {/* Pagination (Optional) */}
        {selectedAlbum && selectedAlbum.images.length > 12 && (
          <div className="mt-8 flex justify-center">
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                পূর্ববর্তী
              </button>
              <button className="px-4 py-2 bg-green-600 text-white">1</button>
              <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                2
              </button>
              <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                পরবর্তী
              </button>
            </div>
          </div>
        )}
      </main>

     
    </div>
  );
}
