'use client';

import { useParams, notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import {
  Hero,
  SectionHeader,
  ProjectCard,
  Button,
  CTASection,
} from '@/components/ctg';
import { projects, getProjectBySlug } from '@/data/projects';
import { services } from '@/data/services';

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Get service names for this project
  const projectServices = services.filter((s) =>
    project.services.includes(s.slug)
  );

  // Get related projects (same services, different project)
  const relatedProjects = projects
    .filter(
      (p) =>
        p.slug !== project.slug &&
        p.services.some((s) => project.services.includes(s))
    )
    .slice(0, 3);

  // Get next and previous projects for navigation
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <>
      {/* Hero Section */}
      <Hero
        title={project.title}
        description={project.description}
        backgroundImage={project.image}
      />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center text-sm text-gray-600 hover:text-primary-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
        </div>
      </div>

      {/* Project Details Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-secondary-500">
                  Project Overview
                </h2>
                <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                  {project.description}
                </p>

                {/* Project Image */}
                <div className="mt-8 aspect-video rounded-2xl overflow-hidden bg-gray-100">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                </div>

                {/* Services Used */}
                <div className="mt-12">
                  <h3 className="text-xl font-bold text-secondary-500 mb-4">
                    Services Provided
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {projectServices.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="px-4 py-2 bg-primary-500/10 text-primary-500 rounded-full text-sm font-medium hover:bg-primary-500 hover:text-white transition-colors"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gray-50 rounded-2xl p-8 sticky top-32"
              >
                <h3 className="text-xl font-bold text-secondary-500 mb-6">
                  Project Details
                </h3>

                <div className="space-y-4">
                  <div>
                    <span className="text-sm text-gray-500">Client</span>
                    <p className="font-medium text-secondary-500">
                      {project.client}
                    </p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Services</span>
                    <p className="font-medium text-secondary-500">
                      {projectServices.map((s) => s.shortTitle).join(', ')}
                    </p>
                  </div>
                  {project.featured && (
                    <div>
                      <span className="inline-flex items-center px-3 py-1 bg-primary-500 text-white text-xs font-medium rounded-full">
                        Featured Project
                      </span>
                    </div>
                  )}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-4">
                    Interested in similar solutions for your business?
                  </p>
                  <Button
                    href="/free-consultation"
                    variant="primary"
                    className="w-full justify-center"
                  >
                    Get a Free Quote
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Navigation */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="group flex items-center gap-3"
              >
                <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-primary-500 group-hover:-translate-x-1 transition-all" />
                <div className="text-left">
                  <span className="text-xs text-gray-500 uppercase tracking-wider">
                    Previous
                  </span>
                  <p className="font-medium text-secondary-500 group-hover:text-primary-500 transition-colors">
                    {prevProject.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group flex items-center gap-3 text-right"
              >
                <div>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">
                    Next
                  </span>
                  <p className="font-medium text-secondary-500 group-hover:text-primary-500 transition-colors">
                    {nextProject.title}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* Related Projects Section */}
      {relatedProjects.length > 0 && (
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              label="Related Work"
              title="Similar projects you may like."
              align="center"
              className="mb-12"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((relatedProject, index) => (
                <ProjectCard
                  key={relatedProject.slug}
                  title={relatedProject.title}
                  description={relatedProject.description}
                  image={relatedProject.image}
                  href={`/projects/${relatedProject.slug}`}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CTASection
        title="Start your project today."
        description="Ready to transform your space with cutting-edge technology? Let's discuss your needs."
        primaryCta={{ text: 'Schedule Free Consultation', href: '/free-consultation' }}
        stat={{ value: '10,000+', label: 'Successful installations' }}
        image="/images/cta-bg.jpg"
      />
    </>
  );
}
