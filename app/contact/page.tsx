'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import {
  Hero,
  SectionHeader,
  Button,
} from '@/components/ctg';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    content: '+1 (972) 695-5060',
    href: 'tel:972-695-5060',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'sales@ctgtx.com',
    href: 'mailto:sales@ctgtx.com',
  },
  {
    icon: MapPin,
    title: 'Address',
    content: '1445 MacArthur Drive, Suite 226\nCarrollton, TX 75007',
    href: 'https://maps.google.com/?q=1445+MacArthur+Drive+Suite+226+Carrollton+TX+75007',
  },
  {
    icon: Clock,
    title: 'Hours',
    content: 'Monday - Friday: 8:00 AM - 5:00 PM\nSaturday - Sunday: Closed',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Contact Us"
        description="Have a question or ready to start your project? We'd love to hear from you. Reach out today and let's discuss how CTG can help."
        backgroundImage="/images/contact-hero.jpg"
        align="center"
      />

      {/* Contact Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeader
                label="Get in Touch"
                title="Send us a message."
                highlightedText="message"
              />

              <form className="mt-8 space-y-6">
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
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors"
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
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

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
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="quote">Request a Quote</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <Button type="submit" variant="primary" className="w-full justify-center">
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-secondary-500 rounded-2xl p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-white mb-8">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary-500" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">{item.title}</h4>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-gray-300 hover:text-primary-500 transition-colors whitespace-pre-line"
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-gray-300 whitespace-pre-line">{item.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-white/10">
                  <p className="text-gray-300 text-sm mb-4">
                    Need immediate assistance?
                  </p>
                  <Button
                    href="/free-consultation"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-secondary-500"
                  >
                    Schedule Free Consultation
                  </Button>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 aspect-video rounded-xl overflow-hidden bg-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.9877!2d-96.8842!3d32.9689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c27ed1b8d4f27%3A0x0!2s1445%20MacArthur%20Dr%2C%20Carrollton%2C%20TX%2075007!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="CTG Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Support Section */}
      <section className="py-16 bg-primary-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white">
                Need Emergency Support?
              </h3>
              <p className="mt-2 text-white/80">
                Our team is available 24/7 for emergency technology issues.
              </p>
            </div>
            <a
              href="tel:972-695-5060"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-500 font-bold rounded-full hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: (972) 695-5060
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
