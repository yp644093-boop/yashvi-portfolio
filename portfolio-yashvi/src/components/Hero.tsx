

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-[120px] pb-16 px-8 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(circle at 10% 20%, rgba(6, 182, 212, 0.05) 0%, transparent 50%), radial-gradient(circle at 90% 80%, rgba(6, 182, 212, 0.05) 0%, transparent 50%)'
      }}></div>

      <div className="w-full max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-12 lg:gap-8 relative z-10">
        
        {/* Left Side */}
        <div className="flex flex-col text-center lg:text-right items-center lg:items-end z-10">
          <span className="text-[#06b6d4] font-semibold uppercase tracking-[2px] mb-2 text-[0.9rem]">
            Hello, I'm
          </span>
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] text-[#f8fafc] font-extrabold font-display">
            Yashvi<br className="hidden lg:block" />Patel
          </h1>
        </div>

        {/* Center Side */}
        <div className="flex justify-center order-first lg:order-none z-10">
          <div className="relative w-[clamp(280px,40vw,450px)] aspect-[0.8/1] flex items-end justify-center group">
            {/* Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 blur-[40px] animate-pulse-glow"
              style={{
                background: 'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)'
              }}
            ></div>
            <img 
              src="/assets/profile.png" 
              alt="Yashvi Patel" 
              className="w-full h-full object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-400 group-hover:-translate-y-[10px] group-hover:scale-105"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col text-center lg:text-left items-center lg:items-start z-10">
          <span className="text-[#06b6d4] font-semibold uppercase tracking-[2px] mb-2 text-[0.9rem]">
            Creative
          </span>
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] text-[#f8fafc] font-extrabold font-display">
            Full Stack<br className="hidden lg:block" />Developer
          </h1>
          <div className="mt-8">
            <a 
              href="#projects" 
              className="inline-block py-[0.8rem] px-8 bg-[#06b6d4] text-white rounded-xl font-bold text-base transition-all duration-400 border-none cursor-pointer shadow-[0_10px_30px_-10px_rgba(6,182,212,0.5)] hover:bg-[#0891b2] hover:-translate-y-1 hover:shadow-[0_15px_40px_-10px_rgba(6,182,212,0.6)]"
            >
              My Work
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
