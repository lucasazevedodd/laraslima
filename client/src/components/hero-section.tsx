import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function HeroSection() {
  const { t } = useTranslation();
  const { elementRef, isIntersecting } = useIntersectionObserver();

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="inicio"
      ref={elementRef}
      className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden pt-32 md:pt-24"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <motion.h1
            className="font-roboto font-bold text-6xl md:text-8xl text-white mb-4 floating-animation"
            initial={{ opacity: 0, y: 50 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('hero.title')}
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl font-light text-white/90 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('hero.subtitle')}
          </motion.p>
          <motion.p
            className="text-lg text-white/80 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {t('hero.description')}
          </motion.p>
          <motion.button
            onClick={scrollToContact}
            className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('hero.cta')}
          </motion.button>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, x: 50 }}
          animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.img
            src="@assets/WhatsApp Image 2025-07-05 at 9.36.05 AM_1751818933472.jpeg"
            alt="Professional portrait"
            className="rounded-2xl shadow-2xl w-full object-cover"
            whileHover={{ rotate: 0, scale: 1.05 }}
            initial={{ rotate: 3 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src="@assets/WhatsApp Image 2025-07-05 at 9.36.06 AM_1751818933472.jpeg"
            alt="Fashion photography"
            className="rounded-2xl shadow-2xl w-full object-cover mt-8"
            whileHover={{ rotate: 0, scale: 1.05 }}
            initial={{ rotate: -3 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
