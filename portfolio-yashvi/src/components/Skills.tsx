const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express", "Python", "RESTful APIs", "GraphQL"]
    },
    {
      title: "Database & Tools",
      skills: ["MongoDB", "MySQL", "Git", "GitHub", "VS Code", "Postman"]
    }
  ];

  return (
    <section id="skills" className="py-[100px] relative">
      <div className="max-w-[1200px] mx-auto px-8">
        <h2 className="text-[2.5rem] font-display font-bold mb-12 text-center text-white">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[24px] p-8 transition-all duration-400 group hover:-translate-y-2 hover:border-[#06b6d4] hover:bg-[rgba(255,255,255,0.05)] relative overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-[#06b6d4]/10 rounded-full blur-2xl group-hover:bg-[#06b6d4]/20 transition-colors duration-400"></div>
              
              <h3 className="text-xl font-display font-bold mb-6 text-white relative z-10">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3 relative z-10">
                {category.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="bg-[rgba(255,255,255,0.05)] px-4 py-2 rounded-xl border border-[rgba(255,255,255,0.1)] text-[#e2e8f0] text-[0.9rem] font-medium transition-all duration-300 hover:border-[#06b6d4]/50 hover:text-[#06b6d4]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
