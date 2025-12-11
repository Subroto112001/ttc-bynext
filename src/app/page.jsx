import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <div className="relative">
        <picture>
          <img
            src="https://ttcpirganj.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-02-at-22.31.43_498ace3a.jpg"
            alt=""
            className="w-full h-[200px] object-cover"
          />
        </picture>
        <div className="absolute top-[20px] left-3 text-5xl font-bold text-white shadow-2xl simple-shadow">
          <h1>কারিগরি প্রশিক্ষণ কেন্দ্র, পীরগঞ্জ</h1>
        </div>
      </div>
    </div>
  );
}
