'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';
import {
  Hero,
  SectionHeader,
  Button,
  StatsSection,
} from '@/components/ctg';
import { services } from '@/data/services';

const stats = [
  { value: '40+', label: 'Years Experience' },
  { value: '10,000+', label: 'Projects' },
  { value: '99%', label: 'Satisfaction' },
  { value: '24/7', label: 'Support' },
];

const benefits = [
  'No obligation, completely free consultation',
  'Personalized assessment of your needs',
  'Expert recommendations from certified professionals',
  'Transparent pricing with no hidden fees',
  'Flexible scheduling to fit your timeline',
];

export default function FreeConsultationPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Schedule Your Free Consultation"
        description="Take the first step toward transforming your technology infrastructure. Our experts will assess your needs and provide tailored recommendations - at no cost to you."
        backgroundImage="/images/consultation-hero.jpg"
        align="center"
      />

      {/* Form Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-secondary-500 mb-6">
                Request Your Free Quote
              </h2>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors bg-white"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors bg-white"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors bg-white"
                    placeholder="Your Company"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors bg-white"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors bg-white"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Services Interested In *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {services.map((service) => (
                      <label
                        key={service.slug}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          name="services"
                          value={service.slug}
                          className="w-4 h-4 text-primary-500 border-gray-300 rounded focus:ring-primary-500"
                        />
                        <span className="text-sm text-gray-700">
                          {service.shortTitle}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="projectDetails"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors resize-none bg-white"
                    placeholder="Tell us about your project or needs..."
                  />
                </div>

                <div>
                  <label
                    htmlFor="timeline"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Project Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors bg-white"
                  >
                    <option value="">Select a timeline</option>
                    <option value="urgent">Urgent (Within 1 week)</option>
                    <option value="soon">Soon (1-4 weeks)</option>
                    <option value="planning">Planning Phase (1-3 months)</option>
                    <option value="future">Future Project (3+ months)</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="howHeard"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    How did you hear about us?
                  </label>
                  <select
                    id="howHeard"
                    name="howHeard"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors bg-white"
                  >
                    <option value="">Select an option</option>
                    <option value="google">Google Search</option>
                    <option value="referral">Referral</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="previous">Previous Customer</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <Button type="submit" variant="primary" className="w-full justify-center">
                  Request Free Consultation
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to be contacted by CTG regarding your inquiry.
                </p>
              </form>
            </motion.div>

            {/* Benefits Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="sticky top-32">
                <h3 className="text-2xl font-bold text-secondary-500 mb-6">
                  What You'll Get
                </h3>

                <ul className="space-y-4 mb-8">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-secondary-500 rounded-xl p-6">
                  <h4 className="font-bold text-white mb-4">
                    Prefer to talk now?
                  </h4>
                  <div className="space-y-3">
                    <a
                      href="tel:972-695-5060"
                      className="flex items-center gap-3 text-gray-300 hover:text-primary-500 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      (972) 695-5060
                    </a>
                    <a
                      href="mailto:sales@ctgtx.com"
                      className="flex items-center gap-3 text-gray-300 hover:text-primary-500 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      sales@ctgtx.com
                    </a>
                    <div className="flex items-start gap-3 text-gray-300">
                      <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                      <span>
                        1445 MacArthur Drive, Suite 226
                        <br />
                        Carrollton, TX 75007
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <StatsSection stats={stats} variant="light" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm uppercase tracking-wider mb-4">
            Trusted by businesses across Texas
          </p>
          <p className="text-2xl font-bold text-secondary-500">
            Join over 10,000 successful projects
          </p>
        </div>
      </section>
    </>
  );
}
