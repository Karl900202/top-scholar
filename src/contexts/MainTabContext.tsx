"use client";

// Backwards-compat shim so existing imports keep working.
// 내부에서는 zustand 스토어를 사용합니다.

import type { ReactNode } from "react";
import {
  useMainTabStore,
  type MainTab,
} from "@/stores/useMainTabStore";

interface MainTabContextValue {
  activeTab: MainTab;
  setActiveTab: (tab: MainTab) => void;
}

export function MainTabProvider({ children }: { children: ReactNode }) {
  // zustand를 쓰기 때문에 특별한 Provider는 필요 없지만,
  // 기존 layout 구조를 유지하기 위해 그대로 children만 반환합니다.
  return <>{children}</>;
}

export function useMainTab(): MainTabContextValue {
  const activeTab = useMainTabStore((s) => s.activeTab);
  const setActiveTab = useMainTabStore((s) => s.setActiveTab);
  return { activeTab, setActiveTab };
}

export type { MainTab };
