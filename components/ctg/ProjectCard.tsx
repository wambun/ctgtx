'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description?: string;
  image: string;
  href: string;
  featured?: boolean;
  index?: number;
}

export const ProjectCard = ({
  title,
  description,
  image,
  href,
  featured = false,
}: ProjectCardProps) => {
  if (featured) {
    return (
      <div className="group relative overflow-hidden rounded-xl">
        <Link href={href} className="block">
          <div
            className="relative aspect-[16/10] overflow-hidden bg-gray-200"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-secondary-500/90 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{title}</h3>
              {description && (
                <p className="text-gray-200 text-sm mb-3 line-clamp-2">
                  {description}
                </p>
              )}
              <span className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-primary-300 transition-colors">
                About project
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div className="group">
      <Link href={href} className="block">
        <div
          className="relative aspect-[4/3] overflow-hidden rounded-xl mb-4 bg-gray-200"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <h3 className="text-lg font-bold text-secondary-500 mb-2 group-hover:text-primary-500 transition-colors">
          {title}
        </h3>
        {description && (
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
        )}
        <span className="inline-flex items-center gap-2 text-sm font-medium text-secondary-500 group-hover:text-primary-500 transition-colors">
          About project
          <ArrowRight className="w-4 h-4 text-primary-500" />
        </span>
      </Link>
    </div>
  );
};
