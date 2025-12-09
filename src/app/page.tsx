export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-6 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          퀴즈로 연결되는 새로운 인재 채널
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-md mx-auto">
          장원급제는 출제자와 응시자를 연결하는 스마트한 퀴즈 플랫폼입니다.
          <br />
          채용, 평가, 학습까지 다양한 목적으로 활용하세요.
        </p>
      </section>

      {/* App Overview */}
      <section className="px-6 py-12 bg-gray-50 border-y border-gray-100">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">장원급제란?</h2>
          <p className="text-gray-700 leading-relaxed">
            장원급제는 퀴즈 기반 평가 플랫폼입니다. 출제자는 문제를 만들고,
            응시자는 문제를 풀며 자신의 역량을 증명합니다. 채용 전 사전 인터뷰,
            업무 관련 평가, 설문조사, 기업의 마케팅 활동, 개인 백일장까지 다양한
            목적으로 활용할 수 있습니다.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          주요 기능
        </h2>
        <div className="space-y-8">
          {/* 출제자 */}
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  출제자 (기업 / 개인)
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  기업이나 개인 출제자가 다양한 문제를 만들고 관리할 수
                  있습니다. 채용을 위한 업무 역량 평가 문제부터 개인 백일장 같은
                  창의적 퀴즈까지 자유롭게 출제하세요.
                </p>
              </div>
            </div>
          </div>

          {/* 응시자 */}
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  응시자
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  지원자나 학습자가 출제된 문제를 풀며 자신의 역량을 증명합니다.
                  실시간으로 결과를 확인하고 피드백을 받을 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="px-6 py-12 bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          활용 사례
        </h2>
        <div className="space-y-6">
          <div className="p-5 bg-white border border-gray-200 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">
              채용 전 사전 인터뷰
            </h3>
            <p className="text-sm text-gray-600">
              기업이 채용 전 지원자의 업무 역량을 평가하는 사전 인터뷰 퀴즈를
              제공합니다.
            </p>
          </div>
          <div className="p-5 bg-white border border-gray-200 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">업무 관련 퀴즈</h3>
            <p className="text-sm text-gray-600">
              직무별 전문 지식과 실무 능력을 평가하는 맞춤형 퀴즈를 만들 수
              있습니다.
            </p>
          </div>
          <div className="p-5 bg-white border border-gray-200 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">개인 백일장</h3>
            <p className="text-sm text-gray-600">
              개인이 창의적인 문제를 만들어 다른 사람들과 함께 즐기는 백일장
              형식의 퀴즈를 진행할 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          지금 시작해보세요
        </h2>
        <p className="text-gray-600 mb-8">
          출제자가 되거나 응시자가 되어 장원급제의 다양한 기능을 경험해보세요.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
            출제자로 시작하기
          </button>
          <button className="px-6 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors">
            응시자로 시작하기
          </button>
        </div>
      </section>
    </div>
  );
}
