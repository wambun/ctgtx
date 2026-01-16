'use client';

import clsx from 'clsx';

interface Stat {
  value: string;
  label: string;
}

interface StatsSectionProps {
  stats: Stat[];
  variant?: 'light' | 'dark';
  className?: string;
}

export const StatsSection = ({
  stats,
  variant = 'dark',
  className,
}: StatsSectionProps) => {
  return (
    <div
      className={clsx(
        'grid grid-cols-2 gap-8',
        className
      )}
    >
      {stats.map((stat, index) => (
        <div
          key={index}
          className={clsx(
            'text-center',
            variant === 'dark' ? 'text-white' : 'text-secondary-500'
          )}
        >
          <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.value}</div>
          <div
            className={clsx(
              'text-sm',
              variant === 'dark' ? 'text-gray-300' : 'text-gray-600'
            )}
          >
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};
