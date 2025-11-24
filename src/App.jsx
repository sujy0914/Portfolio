import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-800 font-sans">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 pb-8">
        <section
          id="home"
          className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#fdfaf5] to-white text-center px-6 sm:px-8 pt-24 sm:pt-28 lg:pt-32"
        >
          <div className="max-w-4xl w-full text-left">
            <div className="mb-10 sm:mb-12 text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#8B6C42] mb-2">
                백엔드 개발자
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#C39B6A] mb-8">
                김태이
              </h2>

              <div className="text-neutral-700 leading-relaxed text-base sm:text-lg mt-6">
                <p className="mb-10">
                  에러가 생기면 원인을 찾고 해결하는 과정에서 성장의 즐거움을 느끼며 계속해서 발전합니다.<br />
                  화면 너머에서 작동하는 기능들을 구현하는 백엔드 개발자가 되겠습니다.
                </p>

                <h3 className="text-lg sm:text-xl font-semibold text-[#8B6C42] mb-1">
                  💻 기술과 구조에 대한 관심
                </h3>
                <p className="mb-10">
                  단순히 동작하는 코드보다, 전체 시스템의 흐름과 구조를 고민하는 것을 중요하게 생각합니다.
                  개인 프로젝트를 진행하며 서버 설계, API 구성, 데이터베이스 관리까지 경험하면서
                  <span className="font-medium text-[#8B6C42]">효율적이고 확장 가능한 구조</span>을 설계하는 능력을 키웠습니다.
                </p>

                <h3 className="text-lg sm:text-xl font-semibold text-[#8B6C42] mb-1">
                  🤝 협업과 커뮤니케이션
                </h3>
                <p className="mb-10">
                  팀 프로젝트를 통해 기술적 능력만큼이나 커뮤니케이션의 중요성을 깨달았습니다.
                  서로 다른 역할의 팀원들과 의견을 조율하고, 더 나은 방법을 찾아가는 과정에서
                  <span className="font-medium text-[#8B6C42]">팀 전체의 완성도를 높이는 협업 능력</span>을 배웠습니다.
                </p>

                <h3 className="text-lg sm:text-xl font-semibold text-[#8B6C42] mb-1">
                  ⚙️ 문제 해결 중심의 사고
                </h3>
                <p className="mb-10">
                  예상치 못한 오류나 성능 문제를 마주했을 때, 원인을 분석하고 재발 방지 방법을 고민하는 과정을 즐깁니다.
                  문제를 해결하는 과정 자체가 학습의 순간이 되며, 점차 더 견고하고 안정적인 시스템을 만들 수 있는 기반이 됩니다.
                </p>

                <p>
                  앞으로도 새로운 기술을 지속적으로 탐구하며,
                  사용자에게 신뢰와 편안함을 제공하는 백엔드 개발자가 되겠습니다.
                  안정적이고 확장 가능한 서비스를 설계하며, 팀과 함께 성장할 수 있는 개발자가 목표입니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="aboutme"
          className="min-h-screen flex items-center justify-center py-24 sm:py-32 lg:py-40"
        >
          <About />
        </section>

        <section
          id="skills"
          className="flex items-center justify-center py-24 sm:py-32 lg:py-40"
        >
          <Skills />
        </section>

        <section
          id="projects"
          className="flex items-center justify-center py-24 sm:py-32 lg:py-40"
        >
          <Projects />
        </section>

        <section
          id="contact"
          className="flex items-center justify-center py-24 sm:py-32 lg:py-40 rounded-3xl bg-[radial-gradient(circle,_#fdf5e6,_#ffffff)]"
        >
          <Contact />
        </section>
      </main>

      <footer className="bg-neutral-100 border-t border-neutral-200 p-6 text-center">
        <p className="text-neutral-600">© 2025 김태이. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
