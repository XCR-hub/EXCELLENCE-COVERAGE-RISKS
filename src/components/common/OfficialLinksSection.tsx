import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface OfficialLink {
  name: string;
  url: string;
  description: string;
}

interface OfficialLinksSectionProps {
  className?: string;
}

const OfficialLinksSection = ({ className = '' }: OfficialLinksSectionProps) => {
  const officialLinks: OfficialLink[] = [
    {
      name: 'Service-Public.fr',
      url: 'https://www.service-public.fr/particuliers/vosdroits/N44',
      description: 'Fiche démarches assurances - Informations officielles sur vos droits et démarches'
    },
    {
      name: 'AMF (Autorité des Marchés Financiers)',
      url: 'https://www.amf-france.org',
      description: 'Autorité de régulation des marchés financiers et de l\'épargne'
    },
    {
      name: 'Legifrance - Code des assurances',
      url: 'https://www.legifrance.gouv.fr/codes/texte_lc/LEGITEXT000006073984',
      description: 'Textes légaux et réglementaires relatifs aux assurances'
    }
  ];

  return (
    <section 
      className={`official-links py-12 md:py-16 ${className}`}
      style={{ backgroundColor: '#f5f7fa' }}
      aria-label="Liens officiels"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-primary-800 mb-8 text-center">
            Liens Officiels
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {officialLinks.map((link, index) => (
              <motion.div
                key={link.name}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-lg"
                  aria-label={`Visiter ${link.name} - ${link.description}`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-semibold text-primary-800 group-hover:text-primary-600 transition-colors">
                      {link.name}
                    </h4>
                    <ExternalLink 
                      className="h-5 w-5 text-gray-400 group-hover:text-primary-600 transition-colors flex-shrink-0 ml-2" 
                      aria-hidden="true"
                    />
                  </div>
                  <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                    {link.description}
                  </p>
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-sm text-gray-600">
              Ces liens vous dirigent vers les sites officiels pour obtenir des informations 
              complémentaires sur vos droits et obligations en matière d'assurance.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfficialLinksSection;