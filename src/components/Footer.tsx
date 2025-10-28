import { Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#01123D] text-[#FFFFFE] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo and Description */}
            <div>
              <a 
                href="https://www.instagram.com/altais_racing?igsh=MXBmZHFocXR0aDMwZg=="
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 mb-4 hover:opacity-90 transition-opacity"
              >
                <div className="bg-[#FFFFFE]/10 w-10 h-10 rounded-full flex items-center justify-center p-1 group-hover:bg-[#FFFFFE]/20 transition-colors">
                  <img 
                    src="/brand/icon.png" 
                    alt="Altais Racing Icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="text-[#FFFFFE] font-black text-xl">ALTAIS RACING</div>
                  <div className="text-[#FFFFFE]/60 text-xs font-semibold tracking-wider">THE GOAT</div>
                </div>
              </a>
              <p className="text-[#FFFFFE]/60 text-sm">
                Greatest Of All Time - CRYPT Grammar School's journey to nationals and the World Finals.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4 text-[#FFFFFE]">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#about" className="text-[#FFFFFE]/60 hover:text-[#FFFFFE] transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#achievements" className="text-gray-400 hover:text-[#FFD700] transition-colors">
                    Achievements
                  </a>
                </li>
                <li>
                  <a href="#partnership" className="text-gray-400 hover:text-[#FFD700] transition-colors">
                    Partnership
                  </a>
                </li>
                <li>
                  <a href="#team" className="text-gray-400 hover:text-[#FFD700] transition-colors">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-[#FFD700] transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

                {/* Social Media */}
            <div>
              <h4 className="font-bold text-lg mb-4 text-[#FFFFFE]">Connect With Us</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/altais_racing?igsh=MXBmZHFocXR0aDMwZg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FFFFFE]/10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#FFFFFE] hover:text-[#01123D] transition-all"
                  aria-label="Visit Altais Racing on Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-[#FFFFFE]/10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#FFFFFE] hover:text-[#01123D] transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-[#FFFFFE]/10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#FFFFFE] hover:text-[#01123D] transition-all"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
              <div className="mt-6">
                {/* PLACEHOLDER: Replace with actual school logo */}
                <div className="bg-[#FFFFFE]/10 rounded-lg p-4 inline-block">
                  <p className="text-xs text-[#FFFFFE]/60">CRYPT GRAMMAR SCHOOL</p>
                </div>
              </div>
            </div>
          </div>

          {/* Credit: program host */}
          <div className="mt-6 text-center">
            <a
              href="https://www.stemracing.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#FFFFFE]/70 hover:text-[#FFFFFE] transition-colors"
            >
              <img src="https://www.stemracing.co.uk/favicon.ico" alt="STEM Racing" className="w-6 h-6 rounded-sm" />
              <span className="text-xs">Program run by STEM Racing</span>
            </a>
          </div>

          {/* Copyright */}
          <div className="border-t border-[#FFFFFE]/10 pt-8 text-center">
            <p className="text-[#FFFFFE]/60 text-sm">
              © {currentYear} Altais Racing. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
