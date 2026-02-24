"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();

  // 홈 페이지에서는 하단 네비게이션 숨기기
  if (pathname === "/") {
    return null;
  }

  const navItems = [
    {
      name: "커뮤니티",
      href: "/community",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
        </svg>
      ),
    },
    {
      name: "카테고리",
      href: "/category",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/>
        </svg>
      ),
    },
    {
      name: "홈",
      href: "/",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>
      ),
    },
    {
      name: "랭킹",
      href: "/ranking",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 5h-2V3h-2v2h-2v2h2v2h2V7h2V5zm-2 8v2h-2v-2h-2v-2h2v-2h2v2h2v2h-2zm2 4h-6v2h6v-2zM12 3H2v2h10V3zm0 4H2v2h10V7zm0 4H2v2h10v-2zm0 4H2v2h10v-2zm0 4H2v2h10v-2z"/>
        </svg>
      ),
    },
    {
      name: "마이페이지",
      href: "/mypage",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      ),
    },
  ];

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md z-50 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 safe-area-bottom">
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-1">
          {navItems.map((item) => {
            // 홈 아이템은 / 또는 /main 모두 액티브로 처리
            const isActive = item.href === "/" 
              ? pathname === "/" || pathname === "/main"
              : pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex flex-col items-center justify-center flex-1 gap-0.5 transition-all duration-200 min-w-0 rounded-lg"
              >
                <div className={`flex-shrink-0 ${
                  isActive 
                    ? "text-amber-500" 
                    : "text-gray-600 dark:text-white"
                }`}>
                  {item.icon}
                </div>
                <span className={`text-[10px] font-medium truncate w-full text-center ${
                  isActive 
                    ? "text-gray-900 dark:text-white"
                    : "text-gray-500 dark:text-gray-400"
                }`}>
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
