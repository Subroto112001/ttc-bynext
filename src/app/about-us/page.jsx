import React from "react";

const AboutUsSimple = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 font-sans text-gray-800">
      {/* শিরোনাম */}
      <header className="border-b-2 border-gray-100 pb-6 mb-8">
        <h1 className="text-3xl font-bold text-red-700">আমাদের সম্পর্কে</h1>
        <p className="text-lg text-gray-600 mt-1">
          পীরগঞ্জ কারিগরি প্রশিক্ষণ কেন্দ্র (টিটিসি), রংপুর
        </p>
      </header>

      {/* মূল বর্ণনা */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-bold mb-3">প্রতিষ্ঠান পরিচিতি</h2>
          <p className="leading-relaxed text-justify">
            গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান
            মন্ত্রণালয়ের অধীনে জনশক্তি কর্মসংস্থান ও প্রশিক্ষণ ব্যুরো (BMET)
            কর্তৃক পরিচালিত এই প্রতিষ্ঠানটি তৃণমূল পর্যায়ে দক্ষতা উন্নয়নের
            লক্ষ্যে কাজ করে যাচ্ছে। মকিমপুর, পীরগঞ্জ, রংপুরে অবস্থিত এই
            কেন্দ্রটি দক্ষ জনশক্তি তৈরি ও বৈদেশিক কর্মসংস্থান নিশ্চিত করতে
            প্রতিশ্রুতিবদ্ধ।
          </p>
        </div>

        {/* ভিশন ও মিশন */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6">
          <div className="border border-gray-200 p-5 ">
            <h3 className="text-lg font-bold text-red-600 mb-2">
              রূপকল্প (Vision)
            </h3>
            <p>
              দক্ষতা উন্নয়ন, বৈদেশিক কর্মসংস্থান বৃদ্ধি ও অর্থনৈতিক উন্নয়নের
              মাধ্যমে বেকারত্ব হ্রাস করা।
            </p>
          </div>
          <div className="border border-gray-200 p-5 ">
            <h3 className="text-lg font-bold text-green-700 mb-2">
              অভিলক্ষ্য (Mission)
            </h3>
            <p>
              আধুনিক প্রযুক্তি ব্যবহারের মাধ্যমে স্থানীয় ও আন্তর্জাতিক
              শ্রমবাজারের জন্য কর্মীদের দক্ষ করে তোলা।
            </p>
          </div>
        </div>

        {/* প্রধান কার্যাবলী */}
        <div>
          <h2 className="text-xl font-bold mb-3">আমাদের প্রধান কার্যাবলী</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>বৈদেশিক শ্রমবাজারের চাহিদানুযায়ী দক্ষতা উন্নয়ন প্রশিক্ষণ।</li>
            <li>নিরাপদ অভিবাসন ও রেমিট্যান্স প্রবাহ বৃদ্ধিতে জনসচেতনতা।</li>
            <li>আধুনিক ল্যাব ও ওয়ার্কশপ সুবিধার মাধ্যমে গুণগত মান উন্নয়ন।</li>
            <li>প্রশিক্ষণার্থীদের কর্মসংস্থানে সহায়তা প্রদান।</li>
          </ul>
        </div>

        {/* চ্যালেঞ্জসমূহ */}
        <div className="">
          <h2 className="text-xl font-bold mb-3">আমাদের চ্যালেঞ্জসমূহ</h2>
          <p className="text-gray-700">
            প্রশিক্ষণের মান উন্নয়ন, শিল্প সংযোগ বৃদ্ধি, এবং আন্তর্জাতিক
            শ্রমবাজারে অধিক হারে কর্মীদের গ্রহণযোগ্যতা তৈরি করা।
          </p>
        </div>
      </section>

     
    </div>
  );
};

export default AboutUsSimple;
