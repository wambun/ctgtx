'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ctg';

export default function ThankYouPage() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-10 h-10 text-green-500" />
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-secondary-500 mb-6">
            Thank You!
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            Your message has been successfully submitted. A member of our team will
            be in touch with you shortly.
          </p>

          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <h2 className="font-bold text-secondary-500 mb-4">What happens next?</h2>
            <ul className="space-y-4 text-left">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-primary-500 text-white text-sm font-bold rounded-full flex items-center justify-center flex-shrink-0">
                  1
                </span>
                <span className="text-gray-600">
                  Our team will review your inquiry within 24 hours
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-primary-500 text-white text-sm font-bold rounded-full flex items-center justify-center flex-shrink-0">
                  2
                </span>
                <span className="text-gray-600">
                  A specialist will contact you to discuss your needs
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-primary-500 text-white text-sm font-bold rounded-full flex items-center justify-center flex-shrink-0">
                  3
                </span>
                <span className="text-gray-600">
                  We'll schedule a consultation at your convenience
                </span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button href="/" variant="primary">
              Return to Home
            </Button>
            <Button href="/projects" variant="outline">
              View Our Projects
            </Button>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <p className="text-sm text-gray-500 mb-4">
              Need immediate assistance?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:972-695-5060"
                className="inline-flex items-center justify-center gap-2 text-gray-600 hover:text-primary-500 transition-colors"
              >
                <Phone className="w-4 h-4" />
                (972) 695-5060
              </a>
              <a
                href="mailto:sales@ctgtx.com"
                className="inline-flex items-center justify-center gap-2 text-gray-600 hover:text-primary-500 transition-colors"
              >
                <Mail className="w-4 h-4" />
                sales@ctgtx.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
