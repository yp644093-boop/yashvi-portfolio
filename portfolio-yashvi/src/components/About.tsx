

const About = () => {
  const skills = [
    "HTML5 / CSS3", "JavaScript (ES6+)", "React", "Node.js", "MongoDB", "Responsive Design"
  ];

  return (
    <section id="about" className="py-[100px]">
      <div className="max-w-[1200px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: About Text */}
        <div className="flex flex-col">
          <h2 className="text-[2.5rem] font-display font-bold mb-12 text-left text-white">About Me</h2>
          <p className="mb-8 leading-[1.8] text-[#f8fafc] text-[1.05rem]">
            I am a passionate Full Stack Developer who loves building responsive and user-friendly web applications. 
            I work with technologies like HTML, CSS, JavaScript, React, Node.js, and MongoDB. 
            I enjoy solving problems, learning new skills, and turning ideas into real-world projects.
          </p>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span 
                key={index}
                className="bg-[rgba(255,255,255,0.03)] px-4 py-2 rounded-lg border border-[rgba(255,255,255,0.08)] text-[#f8fafc] text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Right Side: Stats Card */}
        <div className="bg-[rgba(255,255,255,0.03)] p-12 rounded-[30px] border border-[rgba(255,255,255,0.08)] shadow-xl relative overflow-hidden group hover:border-[#06b6d4]/50 transition-colors duration-400">
          {/* Subtle glow background */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-[#06b6d4]/10 rounded-full blur-2xl group-hover:bg-[#06b6d4]/20 transition-colors duration-400"></div>
          
          <div className="mb-8 relative z-10">
            <h3 className="text-[2rem] text-[#06b6d4] font-display font-bold mb-2">2nd Year</h3>
            <p className="text-[#94a3b8] font-medium">Bachelor of Technology (COMPUTER ENGINEERING)</p>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-[2rem] text-[#06b6d4] font-display font-bold mb-2">5+ Projects</h3>
            <p className="text-[#94a3b8] font-medium">Completed during academic career</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
