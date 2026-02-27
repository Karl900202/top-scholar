"use client";

import { useTheme } from "@/contexts/ThemeContext";

export default function HeaderContent() {
  const { toggleTheme } = useTheme();

  return (
    <div className="w-full p-1">
      <div className="flex items-center justify-between h-14">
        {/* 브랜드명과 슬로건 */}
        <div className="flex items-center gap-5">
          {/* 브랜드명 */}
          <div className="flex items-center gap-1.5 pl-4">
            <div className="flex flex-col items-center justify-center">
              <span className="text-xl font-bold tracking-tight leading-none text-gray-900 dark:text-white">
                狀
              </span>
              <span className="text-[12px] font-medium leading-none mt-0.5 tracking-wide text-gray-500 dark:text-gray-400">
                장
              </span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-xl font-bold tracking-tight leading-none text-gray-900 dark:text-white">
                元
              </span>
              <span className="text-[12px] font-medium leading-none mt-0.5 tracking-wide text-gray-500 dark:text-gray-400">
                원
              </span>
            </div>
          </div>
          {/* 슬로건 */}
          <p className="text-sm font-medium text-gray-900 dark:text-white">
            아이디어로 급제하라
          </p>
        </div>
        {/* 테마 스위치 */}
        <button
          onClick={toggleTheme}
          className="mr-4 relative flex items-center"
          aria-label="테마 전환"
          suppressHydrationWarning
        >
          {/* 스위치 컨테이너 */}
          <div className="relative w-12 h-7 bg-gray-100 dark:bg-gray-200 rounded-full transition-colors duration-200">
            {/* 스위치 슬라이더 */}
            <div className="absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full transition-transform duration-200 dark:translate-x-5 flex items-center justify-center">
              {/* 다크 모드일 때 표시 (태양 아이콘) */}
              <svg
                className="w-4 h-4 text-amber-500 dark:hidden"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              {/* 라이트 모드일 때 표시 (달 아이콘) */}
              <svg
                className="w-4 h-4 text-gray-900 hidden dark:block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

