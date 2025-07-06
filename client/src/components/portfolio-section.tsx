import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useState } from "react";

export default function PortfolioSection() {
  const { t } = useTranslation();
  const { elementRef, isIntersecting } = useIntersectionObserver();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const portfolioImages = [
    "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=600",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=600",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=600",
    "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=600",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=600",
    "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=600",
  ];

  const openLightbox = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <section id="portfolio" ref={elementRef} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="font-roboto font-bold text-4xl md:text-5xl text-center text-gradient mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {t('portfolio.title')}
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {portfolioImages.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`Portfolio ${index + 1}`}
              className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer w-full object-cover h-80"
              initial={{ opacity: 0, y: 50 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => openLightbox(image)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative max-w-4xl max-h-full"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={selectedImage}
              alt="Portfolio enlarged"
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
