'use client';

import {
  Hero,
  SectionHeader,
  ServiceCard,
  ProjectCard,
  TestimonialCard,
  StatsSection,
  Button,
  CTASection,
} from '@/components/ctg';
import { services } from '@/data/services';
import { getFeaturedProjects } from '@/data/projects';
import { testimonials } from '@/data/testimonials';

const stats = [
  { value: '40+', label: 'Years Combined Experience' },
  { value: '10,000+', label: 'Projects Completed' },
  { value: '99%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Emergency Response' },
];

const partnerLogos = [
  { name: 'Sharp', logo: '/images/partners/sharp.png' },
  { name: 'LG', logo: '/images/partners/lg.png' },
  { name: 'APC', logo: '/images/partners/apc.png' },
  { name: 'Panduit', logo: '/images/partners/panduit.jpg' },
  { name: 'Kantech', logo: '/images/partners/kantech.jpg' },
  { name: 'Digital Watchdog', logo: '/images/partners/digitalwatchdog.jpg' },
];

export default function HomePage() {
  const featuredProjects = getFeaturedProjects().slice(0, 4);

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Connect Technology Group"
        description="Our mission is to utilize our extensive market and industry experience and expertise to deliver concrete business results enabling our clients to profit from the advanced use of information transport systems and solutions."
        primaryCta={{ text: 'Schedule Free Consultation', href: '/free-consultation' }}
        secondaryCta={{ text: 'Learn more about us', href: '/about' }}
        backgroundVideo="/images/hero/hero-video.mp4"
        size="large"
      />

      {/* About Section */}
      <section className="py-20 lg:py-28 bg-secondary-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Orange Card */}
            <div className="bg-primary-500 rounded-2xl p-8 lg:p-12 relative overflow-hidden">
              <span className="text-white/80 text-sm uppercase tracking-wider">About us</span>

              {/* Decorative element */}
              <div className="absolute top-4 right-4 w-32 h-32 opacity-20">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 0L100 50L50 100L0 50L50 0Z" fill="white" />
                </svg>
              </div>

              <div className="mt-8 space-y-4">
                <h3 className="text-3xl lg:text-4xl font-bold text-white">Reliability.</h3>
                <h3 className="text-3xl lg:text-4xl font-bold text-white">Innovation.</h3>
                <h3 className="text-3xl lg:text-4xl font-bold text-white">Experience.</h3>
              </div>
            </div>

            {/* Text Content */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                Delivering unmatched quality and innovation in every project, built on{' '}
                <span className="text-primary-500">trust and lasting commitment.</span>
              </h2>
              <p className="mt-6 text-gray-300">
                With years of experience in the industry, our team combines innovative techniques,
                cutting-edge technology, and a commitment to quality craftsmanship.
              </p>
              <div className="mt-8">
                <Button href="/about" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary-500">
                  About CTG
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Focus On Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeader
                label="What we focus on"
                title="Our mission is to redefine the technology industry through a commitment to excellence, innovation, and sustainability."
                highlightedText="excellence, innovation, and sustainability"
              />
              <p className="mt-6 text-gray-600">
                We are driven by a passion to create spaces that not only meet the needs of today
                but also contribute to more sustainable future.
              </p>

              <div className="mt-10 space-y-8">
                {services.slice(0, 2).map((service) => (
                  <div key={service.slug}>
                    <h3 className="text-xl font-bold text-secondary-500">{service.title}</h3>
                    <p className="mt-2 text-gray-600 text-sm">{service.shortDescription}</p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-200"
              style={{ backgroundImage: 'url(/images/focus-image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
            <div className="lg:max-w-xl">
              <span className="text-primary-500 text-sm uppercase tracking-wider">
                We offer a full spectrum of technology services designed to bring your project to life.
              </span>
              <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-secondary-500">
                Comprehensive technology and installation services.
              </h2>
              <p className="mt-4 text-gray-600">
                Whether you&apos;re building a new facility, expanding your business, or renovating a space,
                our team of experts ensures quality, reliability, and a seamless experience.
              </p>
            </div>
          </div>

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

      {/* Stats Section */}
      <section className="py-20 lg:py-28 bg-secondary-500 relative overflow-hidden">
        {/* Decorative element */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-48 lg:w-64 opacity-20">
          <svg viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 0L200 100L100 200L0 100L100 0Z" fill="#F26522" />
            <path d="M100 200L200 300L100 400L0 300L100 200Z" fill="white" />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gray-300 text-sm">
                We pride ourselves on building lasting relationships with a diverse range of clients
              </span>
              <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-white leading-tight">
                From small businesses to large corporations seeking innovative technology solutions,{' '}
                <span className="text-primary-500">
                  we work closely with every client to understand their unique vision and goals.
                </span>
              </h2>
              <p className="mt-6 text-gray-300">
                Our clients rely on us for quality, transparency, and reliability. From office spaces
                to data centers, we deliver every project with care and precision.
              </p>
            </div>

            <StatsSection stats={stats} variant="dark" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Testimonials"
            title="Hear from our clients."
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

      {/* Projects Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
            <SectionHeader
              label="Our work"
              title="Our portfolio of excellence."
            />
            <Button href="/projects" variant="primary" className="mt-6 lg:mt-0">
              All projects
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.slice(0, 2).map((project, index) => (
              <ProjectCard
                key={project.slug}
                title={project.title}
                description={project.description}
                image={project.image}
                href={`/projects/${project.slug}`}
                index={index}
              />
            ))}
            {featuredProjects[2] && (
              <ProjectCard
                title={featuredProjects[2].title}
                description={featuredProjects[2].description}
                image={featuredProjects[2].image}
                href={`/projects/${featuredProjects[2].slug}`}
                featured={true}
                index={2}
              />
            )}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 border-y border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-sm text-gray-500 uppercase tracking-wider">Our Partners</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {partnerLogos.map((partner) => (
              <div
                key={partner.name}
                className="h-12 w-24 md:h-16 md:w-32 relative grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button href="/partners" variant="ghost">
              View All Partners
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Let's build your vision together."
        description="We bring your vision to life with unparalleled craftsmanship and cutting-edge technology."
        primaryCta={{ text: 'Request a quote', href: '/free-consultation' }}
        stat={{ value: '40+', label: 'Years of trusted expertise.' }}
        image="/images/cta-bg.jpg"
      />
    </>
  );
}
