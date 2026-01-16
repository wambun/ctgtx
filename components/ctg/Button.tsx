'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import clsx from 'clsx';

interface ButtonProps {
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white' | 'outline-white';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  showArrow?: boolean;
}

export const Button = ({
  href,
  variant = 'primary',
  size = 'md',
  children,
  className,
  onClick,
  type = 'button',
  showArrow = true,
}: ButtonProps) => {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-300';

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3 text-base',
  };

  const variantClasses = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 hover:shadow-lg',
    secondary:
      'bg-secondary-500 text-white hover:bg-secondary-600 hover:shadow-lg',
    outline:
      'bg-white text-primary-500 border-2 border-primary-500 hover:bg-primary-50',
    ghost: 'text-secondary-500 hover:text-primary-500 hover:bg-gray-50',
    white: 'bg-white text-primary-500 hover:bg-gray-100 hover:shadow-lg',
    'outline-white': 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-secondary-500',
  };

  const classes = clsx(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowRight
          className={clsx('w-4 h-4', size === 'lg' ? 'w-5 h-5' : '')}
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
};
