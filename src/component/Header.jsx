"use client";
import React, { useState } from "react";
import { IoIosShareAlt, IoMdClose } from "react-icons/io";
import { TiHome } from "react-icons/ti";
import { HiMenuAlt3 } from "react-icons/hi";
import { iconprovider } from "@/helper/IconProvider";

const Header = () => {
  const navitem = [
    { name: "আমাদের সম্পর্কে", link: "#", color: "#ff6600" },
    { name: "কোর্স সমূহ", link: "#", color: "#c40a2a" },
    { name: "নিবন্ধন", link: "#", color: "#84154d" },
    { name: "ব্যবস্থাপনা", link: "#", color: "#098346" },
    { name: "গ্যালারি", link: "#", color: "#1399be" },
    { name: "যোগাযোগ", link: "#", color: "#8768de" },
    { name: "নোটিশ", link: "/notice", color: "#555555" },
  ];

  const aboutus = [
    {
      id: 1,
      title: "এক নজরে",
      url: "#",
    },
    {
      id: 2,
      title: "মিশন ও ভিশন",
      url: "#",
    },
    {
      id: 3,
      title: "কোর ভ্যালু ও উদ্দেশ্য",
      url: "#",
    },
    {
      id: 4,
      title: "ভবিষ্যৎ পরিকল্পনা",
      url: "#",
    },
  ];

  const [hoveredcolor, setHoveredcolor] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleShare = async (platform) => {
    const url = window.location.href;
    const title = "কারিগরি প্রশিক্ষণ কেন্দ্র, পীরগঞ্জ";

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
      telegram: `https://t.me/share/url?url=${encodeURIComponent(
        url
      )}&text=${encodeURIComponent(title)}`,
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
      <style>{`
        .simple-shadow {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
      `}</style>

      {/* Top Header */}
      <div className="bg-[#2c5f8d] p-3 md:p-4 w-full flex justify-between items-center">
        <p className="text-white font-medium text-sm md:text-lg">
          কারিগরি প্রশিক্ষণ কেন্দ্র, পীরগঞ্জ
        </p>

        <div className="relative">
          <button
            onClick={() => setShowShareMenu(!showShareMenu)}
            className="flex justify-center items-center px-3 py-1.5 bg-white rounded gap-2 text-sm hover:bg-gray-100 transition-colors"
          >
            শেয়ার{" "}
            <span>
              <IoIosShareAlt />
            </span>
          </button>

          {/* Share Dropdown Menu */}
          {showShareMenu && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setShowShareMenu(false)}
              ></div>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                <div className="py-2">
                  <button
                    onClick={() => handleShare("facebook")}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 transition-colors flex items-center gap-2"
                  >
                    <span className="text-blue-600">{iconprovider.facebook}</span>{" "}
                    Facebook
                  </button>
                  <button
                    onClick={() => handleShare("twitter")}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 transition-colors flex items-center gap-2"
                  >
                    <span className="text-sky-500">{iconprovider.twitter}</span> Twitter
                  </button>
                  <button
                    onClick={() => handleShare("linkedin")}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 transition-colors flex items-center gap-2"
                  >
                    <span className="text-blue-700">{iconprovider.linkedin}</span> LinkedIn
                  </button>
                  <button
                    onClick={() => handleShare("whatsapp")}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 transition-colors flex items-center gap-2"
                  >
                    <span className="text-green-500">{iconprovider.whatsapp}</span> WhatsApp
                  </button>
                 
                  <div className="border-t border-gray-200 my-1"></div>
                  <button
                    onClick={() => handleShare("copy")}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 transition-colors flex items-center gap-2"
                  >
                    <span>📋</span> {copied ? "কপি হয়েছে!" : "লিংক কপি করুন"}
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Portal Link Section */}
      <div className="bg-white px-4 py-2 text-xs md:text-sm border-b border-gray-300">
        <span className="text-gray-600">সরকারি অন্যান্য পোর্টাল দেখুন</span>
      </div>

      {/* Banner Section */}
      <section className="relative">
        <picture>
          <img
            src="https://ttcpirganj.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-02-at-22.31.43_498ace3a.jpg"
            alt=""
            className="w-full h-[200px] object-cover"
          />
        </picture>
        <div className="absolute top-[20px] flex flex-row md:flex-col gap-4 left-3">
          <picture>
            <img
              src="https://ttcpirganj.com/wp-content/uploads/2024/08/TTC-Pirganj-Logo-768x768.png"
              alt="ttc-pirganj-logo"
              className="w-20 h-20 object-contain"
            />
          </picture>
          <h1 className="text-2xl md:text-4xl font-bold text-white simple-shadow">
            কারিগরি প্রশিক্ষণ কেন্দ্র, পীরগঞ্জ
          </h1>
        </div>
      </section>

      {/* Navigation */}
      <div className="bg-white relative">
        <div className="flex items-center justify-between md:justify-start bg-gray-100">
          {/* Home Icon */}
          <a
            href="/"
            className="text-2xl md:text-2xl font-medium hover:text-white hover:bg-black transition-colors duration-200 flex items-center py-1"
          >
            <span className="md:border-r border-gray-400 px-3 md:px-4">
              <TiHome />
            </span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex md:items-center relative h-full">
            {navitem.map((item, index) => (
              <li
                key={index}
                className="relative h-full flex items-center py-2"
                style={{
                  color: hoveredIndex === index ? "white" : item.color,
                  backgroundColor:
                    hoveredIndex === index ? item.color : "transparent",
                }}
                onMouseEnter={() => {
                  setHoveredcolor(item.color);
                  setHoveredIndex(index);

                  if (item.name === "আমাদের সম্পর্কে") {
                    setIsAboutUsOpen(true);
                  } else {
                    setIsAboutUsOpen(false);
                  }
                }}
                onMouseLeave={() => {
                  setHoveredcolor(null);
                  setHoveredIndex(null);
                  setIsAboutUsOpen(false);
                }}
              >
                <a
                  href={item.link}
                  className={`text-sm px-3 text-[16px] font-semibold inline-block transition-colors duration-200 ${
                    index < navitem.length - 1 ? "border-r border-gray-400" : ""
                  }`}
                >
                  {item.name}
                </a>

                {/* Dropdown for About Us */}
                {item.name === "আমাদের সম্পর্কে" && isAboutUsOpen && (
                  <div className="flex">
                    <div className="absolute top-full left-0 w-48 bg-white shadow-lg p-4 flex flex-col gap-2 border border-gray-200 z-50">
                      <h3 className="text-[#ff6600] font-semibold">
                        অফিস সম্পর্কিত
                      </h3>
                      {aboutus.map((subItem) => (
                        <a
                          href={subItem.url}
                          key={subItem.id}
                          className="bg-white px-3 py-2 rounded text-sm text-gray-700 hover:bg-gray-100 transition-colors block"
                        >
                          {subItem.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-3xl p-3 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <IoMdClose /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-transparent backdrop-blur-sm z-40 md:hidden"
            onClick={toggleMenu}
          ></div>
        )}

        {/* Mobile Menu Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">মেনু</h2>
            <button
              onClick={toggleMenu}
              className="text-2xl p-1 hover:bg-gray-100 rounded transition-colors"
              aria-label="Close menu"
            >
              <IoMdClose />
            </button>
          </div>

          <ul className="flex flex-col py-2">
            {navitem.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="block px-6 py-3.5 text-base font-medium border-l-4 hover:bg-gray-50 transition-all duration-200"
                  style={{
                    color: item.color,
                    borderLeftColor: "transparent",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderLeftColor = item.color;
                    e.currentTarget.style.backgroundColor = `${item.color}10`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderLeftColor = "transparent";
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                  onClick={toggleMenu}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Hover Color Bar (Desktop Only) */}
      <div
        className="h-3 w-full hidden md:block transition-colors duration-200"
        style={{ backgroundColor: hoveredcolor || "white" }}
      ></div>
    </div>
  );
};

export default Header;
