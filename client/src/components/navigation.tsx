
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
            className="flex flex-col space-y-1 focus:outline-none relative z-[60]"
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
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-screen w-full z-50"
          >
            {/* Backdrop with gradient */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-900/60 to-pink-800/40 backdrop-blur-xl"
            />
            
            {/* Menu Content */}
            <div className="relative h-full overflow-y-auto">
              <div className="flex flex-col min-h-full">
                {/* Header with floating effect */}
                <motion.div 
                  className="flex justify-between items-center p-6 border-b border-white/20"
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="font-roboto font-bold text-xl text-white">
                    <motion.span
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="block bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent"
                    >
                      LARA LIMA
                    </motion.span>
                  </div>
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex flex-col justify-center items-center w-8 h-8 focus:outline-none relative"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.span
                      className="block w-6 h-0.5 bg-white"
                      animate={{ rotate: 45, y: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.span
                      className="block w-6 h-0.5 bg-white absolute"
                      animate={{ rotate: -45, y: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </motion.div>
                
                {/* Navigation items with creative animations */}
                <div className="flex flex-col flex-1 justify-center space-y-4 p-8">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.key}
                      initial={{ opacity: 0, x: 100, rotateY: 90 }}
                      animate={{ opacity: 1, x: 0, rotateY: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.1 + 0.2,
                        ease: "easeOut"
                      }}
                      className="relative group"
                    >
                      {/* Background glow effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100"
                        initial={{ scale: 0.8 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Floating particles effect */}
                      <motion.div
                        className="absolute -left-4 top-1/2 w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100"
                        animate={{
                          y: [-10, 10, -10],
                          scale: [0.8, 1.2, 0.8],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      
                      <motion.button
                        onClick={() => scrollToSection(item.section)}
                        className="relative w-full text-left py-4 px-6 rounded-lg text-2xl font-light text-white hover:text-pink-200 transition-all duration-300 group-hover:translate-x-2"
                        whileHover={{ 
                          scale: 1.05,
                          textShadow: "0 0 20px rgba(255,255,255,0.5)"
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.span
                          className="relative z-10"
                          initial={{ opacity: 0.8 }}
                          whileHover={{ opacity: 1 }}
                        >
                          {t(`nav.${item.key}`)}
                        </motion.span>
                        
                        {/* Animated underline */}
                        <motion.div
                          className="absolute bottom-2 left-6 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400"
                          initial={{ width: 0 }}
                          whileHover={{ width: "calc(100% - 48px)" }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.button>
                    </motion.div>
                  ))}
                </div>
                
                {/* Decorative elements */}
                <motion.div
                  className="absolute top-1/4 right-8 w-20 h-20 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.div
                  className="absolute bottom-1/4 left-8 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
