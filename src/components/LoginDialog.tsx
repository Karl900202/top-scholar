"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

export default function LoginDialog() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 로그인 로직 구현
    console.log("Login:", { email, password });
    setOpen(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          className="mr-2 p-1 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="로그인"
        >
          <svg
            className="w-5 h-5 text-gray-900 dark:text-white"
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
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50 fade-in" />
        <Dialog.Content className="fixed overflow-hidden bottom-0 left-1/2 -translate-x-1/2 w-full max-w-sm bg-white dark:bg-gray-900 rounded-t-2xl shadow-xl z-50 p-6 slide-up max-h-[85vh] overflow-y-auto safe-area-bottom mx-auto">
          <div className="relative">
            <Dialog.Close asChild>
              <button
                className="absolute top-0 right-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="닫기"
              >
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
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
            </Dialog.Close>

            {/* 브랜드 헤더 */}
            <div className="flex flex-col items-center mb-6 mt-4">
              <div className="flex items-center gap-1.5 mb-3">
                <div className="flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold tracking-tight leading-none text-gray-900 dark:text-white">
                    狀
                  </span>
                  <span className="text-[10px] font-medium leading-none mt-0.5 tracking-wide text-gray-500 dark:text-gray-400">
                    장
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold tracking-tight leading-none text-gray-900 dark:text-white">
                    元
                  </span>
                  <span className="text-[10px] font-medium leading-none mt-0.5 tracking-wide text-gray-500 dark:text-gray-400">
                    원
                  </span>
                </div>
              </div>
              <Dialog.Title className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                로그인
              </Dialog.Title>
              <Dialog.Description className="text-sm text-gray-600 dark:text-gray-400 text-center">
                아이디어로 급제하는 여정을 시작하세요
              </Dialog.Description>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                이메일
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                placeholder="이메일을 입력하세요"
                required
              />
            </div>
            
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                비밀번호
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                placeholder="비밀번호를 입력하세요"
                required
              />
            </div>

            <div className="flex items-center justify-between text-sm pt-1">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="mr-2 rounded border-gray-300 text-amber-500 focus:ring-amber-500"
                />
                <span className="text-gray-600 dark:text-gray-400">로그인 상태 유지</span>
              </label>
              <button
                type="button"
                className="text-amber-600 dark:text-amber-400 hover:underline font-medium"
              >
                비밀번호 찾기
              </button>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full px-4 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 rounded-xl font-semibold text-white transition-all shadow-lg shadow-amber-500/20 active:scale-[0.98]"
              >
                로그인
              </button>
            </div>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="relative mb-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400">
                  또는
                </span>
              </div>
            </div>
            <button
              type="button"
              className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-xl font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#EA4335"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#4285F4"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#34A853"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Google로 로그인
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              계정이 없으신가요?{" "}
              <button
                type="button"
                className="text-amber-600 dark:text-amber-400 hover:underline font-semibold"
              >
                회원가입
              </button>
            </p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
