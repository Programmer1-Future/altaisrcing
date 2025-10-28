import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <nav className="max-w-6xl mx-auto">
        <div className="bg-[#01123D]/70 backdrop-blur-md border border-white/6 rounded-full px-4 py-3 shadow-lg">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <img
                src="/brand/logo.png"
                alt="Altais Racing"
                className="h-8 w-auto"
              />
              <span className="hidden sm:inline text-white font-black tracking-wide">Altais Racing</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => scrollToSection('about')}
                className="text-white/90 hover:text-white transition-colors font-medium text-sm px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('highlights')}
                className="text-white/90 hover:text-white transition-colors font-medium text-sm px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                Highlights
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className="text-white/90 hover:text-white transition-colors font-medium text-sm px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-white text-[#01123D] px-4 py-1.5 rounded-full font-semibold hover:scale-105 transition-transform shadow-sm"
              >
                Get In Touch
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-3">
              <div className="bg-white/5 rounded-xl p-4 space-y-3">
                <button
                  onClick={() => scrollToSection('about')}
                  className="w-full text-left text-white/90 hover:text-white transition-colors font-medium py-2 px-2 rounded-md"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('highlights')}
                  className="w-full text-left text-white/90 hover:text-white transition-colors font-medium py-2 px-2 rounded-md"
                >
                  Highlights
                </button>
                <button
                  onClick={() => scrollToSection('team')}
                  className="w-full text-left text-white/90 hover:text-white transition-colors font-medium py-2 px-2 rounded-md"
                >
                  Team
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full text-left bg-white text-[#01123D] px-4 py-2 rounded-full font-semibold hover:bg-white/95 transition-colors"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
