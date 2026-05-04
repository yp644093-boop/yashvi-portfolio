

const Footer = () => {
  return (
    <footer className="py-16 border-t border-[rgba(255,255,255,0.08)] text-center relative z-10 bg-[#020617]">
      <div className="max-w-[1200px] mx-auto px-8">
        <p className="text-[#94a3b8] text-[0.95rem]">
          &copy; {new Date().getFullYear()} Yashvi Patel. Designed with <span className="text-[#ff4b2b]">&hearts;</span> and Antigravity.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
