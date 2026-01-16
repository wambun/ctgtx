'use client';

import { useParams, notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import {
  Hero,
  SectionHeader,
  ProjectCard,
  Button,
  CTASection,
} from '@/components/ctg';
import { services, getServiceBySlug } from '@/data/services';
import { projects } from '@/data/projects';

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  // Get related projects
  const relatedProjects = service.relatedProjects
    ? projects.filter((p) => service.relatedProjects?.includes(p.slug)).slice(0, 3)
    : [];

  // Get other services for navigation
  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <Hero
        title={service.title}
        description={service.shortDescription}
        primaryCta={{ text: 'Get a Quote', href: '/free-consultation' }}
        secondaryCta={{ text: 'View Projects', href: '/projects' }}
        backgroundImage={service.image}
      />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center text-sm text-gray-600 hover:text-primary-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
        </div>
      </div>

      {/* Service Details Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary-500 text-sm uppercase tracking-wider">
                {service.shortTitle} Services
              </span>
              <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-secondary-500 leading-tight">
                Expert {service.title.toLowerCase()} solutions{' '}
                <span className="text-primary-500">tailored to your needs.</span>
              </h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                {service.description}
              </p>

              <div className="mt-8">
                <Button href="/free-consultation" variant="primary">
                  Request a Consultation
                </Button>
              </div>
            </motion.div>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-secondary-500 mb-6">
                What we offer
              </h3>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Projects Section */}
      {relatedProjects.length > 0 && (
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
              <SectionHeader
                label="Featured Work"
                title={`${service.shortTitle} projects we've completed.`}
              />
              <Button href="/projects" variant="outline" className="mt-6 lg:mt-0">
                View All Projects
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  href={`/projects/${project.slug}`}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Services Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Explore More"
            title="Other services we offer."
            align="center"
            className="mb-12"
          />

          <div className="grid md:grid-cols-3 gap-6">
            {otherServices.map((otherService, index) => (
              <motion.div
                key={otherService.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`/services/${otherService.slug}`}
                  className="group block bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
                >
                  <h3 className="text-lg font-bold text-secondary-500 group-hover:text-primary-500 transition-colors">
                    {otherService.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                    {otherService.shortDescription}
                  </p>
                  <div className="mt-4 flex items-center text-primary-500 text-sm font-medium">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title={`Ready to upgrade your ${service.title.toLowerCase()}?`}
        description="Contact us today for a free consultation and discover how CTG can transform your technology infrastructure."
        primaryCta={{ text: 'Schedule Free Consultation', href: '/free-consultation' }}
        stat={{ value: '24/7', label: 'Emergency support available' }}
        image="/images/cta-bg.jpg"
      />
    </>
  );
}
