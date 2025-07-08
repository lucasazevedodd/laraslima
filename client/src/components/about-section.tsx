import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import profile from './../images/portfolio11.webp'

export default function AboutSection() {
  const { t } = useTranslation();
  const { elementRef, isIntersecting } = useIntersectionObserver();

  return (
    <section id="sobre" ref={elementRef} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-roboto font-bold text-4xl md:text-5xl text-gradient mb-8">
              {t('about.title')}
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              {t('about.description1')}
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              {t('about.description2')}
            </p>
            
            
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={profile}
              alt="Lara Lima Portrait"
              className="rounded-2xl shadow-2xl w-full object-cover"
            />
            <motion.div
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full opacity-50"
              initial={{ scale: 0 }}
              animate={isIntersecting ? { scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
            <motion.div
              className="absolute -top-6 -left-6 w-24 h-24 bg-secondary rounded-full opacity-50"
              initial={{ scale: 0 }}
              animate={isIntersecting ? { scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
