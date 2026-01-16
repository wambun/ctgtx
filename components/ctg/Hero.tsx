'use client';

import { Button } from './Button';
import clsx from 'clsx';

interface HeroProps {
  title: string;
  highlightedText?: string;
  description?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  backgroundVideo?: string;
  overlay?: boolean;
  align?: 'left' | 'center';
  size?: 'default' | 'large';
}

export const Hero = ({
  title,
  highlightedText,
  description,
  primaryCta,
  secondaryCta,
  backgroundImage,
  backgroundVideo,
  overlay = true,
  align = 'left',
  size = 'default',
}: HeroProps) => {
  const renderTitle = () => {
    if (!highlightedText) {
      return title;
    }

    const parts = title.split(highlightedText);
    return (
      <>
        {parts[0]}
        <span className="text-primary-500">{highlightedText}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section
      className={clsx(
        'relative w-full overflow-hidden',
        size === 'large' ? 'min-h-[90vh]' : 'min-h-[60vh]',
        (backgroundImage || backgroundVideo) ? 'text-white' : 'bg-secondary-500 text-white'
      )}
    >
      {/* Fallback background color */}
      <div className="absolute inset-0 bg-secondary-500 z-0" />

      {/* Background Image */}
      {backgroundImage && !backgroundVideo && (
        <div
          className="absolute inset-0 z-[1] bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      {/* Video Background */}
      {backgroundVideo && (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-[1]"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      )}

      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-secondary-500/60 z-[2]" />
      )}

      {/* Content */}
      <div
        className={clsx(
          'relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center',
          size === 'large' ? 'min-h-[90vh] py-32' : 'min-h-[60vh] py-20',
          align === 'center' ? 'items-center text-center' : ''
        )}
      >
        <div className={clsx('max-w-3xl', align === 'center' ? 'mx-auto' : '')}>
          <h1
            className={clsx(
              'font-bold leading-tight text-white',
              size === 'large'
                ? 'text-4xl sm:text-5xl lg:text-6xl'
                : 'text-3xl sm:text-4xl lg:text-5xl'
            )}
          >
            {renderTitle()}
          </h1>

          {description && (
            <p className="mt-6 text-lg text-gray-200 max-w-2xl">
              {description}
            </p>
          )}

          {(primaryCta || secondaryCta) && (
            <div
              className={clsx(
                'mt-8 flex flex-wrap gap-4',
                align === 'center' ? 'justify-center' : ''
              )}
            >
              {primaryCta && (
                <Button href={primaryCta.href} variant="primary" size="lg">
                  {primaryCta.text}
                </Button>
              )}
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="outline-white" size="lg">
                  {secondaryCta.text}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
