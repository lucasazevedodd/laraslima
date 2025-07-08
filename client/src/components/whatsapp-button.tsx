import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const { t } = useTranslation();

  const openWhatsApp = () => {
    const phoneNumber = '5588992747170';
    const message = encodeURIComponent(t('whatsapp.generalMessage'));
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#1DA851] text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 z-50 border-2 border-white/20 backdrop-blur-sm"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          boxShadow: '0 8px 32px rgba(37, 211, 102, 0.3), 0 4px 16px rgba(0, 0, 0, 0.2)'
        }}
      >
      <MessageCircle className="w-8 h-8" />
    </motion.button>
  );
}