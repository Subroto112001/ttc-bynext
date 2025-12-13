import { iconprovider } from "@/helper/IconProvider";
import React from "react";
import { BiSolidLike } from "react-icons/bi";
const page = () => {
  const socialIcons = [
    { name: "facebook", icon: iconprovider.facebook },
    { name: "whatsapp", icon: iconprovider.whatsapp },
    { name: "twitter", icon: iconprovider.twitter },
    { name: "linkedin", icon: iconprovider.linkedin },
    { name: "viber", icon: iconprovider.viber },
    { name: "messenger", icon: iconprovider.messenger },
  ];
  return (
    <div className=" bg-white ">
      <section className=" md:mt-[30px] py-2 md:py-4 px-2">
        <div className="flex justify-between ">
          <div className="flex flex-col gap-2 items-center">
            <p className="text-[#2C5F8D] text-[18px] font-medium">
              কনটেন্টটি শেয়ার করতে ক্লিক করুন
            </p>
            <div className="flex gap-5 items-center">
              {socialIcons.map((socialIcon, index) => (
                <span className="text-2xl" key={index}>
                  {socialIcon.icon}
                </span>
              ))}
            </div>
          </div>
          <span className="p-4 border rounded max-w-[220px] text-[17px] font-medium text-center">
            ফেইসবুক পেইজ ভিজিট ও লাইক দিন
          </span>
        </div>

        <div className="mt-10">
          <p className="text-2xl ">নোটিশ</p>
        </div>
      </section>
    </div>
  );
};

export default page;
