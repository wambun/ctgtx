'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  index?: number;
}

export const ServiceCard = ({
  title,
  description,
  image,
  href,
}: ServiceCardProps) => {
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
        >
          <div className="absolute inset-0 bg-secondary-500/0 group-hover:bg-secondary-500/10 transition-colors" />
        </div>
        <h3 className="text-xl font-bold text-secondary-500 mb-2 group-hover:text-primary-500 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
        <span className="inline-flex items-center gap-2 text-sm font-medium text-secondary-500 group-hover:text-primary-500 transition-colors">
          Learn More
          <ArrowRight className="w-4 h-4 text-primary-500" />
        </span>
      </Link>
    </div>
  );
};
