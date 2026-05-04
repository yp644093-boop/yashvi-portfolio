

const Contact = () => {
  return (
    <section id="contact" className="py-[100px] relative">
      <div className="max-w-[1200px] mx-auto px-8 text-center relative z-10">
        <h2 className="text-[2.5rem] font-display font-bold mb-6 text-white">Interested in working together?</h2>
        <p className="text-[#94a3b8] text-xl mb-12 max-w-[600px] mx-auto leading-relaxed">
          I'm currently looking for internship opportunities and freelance projects. Let's build something amazing!
        </p>
        <a 
          href="mailto:yashvi.patel@example.com" 
          className="inline-block py-4 px-10 bg-[#06b6d4] text-white rounded-xl font-bold text-[1.1rem] transition-all duration-400 border-none cursor-pointer shadow-[0_10px_30px_-10px_rgba(6,182,212,0.5)] hover:bg-[#0891b2] hover:-translate-y-1 hover:shadow-[0_15px_40px_-10px_rgba(6,182,212,0.6)]"
        >
          Send me an Email
        </a>
      </div>
      
      {/* Background glow for contact section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#06b6d4]/5 rounded-[100%] blur-[80px] pointer-events-none -z-10"></div>
    </section>
  );
};

export default Contact;
