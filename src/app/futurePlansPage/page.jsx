import React from "react";

const FuturePlansPage = () => {
  // ১. কৌশলগত লক্ষ্যসমূহ (Strategic Goals)
  const strategicGoals = [
    {
      id: 1,
      title: "মানসম্মত প্রশিক্ষণ নিশ্চিতকরণ",
      desc: "আন্তর্জাতিক মানদণ্ড অনুযায়ী প্রশিক্ষণের গুণগত মান বৃদ্ধি এবং শিল্পখাতের চাহিদা অনুযায়ী কারিকুলাম হালনাগাদ।",
    },
    {
      id: 2,
      title: "প্রযুক্তিনির্ভর সক্ষমতা বৃদ্ধি",
      desc: "সিমুলেশন, অটোমেশন ও স্মার্ট প্রযুক্তিভিত্তিক শিক্ষণ পদ্ধতি সম্পৃক্তকরণ।",
    },
    {
      id: 3,
      title: "মানবসম্পদ উন্নয়ন",
      desc: "প্রশিক্ষকদের পেশাগত উন্নয়ন, আন্তর্জাতিক ট্রেনিং, ও নতুন দক্ষতা অর্জনের সুযোগ বৃদ্ধি।",
    },
    {
      id: 4,
      title: "শিল্প সহযোগিতা সম্প্রসারণ",
      desc: "স্থানীয় ও আন্তর্জাতিক শিল্পপ্রতিষ্ঠানের সাথে অংশীদারিত্ব গড়ে তোলা এবং ইন্টার্নশিপ/জব-প্লেসমেন্ট জোরদার করা।",
    },
    {
      id: 5,
      title: "অবকাঠামো উন্নয়ন",
      desc: "নতুন ল্যাব, গবেষণা সেন্টার, প্রশিক্ষণ ভবন ও আধুনিক সুবিধাসম্পন্ন আবাসন নির্মাণ।",
    },
    {
      id: 6,
      title: "ডিজিটালাইজেশন ও স্মার্ট ম্যানেজমেন্ট",
      desc: "অনলাইন ট্রেনিং মডিউল, ই-লার্নিং প্ল্যাটফর্ম এবং স্বয়ংক্রিয় প্রশাসনিক ব্যবস্থাপনা চালু।",
    },
    {
      id: 7,
      title: "গবেষণা ও উদ্ভাবন",
      desc: "প্রযুক্তি, বৃত্তিমূলক শিক্ষা এবং শ্রমবাজার বিষয়ক গবেষণার পরিমাণ বৃদ্ধি।",
    },
    {
      id: 8,
      title: "প্রশিক্ষণার্থীদের কল্যাণ",
      desc: "উন্নত স্বাস্থ্যসেবা, বিনোদন, পরামর্শসেবা এবং নিরাপদ পরিবেশ নিশ্চিত করা।",
    },
  ];

  // ২. দীর্ঘমেয়াদি উন্নয়ন রোডম্যাপ (Development Roadmap)
  const roadmap = [
    {
      id: 1,
      year: "২০৩০ সালের মধ্যে",
      targets: [
        "আন্তর্জাতিক মানসম্পন্ন ২০+ নতুন কোর্স চালু",
        "ট্রেনিং সরঞ্জাম ডিজিটাল ও আধুনিকীকরণ",
        "সব প্রশিক্ষকের আন্তর্জাতিক সার্টিফিকেট নিশ্চিতকরণ",
      ],
    },
    {
      id: 2,
      year: "২০৩৫ সালের মধ্যে",
      targets: [
        "একটি পূর্ণাঙ্গ Center of Excellence হিসেবে স্বীকৃতি অর্জন",
        "গবেষণা ও উদ্ভাবন কেন্দ্র স্থাপন",
        "বিদেশি প্রতিষ্ঠানগুলোর সাথে যৌথ ট্রেড প্রোগ্রাম চালুকরণ",
      ],
    },
    {
      id: 3,
      year: "২০৪০ সালের মধ্যে",
      targets: [
        "ক্যাম্পাস সম্প্রসারণ ও ৩০+ নতুন ল্যাবরেটরি স্থাপন",
        "দেশে বিদেশগামী দক্ষ কর্মীর সবচেয়ে বড় প্রশিক্ষণ হাব হিসেবে প্রতিষ্ঠিত হওয়া",
      ],
    },
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 font-sans text-gray-800">
      <h1 className="text-center text-3xl font-bold text-gray-900 mb-12">
        ভবিষ্যৎ পরিকল্পনা
      </h1>
      <section className="mb-16">
        <h2 className="text-xl font-bold text-red-700 mb-6 border-l-4 border-red-700 pl-3">
          Strategic Goals (কৌশলগত লক্ষ্যসমূহ)
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {strategicGoals.map((goal) => (
            <div
              key={goal.id}
              className="p-4 bg-gray-50 rounded border border-gray-100"
            >
              <p className="font-medium">
                {goal.id}. {goal.title}:
              </p>
              <p className="text-gray-600">{goal.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold text-green-700 mb-6 border-l-4 border-green-700 pl-3">
          Long-Term Development Roadmap (দীর্ঘমেয়াদি উন্নয়ন রোডম্যাপ)
        </h2>
        <div className="grid grid-cols-1 gap-8">
          {roadmap.map((item) => (
            <div key={item.id} className="border-b border-gray-100 pb-6">
              <h3 className="font-bold text-gray-800 text-lg mb-3 flex items-center">
                <span className="w-3 h-3 bg-green-600 rounded-full mr-2"></span>
                {item.year}:
              </h3>
              <ul className="ml-8 space-y-2">
                {item.targets.map((target, idx) => (
                  <li key={idx} className="text-gray-600 flex items-start">
                    <span className="mr-2 text-green-600">○</span>
                    {target}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <footer className="mt-16 text-center text-gray-400 text-xs">
        <p>পীরগঞ্জ কারিগরি প্রশিক্ষণ কেন্দ্র (টিটিসি), রংপুর।</p>
      </footer>
    </main>
  );
};

export default FuturePlansPage;
