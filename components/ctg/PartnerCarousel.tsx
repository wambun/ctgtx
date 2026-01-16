'use client';

import { useEffect, useRef } from 'react';

interface Partner {
  name: string;
  logo: string;
  description: string;
}

interface PartnerCarouselProps {
  partners: Partner[];
  speed?: number; // pixels per second
}

export const PartnerCarousel = ({
  partners,
  speed = 30,
}: PartnerCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Duplicate partners for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const content = contentRef.current;
    if (!scrollContainer || !content) return;

    let animationId: number;
    let scrollPosition = 0;
    const contentWidth = content.scrollWidth / 2; // Half because we duplicated

    const animate = () => {
      scrollPosition += speed / 60; // 60fps

      // Reset to beginning when we've scrolled through the first set
      if (scrollPosition >= contentWidth) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [speed]);

  return (
    <div className="relative overflow-hidden">
      {/* Gradient fade on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* Scrolling container */}
      <div
        ref={scrollRef}
        className="overflow-hidden"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div
          ref={contentRef}
          className="flex"
          style={{ width: 'max-content' }}
        >
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 px-4"
              style={{ width: '200px' }}
            >
              <div className="bg-white border border-gray-100 rounded-xl p-5 h-full hover:shadow-lg hover:border-primary-500/20 transition-all group">
                <div className="h-16 flex items-center justify-center mb-3">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-12 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <h3 className="font-bold text-secondary-500 text-center text-sm">
                  {partner.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
