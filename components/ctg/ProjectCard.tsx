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
}: ProjectCardProps) => {
  // All cards now use the same overlay style with text on top of the image
  return (
    <div className="group relative overflow-hidden rounded-xl">
      <Link href={href} className="block">
        <div
          className="relative aspect-[4/3] overflow-hidden bg-gray-200"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-secondary-500/95 via-secondary-500/40 to-transparent group-hover:from-primary-500/95 group-hover:via-primary-500/40 transition-all duration-300" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
            <h3 className="text-lg font-bold mb-1 line-clamp-1">{title}</h3>
            {description && (
              <p className="text-gray-200 text-sm mb-3 line-clamp-2 opacity-90">
                {description}
              </p>
            )}
            <span className="inline-flex items-center gap-2 text-sm font-medium text-white/90 group-hover:text-white transition-colors">
              View project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};
