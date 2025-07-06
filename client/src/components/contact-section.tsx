import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Instagram, Mail, Phone, QrCode } from "lucide-react";

export default function ContactSection() {
  const { t } = useTranslation();
  const { elementRef, isIntersecting } = useIntersectionObserver();

  const openWhatsApp = () => {
    const phoneNumber = '5531999999999';
    const message = encodeURIComponent(t('whatsapp.generalMessage'));
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contato" ref={elementRef} className="py-24 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="font-roboto font-bold text-4xl md:text-5xl text-white mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {t('contact.title')}
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="text-white"
              initial={{ opacity: 0, x: -50 }}
              animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-center md:justify-start space-x-4">
                  <Instagram className="w-6 h-6" />
                  <span className="text-lg">{t('contact.instagram')}</span>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-4">
                  <Mail className="w-6 h-6" />
                  <span className="text-lg">{t('contact.email')}</span>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-4">
                  <Phone className="w-6 h-6" />
                  <span className="text-lg">{t('contact.phone')}</span>
                </div>
              </div>
              
              <motion.button
                onClick={openWhatsApp}
                className="mt-8 bg-whatsapp text-white px-8 py-4 rounded-full font-semibold hover:bg-whatsapp/90 transition-all duration-300 inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                <span>{t('contact.whatsapp')}</span>
              </motion.button>
            </motion.div>
            
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-white p-8 rounded-2xl shadow-2xl">
                <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                  <QrCode className="w-16 h-16 text-gray-400" />
                </div>
                <p className="text-gray-600 mt-4 text-sm text-center">
                  {t('contact.qrcode')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
