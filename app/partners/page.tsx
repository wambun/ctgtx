'use client';

import {
  Hero,
  SectionHeader,
  Button,
  CTASection,
  PartnerCarousel,
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
    logo: '/images/partners/panduit.jpg',
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
  {
    name: 'Digital Watchdog',
    logo: '/images/partners/digitalwatchdog.jpg',
    description: 'Video surveillance and security solutions.',
  },
  {
    name: 'Kantech',
    logo: '/images/partners/kantech.jpg',
    description: 'Access control and security systems.',
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

      {/* Partners Carousel Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Trusted Partnerships"
            title="Industry leaders we work with."
            highlightedText="Industry leaders"
            align="center"
            className="mb-16"
          />

          <div className="w-full max-w-[75vw] mx-auto">
            <PartnerCarousel partners={partners} speed={40} />
          </div>
        </div>
      </section>

      {/* Partnership Benefits Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
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
                {partnerBenefits.map((benefit) => (
                  <div key={benefit.title}>
                    <h4 className="font-bold text-secondary-500">{benefit.title}</h4>
                    <p className="mt-1 text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/partnerships.jpg)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Become a Partner Section */}
      <section className="py-20 lg:py-28 bg-secondary-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
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
                variant="outline-white"
              >
                Contact Us About Partnership
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to leverage our partnerships?"
        description="Contact us today to learn how our partner relationships can benefit your next project."
        primaryCta={{ text: 'Schedule Free Consultation', href: '/free-consultation' }}
        stat={{ value: '14+', label: 'Industry-leading partners' }}
        image="/images/cta-bg.jpg"
      />
    </>
  );
}
