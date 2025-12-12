import Image from "next/image";
import { IoMdNotifications } from "react-icons/io";
import noticeimage from "../assets/bg_notice_board.png";
import bangladesdirectory from "../assets/Bangladesh-Directory.jpg";
import bkkb from "../assets/bkkb_button_bn.png";
import { IoJournalOutline } from "react-icons/io5";
import { FaArrowCircleRight } from "react-icons/fa";
import Link from "next/link";
import Hotline from "../assets/hotline_v.2_bn.png"
export default function Home() {
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

  const Aboutus = [
    { id: 1, title: "কর্মকর্তাবৃন্দ", url: "/" },
    {
      id: 2,
      title: "কর্মচারীবৃন্দ",
      url: "/",
    },
    {
      id: 3,
      title: "যোগাযোগ",
      url: "/",
    },
    {
      id: 4,
      title: "সাংগঠনিক কাঠামো",
      url: "/",
    },
  ];
  const services = [
    {
      id: 1,
      title: "সেবার তালিকা",
      url: "/",
    },
    {
      id: 2,
      title: "কি সেবা কিভাবে পাবেন",
      url: "/",
    },
    {
      id: 3,
      title: "টিজেন চার্টার",
      url: "/",
    },
    {
      id: 4,
      title: "সেবা কুঞ্জ",
      url: "/",
    },
  ];
  const projectList = [
    {
      id: 1,
      title: "এসেট (Asset)",
      url: "/",
    },
    {
      id: 2,
      title: "সিসিপ (SICIP)",
      url: "/",
    },
    {
      id: 3,
      title: "এনএইচআরডিএফ (NHRDF)",
      url: "/",
    },
    {
      id: 4,
      title: "নিয়ম (Regular)",
      url: "/",
    },
  ];
  const complainList = [
    {
      id: 1,
      title: "নির্দেশিকা সমূহ",
      url: "/",
    },
    {
      id: 2,
      title: "অনলাইন অভিযোগ দাখিল",
      url: "/",
    },
    {
      id: 3,
      title: "অনিক ও আপিল কর্মকর্তা",
      url: "/",
    },
    {
      id: 4,
      title: "অভিযোগ প্রতিকার সিস্টেম",
      url: "/",
    },
  ];
  const informationRight = [
    {
      id: 1,
      title : "তথ্য প্রদানকারী কর্মকর্তা",
      url : "/"
    },
    {
      id: 2,
      title : "আবেদন ফর্ম",
      url : "/"
    },
    {
      id: 3,
      title : "তথ্য আইন ও বিধিমালা",
      url : "/"
    },
    {
      id: 4,
      title : "নির্দেশিকা সমূহ",
      url : "/"
    },
  ]
  const rightListing = [
    {
      id: 1,
      title : "বিভাগীয় আইন",
      url : "/"
    },
    {
      id: 2,
      title : "বিধিমালা",
      url : "/"
    },
    {
      id: 3,
      title : "নীতিমালা",
      url : "/"
    },
    {
      id: 4,
      title : "প্রজ্ঞাপণ ও পরিপত্র",
      url : "/"
    },
  ]
  
  const workListing = [
    {
      id: 1,
      title: "প্রজ্ঞাপন/পরিপত্র/নীতিমালা",
      url: "/",
    },
    {
      id: 2,
      title: "চুক্তিসমূহ",
      url: "/",
    },
    {
      id: 3,
      title: "চুক্তির কাঠামো",
      url: "/",
    },
    {
      id: 4,
      title: "এপিএমএস",
      url: "/",
    },
  ];
  const batayonlist = [
    {
      id: 1,
      title: "মন্ত্রণালয়ের বাতায়ন ",
      url: "/",
    },
    {
      id: 2,
      title: "অধিদপ্তরের বাতায়ন",
      url: "/",
    },
    {
      id: 3,
      title: "বিভাগীয় বাতায়ন",
      url: "/",
    },
    {
      id: 4,
      title: "উপজেলা বাতায়ন",
      url: "/",
    },
  ];
  const emergencylist = [
    {
      id: 1,
      title: "৩৩৩ থেকে তথ্য-সেবা",
      url: "/",
    },
    {
      id: 2,
      title: "কল সেন্টারসমূহ",
      url: "/",
    },
    {
      id: 3,
      title: "হেল্পডেস্ক",
      url: "/",
    },
    {
      id: 4,
      title: "ডাক্তারের সাথে যোগাযোগ",
      url: "/",
    },
  ];
  
  return (
    <div className=" bg-white">
      {/* banner section */}
      <section className="relative">
        <picture>
          <img
            src="https://ttcpirganj.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-02-at-22.31.43_498ace3a.jpg"
            alt=""
            className="w-full h-[200px] object-cover"
          />
        </picture>
        <div className="absolute top-[20px] flex flex-row md:flex-col gap-4 left-3 ">
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

      <section className=" md:mt-[30px] py-2 md:py-4 flex gap-10 flex-col md:flex-row">
        {/* ---------------- left side ---------------- */}
        <div className="w-full md:max-w-3/4 flex flex-col gap-10">
          <div className="relative flex items-center gap-4 pl-[20px] md:pl-[100px] pb-10 p-3  bg-gray-200 border border-gray-400">
            <div className="left-0 top-0 absolute">
              <Image
                src={noticeimage}
                alt="notice"
                className=" w-20 h-20 md:w-40 md:h-40"
              />
            </div>
            <div className="flex flex-col z-10 ml-[20px] mt-20 md:mt-0 md:ml-[80px] relative">
              <h3 className="text-4xl">নোটিশ বোর্ড</h3>
              <ul className="flex flex-col gap-2 py-[20px] pb-10 md:pb-0">
                {noticeList.map((notice) => (
                  <li key={notice.id} className="flex items-center gap-2">
                    <Link href="#" className="flex items-center gap-2">
                      <IoMdNotifications className="text-xl text-[#72AB20]" />
                      <span className="font-medium">{notice.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <span className="absolute right-2.5 bottom-2.5">
              <Link href="#">সকল নোটিশ দেখুন</Link>
            </span>
          </div>
          <div className="px-2 py-3 w-full  bg-gray-200 border border-gray-400">
            <p className="text-xl font-medium">সকল খবর</p>
          </div>
          <div className="flex flex-wrap gap-y-5 justify-between">
            {/* box1 */}
            <div className="w-[420px] bg-gray-200 border border-gray-400 px-2 py-3 ">
              <h3 className="text-xl">আমাদের বিষয়</h3>
              <div className="flex flex-row  gap-20 mt-5">
                <div className="text-[100px] text-[#72AB20]">
                  <IoJournalOutline />
                </div>
                <ul className="flex flex-col gap-5">
                  {Aboutus.map((about) => (
                    <li key={about.id}>
                      <Link href={about.url} className="flex gap-2">
                        <span className="text-2xl text-[#72AB20]">
                          <FaArrowCircleRight />
                        </span>
                        <span>{about.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* box1 */}
            {/* box2 */}
            <div className="w-[420px] bg-gray-200 border border-gray-400 px-2 py-3 ">
              <h3 className="text-xl">সেবাসমূহ</h3>
              <div className="flex flex-row  gap-20 mt-5">
                <div className="text-[100px] text-[#72AB20]">
                  <IoJournalOutline />
                </div>
                <ul className="flex flex-col gap-5">
                  {services.map((about) => (
                    <li key={about.id}>
                      <Link href={about.url} className="flex gap-2">
                        <span className="text-2xl text-[#72AB20]">
                          <FaArrowCircleRight />
                        </span>
                        <span>{about.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* box2 */}
            {/* box3 */}
            <div className="w-[420px] bg-gray-200 border border-gray-400 px-2 py-3 ">
              <h3 className="text-xl">প্রজেক্ট সমুহ</h3>
              <div className="flex flex-row  gap-20 mt-5">
                <div className="text-[100px] text-[#72AB20]">
                  <IoJournalOutline />
                </div>
                <ul className="flex flex-col gap-5">
                  {projectList.map((about) => (
                    <li key={about.id}>
                      <Link href={about.url} className="flex gap-2">
                        <span className="text-2xl text-[#72AB20]">
                          <FaArrowCircleRight />
                        </span>
                        <span>{about.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* box3 */}
            {/* box4 */}
            <div className="w-[420px] bg-gray-200 border border-gray-400 px-2 py-3 ">
              <h3 className="text-xl">অভিযোগ প্রতিকার ব্যবস্থাপনা</h3>
              <div className="flex flex-row  gap-20 mt-5">
                <div className="text-[100px] text-[#72AB20]">
                  <IoJournalOutline />
                </div>
                <ul className="flex flex-col gap-5">
                  {complainList.map((about) => (
                    <li key={about.id}>
                      <Link href={about.url} className="flex gap-2">
                        <span className="text-2xl text-[#72AB20]">
                          <FaArrowCircleRight />
                        </span>
                        <span>{about.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* box4 */}
            {/* box5 */}
            <div className="w-[420px] bg-gray-200 border border-gray-400 px-2 py-3 ">
              <h3 className="text-xl">তথ্য অধিকার</h3>
              <div className="flex flex-row  gap-20 mt-5">
                <div className="text-[100px] text-[#72AB20]">
                  <IoJournalOutline />
                </div>
                <ul className="flex flex-col gap-5">
                  {informationRight.map((about) => (
                    <li key={about.id}>
                      <Link href={about.url} className="flex gap-2">
                        <span className="text-2xl text-[#72AB20]">
                          <FaArrowCircleRight />
                        </span>
                        <span>{about.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* box5 */}
            {/* box6 */}
            <div className="w-[420px] bg-gray-200 border border-gray-400 px-2 py-3 ">
              <h3 className="text-xl">আইন ও বিধি</h3>
              <div className="flex flex-row  gap-20 mt-5">
                <div className="text-[100px] text-[#72AB20]">
                  <IoJournalOutline />
                </div>
                <ul className="flex flex-col gap-5">
                  {rightListing.map((about) => (
                    <li key={about.id}>
                      <Link href={about.url} className="flex gap-2">
                        <span className="text-2xl text-[#72AB20]">
                          <FaArrowCircleRight />
                        </span>
                        <span>{about.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* box6 */}
            {/* box7 */}
            <div className="w-[420px] bg-gray-200 border border-gray-400 px-2 py-3 ">
              <h3 className="text-xl">কর্মসম্পাদন ব্যবস্থাপনা</h3>
              <div className="flex flex-row  gap-20 mt-5">
                <div className="text-[100px] text-[#72AB20]">
                  <IoJournalOutline />
                </div>
                <ul className="flex flex-col gap-5">
                  {workListing.map((about) => (
                    <li key={about.id}>
                      <Link href={about.url} className="flex gap-2">
                        <span className="text-2xl text-[#72AB20]">
                          <FaArrowCircleRight />
                        </span>
                        <span>{about.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* box7 */}
            {/* box8 */}
            <div className="w-[420px] bg-gray-200 border border-gray-400 px-2 py-3 ">
              <h3 className="text-xl">বিভিন্ন বাতায়ন</h3>
              <div className="flex flex-row  gap-20 mt-5">
                <div className="text-[100px] text-[#72AB20]">
                  <IoJournalOutline />
                </div>
                <ul className="flex flex-col gap-5">
                  {batayonlist.map((about) => (
                    <li key={about.id}>
                      <Link href={about.url} className="flex gap-2">
                        <span className="text-2xl text-[#72AB20]">
                          <FaArrowCircleRight />
                        </span>
                        <span className="text-[16px]">{about.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* box8 */}
            {/* box9 */}
            <div className="w-[420px] bg-gray-200 border border-gray-400 px-2 py-3 ">
              <h3 className="text-xl">জরূরি কল</h3>
              <div className="flex flex-row  gap-20 mt-5">
                <div className="text-[100px] text-[#72AB20]">
                  <IoJournalOutline />
                </div>
                <ul className="flex flex-col gap-5">
                  {emergencylist.map((about) => (
                    <li key={about.id}>
                      <Link href={about.url} className="flex gap-2">
                        <span className="text-2xl text-[#72AB20]">
                          <FaArrowCircleRight />
                        </span>
                        <span className="text-[16px]">{about.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* box9 */}
          </div>
        </div>
        {/* ---------------- right side ---------------- */}
        <div className="w-full md:w-1/4 flex flex-col gap-10 bg-white">
          <div className=" flex flex-col gap-4 md:pr-0">
            <Link href="#">
              <Image src={bangladesdirectory} alt="bangladesdirectory" />
            </Link>
            <Link href="#">
              <Image src={bkkb} alt="bkkb" />
            </Link>
          </div>
          <div className="flex">
            <Link
              href={"/"}
              className=" border-t border-b border-l w-30 py-2 flex justify-center items-center text-center"
            >
              চাকুরি কর্নার(0)
            </Link>
            <Link
              href={"/"}
              className=" border w-30 py-2 flex justify-center items-center"
            >
              দরপত্র(0)
            </Link>
            <Link
              href={"/"}
              className=" border-t border-b border-r w-30 py-2 flex justify-center items-center text-center"
            >
              বিজ্ঞাপণ(0)
            </Link>
          </div>
          <div className=" flex flex-col gap-3 w-full">
            <Link href={"/"} className="text-center w-full py-2 bg-[#72AB20]">
              <span>কেন্দ্রীয় ই-সেবা</span>
            </Link>
            <Link href={"/"} className="text-center w-full py-2 bg-[#72AB20]">
              <span> অভ্যন্তরীণ ই-সেবা</span>
            </Link>
          </div>
          <div className="flex flex-col gap-3 mt-[200px] w-full">
            <Link href={"/"} className="text-center w-full py-2 bg-[#72AB20]">
              <span>ইনোভেশন কর্নার</span>
            </Link>
            <Link href={"/"} className="text-center w-full py-2 bg-[#72AB20]">
              <span>সামাজিক যোগাযোগ মাধ্যম</span>
            </Link>
            <Link href={"/"} className="text-center w-full py-2 bg-[#72AB20]">
              <span>সেবা সহজিকরণ</span>
            </Link>
            <Link href={"/"} className="text-center w-full py-2 bg-[#72AB20]">
              <span>সরকারি অফিস সংযুক্তির ফরম</span>
            </Link>
            <div className="w-full">
              <div className="text-center w-full py-2 bg-[#72AB20]">
                <span>জরুরি হটলাইন</span>
              </div>
              <picture className="w-full">
                <Image src={Hotline} alt="Hotline" className="mt-[20px]" />
              </picture>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
