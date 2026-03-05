"use client";

import { create } from "zustand";

export type MainTab = "BEST" | "NEW" | "추천" | "인기" | "랭킹" | "마감임박";

interface MainTabState {
  activeTab: MainTab;
  setActiveTab: (tab: MainTab) => void;
}

export const MAIN_TABS: MainTab[] = [
  "BEST",
  "NEW",
  "추천",
  "인기",
  "랭킹",
  "마감임박",
];

export const useMainTabStore = create<MainTabState>((set) => ({
  activeTab: "추천",
  setActiveTab: (tab) => set({ activeTab: tab }),
}));

