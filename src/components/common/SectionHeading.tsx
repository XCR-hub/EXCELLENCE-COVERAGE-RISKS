import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string | ReactNode;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading = ({ title, subtitle, centered = true, light = false }: SectionHeadingProps) => {
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

export default SectionHeading;