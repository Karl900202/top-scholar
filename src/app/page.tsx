"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black pb-safe">
      {/* Hero Section */}
      <section className="px-4 py-16 text-center relative overflow-hidden">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-800 shadow-sm mb-6">
            <span className="text-xs font-medium text-gray-900 dark:text-white">✨ 창의적 아이디어 커뮤니티</span>
          </div>
          <h1 className="text-4xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
            대기업 공모전부터
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              개인의 고민까지
            </span>
          </h1>
          <p className="text-lg leading-relaxed max-w-md mx-auto mb-2 text-gray-900 dark:text-white">
            창의적으로 해결하는 커뮤니티 플랫폼
          </p>
          <p className="text-base leading-relaxed max-w-md mx-auto text-gray-700 dark:text-gray-300">
            대기업의 공모전부터 개인의 고민까지. 
            <br />
            <span className="text-gray-500 dark:text-gray-400">다양한 사람들의 창의적 아이디어로 함께 해결해요.</span>
          </p>
        </div>
      </section>

      {/* App Overview */}
      <section className="px-4 py-12 relative">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">장원이 특별한 이유</h2>
          </div>
          <div className="rounded-2xl p-6 border bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800">
            <p className="leading-relaxed text-base text-gray-900 dark:text-white">
              대기업의 공모전부터 개인의 작은 고민까지. 
              <span className="font-semibold text-gray-900 dark:text-white">장원</span>은 모든 문제를 창의적으로 해결하는 커뮤니티 플랫폼이에요.
              <br /><br />
              기업은 공모전을 운영하고 다양한 아이디어를 수집하고, 
              개인은 자신의 고민을 공유하고 커뮤니티의 창의적 해결책을 받아볼 수 있어요.
              <br /><br />
              <span className="text-gray-600 dark:text-gray-300 italic">아이디어로 급제하는 순간, 여기서 시작됩니다.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 py-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
            두 가지 역할, 하나의 플랫폼
          </h2>
          <p className="text-gray-600 dark:text-gray-300">당신의 목적에 맞게 선택하세요</p>
        </div>
        <div className="space-y-6 max-w-2xl mx-auto">
          {/* 출제자 */}
          <div className="group relative rounded-2xl p-6 border transition-all duration-300 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/20">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    출제자
                  </h3>
                  <span className="text-xs px-2 py-1 rounded-full font-medium border bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800">
                    기업 / 개인
                  </span>
                </div>
                <p className="leading-relaxed text-gray-900 dark:text-white">
                  대기업 공모전을 운영하거나 개인의 고민을 공유하세요. 
                  브랜딩 공모, 아이디어 공모, 창업 고민 등 다양한 문제를 출제하고, 
                  커뮤니티의 창의적 답변을 체계적으로 수집할 수 있어요.
                  <br /><br />
                  <span className="font-semibold text-gray-900 dark:text-white">다양한 사람들의 아이디어를 한눈에 확인하고, 최고의 해결책을 찾아보세요.</span>
                </p>
              </div>
            </div>
          </div>

          {/* 응시자 */}
          <div className="group relative rounded-2xl p-6 border transition-all duration-300 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/20">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    응시자
                  </h3>
                  <span className="text-xs px-2 py-1 rounded-full font-medium border bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800">
                    지원자 / 학습자
                  </span>
                </div>
                <p className="leading-relaxed text-gray-900 dark:text-white">
                  대기업 공모전에 참여하거나, 다른 사람들의 고민에 창의적인 해결책을 제시하세요. 
                  자신의 고민을 공유하고 커뮤니티의 다양한 아이디어를 받아볼 수도 있어요.
                  <br /><br />
                  <span className="font-semibold text-gray-900 dark:text-white">당신의 창의적 아이디어로 함께 성장하는 커뮤니티에 참여하세요.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="px-4 py-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
            이렇게 활용해요
          </h2>
          <p className="text-gray-600 dark:text-gray-300">다양한 시나리오에서 빛을 발합니다</p>
        </div>
        <div className="space-y-4 max-w-2xl mx-auto">
          <div className="group rounded-xl p-6 border transition-all duration-300 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-bold mb-1.5 text-lg text-gray-900 dark:text-white">
                  대기업 공모전 운영
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  브랜딩 공모, 아이디어 공모 등 대기업의 다양한 공모전을 운영하세요. 
                  참가자들의 창의적인 답변을 체계적으로 수집하고, 최고의 아이디어를 쉽게 선정할 수 있어요.
                </p>
              </div>
            </div>
          </div>
          
          <div className="group rounded-xl p-6 border transition-all duration-300 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-bold mb-1.5 text-lg text-gray-900 dark:text-white">커뮤니티 아이디어 수집</h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  기업이나 개인이 특정 문제에 대한 해결책이 필요할 때, 커뮤니티에 질문을 올리세요. 
                  다양한 사람들의 창의적 아이디어를 받아보고, 최적의 해결책을 찾을 수 있어요.
                </p>
              </div>
            </div>
          </div>
          
          <div className="group rounded-xl p-6 border transition-all duration-300 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-bold mb-1.5 text-lg text-gray-900 dark:text-white">개인 고민 해결</h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  창업 아이디어나 브랜딩, 특정 문제에 대한 고민이 있다면? 
                  개인의 고민을 커뮤니티에 공유하고, 다양한 사람들의 창의적 해결책을 받아보세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-12 pb-10 text-center relative">
        <div className="relative z-10 max-w-md mx-auto">
          <div className="inline-flex flex-col items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg shadow-purple-500/20 mb-6">
            <span className="text-3xl font-bold text-white tracking-tight leading-none">
              狀
            </span>
          </div>
          <h2 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white">
            준비되셨나요?
          </h2>
          <p className="mb-10 leading-relaxed text-gray-600 dark:text-gray-300">
            지금 바로 시작해서<br />
            <span className="text-gray-500 dark:text-gray-400">당신만의 평가 여정을 만들어보세요</span>
          </p>
        </div>
      </section>

      {/* Floating Button */}
      <div className="fixed w-full max-w-md bottom-0 left-1/2 -translate-x-1/2 z-50 bg-white dark:bg-black">
        <Link
          href="/main"
          className="w-full p-5 font-semibold active:scale-[0.98] transition-all duration-200 min-h-[52px] border-t border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-900 dark:text-white"
        >
          <span className="text-lg font-bold">시작하기</span>
        </Link>
      </div>
    </div>
  );
}
