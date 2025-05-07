const About = () => {
  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          소개 및 기술 스택
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          저는 사용자 중심의 접근과 깔끔한 코드 작성을 중요하게 생각합니다.
        </p>

        {/* 기술 스택 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-16">
          <div className="bg-gray-100 p-4 rounded-xl shadow text-gray-800 font-medium">
            HTML / CSS
          </div>
          <div className="bg-gray-100 p-4 rounded-xl shadow text-gray-800 font-medium">
            JavaScript
          </div>
          <div className="bg-gray-100 p-4 rounded-xl shadow text-gray-800 font-medium">
            React / Vite
          </div>
          <div className="bg-gray-100 p-4 rounded-xl shadow text-gray-800 font-medium">
            Tailwind CSS
          </div>
          <div className="bg-gray-100 p-4 rounded-xl shadow text-gray-800 font-medium">
            Git / GitHub
          </div>
          <div className="bg-gray-100 p-4 rounded-xl shadow text-gray-800 font-medium">
            Figma
          </div>
        </div>

        {/* 추가 설명 블록 */}
        <div className="text-left space-y-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              저는 이런 개발자가 되고 싶습니다.
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>
                중복을 최소화하고, 의미 없는 코드와 의도를 알기 어려운 코드를
                지양합니다.
              </li>
              <li>
                클린코드를 중요하게 생각하며 유지보수하기 쉬운 코드를
                추구합니다.
              </li>
              <li>
                사용자 입장에서 깔끔하고 쉽고 편하게 사용할 수 있는 웹사이트를
                지향합니다.
              </li>
              <li>
                화려한 애니메이션보다 사용자 경험에 집중하며, 너무 작고 복잡한
                UI는 피합니다.
              </li>
              <li>
                모르는 것은 끝까지 파고들며, 계속해서 발전하고자 도전합니다.
              </li>
              <li>
                “세상에 아무 의미 없는 일은 없다. 이왕 하는 거 열심히 하자”는
                신념을 갖고 개발합니다.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              저는 이렇게 협업합니다.
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>
                Git과 GitHub를 활용해 효율적으로 버전을 관리하고 기록을
                남깁니다.
              </li>
              <li>Figma를 활용해 UI를 설계하고 시각적으로 소통합니다.</li>
              <li>
                소통이 잘 되는 협업을 중요하게 생각하며, 궁금하거나 원하는 바를
                명확히 표현합니다.
              </li>
              <li>
                기록하는 습관을 통해 함께 일하는 팀에게 도움이 되는 개발자가
                되고자 합니다.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
