'use client';

import { motion } from 'framer-motion';
import {
  Hero,
  SectionHeader,
  ServiceCard,
  CTASection,
} from '@/components/ctg';
import { services } from '@/data/services';

const processSteps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We begin with understanding your unique needs and challenges through detailed consultation.',
  },
  {
    number: '02',
    title: 'Design & Planning',
    description: 'Our experts create comprehensive plans tailored to your requirements and budget.',
  },
  {
    number: '03',
    title: 'Implementation',
    description: 'Our certified technicians execute with precision, ensuring quality at every step.',
  },
  {
    number: '04',
    title: 'Support & Maintenance',
    description: '24/7 support and ongoing maintenance to keep your systems running optimally.',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Our Services"
        description="We offer a full spectrum of technology services designed to bring your project to life. From audio-visual solutions to electrical, security, and structured cabling, our team delivers excellence in every project."
        primaryCta={{ text: 'Get a Quote', href: '/free-consultation' }}
        backgroundImage="/images/services-hero.jpg"
        align="center"
      />

      {/* Services Grid Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="What we offer"
            title="Comprehensive technology solutions for every need."
            highlightedText="technology solutions"
            align="center"
            className="mb-16"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.slug}
                title={service.shortTitle}
                description={service.shortDescription}
                image={service.image}
                href={`/services/${service.slug}`}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Our Process"
            title="How we deliver excellence."
            highlightedText="excellence"
            align="center"
            className="mb-16"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-bold text-primary-500/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-secondary-500 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-28 bg-secondary-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary-500 text-sm uppercase tracking-wider">
                Why choose CTG
              </span>
              <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-white leading-tight">
                Technology expertise backed by{' '}
                <span className="text-primary-500">40+ years of experience.</span>
              </h2>
              <p className="mt-6 text-gray-300">
                We bring together the best industry talent, cutting-edge technology, and a
                commitment to excellence that sets us apart. Our certified technicians and
                engineers ensure every project is delivered with precision and care.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary-500">10,000+</div>
                  <div className="text-gray-400 text-sm">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-500">99%</div>
                  <div className="text-gray-400 text-sm">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-500">24/7</div>
                  <div className="text-gray-400 text-sm">Emergency Response</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-500">40+</div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square rounded-2xl overflow-hidden bg-gray-700"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/why-ctg.jpg)' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to start your project?"
        description="Contact us today for a free consultation and discover how CTG can transform your technology infrastructure."
        primaryCta={{ text: 'Schedule Free Consultation', href: '/free-consultation' }}
        stat={{ value: '99%', label: 'Client satisfaction rate' }}
        image="/images/cta-bg.jpg"
      />
    </>
  );
}
