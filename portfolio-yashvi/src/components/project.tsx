

const Projects = () => {
  return (
    <section id="projects" className="py-[100px]">
      <div className="max-w-[1200px] mx-auto px-8">
        <h2 className="text-[2.5rem] font-display font-bold mb-12 text-center text-white">Flagship Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Music Player Project */}
          <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[24px] p-6 transition-all duration-400 group hover:-translate-y-2 hover:border-[#06b6d4] hover:bg-[rgba(255,255,255,0.05)] relative overflow-hidden flex flex-col">
            <div className="w-full aspect-video rounded-2xl mb-6 overflow-hidden">
              <img 
                src="/assets/music_player_thumb.png" 
                alt="Stellar Audio Player" 
                className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
              />
            </div>
            <div className="flex-grow flex flex-col">
              <h3 className="text-2xl font-display font-bold mb-3 text-white">Stellar Audio Player</h3>
              <p className="text-[#94a3b8] text-[0.95rem] mb-6 flex-grow">
                A premium music player with glassmorphism, real-time sound visualizer, and PWA support. Built with Vanilla JavaScript.
              </p>
              <div>
                <a 
                  href="#" 
                  className="inline-block py-3 px-6 bg-[#06b6d4] text-white rounded-xl font-bold text-[0.95rem] transition-all duration-400 border-none cursor-pointer shadow-[0_10px_30px_-10px_rgba(6,182,212,0.5)] hover:bg-[#0891b2] hover:-translate-y-1 hover:shadow-[0_15px_40px_-10px_rgba(6,182,212,0.6)]"
                >
                  Launch App
                </a>
              </div>
            </div>
          </div>

          {/* Placeholder for future project */}
          <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[24px] p-6 transition-all duration-400 group hover:-translate-y-2 hover:border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.05)] relative overflow-hidden flex flex-col opacity-60">
            <div className="w-full aspect-video rounded-2xl mb-6 overflow-hidden bg-[#1e293b] flex items-center justify-center">
              <svg width="60" height="60" fill="#94a3b8" viewBox="0 0 24 24" className="transition-transform duration-400 group-hover:scale-110">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 00-1.38-3.56A8.03 8.03 0 0118.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 015.08 16zm2.95-8H5.08a7.987 7.987 0 013.33-3.56A15.65 15.65 0 007.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.34.16-2h4.68c.09.66.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 01-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" />
              </svg>
            </div>
            <div className="flex-grow flex flex-col">
              <h3 className="text-2xl font-display font-bold mb-3 text-white">More Coming Soon</h3>
              <p className="text-[#94a3b8] text-[0.95rem] mb-6 flex-grow">
                Exciting new web applications are currently in development. Stay tuned for updates!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
