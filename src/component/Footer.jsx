import React from 'react'
import footer from "../assets/footer_image.png"
import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {
  return (
    <div className="pt-10 container bg-white">
      <div>
        <picture>
          <Image src={footer} alt="footer" className="w-full" />
        </picture>
        <div className="bg-[#EBEBEB] flex justify-between items-center py-2 px-2">
          <p className="text-[12px]">সাইটটি শেষ হাল-নাগাদ করা হয়েছে: ২০২৫</p>
          <p className="text-[12px] text-center">
            পরিকল্পনা ও বাস্তবায়নে :কারিগরি প্রশিক্ষণ কেন্দ্র, পীরগঞ্জ{" "}| <Link href="#" className='hover:text-gray-700'>Subroto Kumar Bamrman</Link>{""} | <Link href="#">ranocoder.ltd</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer