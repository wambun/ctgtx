'use client';

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Partner {
  name: string;
  logo: string;
  description: string;
}

interface PartnerCarouselProps {
  partners: Partner[];
  autoPlay?: boolean;
  interval?: number;
}

export const PartnerCarousel = ({
  partners,
  autoPlay = true,
  interval = 3000,
}: PartnerCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(4);

  // Calculate items per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, partners.length - itemsPerView);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || isHovered) return;

    const timer = setInterval(goToNext, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, isHovered, goToNext]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary-500 hover:shadow-xl transition-all"
        aria-label="Previous partners"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={goToNext}
        className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary-500 hover:shadow-xl transition-all"
        aria-label="Next partners"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="flex-shrink-0 px-3"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <div className="bg-white border border-gray-100 rounded-xl p-6 h-full hover:shadow-lg hover:border-primary-500/20 transition-all group">
                <div className="h-20 flex items-center justify-center mb-4">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-16 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <h3 className="font-bold text-secondary-500 text-center mb-2 text-sm">
                  {partner.name}
                </h3>
                <p className="text-xs text-gray-500 text-center line-clamp-2">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-primary-500 w-6'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
