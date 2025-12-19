"use client";

import React, { useState } from "react";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    courseName: "",
    shift: "",
    applicantNameBn: "",
    applicantNameEn: "",
    fatherName: "",
    motherName: "",
    dob: "",
    gender: "",
    religion: "",
    bloodGroup: "",
    mobile: "",
    email: "",
    presentAddress: "",
    permanentAddress: "",
    identityNumber: "",
    education: "",
    passingYear: "",
    quota: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("আপনার আবেদনটি সফলভাবে জমা হয়েছে!");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg my-10 border border-gray-200">
      <div className="text-center mb-8 border-b-2 border-[#2c5f8d] pb-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          পীরগঞ্জ কারিগরি প্রশিক্ষণ কেন্দ্র, রংপুর
        </h1>
        <h2 className="text-xl text-[#2c5f8d] font-semibold mt-2">
          অনলাইন ভর্তি আবেদন ফরম
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* ১. কোর্সের তথ্য */}
        <section>
          <h3 className="text-lg font-bold bg-gray-100 p-2 mb-4 rounded">
            ১. কোর্সের তথ্য (Course Information)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">
                আবেদনকৃত কোর্সের নাম *
              </label>
              <select
                name="courseName"
                required
                onChange={handleChange}
                className="w-full border p-2  focus:ring-2 focus:ring-blue-500"
              >
                <option value="">সিলেক্ট করুন</option>
                <option value="Graphics Design">গ্রাফিক্স ডিজাইন</option>
                <option value="IT Support Service">আইটি সাপোর্ট সার্ভিস</option>
                <option value="Driving">ড্রাইভিং</option>
                <option value="Electrical Installation">
                  ইলেকট্রিক্যাল ইন্সটলেশন
                </option>
                <option value="Computer Operation">কম্পিউটার অপারেশন</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 font-medium">শিফট *</label>
              <select
                name="shift"
                required
                onChange={handleChange}
                className="w-full border p-2  focus:ring-2 focus:ring-blue-500"
              >
                <option value="">সিলেক্ট করুন</option>
                <option value="Morning">সকাল (Morning)</option>
                <option value="Afternoon">দুপুর (Afternoon)</option>
              </select>
            </div>
          </div>
        </section>

        {/* ২. ব্যক্তিগত তথ্য */}
        <section>
          <h3 className="text-lg font-bold bg-gray-100 p-2 mb-4 ">
            ২. ব্যক্তিগত তথ্য (Personal Information)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">
                আবেদনকারীর নাম (বাংলায়) *
              </label>
              <input
                type="text"
                name="applicantNameBn"
                required
                onChange={handleChange}
                className="w-full border p-2 "
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">
                আবেদনকারীর নাম (ইংরেজিতে) *
              </label>
              <input
                type="text"
                name="applicantNameEn"
                required
                onChange={handleChange}
                className="w-full border p-2  uppercase"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">পিতার নাম *</label>
              <input
                type="text"
                name="fatherName"
                required
                onChange={handleChange}
                className="w-full border p-2 "
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">মাতার নাম *</label>
              <input
                type="text"
                name="motherName"
                required
                onChange={handleChange}
                className="w-full border p-2 "
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">জন্ম তারিখ *</label>
              <input
                type="date"
                name="dob"
                required
                onChange={handleChange}
                className="w-full border p-2 "
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">লিঙ্গ *</label>
              <div className="flex gap-4 mt-2">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    onChange={handleChange}
                  />{" "}
                  পুরুষ
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    onChange={handleChange}
                  />{" "}
                  মহিলা
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Other"
                    onChange={handleChange}
                  />{" "}
                  অন্যান্য
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* ৩. যোগাযোগের তথ্য */}
        <section>
          <h3 className="text-lg font-bold bg-gray-100 p-2 mb-4 ">
            ৩. যোগাযোগের তথ্য (Contact Information)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">মোবাইল নম্বর *</label>
              <input
                type="tel"
                name="mobile"
                required
                placeholder="017XXXXXXXX"
                onChange={handleChange}
                className="w-full border p-2 "
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">ইমেইল ঠিকানা</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                className="w-full border p-2 "
              />
            </div>
            <div className="md:col-span-2">
              <label className="block mb-1 font-medium">বর্তমান ঠিকানা *</label>
              <textarea
                name="presentAddress"
                required
                onChange={handleChange}
                className="w-full border p-2 h-20"
              ></textarea>
            </div>
          </div>
        </section>

        {/* ৪. পরিচয় ও শিক্ষা */}
        <section>
          <h3 className="text-lg font-bold bg-gray-100 p-2 mb-4 rounded">
            ৪. পরিচয় ও শিক্ষাগত যোগ্যতা
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">
                NID / জন্ম নিবন্ধন নম্বর *
              </label>
              <input
                type="text"
                name="identityNumber"
                required
                onChange={handleChange}
                className="w-full border p-2 "
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">
                সর্বোচ্চ শিক্ষাগত যোগ্যতা *
              </label>
              <input
                type="text"
                name="education"
                required
                placeholder="যেমন: SSC/HSC"
                onChange={handleChange}
                className="w-full border p-2 "
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">
                ছবি আপলোড করুন (Passport Size)
              </label>
              <input
                type="file"
                accept="image/*"
                className="w-full border p-1 "
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">কোটা (যদি থাকে)</label>
              <select
                name="quota"
                onChange={handleChange}
                className="w-full border p-2 "
              >
                <option value="None">নেই</option>
                <option value="Freedom Fighter">মুক্তিযোদ্ধা সন্তান</option>
                <option value="Ethnic">ক্ষুদ্র নৃ-গোষ্ঠী</option>
                <option value="Disabled">প্রতিবন্ধী</option>
              </select>
            </div>
          </div>
        </section>

        <div className="pt-6">
          <button
            type="submit"
            className="w-full bg-[#72AB20] hover:bg-[#7bca0b] text-white font-bold py-3 px-4 transition duration-200"
          >
            আবেদন জমা দিন (Submit Application)
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
