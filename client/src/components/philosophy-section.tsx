import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import image1 from './../images/portfolio1.webp';
import image2 from './../images/portfolio8.webp';
import image3 from './../images/portfolio3.webp';

export default function PhilosophySection() {
  const { t } = useTranslation();
  const { elementRef, isIntersecting } = useIntersectionObserver();

  const images = [
    image1, image2, image3
  ];

  return (
    <section id="filosofia" ref={elementRef} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="font-roboto font-bold text-4xl md:text-5xl text-gradient mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {t('philosophy.title')}
          </motion.h2>
          
          <motion.div
            className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-12 shadow-lg mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 italic mb-6">
              "{t('philosophy.quote1')}"
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 italic">
              "{t('philosophy.quote2')}"
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`Philosophy image ${index + 1}`}
                className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 w-full object-cover h-80"
                initial={{ opacity: 0, y: 50 }}
                animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
