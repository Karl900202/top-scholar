"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function MainPage() {
  // public/images 폴더의 이미지 사용
  const images = [
    "/images/서울_공공디자인_공모전.jpg",
    "/images/순환경제_아이디어_공모전.jpg",
    "/images/별별마포.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentIndex(swiper.realIndex);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white pt-24">

      {/* 공모전 이미지 스와이프 영역 */}
      <div className="w-full overflow-hidden relative">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={12}
          slidesPerView="auto"
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          onSlideChange={handleSlideChange}
          className="w-full !pt-0"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="!w-full">
              <div className="relative w-full h-[50vh] border-0 overflow-hidden">
                <Image
                  src={image}
                  alt={`공모전 ${index + 1}`}
                  fill
                  className="object-fill"
                  priority={index === 0}
                  sizes="100vw"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* 페이지 인덱스 표시 */}
        <div className="absolute bottom-4 right-4 z-10">
          <div className="bg-black/60 backdrop-blur-sm rounded-full px-4.5 py-1.5">
            <span className="text-white text-sm font-medium flex items-center gap-1.5">
              <span>{currentIndex + 1}</span>
              <span>/</span>
              <span>{images.length}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
