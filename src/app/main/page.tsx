"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function MainPage() {
  // public/images 폴더의 이미지 사용
  const images = [
    "/images/서울_공공디자인_공모전.jpg",
    "/images/순환경제_아이디어_공모전.jpg",
    "/images/별별마포.jpg",
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white pt-24">

      {/* 공모전 이미지 스와이프 영역 */}
      <div className="w-full">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={12}
          slidesPerView="auto"
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className="w-full !pt-0"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="!w-[100vw]">
              <div className="relative w-full h-[50vh] border-0 overflow-hidden">
                <Image
                  src={image}
                  alt={`공모전 ${index + 1}`}
                  fill
                  className="object-fill"
                  priority={index === 0}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
