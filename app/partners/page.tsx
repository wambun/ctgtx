'use client';

import { motion } from 'framer-motion';
import {
  Hero,
  SectionHeader,
  Button,
  CTASection,
} from '@/components/ctg';

const partners = [
  {
    name: 'Sharp',
    logo: '/images/partners/sharp.png',
    description: 'Industry-leading displays and digital signage solutions.',
  },
  {
    name: 'LG',
    logo: '/images/partners/lg.png',
    description: 'Premium commercial displays and video wall technology.',
  },
  {
    name: 'Samsung',
    logo: '/images/partners/samsung.png',
    description: 'Innovative display and digital signage solutions.',
  },
  {
    name: 'Panduit',
    logo: '/images/partners/panduit.png',
    description: 'World-class structured cabling and network infrastructure.',
  },
  {
    name: 'Verkada',
    logo: '/images/partners/verkada.png',
    description: 'Cloud-based security cameras and access control.',
  },
  {
    name: 'APC',
    logo: '/images/partners/apc.png',
    description: 'Power management and UPS systems.',
  },
  {
    name: 'Legrand',
    logo: '/images/partners/legrand.png',
    description: 'Electrical and digital building infrastructures.',
  },
  {
    name: 'Crestron',
    logo: '/images/partners/crestron.png',
    description: 'Advanced control and automation systems.',
  },
  {
    name: 'Cisco',
    logo: '/images/partners/cisco.png',
    description: 'Enterprise networking and collaboration solutions.',
  },
  {
    name: 'Biamp',
    logo: '/images/partners/biamp.png',
    description: 'Professional audio solutions for commercial spaces.',
  },
  {
    name: 'QSC',
    logo: '/images/partners/qsc.png',
    description: 'Audio, video, and control solutions.',
  },
  {
    name: 'Extron',
    logo: '/images/partners/extron.png',
    description: 'Professional AV system integration products.',
  },
];

const partnerBenefits = [
  {
    title: 'Access to Latest Technology',
    description: 'Our partnerships give you access to the newest products and innovations before they reach the general market.',
  },
  {
    title: 'Certified Expertise',
    description: 'Our technicians are factory-trained and certified by our partners, ensuring expert installation and service.',
  },
  {
    title: 'Extended Warranties',
    description: 'Through our partnerships, we can offer extended warranty options that protect your investment.',
  },
  {
    title: 'Priority Support',
    description: 'As a certified partner, we receive priority technical support to resolve any issues quickly.',
  },
];

export default function PartnersPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Our Partners"
        description="We partner with industry-leading manufacturers to deliver the highest quality technology solutions. These partnerships enable us to provide cutting-edge products with certified expertise."
        backgroundImage="/images/partners-hero.jpg"
        align="center"
      />

      {/* Partners Grid Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Trusted Partnerships"
            title="Industry leaders we work with."
            highlightedText="Industry leaders"
            align="center"
            className="mb-16"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg hover:border-primary-500/20 transition-all group"
              >
                <div className="h-16 flex items-center justify-center mb-4 grayscale group-hover:grayscale-0 transition-all">
                  <div className="text-2xl font-bold text-gray-400 group-hover:text-secondary-500 transition-colors">
                    {partner.name}
                  </div>
                </div>
                <h3 className="font-bold text-secondary-500 text-center mb-2">
                  {partner.name}
                </h3>
                <p className="text-sm text-gray-500 text-center">
                  {partner.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary-500 text-sm uppercase tracking-wider">
                Why It Matters
              </span>
              <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-secondary-500 leading-tight">
                What our partnerships mean{' '}
                <span className="text-primary-500">for you.</span>
              </h2>
              <p className="mt-6 text-gray-600">
                Our strategic partnerships with leading manufacturers aren't just badges
                on our website - they translate into real benefits for our clients.
              </p>

              <div className="mt-8 space-y-6">
                {partnerBenefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <h4 className="font-bold text-secondary-500">{benefit.title}</h4>
                    <p className="mt-1 text-gray-600 text-sm">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
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
                style={{ backgroundImage: 'url(/images/partnerships.jpg)' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Become a Partner Section */}
      <section className="py-20 lg:py-28 bg-secondary-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <span className="text-gray-400 text-sm uppercase tracking-wider">
              Partner With Us
            </span>
            <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-white">
              Interested in becoming a partner?
            </h2>
            <p className="mt-6 text-gray-300">
              We're always looking to expand our network of quality manufacturers and
              vendors. If you represent a company that aligns with our commitment to
              excellence, we'd love to hear from you.
            </p>
            <div className="mt-8">
              <Button
                href="/contact"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-secondary-500"
              >
                Contact Us About Partnership
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to leverage our partnerships?"
        description="Contact us today to learn how our partner relationships can benefit your next project."
        primaryCta={{ text: 'Schedule Free Consultation', href: '/free-consultation' }}
        stat={{ value: '12+', label: 'Industry-leading partners' }}
        image="/images/cta-bg.jpg"
      />
    </>
  );
}
