import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSelector from "./language-selector";

export default function Navigation() {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { key: 'home', section: 'inicio' },
    { key: 'about', section: 'sobre' },
    { key: 'services', section: 'servicos' },
    { key: 'philosophy', section: 'filosofia' },
    { key: 'packages', section: 'pacotes' },
    { key: 'portfolio', section: 'portfolio' },
    { key: 'contact', section: 'contato' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-roboto font-bold text-2xl text-gradient">
          LARA LIMA
          <span className="block text-sm font-light text-primary">
            {t('hero.subtitle').toUpperCase()}
          </span>
        </div>

        {/* Language Selector and Hamburger Menu */}
        <div className="flex items-center space-x-4">
          <LanguageSelector />

          {/* Animated Hamburger Icon */}
          <div 
            className="hamburger-icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className={`icon-1 ${isMobileMenuOpen ? 'a' : ''}`}></div>
            <div className={`icon-2 ${isMobileMenuOpen ? 'c' : ''}`}></div>
            <div className={`icon-3 ${isMobileMenuOpen ? 'b' : ''}`}></div>
          </div>
        </div>
      </div>

      {/* Blue Background Layer */}
      <div className={`dark-blue ${isMobileMenuOpen ? 'slide' : ''}`}></div>

      {/* Navigation Menu */}
      <nav className={`side-nav ${isMobileMenuOpen ? 'show' : ''}`}>
        <ul>
          {navItems.map((item) => (
            <li key={item.key} onClick={() => scrollToSection(item.section)}>
              {t(`nav.${item.key}`)}
            </li>
          ))}
        </ul>
      </nav>

      {/* Custom Styles */}
      <style jsx>{`
        .hamburger-icon {
          position: relative;
          height: 60px;
          width: 60px;
          z-index: 1000;
          cursor: pointer;
          border-radius: 50%;
          transition: all 0.2s ease-in-out;
          background: rgba(0, 0, 0, 0.1);
        }

        .hamburger-icon:hover {
          transform: scale(1.2);
          box-shadow: 0px 0px 30px rgba(0,0,0,0.1);
        }

        .icon-1, .icon-2, .icon-3 {
          position: absolute;
          left: 25%;
          top: 50%;
          width: 32px;
          height: 3px;
          background-color: black;
          transition: all 400ms cubic-bezier(.84,.06,.52,1.8);
        }

        .icon-1 {
          transform: translateY(-8px);
          animation-delay: 100ms;
        }

        .icon-3 {
          transform: translateY(8px);
          animation-delay: 250ms;
        }

        .icon-1.a {
          transform: rotate(40deg);
        }

        .icon-3.b {
          transform: rotate(-40deg);
        }

        .icon-2.c {
          opacity: 0;
        }

        .side-nav {
          background: #0288D1;
          position: fixed;
          top: 0;
          right: 0;
          height: 100vh;
          width: 0%;
          z-index: 10;
          opacity: 0;
          transition: all 600ms cubic-bezier(.62,.04,.3,1.56);
          transition-delay: 100ms;
        }

        .side-nav ul {
          margin: 0;
          padding: 0;
          position: absolute;
          top: 30%;
          left: 40%;
          transform: translateX(-50%);
        }

        .side-nav li {
          list-style: none;
          font-size: 24px;
          color: #fff;
          line-height: 2.2;
          text-transform: uppercase;
          letter-spacing: 1.7px;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 10px 20px;
        }

        .side-nav li:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateX(10px);
        }

        .side-nav.show {
          width: 50%;
          opacity: 1;
        }

        .dark-blue {
          position: fixed;
          top: 0;
          right: 0;
          background: #64B5F6;
          height: 100vh;
          width: 0%;
          transition: all 500ms cubic-bezier(.62,.04,.3,1.8);
          transition-delay: 50ms;
          z-index: 5;
          opacity: 1;
        }

        .dark-blue.slide {
          width: 50%;
          opacity: 1;
        }

        @media (max-width: 768px) {
          .side-nav.show {
            width: 80%;
          }

          .dark-blue.slide {
            width: 80%;
          }

          .side-nav ul {
            left: 50%;
          }

          .side-nav li {
            font-size: 20px;
          }
        }
      `}</style>
    </nav>
  );
}