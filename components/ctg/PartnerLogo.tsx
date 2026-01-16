'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface PartnerLogoProps {
  name: string;
  logo: string;
  href?: string;
  index?: number;
}

export const PartnerLogo = ({
  name,
  logo,
  href,
  index = 0,
}: PartnerLogoProps) => {
  const content = (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="relative h-12 w-24 md:h-16 md:w-32 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
    >
      <Image
        src={logo}
        alt={name}
        fill
        className="object-contain"
      />
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
};
