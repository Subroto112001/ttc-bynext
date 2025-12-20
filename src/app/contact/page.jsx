"use client";

import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Data:", formData);
    alert("আপনার বার্তাটি সফলভাবে পাঠানো হয়েছে। আমরা শীঘ্রই যোগাযোগ করব।");
  };

  return (
    <div className=" min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* উপরের শিরোনাম */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            যোগাযোগ করুন
          </h1>
          <p className="text-gray-600 mt-2">
            যেকোনো জিজ্ঞাসা বা তথ্যের জন্য আমাদের কাছে বার্তা পাঠান
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ১. যোগাযোগের তথ্য ও ম্যাপ (বাম পাশ) */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6  shadow-md ">
              <h3 className="text-xl font-bold mb-6 text-gray-800">
                অফিসের তথ্য
              </h3>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="text-red-600 mt-1">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-600">
                    মকিমপুর, পীরগঞ্জ, রংপুর - ৫৪১০
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-red-600 mt-1">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-600">+৮৮০ ১৮৪২১ ৯৬৫৬৬</p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-red-600 mt-1">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-600">ttcpirganj@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-white p-1 shadow-md h-64 overflow-hidden">
              <iframe
                title="TTC Pirganj"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4274.0629445469285!2d89.30276937538953!3d25.432855777560007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fcdbeb0cb93f39%3A0x309d1aa90d28f57f!2sTechnical%20Training%20Centre%2C%20PIRGANJ!5e1!3m2!1sen!2sbd!4v1765613751222!5m2!1sen!2sbd"
                className="w-full h-full"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* ২. কন্টাক্ট ফর্ম (ডান পাশ) */}
          <div className="lg:col-span-2 bg-white p-8  shadow-md ">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              বার্তা পাঠান
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    আপনার নাম *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-3 outline-none"
                    placeholder="নাম লিখুন"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    ইমেইল ঠিকানা
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-3 outline-none"
                    placeholder="example@mail.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  বিষয় *
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 outline-none"
                  placeholder="আপনি কি বিষয়ে জানতে চান?"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  আপনার বার্তা *
                </label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3  outline-none"
                  placeholder="বিস্তারিত এখানে লিখুন..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#72AB20] hover:bg-[#5d8c1a] text-white font-bold py-4 transition duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                বার্তা পাঠান
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
