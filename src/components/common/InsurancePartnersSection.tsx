import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

interface Partner {
  name: string;
  logo: {
    webp: string;
    png: string;
  };
  url: string;
}

interface InsurancePartnersSectionProps {
  variant?: 'main' | 'footer';
  className?: string;
}

const InsurancePartnersSection = ({ variant = 'main', className = '' }: InsurancePartnersSectionProps) => {
  const partners: Partner[] = [
    {
      name: 'SwissLife',
      logo: {
        webp: '/logos/swisslife.webp',
        png: '/logos/swisslife.png'
      },
      url: 'https://www.swisslife.fr'
    },
    {
      name: 'Allianz',
      logo: {
        webp: '/logos/allianz.webp',
        png: '/logos/allianz.png'
      },
      url: 'https://www.allianz.fr'
    },
    {
      name: 'Generali',
      logo: {
        webp: '/logos/generali.webp',
        png: '/logos/generali.png'
      },
      url: 'https://www.generali.fr'
    },
    {
      name: 'MMA',
      logo: {
        webp: '/logos/mma.webp',
        png: '/logos/mma.png'
      },
      url: 'https://www.mma.fr'
    },
    {
      name: 'Gan',
      logo: {
        webp: '/logos/gan.webp',
        png: '/logos/gan.png'
      },
      url: 'https://www.ganassurances.fr'
    },
    {
      name: 'Abeille',
      logo: {
        webp: '/logos/abeille.webp',
        png: '/logos/abeille.png'
      },
      url: 'https://www.abeille-assurances.fr'
    },
    {
      name: 'CAM',
      logo: {
        webp: '/logos/cam.webp',
        png: '/logos/cam.png'
      },
      url: 'https://www.cam-assurance.fr'
    },
    {
      name: 'Albingia',
      logo: {
        webp: '/logos/albingia.webp',
        png: '/logos/albingia.png'
      },
      url: 'https://www.albingia.fr'
    },
    {
      name: 'Helvetia',
      logo: {
        webp: '/logos/helvetia.webp',
        png: '/logos/helvetia.png'
      },
      url: 'https://www.helvetia.fr'
    },
    {
      name: 'Malakoff',
      logo: {
        webp: '/logos/malakoff.webp',
        png: '/logos/malakoff.png'
      },
      url: 'https://www.malakoffhumanis.com'
    },
    {
      name: 'Groupe VYV',
      logo: {
        webp: '/logos/vyv.webp',
        png: '/logos/vyv.png'
      },
      url: 'https://www.groupe-vyv.fr'
    },
    {
      name: 'AXA',
      logo: {
        webp: '/logos/axa.webp',
        png: '/logos/axa.png'
      },
      url: 'https://www.axa.fr'
    }
  ];

  if (variant === 'footer') {
    return (
      <div className={`${className}`}>
        <h4 className="text-lg font-semibold mb-4 text-white">Nos Partenaires Assureurs</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {partners.slice(0, 6).map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-2 rounded hover:bg-gray-100 transition-colors flex items-center justify-center h-12 group"
              aria-label={`Partenaire ${partner.name}`}
            >
              <picture>
                <source srcSet={partner.logo.webp} type="image/webp" />
                <img
                  src={partner.logo.png}
                  alt={`Logo ${partner.name} - Partenaire assurance`}
                  className="max-h-8 max-w-full object-contain transition-transform group-hover:scale-105"
                  loading="lazy"
                  width="100"
                  height="40"
                />
              </picture>
            </a>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-3">Et plus de 30 autres partenaires...</p>
      </div>
    );
  }

  return (
    <section 
      className={`insurance-partners py-12 md:py-16 bg-gray-50 ${className}`}
      aria-label="Nos partenaires assureurs"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 
            className="text-2xl md:text-3xl font-bold text-primary-800 mb-4"
            itemProp="headline"
          >
            Nos Partenaires Assureurs de Confiance
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nous travaillons avec les plus grandes compagnies d'assurance françaises 
            pour vous offrir les meilleures garanties aux tarifs les plus compétitifs.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {partners.map((partner, index) => (
            <motion.a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4 md:p-6 flex items-center justify-center h-20 md:h-24 group focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              aria-label={`Visiter le site de ${partner.name} - Partenaire assurance`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <picture>
                <source srcSet={partner.logo.webp} type="image/webp" />
                <img
                  src={partner.logo.png}
                  alt={`Logo ${partner.name} - Partenaire assurance`}
                  className="max-h-12 md:max-h-16 max-w-full object-contain transition-transform group-hover:scale-110"
                  loading="lazy"
                  width="160"
                  height="80"
                  title={`${partner.name} - Partenaire assureur XCR Courtier`}
                  style={{
                    filter: 'contrast(1.1) brightness(0.95)',
                  }}
                />
              </picture>
              <ExternalLink className="absolute top-2 right-2 h-3 w-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-8 md:mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-sm text-gray-500 mb-4">
            Et plus de 30 autres compagnies partenaires pour répondre à tous vos besoins d'assurance
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-400">
            <span className="bg-gray-100 px-3 py-1 rounded-full">Assurance Auto</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">RC Professionnelle</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">Décennale</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">Emprunteur</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">Protection Juridique</span>
          </div>
        </motion.div>
      </div>

      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "XCR eXcellence Coverage Risks",
          "hasPartner": partners.map(partner => ({
            "@type": "Organization",
            "name": partner.name,
            "url": partner.url
          }))
        })}
      </script>
    </section>
  );
};

export default InsurancePartnersSection;