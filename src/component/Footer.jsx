import React from 'react'
import footer from "../assets/footer_image.png"
import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {
  return (
    <div className="pt-10 container">
      <div>
        <picture>
          <Image src={footer} alt="footer" className="w-full" />
        </picture>
        <div className="bg-[#EBEBEB] flex justify-between items-center py-2 px-2">
          <p className="text-[12px]">সাইটটি শেষ হাল-নাগাদ করা হয়েছে: ২০২৫</p>
          <p className="text-[12px] text-center">
            কারিগরি সহায়তায় :{" "}
            <a href="https://ranocoder.com/">ranocoder Ltd.</a> &nbsp;|&nbsp;
            <a href="https://skbarman.me" className="hover:text-gray-700">
              Subroto
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer