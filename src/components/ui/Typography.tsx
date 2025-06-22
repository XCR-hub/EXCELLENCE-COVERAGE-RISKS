import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string | ReactNode;
  centered?: boolean;
  light?: boolean;
}

export const SectionHeading = ({ title, subtitle, centered = true, light = false }: SectionHeadingProps) => {
  return (
    <motion.div 
      className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className={`text-3xl md:text-4xl font-bold ${light ? 'text-white' : 'text-primary-800'} mb-4`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-3xl ${centered ? 'mx-auto' : ''} ${light ? 'text-gray-300' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

interface SubSectionHeadingProps {
  title: string;
  subtitle?: string | ReactNode;
  centered?: boolean;
  light?: boolean;
}

export const SubSectionHeading = ({ title, subtitle, centered = true, light = false }: SubSectionHeadingProps) => {
  return (
    <motion.div 
      className={`mb-8 ${centered ? 'text-center' : 'text-left'}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className={`text-2xl md:text-3xl font-bold ${light ? 'text-white' : 'text-primary-800'} mb-3`}>
        {title}
      </h3>
      {subtitle && (
        <p className={`text-base max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-gray-300' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default { SectionHeading, SubSectionHeading };