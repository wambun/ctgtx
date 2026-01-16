'use client';

import { Button } from './Button';

interface CTASectionProps {
  title: string;
  description?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  stat?: {
    value: string;
    label: string;
  };
  image?: string;
}

export const CTASection = ({
  title,
  description,
  primaryCta,
  stat,
  image,
}: CTASectionProps) => {
  return (
    <section className="w-full">
      <div className="grid lg:grid-cols-2">
        {/* Left side - Orange CTA */}
        <div className="bg-primary-500 px-8 py-16 lg:py-24 lg:px-16 flex flex-col justify-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
              {title}
            </h2>
            {description && (
              <p className="mt-4 text-white/80">{description}</p>
            )}
            {primaryCta && (
              <div className="mt-8">
                <Button
                  href={primaryCta.href}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-primary-500 hover:bg-gray-100"
                >
                  {primaryCta.text}
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Right side - Image with stat overlay */}
        <div
          className="relative min-h-[300px] lg:min-h-[400px] bg-gray-300"
          style={
            image
              ? {
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }
              : {}
          }
        >
          {stat && (
            <div className="absolute inset-0 bg-secondary-500/60 flex flex-col items-center justify-center text-white">
              <span className="text-sm mb-2">{stat.label}</span>
              <span className="text-7xl lg:text-8xl font-bold">{stat.value}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
