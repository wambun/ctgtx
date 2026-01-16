'use client';

import clsx from 'clsx';

interface SectionHeaderProps {
  label?: string;
  title: string;
  highlightedText?: string;
  description?: string;
  align?: 'left' | 'center';
  titleColor?: 'navy' | 'white';
  className?: string;
}

export const SectionHeader = ({
  label,
  title,
  highlightedText,
  description,
  align = 'left',
  titleColor = 'navy',
  className,
}: SectionHeaderProps) => {
  // Split title by highlighted text if provided
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
    <div
      className={clsx(
        'max-w-3xl',
        align === 'center' ? 'mx-auto text-center' : '',
        className
      )}
    >
      {label && (
        <span className="inline-block text-sm font-medium text-primary-500 uppercase tracking-wider mb-3">
          {label}
        </span>
      )}
      <h2
        className={clsx(
          'text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight',
          titleColor === 'navy' ? 'text-secondary-500' : 'text-white'
        )}
      >
        {renderTitle()}
      </h2>
      {description && (
        <p
          className={clsx(
            'mt-4 text-lg',
            titleColor === 'navy' ? 'text-gray-600' : 'text-gray-300'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
