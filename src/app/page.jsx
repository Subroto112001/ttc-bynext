import Image from "next/image";
import { IoMdNotifications } from "react-icons/io";
import noticeimage from "../assets/bg_notice_board.png";
import bangladesdirectory from "../assets/Bangladesh-Directory.jpg";
import bkkb from "../assets/bkkb_button_bn.png";
import { IoJournalOutline } from "react-icons/io5";
import { FaArrowCircleRight } from "react-icons/fa";
import Link from "next/link";
import Hotline from "../assets/hotline_v.2_bn.png";
import { HompageImage } from "@/assets/ImgaeProvide";

export default function Home() {
  const allData = [
    {
      title: "আমাদের বিষয়",
      type: "Aboutus",
      data: [
        { id: 1, title: "কর্মকর্তাবৃন্দ", url: "/" },
        { id: 2, title: "কর্মচারীবৃন্দ", url: "/" },
        { id: 3, title: "যোগাযোগ", url: "/" },
        { id: 4, title: "সাংগঠনিক কাঠামো", url: "/" },
      ],
    },
    {
      title: "সেবাসমূহ",
      type: "services",
      data: [
        { id: 1, title: "সেবার তালিকা", url: "/" },
        { id: 2, title: "কি সেবা কিভাবে পাবেন", url: "/" },
        { id: 3, title: "টিজেন চার্টার", url: "/" },
        { id: 4, title: "সেবা কুঞ্জ", url: "/" },
      ],
    },
    {
      title: "প্রজেক্ট সমুহ",
      type: "projectList",
      data: [
        { id: 1, title: "এসেট (Asset)", url: "/" },
        { id: 2, title: "সিসিপ (SICIP)", url: "/" },
        { id: 3, title: "এনএইচআরডিএফ (NHRDF)", url: "/" },
        { id: 4, title: "নিয়ম (Regular)", url: "/" },
      ],
    },
    {
      title: "অভিযোগ প্রতিকার ব্যবস্থাপনা",
      type: "complainList",
      data: [
        { id: 1, title: "নির্দেশিকা সমূহ", url: "/" },
        { id: 2, title: "অনলাইন অভিযোগ দাখিল", url: "/" },
        { id: 3, title: "অনিক ও আপিল কর্মকর্তা", url: "/" },
        { id: 4, title: "অভিযোগ প্রতিকার সিস্টেম", url: "/" },
      ],
    },
    {
      title: "তথ্য অধিকার",
      type: "informationRight",
      data: [
        { id: 1, title: "তথ্য প্রদানকারী কর্মকর্তা", url: "/" },
        { id: 2, title: "আবেদন ফর্ম", url: "/" },
        { id: 3, title: "তথ্য আইন ও বিধিমালা", url: "/" },
        { id: 4, title: "নির্দেশিকা সমূহ", url: "/" },
      ],
    },
    {
      title: "আইন ও বিধি",
      type: "rightListing",
      data: [
        { id: 1, title: "বিভাগীয় আইন", url: "/" },
        { id: 2, title: "বিধিমালা", url: "/" },
        { id: 3, title: "নীতিমালা", url: "/" },
        { id: 4, title: "প্রজ্ঞাপণ ও পরিপত্র", url: "/" },
      ],
    },
    {
      title: "কর্মসম্পাদন ব্যবস্থাপনা",
      type: "workListing",
      data: [
        { id: 1, title: "প্রজ্ঞাপন/পরিপত্র/নীতিমালা", url: "/" },
        { id: 2, title: "চুক্তিসমূহ", url: "/" },
        { id: 3, title: "চুক্তির কাঠামো", url: "/" },
        { id: 4, title: "এপিএমএস", url: "/" },
      ],
    },
    {
      title: "বিভিন্ন বাতায়ন",
      type: "batayonlist",
      data: [
        { id: 1, title: "মন্ত্রণালয়ের বাতায়ন", url: "/" },
        { id: 2, title: "অধিদপ্তরের বাতায়ন", url: "/" },
        { id: 3, title: "বিভাগীয় বাতায়ন", url: "/" },
        { id: 4, title: "উপজেলা বাতায়ন", url: "/" },
      ],
    },
    {
      title: "জরূরি কল",
      type: "emergencylist",
      data: [
        { id: 1, title: "৩৩৩ থেকে তথ্য-সেবা", url: "/" },
        { id: 2, title: "কল সেন্টারসমূহ", url: "/" },
        { id: 3, title: "হেল্পডেস্ক", url: "/" },
        { id: 4, title: "ডাক্তারের সাথে যোগাযোগ", url: "/" },
      ],
    },
  ];

  const noticeList = [
    {
      id: 1,
      title: "নতুন কোর্স শুরু সম্পর্কে বিজ্ঞপ্তি",
      date: "2024-09-01",
    },
    {
      id: 2,
      title: "ছুটির দিন ঘোষণা",
      date: "2024-08-25",
    },
    {
      id: 3,
      title: "নিবন্ধনের শেষ তারিখ প্রসারিত",
      date: "2024-08-20",
    },
    {
      id: 4,
      title: "কারিগরি প্রশিক্ষণ কেন্দ্রের কার্যক্রম শুরু",
      date: "2024-08-15",
    },
    {
      id: 5,
      title: "নতুন প্রশিক্ষক নিয়োগ বিজ্ঞপ্তি",
      date: "2024-08-10",
    },
    {
      id: 6,
      title: "প্রশিক্ষণার্থীদের জন্য নির্দেশিকা প্রকাশ",
      date: "2024-08-05",
    },
    {
      id: 7,
      title: "প্রশিক্ষণার্থীদের জন্য নির্দেশিকা প্রকাশ",
      date: "2024-08-05",
    },
    {
      id: 8,
      title: "প্রশিক্ষণার্থীদের জন্য নির্দেশিকা প্রকাশ",
      date: "2024-08-05",
    },
  ];

  return (
    <div className=" bg-white ">
      {/* banner section */}

      <section className=" md:mt-[30px] py-2 md:py-4 flex gap-10 flex-col md:flex-row">
        {/* ---------------- left side ---------------- */}
        <div className="w-full md:max-w-3/4 flex flex-col gap-10">
          <div className="relative flex items-center gap-4 pl-[20px] md:pl-[100px] pb-10 p-3  bg-gray-200 border border-gray-400">
            <div className="left-0 top-0 absolute">
              <Image
                src={noticeimage}
                alt="notice"
                className=" w-20 h-20 md:w-35 md:h-35"
              />
            </div>
            <div className="flex flex-col w-full z-10 ml-[20px] mt-20 md:mt-0  md:ml-[80px] relative">
              <h3 className="text-4xl border-b border-gray-300 pb-2 ">
                নোটিশ বোর্ড
              </h3>
              <ul className="flex flex-col gap-2 py-[20px] pb-10 md:pb-0">
                {noticeList.map((notice) => (
                  <li key={notice.id} className="flex items-center gap-2">
                    <Link href="#" className="flex items-center gap-2">
                      <IoMdNotifications className="text-xl text-[#72AB20]" />
                      <span className="font-medium text-black hover:text-gray-600 duration-300 transition-all">
                        {notice.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <span className="absolute right-2.5 bottom-2.5">
              <Link
                href="./notice"
                className="text-black hover:text-gray-600 duration-300 transition-all"
              >
                সকল নোটিশ দেখুন
              </Link>
            </span>
          </div>
          <div className="px-2 py-3 w-full  bg-gray-200 border border-gray-400 ">
            <p className="text-xl font-medium">সকল খবর</p>
          </div>
          <div className="flex flex-wrap gap-5 justify-between">
            {allData.map((section, index) => (
              <div
                key={index}
                className="w-[410px] bg-gray-200 border border-gray-400 px-2 py-3 "
              >
                <h3 className="text-lg">{section.title}</h3>
                <div className="flex flex-row gap-6 items-center justify-start mt-5">
                  <div>
                    <Image src={HompageImage.ourtopic} alt={section.title} />
                  </div>
                  <ul className="flex flex-col gap-5">
                    {section.data.map((item) => (
                      <li key={item.id}>
                        <Link href={item.url || "#"} className="flex gap-2">
                          <span className="text-xl text-[#72AB20]">
                            <FaArrowCircleRight />
                          </span>
                          <span className="text-[14px]  text-black hover:text-gray-600 duration-300 transition-all">
                            {item.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* ---------------- right side ---------------- */}
        <div className="w-full md:w-1/4 flex flex-col gap-3 md:gap-10 bg-white">
          <div className=" flex flex-col gap-4 md:pr-0">
            <Link href="#">
              <Image src={bangladesdirectory} alt="bangladesdirectory" />
            </Link>
            <Link href="#">
              <Image src={bkkb} alt="bkkb" />
            </Link>
          </div>
          {/* principal information */}

          <div className="flex flex-col gap-3 w-full justify-center md:justify-start items-center ">
            <span className="text-center font-semibold w-full py-2 text-white bg-[#72AB20]">
              অধ্যক্ষের প্রোফাইল
            </span>
            <div className="flex flex-col gap-3 w-full justify-center items-center ">
              <Image
                src={HompageImage.Principal}
                alt="অধ্যক্ষের প্রোফাইল"
                className="w-[200px]"
              />
              <div className="flex gap-2 flex-col justify-center items-center">
                <p className="text-md font-semibold">মো: জিয়া উদ্দিন</p>
                <p className="text-md font-medium">অধ্যক্ষ</p>
                <Link
                  href={"#"}
                  className="text-md font-medium hover:text-gray-900 duration-300 transition-all border mt-2 p-2 rounded hover:bg-gray-100 "
                >
                  বিস্তারিত জানুন
                </Link>
              </div>
            </div>
          </div>
          {/* principal information */}

          <div className="flex w-full justify-center md:justify-start items-center ">
            <Link
              href={"/"}
              className=" border w-30 md:w-40 py-2 flex justify-center items-center text-center "
            >
              চাকুরি কর্নার(0)
            </Link>
            <Link
              href={"/"}
              className=" border-t border-b w-30 py-2 flex justify-center items-center"
            >
              দরপত্র(0)
            </Link>
            <Link
              href={"/"}
              className=" border w-30 py-2 flex justify-center items-center text-center"
            >
              বিজ্ঞাপণ(0)
            </Link>
          </div>
          <div className=" flex flex-col gap-3 w-full">
            <Link
              href={"/"}
              className="text-center text-white hover:text-gray-100 duration-300 transition-all font-semibold w-full py-2 bg-[#72AB20]"
            >
              <span>কেন্দ্রীয় ই-সেবা</span>
            </Link>
            <Link
              href={"/"}
              className="text-center text-white hover:text-gray-100 duration-300 transition-all font-semibold w-full py-2 bg-[#72AB20]"
            >
              <span> অভ্যন্তরীণ ই-সেবা</span>
            </Link>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4274.0629445469285!2d89.30276937538953!3d25.432855777560007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fcdbeb0cb93f39%3A0x309d1aa90d28f57f!2sTechnical%20Training%20Centre%2C%20PIRGANJ!5e1!3m2!1sen!2sbd!4v1765613751222!5m2!1sen!2sbd"
              height="450"
              width={"100%"}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="flex flex-col gap-3  w-full">
            <Link
              href={"/"}
              className="text-center text-white hover:text-gray-100 duration-300 transition-all font-semibold w-full py-2 bg-[#72AB20]"
            >
              <span>ইনোভেশন কর্নার</span>
            </Link>
            <Link
              href={"/"}
              className="text-center text-white hover:text-gray-100 duration-300 transition-all font-semibold w-full py-2 bg-[#72AB20]"
            >
              <span>সামাজিক যোগাযোগ মাধ্যম</span>
            </Link>
            <Link
              href={"/"}
              className="text-center text-white hover:text-gray-100 duration-300 transition-all font-semibold w-full py-2 bg-[#72AB20]"
            >
              <span>সেবা সহজিকরণ</span>
            </Link>
            <Link
              href={"/"}
              className="text-center text-white hover:text-gray-100 duration-300 transition-all font-semibold w-full py-2 bg-[#72AB20]"
            >
              <span>সরকারি অফিস সংযুক্তির ফরম</span>
            </Link>
            <div className="w-full">
              <div className="text-center text-white  font-semibold w-full  py-2 bg-[#72AB20]">
                <span>জরুরি হটলাইন</span>
              </div>
              <picture className="w-full">
                <Image
                  src={Hotline}
                  alt="Hotline"
                  className="mt-[20px] w-full"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
