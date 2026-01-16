'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import {
  Hero,
  SectionHeader,
  Button,
  CTASection,
} from '@/components/ctg';

// Placeholder blog posts - in production this would come from a CMS or MDX files
const blogPosts = [
  {
    slug: 'future-of-av-technology',
    title: 'The Future of Audio-Visual Technology in Corporate Spaces',
    excerpt: 'Explore how emerging AV technologies are transforming modern workplaces and enhancing collaboration.',
    image: '/images/blog/av-technology.jpg',
    date: '2024-01-15',
    category: 'Audio Visual',
  },
  {
    slug: 'structured-cabling-best-practices',
    title: 'Structured Cabling Best Practices for 2024',
    excerpt: 'Learn the essential considerations for designing and implementing a robust network infrastructure.',
    image: '/images/blog/cabling.jpg',
    date: '2024-01-08',
    category: 'Cabling',
  },
  {
    slug: 'security-trends-2024',
    title: 'Top Security Technology Trends to Watch in 2024',
    excerpt: 'From AI-powered surveillance to cloud-based access control, discover the latest in facility security.',
    image: '/images/blog/security.jpg',
    date: '2024-01-01',
    category: 'Security',
  },
  {
    slug: 'ev-charging-installation-guide',
    title: 'Commercial EV Charging Station Installation Guide',
    excerpt: 'Everything you need to know about adding electric vehicle charging to your facility.',
    image: '/images/blog/ev-charging.jpg',
    date: '2023-12-20',
    category: 'Electrical',
  },
  {
    slug: 'conference-room-design',
    title: 'Designing the Perfect Modern Conference Room',
    excerpt: 'Tips for creating collaborative meeting spaces with integrated technology.',
    image: '/images/blog/conference-room.jpg',
    date: '2023-12-15',
    category: 'Audio Visual',
  },
  {
    slug: 'data-center-cabling',
    title: 'Data Center Cabling: Planning for Scalability',
    excerpt: 'How to design your data center infrastructure for current needs and future growth.',
    image: '/images/blog/data-center.jpg',
    date: '2023-12-10',
    category: 'Cabling',
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Blog & Resources"
        description="Stay up to date with the latest technology trends, industry insights, and expert tips from the CTG team."
        backgroundImage="/images/blog-hero.jpg"
        align="center"
      />

      {/* Blog Grid Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Latest Articles"
            title="Insights from our experts."
            highlightedText="experts"
            align="center"
            className="mb-12"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="aspect-video rounded-xl overflow-hidden bg-gray-100 mb-4">
                    <div
                      className="w-full h-full bg-cover bg-center bg-gray-200 group-hover:scale-105 transition-transform duration-500"
                      style={{ backgroundImage: `url(${post.image})` }}
                    />
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                    <span className="px-2 py-1 bg-primary-500/10 text-primary-500 rounded text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-secondary-500 group-hover:text-primary-500 transition-colors mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
                  <span className="inline-flex items-center text-primary-500 text-sm font-medium mt-3 group-hover:underline">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <Button variant="outline">Load More Articles</Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <SectionHeader
              label="Newsletter"
              title="Stay informed."
              highlightedText="informed"
              align="center"
            />
            <p className="mt-4 text-gray-600">
              Subscribe to our newsletter for the latest industry insights, technology
              tips, and company updates delivered to your inbox.
            </p>

            <form className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary-500 text-white font-medium rounded-full hover:bg-primary-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-xs text-gray-500">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Have a question for our team?"
        description="Contact us today to discuss your technology needs with one of our experts."
        primaryCta={{ text: 'Schedule Free Consultation', href: '/free-consultation' }}
        stat={{ value: '40+', label: 'Years of expertise' }}
        image="/images/cta-bg.jpg"
      />
    </>
  );
}
