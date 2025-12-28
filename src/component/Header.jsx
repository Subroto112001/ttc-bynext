"use client";
import React, { useState } from "react";
import {
  IoIosShareAlt,
  IoMdClose,
  IoIosArrowDown,
  IoIosArrowUp,
} from "react-icons/io";
import { TiHome } from "react-icons/ti";
import { HiMenuAlt3 } from "react-icons/hi";
import { iconprovider } from "@/helper/IconProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  // Navigation Items
  const navitem = [
    {
      name: "আমাদের সম্পর্কে",
      link: "/about-us",
      color: "#ff6600",
      dropdownTitle: "অফিস সম্পর্কিত",
      submenu: [
        { title: "এক নজরে", url: "/about-us" },
        { title: "মিশন ও ভিশন", url: "/mision-vision" },
        { title: "কোর ভ্যালু ও উদ্দেশ্য", url: "/core-value" },
        { title: "ভবিষ্যৎ পরিকল্পনা", url: "/futurePlansPage" },
      ],
    },
    { name: "কোর্স সমূহ", link: "/course", color: "#c40a2a" },
    { name: "নিবন্ধন", link: "/registration", color: "#84154d" },
    {
      name: "ব্যবস্থাপনা",
      link: "/officers",
      color: "#098346",
      dropdownTitle: "ব্যবস্থাপনা প্যানেল",
      submenu: [
        { title: "কর্মকর্তাবৃন্দ", url: "/officers" },
        { title: "কর্মচারীবৃন্দ", url: "/staffs" },
      ],
    },
    { name: "ছবি-গ্যালারি", link: "/gallery", color: "#1399be" },
    { name: "ভিডিও", link: "/videos", color: "#1371be" },
    { name: "যোগাযোগ", link: "/contact", color: "#8768de" },
    { name: "নোটিশ", link: "/notice", color: "#555555" },
  ];

  const [hoveredcolor, setHoveredcolor] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  // Track which mobile submenu is open
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setMobileSubmenuOpen(null); 
  };

  const handleShare = async (platform) => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const title = "পীরগঞ্জ কারিগরি প্রশিক্ষণ কেন্দ্র, রংপুর";

    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url
      )}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        url
      )}&text=${encodeURIComponent(title)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url
      )}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(title + " " + url)}`,
    };

    if (platform === "copy") {
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    } else if (shareUrls[platform]) {
      window.open(shareUrls[platform], "_blank", "width=600,height=400");
    }
    setShowShareMenu(false);
  };

  return (
    <div className="flex flex-col w-full">
      <style>{`.simple-shadow { text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); }`}</style>

     
      <div className="bg-[#2c5f8d] p-3 md:p-4 w-full flex justify-between items-center">
        <Link href="/" className="text-white font-medium text-sm md:text-lg">
          পীরগঞ্জ কারিগরি প্রশিক্ষণ কেন্দ্র, রংপুর
        </Link>

        <div className="relative">
          <button
            onClick={() => setShowShareMenu(!showShareMenu)}
            className="flex justify-center items-center px-3 py-1.5 bg-white rounded gap-2 text-sm hover:bg-gray-100 duration-200 transition-colors cursor-pointer"
          >
            শেয়ার{" "}
            <span>
              <IoIosShareAlt />
            </span>
          </button>

          {showShareMenu && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setShowShareMenu(false)}
              ></div>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                <div className="py-2">
                  {["facebook", "twitter", "linkedin", "whatsapp"].map((p) => (
                    <button
                      key={p}
                      onClick={() => handleShare(p)}
                      className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 transition-colors flex items-center gap-2 capitalize"
                    >
                      {iconprovider[p]} {p}
                    </button>
                  ))}
                  <div className="border-t border-gray-200 my-1"></div>
                  <button
                    onClick={() => handleShare("copy")}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 transition-colors flex items-center gap-2"
                  >
                    📋 {copied ? "কপি হয়েছে!" : "লিংক কপি করুন"}
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Banner Section */}
      <section className="relative">
        <img
          src="https://ttcpirganj.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-02-at-22.31.43_498ace3a.jpg"
          alt="Banner"
          className="w-full h-[200px] object-cover"
        />
        <div className="absolute top-[20px] flex flex-row md:flex-col gap-4 left-3">
          <img
            src="https://ttcpirganj.com/wp-content/uploads/2024/08/TTC-Pirganj-Logo-768x768.png"
            alt="Logo"
            className="w-20 h-20 object-contain"
          />
          <h1 className="text-2xl md:text-4xl font-bold text-white simple-shadow">
            পীরগঞ্জ কারিগরি প্রশিক্ষণ কেন্দ্র, রংপুর
          </h1>
        </div>
      </section>

      {/* Navigation */}
      <div className="bg-white relative">
        <div className="flex items-center justify-between md:justify-start bg-gray-100">
          <Link
            href="/"
            className={`text-xl font-medium transition-colors duration-200 flex items-center py-2 ${
              pathname === "/"
                ? "bg-black text-white"
                : "hover:text-white hover:bg-black"
            }`}
          >
            <span className="md:border-r border-gray-400 px-3 md:px-4">
              <TiHome />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex md:items-center relative h-full">
            {navitem.map((item, index) => {
              const isActive = pathname.startsWith(item.link);
              const isHovered = hoveredIndex === index;

              return (
                <li
                  key={index}
                  className="relative h-full flex items-center py-2 transition-all duration-200"
                  style={{
                    color: isHovered || isActive ? "white" : item.color,
                    backgroundColor:
                      isHovered || isActive ? item.color : "transparent",
                  }}
                  onMouseEnter={() => {
                    setHoveredcolor(item.color);
                    setHoveredIndex(index);
                  }}
                  onMouseLeave={() => {
                    setHoveredcolor(null);
                    setHoveredIndex(null);
                  }}
                >
                  <Link
                    href={item.link}
                    className={`text-sm px-3 text-[16px] font-semibold inline-block transition-colors duration-200 ${
                      index < navitem.length - 1
                        ? "border-r border-gray-400"
                        : ""
                    }`}
                  >
                    {item.name}
                  </Link>

                  {item.submenu && isHovered && (
                    <div className="absolute top-full left-0 w-52 bg-white shadow-xl p-4 flex flex-col gap-2 border border-gray-200 z-50">
                      {item.dropdownTitle && (
                        <h3 className="font-bold mb-1 border-b pb-1 text-black">
                          {item.dropdownTitle}
                        </h3>
                      )}
                      {item.submenu.map((sub, subIdx) => (
                        <Link
                          key={subIdx}
                          href={sub.url}
                          className={`px-3 py-2 rounded text-sm transition-colors block ${
                            pathname === sub.url
                              ? "bg-gray-200 font-bold text-black"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          <button
            onClick={toggleMenu}
            className="md:hidden text-3xl p-3 hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <IoMdClose /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar with Dropdown */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-[60] transform transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">মেনু</h2>
          <button
            onClick={toggleMenu}
            className="text-2xl p-1 hover:bg-gray-100 rounded"
          >
            <IoMdClose />
          </button>
        </div>
        <ul className="flex flex-col py-2 overflow-y-auto h-full pb-20">
          {navitem.map((item, index) => (
            <li key={index} className="border-b border-gray-50 last:border-0">
              <div className="flex items-center justify-between pr-4">
                <Link
                  href={item.link}
                  onClick={toggleMenu}
                  className="block flex-1 px-6 py-3.5 text-base font-medium border-l-4 border-transparent hover:bg-gray-50"
                  style={{ color: item.color }}
                >
                  {item.name}
                </Link>

                {/* Mobile Dropdown Trigger */}
                {item.submenu && (
                  <button
                    onClick={() =>
                      setMobileSubmenuOpen(
                        mobileSubmenuOpen === index ? null : index
                      )
                    }
                    className="p-2 text-xl text-gray-500"
                  >
                    {mobileSubmenuOpen === index ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </button>
                )}
              </div>

              {/* Mobile Submenu Content */}
              {item.submenu && mobileSubmenuOpen === index && (
                <div className="bg-gray-50 py-2">
                  {item.dropdownTitle && (
                    <div className="px-8 py-1 text-xs font-bold text-gray-400 uppercase tracking-wider">
                      {item.dropdownTitle}
                    </div>
                  )}
                  {item.submenu.map((sub, sIdx) => (
                    <Link
                      key={sIdx}
                      href={sub.url}
                      onClick={toggleMenu}
                      className="block px-10 py-2.5 text-sm text-gray-600 hover:text-black border-l-4 border-transparent"
                    >
                      {sub.title}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div
        className="h-3 w-full hidden md:block transition-colors duration-200"
        style={{ backgroundColor: hoveredcolor || "transparent" }}
      ></div>
    </div>
  );
};

export default Header;
