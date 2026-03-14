import { ArrowRight, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Scroll indicator - Always visible at bottom */}
      <div 
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce"
        style={{ zIndex: 20 }}
        onClick={() => scrollToSection('about')}
      >
        <ChevronDown className="w-8 h-8 text-[#FFFFFE] drop-shadow-lg cursor-pointer hover:text-[#FFFFFE]/80 transition-colors" />
      </div>

      {/* PLACEHOLDER: Replace this gradient with a high-quality team image or video background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#01123D] via-[#012051] to-[#010a1a]">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#FFFFFE]/10 via-transparent to-[#FFFFFE]/5 animate-pulse-glow"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(#FFFFFE 1px, transparent 1px), linear-gradient(90deg, #FFFFFE 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center">
        {/* Main content with lower z-index */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <div 
            className={`
              flex items-center justify-center mb-8 transition-all duration-1000 delay-300 transform
              ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
          >
            <img 
              src="/brand/icon.png" 
              alt="Altais Racing Icon" 
              className="w-24 h-24 animate-pulse-glow hover:scale-110 transition-transform duration-300"
            />
          </div>
          <h1 
            className={`
              text-5xl md:text-7xl lg:text-8xl font-black text-[#FFFFFE] mb-4 tracking-tight
              transition-all duration-1000 delay-500 transform
              ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
          >
            ALTAIS RACING
          </h1>
          <div 
            className={`
              text-3xl md:text-4xl lg:text-5xl font-black text-[#FFFFFE]/80 mb-6 tracking-wider
              transition-all duration-1000 delay-700 transform
              ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
          >
            THE GOAT
          </div>
          <p 
            className={`
              text-xl md:text-2xl text-[#FFFFFE]/70 mb-8 font-light
              transition-all duration-1000 delay-900 transform
              ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
          >
            Greatest Of All Time
          </p>
          <p 
            className={`
              text-base md:text-lg text-[#FFFFFE]/60 mb-12 max-w-2xl mx-auto
              transition-all duration-1000 delay-[1100ms] transform
              ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
          >
            Where education meets high-performance engineering. Join us on our journey to nationals and the World Finals.
          </p>

          <div 
            className={`
              relative z-10 flex flex-col sm:flex-row gap-4 justify-center items-center
              transition-all duration-1000 delay-[1300ms] transform
              ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
          >
            <button
              onClick={() => scrollToSection('highlights')}
              className="bg-[#FFFFFE] text-[#01123D] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#FFFFFE]/90 
                transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-2xl group"
            >
              Become a Partner
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="border-2 border-[#FFFFFE] text-[#FFFFFE] px-8 py-4 rounded-full font-bold text-lg 
                hover:bg-[#FFFFFE]/10 transition-all duration-300 hover:border-opacity-70"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
