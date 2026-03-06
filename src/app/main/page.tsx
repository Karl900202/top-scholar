"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import MainSwiper from "@/app/main/_components/MainSwiper";
import { useMainTabStore, MAIN_TABS, type MainTab } from "@/stores/useMainTabStore";
import BestTab from "@/app/main/_components/BestTab";
import NewTab from "@/app/main/_components/NewTab";
import RecommendTab from "@/app/main/_components/RecommendTab";
import PopularTab from "@/app/main/_components/PopularTab";
import RankTab from "@/app/main/_components/RankTab";
import ClosingSoonTab from "@/app/main/_components/ClosingSoonTab";

const TAB_COMPONENTS: Record<MainTab, ReactNode> = {
  BEST: <BestTab />,
  NEW: <NewTab />,
  추천: <RecommendTab />,
  인기: <PopularTab />,
  랭킹: <RankTab />,
  마감임박: <ClosingSoonTab />,
};

const MAIN_SWIPER_VISIBLE_TABS = new Set<MainTab>(["추천", "인기"]);

export default function MainPage() {
  const activeTab = useMainTabStore((s) => s.activeTab);
  const setActiveTab = useMainTabStore((s) => s.setActiveTab);
  const swiperRef = useRef<SwiperType | null>(null);

  // 탭 변경 시 해당 인덱스로 스와이프
  useEffect(() => {
    if (!swiperRef.current) return;
    const index = MAIN_TABS.indexOf(activeTab);
    if (index >= 0 && index !== swiperRef.current.realIndex) {
      swiperRef.current.slideTo(index);
    }
  }, [activeTab]);

  const handleSwiperInit = (swiper: SwiperType) => {
    swiperRef.current = swiper;
    const index = MAIN_TABS.indexOf(activeTab);
    if (index >= 0) {
      swiper.slideTo(index, 0);
    }
  };

  const handleSlideChange = (swiper: SwiperType) => {
    const tab = MAIN_TABS[swiper.realIndex];
    if (tab) {
      setActiveTab(tab);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white pt-24">
      <div className="w-full overflow-hidden">
        <Swiper
          onSwiper={handleSwiperInit}
          onSlideChange={handleSlideChange}
          spaceBetween={0}
          slidesPerView={1}
          resistanceRatio={0.85}
          className="w-full"
        >
          {MAIN_TABS.map((tab) => (
            <SwiperSlide key={tab} className="!w-full">
              {MAIN_SWIPER_VISIBLE_TABS.has(tab) && <MainSwiper />}
              <div className="min-h-[40vh]">
                {TAB_COMPONENTS[tab]}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
