import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Camera, Edit, Video, Image, Clock, Zap } from "lucide-react";

const serviceIcons = [Camera, Edit, Video, Image, Clock, Zap];

export default function ServicesSection() {
  const { t } = useTranslation();
  const { elementRef, isIntersecting } = useIntersectionObserver();

  const services = Array.from({ length: 6 }, (_, i) => ({
    key: `service${i + 1}`,
    icon: serviceIcons[i],
  }));

  return (
    <section id="servicos" ref={elementRef} className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="font-roboto font-bold text-4xl md:text-5xl text-center text-gradient mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {t('services.title')}
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.key}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                  index % 4 === 0 ? 'bg-primary/10' :
                  index % 4 === 1 ? 'bg-secondary/10' :
                  index % 4 === 2 ? 'bg-accent/10' : 'bg-highlight/10'
                }`}>
                  <IconComponent className={`w-8 h-8 ${
                    index % 4 === 0 ? 'text-primary' :
                    index % 4 === 1 ? 'text-secondary' :
                    index % 4 === 2 ? 'text-accent' : 'text-highlight'
                  }`} />
                </div>
                <h3 className="font-roboto font-semibold text-xl mb-4">
                  {t(`services.${service.key}.title`)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(`services.${service.key}.description`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
