'use client';

import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  company?: string;
  image?: string;
  index?: number;
}

export const TestimonialCard = ({
  quote,
  author,
  company,
  image,
}: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <Quote className="w-8 h-8 text-primary-500/30 mb-4" />
      <p className="text-gray-700 italic mb-6 leading-relaxed">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center gap-4">
        {image && (
          <div
            className="w-12 h-12 rounded-full overflow-hidden bg-gray-200"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        )}
        <div>
          <p className="font-semibold text-secondary-500">{author}</p>
          {company && <p className="text-sm text-gray-500">{company}</p>}
        </div>
      </div>
    </div>
  );
};
