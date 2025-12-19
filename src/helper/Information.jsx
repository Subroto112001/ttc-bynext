

// সকল কোর্সের ইনফরমেশন এখানে সংরক্ষিত থাকবে
export const courseData = [
  {
    id: 1,
    courseName: { bn: "কম্পিউটার অপারেশন", en: "Computer Operation" },
    duration: { bn: "০৩ মাস", en: "03 Months" },
    session: { bn: "আগস্ট-অক্টোবর ২০২৪ইং", en: "August-October 2024" },
    qualification: { bn: "এস.এস.সি/সমমান", en: "S.S.C/Equivalent" },
    ageLimit: { bn: "১৮-৪৫ বছর", en: "18-45 Years" },
    seats: { bn: "২৫ জন", en: "25 Persons" },
    level: "NSC Level-3",
  },
  {
    id: 2,
    courseName: { bn: "গ্রাফিক্স ডিজাইন", en: "Graphics Design" },
    duration: { bn: "০৩ মাস", en: "03 Months" },
    session: { bn: "আগস্ট-অক্টোবর ২০২৪ইং", en: "August-October 2024" },
    qualification: { bn: "এস.এস.সি/সমমান", en: "S.S.C/Equivalent" },
    ageLimit: { bn: "১৮-৪৫ বছর", en: "18-45 Years" },
    seats: { bn: "২৫ জন", en: "25 Persons" },
    level: "NSC Level-3",
  },
  {
    id: 3,
    courseName: {
      bn: "ইলেকট্রিক্যাল ইন্সটলেশন এন্ড মেইনটেন্যান্স",
      en: "Electrical Installation and Maintenance",
    },
    duration: { bn: "০৩ মাস", en: "03 Months" },
    session: { bn: "আগস্ট-অক্টোবর ২০২৪ইং", en: "August-October 2024" },
    qualification: { bn: "জে.এস.সি/সমমান", en: "J.S.C/Equivalent" },
    ageLimit: { bn: "১৮-৪৫ বছর", en: "18-45 Years" },
    seats: { bn: "২৫ জন", en: "25 Persons" },
    level: "NSC Level-2",
  },
  {
    id: 4,
    courseName: { bn: "মোটর ড্রাইভিং", en: "Motor Driving" },
    duration: { bn: "০৩ মাস", en: "03 Months" },
    session: { bn: "আগস্ট-অক্টোবর ২০২৪ইং", en: "August-October 2024" },
    qualification: { bn: "জে.এস.সি/সমমান", en: "J.S.C/Equivalent" },
    ageLimit: { bn: "১৮-৪৫ বছর", en: "18-45 Years" },
    seats: { bn: "২৫ জন", en: "25 Persons" },
    level: "NSC Level-2",
  },
];

// প্রিন্সিপালের ইনফরমেশন
export const principalData = {
  id: "principal",
  name: { bn: "মোঃ জিয়া উদ্দিন", en: "Md. Zia Uddin" },
  role: { bn: "প্রিন্সিপাল", en: "Principal" },
  category: "officer", // ক্যাটাগরি যোগ করা হয়েছে
  phone: "01713-412599",
  email: "principal@ttcpirganj.com",
  img: "https://ttcpirganj.com/wp-content/uploads/2025/11/Principal-sir-pic-1617x2048.jpg",
};

// স্টাফ ও ইন্সট্রাক্টরদের ইনফরমেশন

export const staffData = [
  {
    id: 1,
    name: { bn: "মোঃ মুকুল মিয়া", en: "Md. Mukul Mia" },
    role: { bn: "হেড অ্যাসিস্ট্যান্ট", en: "Head Assistant" },
    category: "staff",
    phone: "01717-486576",
    email: "mukul@ttcpirganj.com",
    img: "https://ttcpirganj.com/wp-content/uploads/2025/08/Screenshot-2025-08-03-011853-768x675.png",
  },
  {
    id: 2,
    name: { bn: "মোঃ মশিউর রহমান", en: "Md. Mashiur Rahman" },
    role: { bn: "ইলেকট্রিক্যাল ইন্সট্রাক্টর", en: "Electrical Instructor" },
    category: "officer",
    phone: "01834-458761",
    email: "mashiur@ttcpirganj.com",
    img: "https://ttcpirganj.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-28-at-16.02.56_0e3a7b9f-767x1024.jpg",
  },
  {
    id: 3,
    name: { bn: "মোঃ তানভীর বিশ্বাস", en: "Md. Tanvir Biswas" },
    role: { bn: "ইলেকট্রিক্যাল ইন্সট্রাক্টর", en: "Electrical Instructor" },
    category: "officer",
    phone: "01717-483126",
    email: "tanvir@ttcpirganj.com",
    img: "https://ttcpirganj.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-28-at-16.15.42_6c5ee599-150x150.jpg",
  },
  {
    id: 4,
    name: { bn: "মোঃ শোহাগ মিয়া", en: "Md. Shohag Mia" },
    role: {
      bn: "গ্রাফিক্স ডিজাইন ইন্সট্রাক্টর",
      en: "Graphics Design Instructor",
    },
    category: "officer",
    phone: "01713-983344",
    email: "shohag@ttcpirganj.com",
    img: "https://ttcpirganj.com/wp-content/uploads/2025/08/Screenshot-2025-08-03-091022-298x300.png",
  },
  {
    id: 5,
    name: { bn: "এন.এম. নাজমুল হক", en: "N.M. Nazmul Haque" },
    role: {
      bn: "গ্রাফিক্স ডিজাইন ইন্সট্রাক্টর",
      en: "Graphics Design Instructor",
    },
    category: "officer",
    phone: "01744-479601",
    email: "nazmul@ttcpirganj.com",
    img: "https://ttcpirganj.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-17-at-08.19.20_3d4efe20-233x300.jpg",
  },
  {
    id: 6,
    name: { bn: "এ.বি.এম ফারুক হাসান", en: "A.B.M Faruk হাসান" },
    role: {
      bn: "মোবাইল সার্ভিসিং ইন্সট্রাক্টর",
      en: "Mobile Servicing Instructor",
    },
    category: "officer",
    phone: "01737-243273",
    email: "faruk@ttcpirganj.com",
    img: "https://ttcpirganj.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-28-at-16.08.12_9bbe1725-250x300.jpg",
  },
  {
    id: 7,
    name: { bn: "মোঃ আসাদুজ্জামান জুয়েল", en: "Md. Asaduzzaman Jewel" },
    role: {
      bn: "মোবাইল সার্ভিসিং ইন্সট্রাক্টর",
      en: "Mobile Servicing Instructor",
    },
    category: "officer",
    phone: "01750-115780",
    email: "jewel@ttcpirganj.com",
    img: "https://ttcpirganj.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-28-at-16.15.07_3320709b-202x300.jpg",
  },
  {
    id: 8,
    name: { bn: "মোসাম্মৎ শাকিলা আক্তার", en: "Mosammat Shakila Akter" },
    role: {
      bn: "কম্পিউটার অপারেশন ইন্সট্রাক্টর",
      en: "Computer Operation Instructor",
    },
    category: "officer",
    phone: "01721-215924",
    email: "shakila@ttcpirganj.com",
    img: "https://ttcpirganj.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-18-at-16.22.38_0a0ab5f3-276x300.jpg",
  },
  {
    id: 9,
    name: { bn: "মোঃ মেহেদী হাসান (মুন্না)", en: "Md. Mehedi Hasan (Munna)" },
    role: { bn: "মোটর ড্রাইভিং ইন্সট্রাক্টর", en: "Motor Driving Instructor" },
    category: "officer",
    phone: "01761-077900",
    email: "munna@ttcpirganj.com",
    img: "https://ttcpirganj.com/wp-content/uploads/2025/11/muna-240x300.jpg",
  },
  {
    id: 10,
    name: { bn: "মোঃ শাহাজাহান মিয়া", en: "Md. Shahjahan Mia" },
    role: { bn: "কেয়ারটেকার", en: "Caretaker" },
    category: "staff",
    phone: "01751-849925",
    email: "info@ttcpirganj.com",
    img: "https://ttcpirganj.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-20-at-02.43.25_9ba5c1d0-266x300.jpg",
  },
];

// কম্বাইন্ড লিস্ট (প্রয়োজন হলে)
export const allMembers = [principalData, ...staffData];
// নোটিশ বোর্ডের ইনফরমেশন এখানে সংরক্ষিত থাকবে
export const notices = [
  {
    id: 1,
    title: "২০২৪-২৫ অর্থবছরের উন্নয়ন প্রকল্পের দরপত্র আহ্বান",
    date: "১৮-১২-২০২৪",
    category: "দরপত্র",
    file: "https://ttcpirganj.com/wp-content/uploads/2024/08/450127365_438033905802750_888066334915262110_n.pdf",
    description: "", // পিডিএফ হলে ডেসক্রিপশন প্রয়োজন নেই
  },
  {
    id: 2,
    title: "সরকারি চাকরিতে জনবল নিয়োগ সংক্রান্ত জরুরি বিজ্ঞপ্তি",
    date: "১৫-১২-২০২৪",
    category: "নিয়োগ",
    file: "recruitment-notice-2024", // স্লাগ (টেক্সট নোটিশ)
    description:
      "অত্র দপ্তরের শূন্য পদসমূহে অস্থায়ী ভিত্তিতে জনবল নিয়োগের জন্য যোগ্য প্রার্থীদের নিকট হতে দরখাস্ত আহ্বান করা যাচ্ছে। আগ্রহী প্রার্থীদের আগামী ৩০ ডিসেম্বরের মধ্যে অনলাইনে আবেদন সম্পন্ন করতে হবে। বিস্তারিত তথ্যের জন্য আমাদের হেল্পলাইনে যোগাযোগ করুন।",
  },
  {
    id: 3,
    title: "শীতকালীন অবকাশ ও যীশু খ্রিষ্টের জন্মদিন উপলক্ষে ছুটির তালিকা",
    date: "১২-১২-২০২৪",
    category: "প্রজ্ঞাপন",
    file: "winter-vacation-holiday-2024",
    description:
      "আগামী ২৪শে ডিসেম্বর থেকে ২রা জানুয়ারি পর্যন্ত প্রতিষ্ঠানের সকল কার্যক্রম শীতকালীন অবকাশ ও বড়দিন উপলক্ষে বন্ধ থাকবে। ৩রা জানুয়ারি থেকে যথানিয়মে অফিসিয়াল কার্যক্রম শুরু হবে। সংশ্লিষ্ট সকলকে অবহিত করা হলো।",
  },
  {
    id: 4,
    title: "বার্ষিক কর্মসম্পাদন চুক্তি (APA) সংক্রান্ত বিশেষ নির্দেশনা",
    date: "১০-১২-২০২৪",
    category: "নির্দেশনা",
    file: "https://ttcpirganj.com/wp-content/uploads/2024/08/450127365_438033905802750_888066334915262110_n.pdf",
    description: "",
  },
  {
    id: 5,
    title: "স্মার্ট বাংলাদেশ বিনির্মাণে আইসিটি প্রশিক্ষণ কর্মসূচি",
    date: "০৮-১২-২০২৪",
    category: "প্রশিক্ষণ",
    file: "ict-training-program-smart-bd",
    description:
      "আগামী জানুয়ারি মাস থেকে ৫টি ক্যাটাগরিতে আইসিটি প্রশিক্ষণ শুরু হতে যাচ্ছে। গ্রাফিক্স ডিজাইন, ওয়েব ডেভেলপমেন্ট এবং ডিজিটাল মার্কেটিং কোর্সে ভর্তির জন্য রেজিস্ট্রেশন চলছে। আসন সংখ্যা সীমিত।",
  },
  {
    id: 6,
    title: "ডিজিটাল ল্যান্ড রেকর্ড ও অনলাইন নামজারি সচেতনতা",
    date: "০৫-১২-২০২৪",
    category: "বিজ্ঞপ্তি",
    file: "https://ttcpirganj.com/wp-content/uploads/2024/08/450127365_438033905802750_888066334915262110_n.pdf",
    description: "",
  },
  {
    id: 7,
    title: "উপদেষ্টা পরিষদের বিশেষ সভার কার্যবিবরণী",
    date: "০৩-১২-২০২৪",
    category: "সভা",
    file: "advisory-meeting-minutes-dec",
    description:
      "গত ১লা ডিসেম্বর অনুষ্ঠিত উপদেষ্টা পরিষদের সভায় গৃহীত সিদ্ধান্তসমূহ বাস্তবায়নকল্পে এই কার্যবিবরণী প্রকাশ করা হলো। সভায় মূলত উন্নয়ন বাজেট ও বার্ষিক পরিকল্পনার ওপর জোর দেওয়া হয়েছে।",
  },
  {
    id: 8,
    title: "জাতীয় শুদ্ধাচার কৌশল বাস্তবায়ন কর্মপরিকল্পনা",
    date: "০১-১২-২০২৪",
    category: "কর্মপরিকল্পনা",
    file: "https://ttcpirganj.com/wp-content/uploads/2024/08/450127365_438033905802750_888066334915262110_n.pdf",
    description: "",
  },
  {
    id: 9,
    title: "বিজয় দিবস উদযাপন উপলক্ষে প্রস্তুতিমূলক সভা",
    date: "২৮-১১-২০২৪",
    category: "ইভেন্ট",
    file: "victory-day-preparation-2024",
    description:
      "মহান বিজয় দিবস ২০২৪ যথাযোগ্য মর্যাদায় পালনের লক্ষ্যে আগামী ৫ই ডিসেম্বর একটি প্রস্তুতিমূলক সভা আহ্বান করা হয়েছে। উক্ত সভায় সকল বিভাগীয় প্রধানদের উপস্থিত থাকার জন্য অনুরোধ করা হলো।",
  },
  {
    id: 10,
    title: "পরিবেশ সংরক্ষণ ও বৃক্ষরোপণ অভিযান কর্মসূচি",
    date: "২৫-১১-২০২৪",
    category: "বিজ্ঞপ্তি",
    file: "environment-protection-tree-plantation",
    description:
      "পরিবেশের ভারসাম্য রক্ষার্থে প্রতিটি ইউনিয়নে বৃক্ষরোপণ কর্মসূচি পালন করা হবে। স্থানীয় জনপ্রতিনিধি ও ছাত্রসমাজকে এই অভিযানে স্বতঃস্ফূর্তভাবে অংশগ্রহণের জন্য আহ্বান জানানো হচ্ছে।",
  },
  {
    id: 11,
    title: "ত্রাণ ও পুনর্বাসন কার্যক্রমের মাসিক প্রতিবেদন",
    date: "২০-১১-২০২৪",
    category: "প্রতিবেদন",
    file: "https://ttcpirganj.com/wp-content/uploads/2024/08/450127365_438033905802750_888066334915262110_n.pdf",
    description: "",
  },
  {
    id: 12,
    title: "ই-গভর্নেন্স ও উদ্ভাবন কর্মপরিকল্পনা বাস্তবায়ন",
    date: "১৫-১১-২০২৪",
    category: "আইসিটি",
    file: "e-governance-innovation-plan",
    description:
      "সরকারি কাজে স্বচ্ছতা ও জবাবদিহিতা নিশ্চিত করতে ই-নথি ও ডিজিটাল সিগনেচার ব্যবহারের পরিধি বাড়ানো হচ্ছে। সকল কর্মকর্তাদের প্রশিক্ষণ মডিউল অনুসরণ করতে বলা হয়েছে।",
  },
];
