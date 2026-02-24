export default function Header() {
  return (
    <header className="bg-black border-b border-gray-800 sticky top-0 z-40 safe-area-top">
      <div className="w-full p-1">
        <div className="flex items-center h-14">
          {/* 브랜드명과 슬로건 */}
          <div className="flex items-center gap-5">
            {/* 브랜드명 */}
            <div className="flex items-center gap-1.5 pl-4">
              <div className="flex flex-col items-center justify-center">
                <span className="text-xl font-bold text-white tracking-tight leading-none">
                  狀
                </span>
                <span className="text-[12px] text-gray-400 font-medium leading-none mt-0.5 tracking-wide">
                  장
                </span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-xl font-bold text-white tracking-tight leading-none">
                  元
                </span>
                <span className="text-[12px] text-gray-400 font-medium leading-none mt-0.5 tracking-wide">
                  원
                </span>
              </div>
            </div>
            {/* 슬로건 */}
            <p className="text-sm text-white font-medium">
              아이디어로 급제하라
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
