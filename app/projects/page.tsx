'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Hero,
  SectionHeader,
  ProjectCard,
  CTASection,
} from '@/components/ctg';
import { projects } from '@/data/projects';
import { services } from '@/data/services';
import clsx from 'clsx';

const filters = [
  { slug: 'all', label: 'All Projects' },
  ...services.map((s) => ({ slug: s.slug, label: s.shortTitle })),
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.services.includes(activeFilter));

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Our Projects"
        description="Explore our portfolio of successful technology installations and see how we've helped businesses transform their spaces with cutting-edge solutions."
        primaryCta={{ text: 'Start Your Project', href: '/free-consultation' }}
        backgroundImage="/images/projects-hero.jpg"
        align="center"
      />

      {/* Projects Grid Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Portfolio"
            title="Our portfolio of excellence."
            highlightedText="excellence"
            align="center"
            className="mb-12"
          />

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.slug}
                onClick={() => setActiveFilter(filter.slug)}
                className={clsx(
                  'px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200',
                  activeFilter === filter.slug
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                )}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    href={`/projects/${project.slug}`}
                    featured={project.featured}
                    index={index}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-500">
                No projects found for this category. Check back soon!
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-28 bg-secondary-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary-500 text-sm uppercase tracking-wider">
                Proven track record
              </span>
              <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-white leading-tight">
                Trusted by businesses across{' '}
                <span className="text-primary-500">Texas and beyond.</span>
              </h2>
              <p className="mt-6 text-gray-300">
                From small businesses to Fortune 500 companies, we've delivered
                technology solutions that exceed expectations. Our commitment to
                quality and customer satisfaction has made us a preferred partner
                for organizations of all sizes.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 rounded-xl p-6 text-center"
              >
                <div className="text-4xl font-bold text-primary-500">
                  {projects.length}+
                </div>
                <div className="mt-2 text-gray-300 text-sm">
                  Projects Showcased
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white/10 rounded-xl p-6 text-center"
              >
                <div className="text-4xl font-bold text-primary-500">10,000+</div>
                <div className="mt-2 text-gray-300 text-sm">Total Completed</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/10 rounded-xl p-6 text-center"
              >
                <div className="text-4xl font-bold text-primary-500">4</div>
                <div className="mt-2 text-gray-300 text-sm">Service Areas</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white/10 rounded-xl p-6 text-center"
              >
                <div className="text-4xl font-bold text-primary-500">99%</div>
                <div className="mt-2 text-gray-300 text-sm">Satisfaction Rate</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to start your project?"
        description="Contact us today for a free consultation and discover how CTG can transform your technology infrastructure."
        primaryCta={{ text: 'Schedule Free Consultation', href: '/free-consultation' }}
        stat={{ value: '40+', label: 'Years of experience' }}
        image="/images/cta-bg.jpg"
      />
    </>
  );
}
