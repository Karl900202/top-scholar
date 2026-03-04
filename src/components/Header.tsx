"use client";

import { usePathname } from "next/navigation";
import MainTopBar from "@/app/main/_components/MainTopBar";
import HeaderContent from "@/components/HeaderContent";

export default function Header() {
  const pathname = usePathname();

  // /main 이하에서는 메인 전용 상단 바 사용
  if (pathname.startsWith("/main")) {
    return <MainTopBar />;
  }

  return (
    <header className="bg-white dark:bg-black sticky top-0 z-40 safe-area-top">
      <HeaderContent />
    </header>
  );
}
