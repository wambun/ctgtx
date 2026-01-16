'use client';

import { motion } from 'framer-motion';
import {
  Hero,
  SectionHeader,
  TestimonialCard,
  CTASection,
} from '@/components/ctg';
import { testimonials } from '@/data/testimonials';

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Client Testimonials"
        description="Don't just take our word for it. See what our clients have to say about working with Connect Technology Group."
        backgroundImage="/images/testimonials-hero.jpg"
        align="center"
      />

      {/* Testimonials Grid Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="What Our Clients Say"
            title="Real feedback from real clients."
            highlightedText="real clients"
            align="center"
            className="mb-16"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                company={testimonial.company}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-28 bg-secondary-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-5xl font-bold text-primary-500 mb-2">99%</div>
              <div className="text-gray-300">Client Satisfaction Rate</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-5xl font-bold text-primary-500 mb-2">10,000+</div>
              <div className="text-gray-300">Projects Completed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-5xl font-bold text-primary-500 mb-2">40+</div>
              <div className="text-gray-300">Years Combined Experience</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Quote Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="text-6xl text-primary-500 mb-6">"</div>
            <blockquote className="text-2xl lg:text-3xl font-medium text-secondary-500 leading-relaxed">
              {testimonials[0].quote}
            </blockquote>
            <div className="mt-8">
              {testimonials[0].author && (
                <p className="font-bold text-secondary-500">
                  {testimonials[0].author}
                </p>
              )}
              {testimonials[0].company && (
                <p className="text-gray-500">{testimonials[0].company}</p>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to join our satisfied clients?"
        description="Contact us today for a free consultation and discover how CTG can transform your technology infrastructure."
        primaryCta={{ text: 'Schedule Free Consultation', href: '/free-consultation' }}
        stat={{ value: '99%', label: 'Client satisfaction' }}
        image="/images/cta-bg.jpg"
      />
    </>
  );
}
