"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeaderContent from "@/components/HeaderContent";

// 스크롤 방향에 따라 상단 헤더 표시 여부를 제어하는 훅
function useScrollHeaderVisibility() {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;

      ticking.current = true;
      requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const prevY = lastScrollY.current;
        const delta = currentY - prevY;

        lastScrollY.current = currentY;
        ticking.current = false;

        // 너무 작은 스크롤 변화는 무시 (터치 떨림/관성 방지)
        if (Math.abs(delta) < 8) return;

        // 아래로 스크롤 중이면 헤더 숨기기
        if (delta > 0) {
          setShowHeader((prev) => (prev ? false : prev));
        }
        // 위로 스크롤 중이면 헤더 표시
        else if (delta < 0) {
          setShowHeader((prev) => (prev ? prev : true));
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return showHeader;
}

const TABS = ["BEST", "NEW", "추천", "인기", "랭킹", "마감임박"];

export default function MainTopBar() {
  const [activeTab, setActiveTab] = useState("추천");
  const showHeader = useScrollHeaderVisibility();

  return (
    <motion.div
      className="fixed left-1/2 -translate-x-1/2 w-full max-w-md z-40 bg-white dark:bg-black safe-area-top"
      layout
      initial={false}
      style={{ top: -1 }} // 1px 위로 올려서 뒷배경 라인 노출 방지
    >
      <AnimatePresence initial={false}>
        {showHeader && (
          <motion.div
            key="main-header"
            layout
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <HeaderContent />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 탭 네비게이션 (항상 컨테이너 하단에 붙어서 헤더 높이 변화에 따라 자연스럽게 이동) */}
      <motion.div
        layout
        className="w-full px-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-black"
      >
        <div
          className="flex pt-0.5 gap-5 overflow-x-auto scrollbar-hide"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {TABS.map((tab) => {
            const isActive = activeTab === tab;
            let textColor = "";

            if (isActive) {
              textColor = "text-black dark:text-white";
            } else if (tab === "BEST") {
              textColor = "text-red-500";
            } else if (tab === "NEW") {
              textColor = "text-yellow-500";
            } else {
              textColor = "text-gray-400 dark:text-gray-300";
            }

            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-1 pt-3 pb-2 text-sm font-bold whitespace-nowrap transition-all duration-200 border-b-3 ${
                  isActive
                    ? `${textColor} border-black dark:border-white`
                    : `${textColor} border-transparent`
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}

