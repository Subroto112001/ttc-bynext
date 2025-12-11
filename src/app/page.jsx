import Image from "next/image";
import { IoMdNotifications } from "react-icons/io";
import noticeimage from "../assets/bg_notice_board.png";
import Link from "next/link";
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
  ];
  return (
    <div className="container bg-white">
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
      {/* notice section */}
      <section className=" md:mt-[30px] py-2 md:py-4">
        <div className="relative flex items-center gap-4 pl-[20px] md:pl-[100px] p-3 w-full md:max-w-2/3 bg-gray-200 border border-gray-400">
          <div className="left-0 top-0 absolute">
            <Image src={noticeimage} alt="notice" className=" w-20 h-20 md:w-40 md:h-40" />
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
          <span className="absolute right-2.5 bottom-2.5"><Link href="#">সকল নোটিশ দেখুন</Link></span>
        </div>
      </section>
    </div>
  );
}
