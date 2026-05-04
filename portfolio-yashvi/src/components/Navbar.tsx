

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#020617]/70 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
      <div className="max-w-[1200px] mx-auto px-8">
        <nav className="flex justify-between items-center h-20">
          <div className="text-2xl font-extrabold tracking-tight bg-gradient-to-br from-[#67e8f9] to-[#06b6d4] text-transparent bg-clip-text font-display">
            YASHVI-CODER
          </div>
          <ul className="hidden md:flex list-none gap-10">
            <li>
              <a href="#home" className="text-[#94a3b8] hover:text-white text-[0.95rem] font-semibold transition-colors duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-[#94a3b8] hover:text-white text-[0.95rem] font-semibold transition-colors duration-300">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="text-[#94a3b8] hover:text-white text-[0.95rem] font-semibold transition-colors duration-300">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="text-[#94a3b8] hover:text-white text-[0.95rem] font-semibold transition-colors duration-300">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="text-[#94a3b8] hover:text-white text-[0.95rem] font-semibold transition-colors duration-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
