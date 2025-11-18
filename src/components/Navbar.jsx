import { useState } from "react";

function Navbar() {
  const [active, setActive] = useState("about me");
  const [isOpen, setIsOpen] = useState(false);
  const menu = ["About me", "Skills", "Projects", "Contact"];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase().replace(' ', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActive(sectionId.toLowerCase());
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActive("about me");
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-neutral-200 z-50 shadow-lg">
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-3 sm:py-4 lg:py-6 px-4 sm:px-6">
        <div 
          className="text-lg sm:text-xl lg:text-2xl font-bold text-primary hidden sm:block cursor-pointer hover:scale-110 transition-transform duration-300"
          onClick={scrollToTop}
        >
          Portfolio
        </div>
        
        <ul className="hidden lg:flex gap-6 xl:gap-8 2xl:gap-12 text-base lg:text-lg xl:text-xl">
          {menu.map((item) => (
            <li
              key={item}
              className={`cursor-pointer transition-all duration-300 hover:scale-110 ${
                active === item.toLowerCase()
                  ? "text-primary font-semibold"
                  : "text-neutral-600 hover:text-primary"
              }`}
              onClick={() => scrollToSection(item)}
            >
              {item}
            </li>
          ))}
        </ul>

        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-neutral-800 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-neutral-800 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-neutral-800 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-neutral-200 shadow-lg lg:hidden">
            <ul className="flex flex-col py-4">
              {menu.map((item) => (
                <li
                  key={item}
                  className={`cursor-pointer px-6 py-3 text-base transition-all duration-300 ${
                    active === item.toLowerCase()
                      ? "text-primary font-semibold bg-primary/5"
                      : "text-neutral-600 hover:text-primary hover:bg-neutral-50"
                  }`}
                  onClick={() => scrollToSection(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
