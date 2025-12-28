import React from "react";

const MissionVision = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 font-sans text-gray-800">
      <section className="text-center mb-16">
        <h1 className="text-3xl font-bold text-gray-900">
          রূপকল্প ও অভিলক্ষ্য
        </h1>
      </section>

      <main className="space-y-12">
        <section className="bg-white border border-gray-200 p-8  shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-8 bg-red-600"></div>
            <h2 className="text-2xl font-bold text-gray-800">
              রূপকল্প (Vision)
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-gray-700">
            দক্ষতা উন্নয়ন, বৈদেশিক কর্মসংস্থান বৃদ্ধি, নিরাপদ অভিবাসন ও
            রেমিটেন্স এর প্রবাহ বৃদ্ধি, বেকারত্ব হ্রাস ও অর্থনৈতিক উন্নয়ন
            নিশ্চিত করা।
          </p>
        </section>

       
        <section className="bg-white border border-gray-200 p-8  shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-8 bg-green-600"></div>
            <h2 className="text-2xl font-bold text-gray-800">
              অভিলক্ষ্য (Mission)
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-gray-700">
            স্থানীয় ও আন্তর্জাতিক শ্রমবাজারের চাহিদা অনুযায়ী আধুনিক প্রযুক্তি
            ব্যবহার করে কর্মীদের মানসম্মত কারিগরি ও বৃত্তিমূলক দক্ষতা উন্নয়ন
            প্রশিক্ষণ প্রদান।
          </p>
        </section>

        <section className="px-4">
          <h3 className="text-xl font-bold mb-6 text-gray-800">
            আমাদের মূল লক্ষ্যসমূহ:
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>
                প্রশিক্ষণের গুণগত মান বজায় রাখা এবং প্রতিনিয়ত উন্নয়ন করা।
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>
                চাকুরি ভিত্তিক এবং প্রযুক্তি নির্ভর আধুনিক কোর্সে প্রশিক্ষণ
                প্রদান।
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>প্রশিক্ষণে নারীদের অংশগ্রহণ বৃদ্ধি ও উৎসাহিত করা।</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>
                প্রশিক্ষণার্থীদের আন্তর্জাতিক শ্রমবাজারের উপযোগী করে তোলা।
              </span>
            </li>
          </ul>
        </section>
      </main>

    
    </div>
  );
};

export default MissionVision;
