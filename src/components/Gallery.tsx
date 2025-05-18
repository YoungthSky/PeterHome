import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryItem {
  id: number;
  image: any;
  title: string;
  description: string;
}

interface GalleryProps {
  items: GalleryItem[];
  autoPlayInterval?: number;
  className?: string;
  imageClassName?: string;
}

export const Gallery = ({
  items,
  autoPlayInterval = 3000,
  className = '',
  imageClassName = '',
}: GalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % items.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [isPaused, items.length, autoPlayInterval]);

  return (
    <div
      className={`h-[380px] p-0 relative overflow-hidden mx-auto flex items-center justify-center ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-full flex items-center justify-center"
        >
          <Image
            src={items[currentIndex].image}
            alt={items[currentIndex].title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`h-full w-auto md:h-auto md:w-full object-cover  ${imageClassName}`}
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900/80 to-transparent">
            <h3 className="text-lg font-medium text-white">{items[currentIndex].title}</h3>
            <p className="text-sm text-white/80">{items[currentIndex].description}</p>
          </div>
        </motion.div>
      </AnimatePresence>
      {/* 导航按钮 */}
      <button
        onClick={() => setCurrentIndex(prev => (prev - 1 + items.length) % items.length)}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 backdrop-blur hover:bg-white/20 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => setCurrentIndex(prev => (prev + 1) % items.length)}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 backdrop-blur hover:bg-white/20 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* 指示器 */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
