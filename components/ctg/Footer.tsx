'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { footerLinks } from '@/data/config/footerLinks';

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

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-4">
            <CTGLogo />
            <p className="mt-4 text-sm text-gray-600 max-w-sm">
              Delivering technology solutions with excellence. We build long-term
              client relationships based on shared trust and respect.
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <a
                href="mailto:sales@ctgtx.com"
                className="flex items-center gap-3 text-sm text-gray-600 hover:text-primary-500 transition-colors"
              >
                <Mail className="w-4 h-4 text-primary-500" />
                sales@ctgtx.com
              </a>
              <a
                href="tel:972-695-5060"
                className="flex items-center gap-3 text-sm text-gray-600 hover:text-primary-500 transition-colors"
              >
                <Phone className="w-4 h-4 text-primary-500" />
                +1 (972) 695-5060
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {footerLinks.map((column) => (
              <div key={column.columnName}>
                <h3 className="text-sm font-semibold text-secondary-500 mb-4">
                  {column.columnName}
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-600 hover:text-primary-500 transition-colors"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Info Card */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-secondary-500 mb-4">
              Contact us anytime
            </h3>
            <div className="space-y-3 text-sm text-gray-600">
              <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
              <p>Saturday - Sunday: Closed</p>
              <div className="flex items-start gap-3 pt-2">
                <MapPin className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                <p>
                  1445 MacArthur Drive, Suite 226
                  <br />
                  Carrollton, TX 75007
                </p>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-sm font-semibold text-primary-500 mb-3">
                Stay informed about projects and industry highlights!
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email*"
                  className="flex-1 px-4 py-2 text-sm border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500"
                />
                <button
                  type="submit"
                  className="px-5 py-2 bg-primary-500 text-white text-sm font-medium rounded-full hover:bg-primary-600 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Connect Technology Group. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
