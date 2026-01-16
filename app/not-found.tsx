'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ctg';

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="text-[150px] font-bold text-primary-500/20 leading-none mb-4">
            404
          </div>

          <h1 className="text-3xl lg:text-4xl font-bold text-secondary-500 mb-4">
            Page Not Found
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
            Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button href="/" variant="primary">
              <Home className="w-4 h-4 mr-2" />
              Go to Homepage
            </Button>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-200 text-gray-700 font-medium rounded-full hover:border-primary-500 hover:text-primary-500 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Link>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <p className="text-sm text-gray-500 mb-4">
              Looking for something specific?
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/services"
                className="text-sm text-primary-500 hover:underline"
              >
                Our Services
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                href="/projects"
                className="text-sm text-primary-500 hover:underline"
              >
                Projects
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                href="/about"
                className="text-sm text-primary-500 hover:underline"
              >
                About Us
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                href="/contact"
                className="text-sm text-primary-500 hover:underline"
              >
                Contact
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
