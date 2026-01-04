import React, { useRef, useEffect, useState } from "react";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform, useAnimate } from "framer-motion";
import profilePhoto from "../assets/Profile-photo.png";

const Header = () => {
  return (
    <header id="header" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 pb-8 sm:pt-20 sm:pb-10 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gray-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(81,162,255,0.1),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-full w-full bg-blue-500"></span>
              </span>
              <span className="text-xs sm:text-sm text-blue-300 font-medium">
                Available for work
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Hi, I'm <span className="text-[#51A2FF]">Md Jihanur Rahman</span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300 h-10 sm:h-12">
                <Typewriter text="MERN Stack Developer" delay={100} />
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-xl leading-relaxed mx-auto lg:mx-0">
                Passionate about building dynamic and scalable web applications
                using MongoDB, Express.js, React, and Node.js. I love turning
                ideas into reality through clean, efficient code and creating
                user-friendly interfaces that make a difference.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <a
                href="https://drive.google.com/file/d/1M-SUgYNocERd8uaeK7gVyzl7zQiG9EQQ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 backdrop-blur-sm border border-blue-500/50 text-white text-sm sm:text-base font-semibold rounded-full hover:bg-blue-700 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-4 justify-center lg:justify-start">
              <span className="text-gray-400 text-xs sm:text-sm">Connect with me:</span>
              <div className="flex gap-2 sm:gap-3">
                <a
                  href="https://github.com/jihanurrahman33"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-3 rounded-full bg-gray-800/80 border border-blue-500/20 text-gray-300 hover:text-white hover:bg-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/md-jihanur-rahman/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-3 rounded-full bg-gray-800/80 border border-blue-500/20 text-gray-300 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="mailto:mdjihanurrahman5@gmail.com"
                  className="p-2 sm:p-3 rounded-full bg-gray-800/80 border border-blue-500/20 text-gray-300 hover:text-white hover:bg-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-110"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex items-center justify-center lg:justify-end animate-fade-in-right mt-8 lg:mt-0 perspective-1000">
            {/* Animated background circles */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-48 h-48 sm:w-72 sm:h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
            </div>

            <TiltCard>
              {/* Image container with modern design */}
              <div className="relative z-10 group">
                {/* Rotating border */}
                <div className="absolute -inset-3 sm:-inset-4 bg-linear-to-r from-blue-600 via-cyan-600 to-blue-600 rounded-full opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow"></div>

                {/* Image frame */}
                <div className="relative bg-gray-900 p-1.5 sm:p-2 rounded-full border-2 sm:border-4 border-blue-500/50">
                  <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 sm:border-4 border-gray-800">
                    <img
                      src={profilePhoto}
                      alt="Md Jihanur Rahman"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-blue-500/50 rounded-full p-1">
          <div className="w-1 h-2 sm:w-1.5 sm:h-3 bg-blue-500 rounded-full mx-auto animate-scroll"></div>
        </div>
      </div>
    </header>
  );
};

const TiltCard = ({ children }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative"
    >
      {children}
    </motion.div>
  );
};
const Typewriter = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <span>
      {currentText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-0.5 h-[1em] bg-[#51A2FF] ml-1 align-middle"
      />
    </span>
  );
};

export default Header;
