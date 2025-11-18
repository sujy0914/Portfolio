import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-neutral-800 font-sans">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 pb-8">

        <section
          id="home"
          className="min-h-screen flex flex-col items-center justify-center relative">
        <div className="text-center px-4 mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#8B6C42] tracking-wide leading-snug">
            신입 백엔드 개발자 
            <br />
            <span className="text-[#C39B6A]">—————</span>
            <br />
            <span className="text-[#8B6C42] font-bold">김태이의 포트폴리오</span>
          </h1>
        </div>

          <button
            onClick={() => scrollToSection("aboutme")}
            className="absolute bottom-16 flex flex-col items-center group focus:outline-none">
            <svg
              className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-[#C39B6A] animate-bounce transition-transform duration-300 group-hover:scale-110"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3.5}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
            </svg>
          </button>
        </section>

        <section
          id="aboutme"
          className="min-h-screen flex items-center justify-center py-24 sm:py-32 lg:py-40">
          <About />
        </section>

        <section
          id="skills"
          className="flex items-center justify-center py-24 sm:py-32 lg:py-40">
          <Skills />
        </section>

        <section
          id="projects"
          className="flex items-center justify-center py-24 sm:py-32 lg:py-40">
          <Projects />
        </section>

        <section
          id="contact"
          className="flex items-center justify-center py-24 sm:py-32 lg:py-40 
                    rounded-3xl 
                    bg-[radial-gradient(circle,_#fdf5e6,_#ffffff)]">
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
