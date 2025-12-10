"use client";

import { useState } from "react";
import { SignIn } from "@stackframe/stack";

export default function Header() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const titleChars = [
    { hanja: "狀", hangul: "장" },
    { hanja: "元", hangul: "원" },
    { hanja: "及", hangul: "급" },
    { hanja: "第", hangul: "제" },
  ];

  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <div className="flex items-center gap-2">
              {titleChars.map((char, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center"
                >
                  <span className="text-2xl font-bold text-gray-900 tracking-tight">
                    {char.hanja}
                  </span>
                  <span className="text-xs text-gray-500 mt-0.5 font-medium">
                    {char.hangul}
                  </span>
                </div>
              ))}
            </div>

            {/* User Icon Button */}
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="flex items-center justify-center w-10 h-10 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="로그인"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* SignIn Modal */}
      {isLoginModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsLoginModalOpen(false);
            }
          }}
        >
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">로그인</h2>
              <button
                onClick={() => setIsLoginModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="닫기"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <SignIn />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
