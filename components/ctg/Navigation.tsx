'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { headerNavLinks } from '@/data/config/headerNavLinks';

const CTGLogo = () => (
  <Link href="/" className="flex items-center gap-2">
    <div className="flex items-center">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary-500"
      >
        <rect width="32" height="8" rx="2" fill="currentColor" />
        <rect y="12" width="24" height="8" rx="2" fill="currentColor" />
        <rect y="24" width="32" height="8" rx="2" fill="currentColor" />
      </svg>
      <span className="ml-2 text-xl font-bold text-secondary-500">
        <span className="text-primary-500">Connect</span> Technology Group
      </span>
    </div>
  </Link>
);

const NavItem = ({
  href,
  title,
  subItems,
  isActive,
}: {
  href: string;
  title: string;
  subItems?: Array<{ href: string; title: string }>;
  isActive: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  if (subItems && subItems.length > 0) {
    return (
      <div
        className="relative"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <button
          className={clsx(
            'flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors',
            isActive
              ? 'text-primary-500'
              : 'text-secondary-500 hover:text-primary-500'
          )}
        >
          {title}
          <ChevronDown
            className={clsx(
              'w-4 h-4 transition-transform',
              isOpen ? 'rotate-180' : ''
            )}
          />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
            >
              {subItems.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block px-4 py-2 text-sm text-secondary-500 hover:text-primary-500 hover:bg-gray-50 transition-colors"
                >
                  {child.title}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <Link
      href={href}
      className={clsx(
        'px-3 py-2 text-sm font-medium transition-colors',
        isActive
          ? 'text-primary-500'
          : 'text-secondary-500 hover:text-primary-500'
      )}
    >
      {title}
    </Link>
  );
};

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <CTGLogo />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {headerNavLinks.map((link) => (
              <NavItem
                key={link.href}
                href={link.href}
                title={link.title}
                subItems={link.children}
                isActive={pathname.startsWith(link.href)}
              />
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary-500 text-white text-sm font-medium rounded-full hover:bg-primary-600 transition-colors"
            >
              Contact us
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-secondary-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {headerNavLinks.map((link) => (
                  <div key={link.href}>
                    <Link
                      href={link.href}
                      className={clsx(
                        'block px-4 py-2 text-base font-medium transition-colors',
                        pathname.startsWith(link.href)
                          ? 'text-primary-500'
                          : 'text-secondary-500'
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.title}
                    </Link>
                    {link.children && (
                      <div className="pl-6 space-y-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-1.5 text-sm text-gray-600 hover:text-primary-500"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 px-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center w-full gap-2 px-6 py-3 bg-primary-500 text-white text-sm font-medium rounded-full hover:bg-primary-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact us
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
