'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import {
  Hero,
  SectionHeader,
  StatsSection,
  Button,
  CTASection,
} from '@/components/ctg';
import { team } from '@/data/team';

const stats = [
  { value: '40+', label: 'Years Combined Experience' },
  { value: '10,000+', label: 'Projects Completed' },
  { value: '99%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Emergency Response' },
];

const values = [
  {
    title: 'Excellence',
    description:
      'We strive for excellence in every project, delivering quality work that exceeds expectations.',
  },
  {
    title: 'Innovation',
    description:
      'Staying ahead with the latest technology and methods to provide cutting-edge solutions.',
  },
  {
    title: 'Integrity',
    description:
      'Building trust through honest communication, transparent pricing, and reliable service.',
  },
  {
    title: 'Partnership',
    description:
      'Working closely with clients as partners, understanding their unique needs and goals.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="About Connect Technology Group"
        description="With 40+ years of combined experience, we deliver concrete business results enabling our clients to profit from the advanced use of information transport systems and solutions."
        primaryCta={{ text: 'Meet Our Team', href: '/about/leadership' }}
        secondaryCta={{ text: 'View Projects', href: '/projects' }}
        backgroundImage="/images/about-hero.jpg"
        align="center"
      />

      {/* Mission Section */}
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
                Our Mission
              </span>
              <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-secondary-500 leading-tight">
                To utilize our extensive market and industry experience to{' '}
                <span className="text-primary-500">deliver concrete business results.</span>
              </h2>
              <p className="mt-6 text-gray-600">
                Connect Technology Group enables clients to profit from the advanced use of
                information transport systems and solutions. We bring together the best talent,
                innovative techniques, cutting-edge technology, and a commitment to quality
                craftsmanship.
              </p>
              <p className="mt-4 text-gray-600">
                Founded on the principles of reliability, innovation, and experience, CTG has
                grown to become a trusted partner for businesses across Texas and beyond.
              </p>
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
                style={{ backgroundImage: 'url(/images/about-mission.jpg)' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Our Values"
            title="What drives us every day."
            highlightedText="drives us"
            align="center"
            className="mb-16"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-primary-500" />
                </div>
                <h3 className="text-lg font-bold text-secondary-500 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
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
                Our Track Record
              </span>
              <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-white leading-tight">
                Numbers that speak to our{' '}
                <span className="text-primary-500">commitment and quality.</span>
              </h2>
              <p className="mt-6 text-gray-300">
                Our success is measured not just in projects completed, but in relationships
                built, problems solved, and businesses transformed through technology.
              </p>
            </div>

            <StatsSection stats={stats} variant="dark" />
          </div>
        </div>
      </section>

      {/* Leadership Preview Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
            <SectionHeader
              label="Leadership"
              title="Meet our leadership team."
              highlightedText="leadership team"
            />
            <Button href="/about/leadership" variant="outline" className="mt-6 lg:mt-0">
              View Full Team
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.slice(0, 4).map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="aspect-[3/4] rounded-xl overflow-hidden bg-gray-100 mb-4">
                  <div
                    className="w-full h-full bg-cover bg-center bg-gray-200 group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url(${member.image})` }}
                  />
                </div>
                <h3 className="font-bold text-secondary-500">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why CTG Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-video rounded-2xl overflow-hidden bg-gray-200 order-2 lg:order-1"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/why-choose-ctg.jpg)' }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <span className="text-primary-500 text-sm uppercase tracking-wider">
                Why CTG
              </span>
              <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-secondary-500 leading-tight">
                Your trusted technology partner.
              </h2>
              <p className="mt-6 text-gray-600">
                When you choose CTG, you're choosing a partner committed to your success.
                We don't just install technology - we build relationships and provide
                ongoing support to ensure your systems work for you.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  '40+ years of combined industry experience',
                  'Certified technicians and engineers',
                  '24/7 emergency support available',
                  'Comprehensive project management',
                  'Industry-leading warranties',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link
                  href="/about/why-ctg"
                  className="inline-flex items-center text-primary-500 font-medium hover:underline"
                >
                  Learn more about why clients choose CTG
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to work with us?"
        description="Let's discuss how CTG can help transform your technology infrastructure."
        primaryCta={{ text: 'Schedule Free Consultation', href: '/free-consultation' }}
        stat={{ value: '99%', label: 'Client satisfaction rate' }}
        image="/images/cta-bg.jpg"
      />
    </>
  );
}
