import React from "react";

const CoreValuesPage = () => {
  const objectives = [
    // objectives data
    {
      id: 1,
      title: "দক্ষ জনশক্তি তৈরি",
      description:
        "স্থানীয় ও আন্তর্জাতিক শ্রমবাজারের চাহিদা অনুযায়ী দক্ষ কর্মী তৈরি করা।",
    },
    {
      id: 2,
      title: "বৈদেশিক কর্মসংস্থান বৃদ্ধি",
      description:
        "প্রশিক্ষিত জনবলকে বিদেশে কর্মসংস্থানের সুযোগ পেতে সহায়তা করা।",
    },
    {
      id: 3,
      title: "আত্মকর্মসংস্থান সৃষ্টি",
      description:
        "বেকার তরুণ-তরুণীদের কারিগরি শিক্ষায় শিক্ষিত করে স্বাবলম্বী করা।",
    },
    {
      id: 4,
      title: "নিরাপদ অভিবাসন নিশ্চিতকরণ",
      description: "বৈদেশিক কর্মসংস্থানের ক্ষেত্রে সঠিক তথ্য ও সচেতনতা প্রদান।",
    },
  ];

  // core values data
  const coreValues = [
    {
      id: 1,
      title: "স্বচ্ছতা ও সততা",
      description: "সকল প্রশিক্ষণ ও প্রশাসনিক কাজে স্বচ্ছতা বজায় রাখা।",
    },
    {
      id: 2,
      title: "পেশাদারিত্ব",
      description: "প্রশিক্ষণ প্রদানে সর্বোচ্চ মান ও পেশাদারিত্ব নিশ্চিত করা।",
    },
    {
      id: 3,
      title: "উদ্ভাবন",
      description: "আধুনিক প্রযুক্তি ও নতুন নতুন বিষয়ের সাথে খাপ খাওয়ানো।",
    },
    {
      id: 4,
      title: "অন্তর্ভুক্তি",
      description: "নারী ও পিছিয়ে পড়া জনগোষ্ঠীর অংশগ্রহণ নিশ্চিত করা।",
    },
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 font-sans text-gray-800">
      <h1 className="text-center text-3xl font-bold text-gray-900 mb-12">
        উদ্দেশ্য ও মূলনীতি
      </h1>

      {/* উদ্দেশ্য সেকশন */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-red-700 mb-4 border-l-4 border-red-700 pl-3">
          আমাদের মূল উদ্দেশ্যসমূহ
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {objectives.map((obj) => (
            <div
              key={obj.id}
              className="p-4 bg-gray-50  border border-gray-100"
            >
              <p className="font-medium">
                {obj.id}. {obj.title}:
              </p>
              <p className="text-gray-600">{obj.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* core value section */}
      <section>
        <h2 className="text-xl font-bold text-green-700 mb-4 border-l-4 border-green-700 pl-3">
          কোর ভ্যালু (Core Values)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coreValues.map((value) => (
            <div key={value.id} className="border-b border-gray-100 pb-3">
              <h3 className="font-bold text-gray-800">{value.title}</h3>
              <p className="text-sm text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default CoreValuesPage;
