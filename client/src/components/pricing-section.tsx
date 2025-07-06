import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Check } from "lucide-react";

export default function PricingSection() {
  const { t } = useTranslation();
  const { elementRef, isIntersecting } = useIntersectionObserver();

  const packages = ['essential', 'professional', 'premium'];

  const openWhatsApp = (packageName: string) => {
    const phoneNumber = '5531999999999';
    const message = encodeURIComponent(t('whatsapp.message', { package: packageName }));
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="pacotes" ref={elementRef} className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="font-roboto font-bold text-4xl md:text-5xl text-center text-gradient mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {t('packages.title')}
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg}
              className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative ${
                pkg === 'professional' ? 'transform scale-105 border-2 border-primary' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
            >
              {pkg === 'professional' && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold">
                  {t('packages.professional.badge')}
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="font-roboto font-bold text-2xl text-primary mb-2">
                  {t(`packages.${pkg}.name`)}
                </h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {t(`packages.${pkg}.price`)}
                </div>
                <p className="text-gray-600">
                  {t(`packages.${pkg}.subtitle`)}
                </p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {Array.from({ length: pkg === 'essential' ? 5 : 6 }, (_, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span>{t(`packages.${pkg}.features.${i}`)}</span>
                  </li>
                ))}
              </ul>
              
              <motion.button
                onClick={() => openWhatsApp(t(`packages.${pkg}.name`))}
                className="w-full bg-primary text-white py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t(`packages.${pkg}.cta`)}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
