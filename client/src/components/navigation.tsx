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
        
        {/* Hamburger Menu for all screen sizes */}
        <div className="flex items-center space-x-4">
          <LanguageSelector />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex flex-col space-y-1 focus:outline-none"
          >
            <motion.span
              className="block w-6 h-0.5 bg-black"
              animate={{
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? 6 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-black"
              animate={{
                opacity: isMobileMenuOpen ? 0 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-black"
              animate={{
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? -6 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </div>
      
      {/* Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-screen w-full bg-white/95 backdrop-blur-md shadow-lg z-50"
          >
            <div className="h-full overflow-y-auto">
              <div className="flex flex-col min-h-full">
                {/* Header with close button */}
                <div className="flex justify-between items-center p-6 border-b">
                  <div className="font-roboto font-bold text-xl text-gradient">
                    LARA LIMA
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex flex-col justify-center items-center w-6 h-6 focus:outline-none"
                  >
                    <motion.span
                      className="block w-6 h-0.5 bg-black"
                      animate={{
                        rotate: 45,
                        y: 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.span
                      className="block w-6 h-0.5 bg-black absolute"
                      animate={{
                        rotate: -45,
                        y: 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </button>
                </div>
                
                {/* Navigation items */}
                <div className="flex flex-col flex-1 justify-center space-y-8 p-6">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.key}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      onClick={() => scrollToSection(item.section)}
                      className="hover:text-primary transition-colors text-left text-2xl font-light"
                    >
                      {t(`nav.${item.key}`)}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
