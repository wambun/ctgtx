'use client';

import { Mail, Phone } from 'lucide-react';
import {
  Hero,
  SectionHeader,
  CTASection,
} from '@/components/ctg';
import { team } from '@/data/team';

export default function LeadershipPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Our Leadership Team"
        description="Meet the experienced professionals who lead Connect Technology Group with decades of combined industry expertise."
        backgroundImage="/images/services/audio-visual.jpg"
        align="center"
      />

      {/* Leadership Grid Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Meet the Team"
            title="Leaders dedicated to your success."
            highlightedText="your success"
            align="center"
            className="mb-16"
          />

          <div className="space-y-16">
            {team.map((member, index) => (
              <div
                key={member.name}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image - smaller size for better resolution */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="max-w-xs mx-auto lg:max-w-sm">
                    <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
                      <div
                        className="w-full h-full bg-cover bg-top bg-gray-200"
                        style={{ backgroundImage: `url(${member.image})` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-primary-500/10 rounded-xl p-8">
                    <span className="text-primary-500 text-sm uppercase tracking-wider">
                      {member.title}
                    </span>
                    <h2 className="mt-2 text-3xl font-bold text-secondary-500">
                      {member.name}
                    </h2>

                    <div className="mt-6 space-y-4">
                      {member.bio.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-gray-600">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {member.about && (
                      <div className="mt-6">
                        <h4 className="font-medium text-secondary-500 mb-2">
                          About {member.name.split(' ')[0]}
                        </h4>
                        <ul className="space-y-1">
                          {member.about.map((item, aIndex) => (
                            <li key={aIndex} className="text-sm text-gray-600">
                              • {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="mt-6 pt-6 border-t border-gray-200 flex flex-wrap gap-4">
                      <a
                        href={`tel:${member.phone}`}
                        className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-primary-500 transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        {member.phone}
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-primary-500 transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        {member.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeader
              label="Careers"
              title="Join our growing team."
              highlightedText="growing team"
              align="center"
            />
            <p className="mt-6 text-gray-600">
              We're always looking for talented individuals who share our commitment to
              excellence. If you're passionate about technology and customer service,
              we'd love to hear from you.
            </p>
            <div className="mt-8">
              <a
                href="mailto:careers@ctgtx.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-500 text-white font-medium rounded-full hover:bg-primary-600 transition-colors"
              >
                Send Us Your Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to work with our team?"
        description="Contact us today to discuss how our experienced team can help with your technology needs."
        primaryCta={{ text: 'Schedule Free Consultation', href: '/free-consultation' }}
        stat={{ value: '40+', label: 'Years combined experience' }}
        image="/images/cta-bg.jpg"
      />
    </>
  );
}
