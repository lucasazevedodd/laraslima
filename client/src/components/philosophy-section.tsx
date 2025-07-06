import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function PhilosophySection() {
  const { t } = useTranslation();
  const { elementRef, isIntersecting } = useIntersectionObserver();

  const images = [
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
    "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
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
