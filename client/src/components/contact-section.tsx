import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Contact, Instagram, Mail, Phone } from "lucide-react";

import qrCode from './../images/qr-code.svg';

export default function ContactSection() {
  const { t } = useTranslation();
  const { elementRef, isIntersecting } = useIntersectionObserver();

  const openWhatsApp = () => {
    const phoneNumber = '5588992747170';
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
              className="text-white text-center md:text-right"
              initial={{ opacity: 0, x: -50 }}
              animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-6 mb-8">
                <a href="https://instagram.com/iamlaralima" target="_blank" className="flex items-center justify-center md:justify-end space-x-4 underline">
                    <span className="text-lg">{t('contact.instagram')}</span>
                    <Instagram className="w-6 h-6" />
                </a>
                <a href={'mailto:' + t('contact.email')} target="_blank" className="flex items-center justify-center md:justify-end space-x-4 underline">
                  <span className="text-lg">{t('contact.email')}</span>
                  <Mail className="w-6 h-6" />
                </a>
                <a href={'tel:' + t('contact.phone')} target="_blank" className="flex items-center justify-center md:justify-end space-x-4 underline">
                  <span className="text-lg">{t('contact.phone')}</span>
                  <Phone className="w-6 h-6" />
                </a>
              </div>
              
              <div className="flex justify-center md:justify-end">
                <motion.button
                  onClick={openWhatsApp}
                  className="bg-[#25D366] hover:bg-[#128C7E] text-white px-10 py-4 rounded-full font-medium transition-all duration-300 inline-flex items-center space-x-3 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <span>{t('contact.whatsapp')}</span>
                </motion.button>
              </div>
            </motion.div>
            
            <motion.div
              className="flex justify-center md:justify-start"
              initial={{ opacity: 0, x: 50 }}
              animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-white p-8 rounded-2xl shadow-2xl">
                <div className="w-[200px] h-[200px] bg-gray-200 rounded-lg flex items-center justify-center">
                  <motion.img
                    src={qrCode}
                    alt="Professional portrait"
                    className="w-full object-cover"
                    whileHover={{ rotate: 0, scale: 1 }}
                    initial={{ rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  />
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
