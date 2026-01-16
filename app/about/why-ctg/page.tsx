'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Award, Shield, Clock, Users } from 'lucide-react';
import {
  Hero,
  SectionHeader,
  StatsSection,
  TestimonialCard,
  Button,
  CTASection,
} from '@/components/ctg';
import { testimonials } from '@/data/testimonials';

const stats = [
  { value: '40+', label: 'Years Combined Experience' },
  { value: '10,000+', label: 'Projects Completed' },
  { value: '99%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Emergency Response' },
];

const reasons = [
  {
    icon: Award,
    title: 'Industry-Leading Expertise',
    description:
      'Our team brings 40+ years of combined experience in audio-visual, electrical, security, and cabling solutions. We stay current with the latest technologies and best practices.',
  },
  {
    icon: Shield,
    title: 'Quality & Reliability',
    description:
      'We use only the highest quality components from leading manufacturers and back our work with comprehensive warranties. Your satisfaction is guaranteed.',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description:
      'Technology issues don\'t wait for business hours. Our emergency response team is available around the clock to keep your systems running.',
  },
  {
    icon: Users,
    title: 'Partnership Approach',
    description:
      'We don\'t just complete projects - we build lasting relationships. We take the time to understand your needs and provide ongoing support.',
  },
];

const certifications = [
  'BICSI Certified',
  'RCDD - Registered Communications Distribution Designer',
  'Licensed Security Manager',
  'Manufacturer Certified Installers',
  'OSHA Safety Certified',
];

export default function WhyCTGPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Why Choose CTG"
        description="Discover what sets Connect Technology Group apart and why businesses across Texas trust us with their technology needs."
        primaryCta={{ text: 'Get Started', href: '/free-consultation' }}
        backgroundImage="/images/why-ctg-hero.jpg"
        align="center"
      />

      {/* Main Reasons Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Why CTG"
            title="Your technology partner, not just a vendor."
            highlightedText="partner"
            align="center"
            className="mb-16"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8"
              >
                <div className="w-14 h-14 bg-primary-500 rounded-xl flex items-center justify-center mb-6">
                  <reason.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-secondary-500 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-28 bg-secondary-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gray-300 text-sm uppercase tracking-wider">
                Proven Results
              </span>
              <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-white leading-tight">
                Our track record speaks for itself.
              </h2>
              <p className="mt-6 text-gray-300">
                With thousands of successful projects and a near-perfect client
                satisfaction rate, we've proven our commitment to excellence time
                and again.
              </p>
            </div>

            <StatsSection stats={stats} variant="dark" />
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary-500 text-sm uppercase tracking-wider">
                Certifications
              </span>
              <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-secondary-500 leading-tight">
                Industry-recognized{' '}
                <span className="text-primary-500">expertise and credentials.</span>
              </h2>
              <p className="mt-6 text-gray-600">
                Our team holds the highest industry certifications, ensuring you
                receive expert service that meets the most demanding standards.
              </p>

              <ul className="mt-8 space-y-4">
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{cert}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/certifications.jpg)' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Client Testimonials"
            title="Don't just take our word for it."
            highlightedText="our word"
            align="center"
            className="mb-12"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                company={testimonial.company}
                index={index}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button href="/testimonials" variant="outline">
              View All Testimonials
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Our Approach"
            title="A seamless experience from start to finish."
            highlightedText="seamless experience"
            align="center"
            className="mb-16"
          />

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: '01',
                title: 'Consultation',
                description: 'We listen to understand your unique needs and challenges.',
              },
              {
                number: '02',
                title: 'Design',
                description: 'Our experts create tailored solutions within your budget.',
              },
              {
                number: '03',
                title: 'Implementation',
                description: 'Professional installation with minimal disruption.',
              },
              {
                number: '04',
                title: 'Support',
                description: 'Ongoing maintenance and 24/7 emergency support.',
              },
            ].map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-primary-500/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-secondary-500 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Experience the CTG difference."
        description="Ready to work with a team that truly cares about your success? Let's start the conversation."
        primaryCta={{ text: 'Schedule Free Consultation', href: '/free-consultation' }}
        stat={{ value: '99%', label: 'Client satisfaction' }}
        image="/images/cta-bg.jpg"
      />
    </>
  );
}
