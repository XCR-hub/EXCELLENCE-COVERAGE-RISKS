import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, Scale, Users, Clock, Award, Phone, FileText } from 'lucide-react';
import InsuranceForm from '../components/forms/InsuranceForm';
import OfficialLinksSection from '../components/common/OfficialLinksSection';

const ProtectionJuridiquePage = () => {
  const features = [
    {
      icon: <Scale className="h-8 w-8 text-primary-600" />,
      title: "Conseil Juridique",
      description: "Hotline juridique 24h/24 avec des avocats spécialisés"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary-600" />,
      title: "Défense Pénale",
      description: "Prise en charge de votre défense en cas de poursuites"
    },
    {
      icon: <FileText className="h-8 w-8 text-primary-600" />,
      title: "Recours Amiable",
      description: "Négociation et médiation pour résoudre vos litiges"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary-600" />,
      title: "Intervention Rapide",
      description: "Prise en charge immédiate de vos dossiers urgents"
    }
  ];

  const advantages = [
    "Prise en charge des frais de justice jusqu'à 300 000€",
    "Conseil juridique illimité par téléphone",
    "Réseau d'avocats partenaires dans toute la France",
    "Médiation et résolution amiable des conflits",
    "Protection vie privée et professionnelle",
    "Assistance en cas de contrôle fiscal ou social"
  ];

  const domains = [
    {
      title: "Droit du Travail",
      description: "Conflits avec l'employeur, licenciement, harcèlement"
    },
    {
      title: "Droit de la Consommation",
      description: "Litiges avec commerçants, vices cachés, garanties"
    },
    {
      title: "Droit Immobilier",
      description: "Troubles de voisinage, copropriété, baux"
    },
    {
      title: "Droit de la Famille",
      description: "Divorce, succession, pension alimentaire"
    },
    {
      title: "Droit Pénal",
      description: "Défense en cas d'infraction, constitution de partie civile"
    },
    {
      title: "Droit Fiscal",
      description: "Contrôles fiscaux, redressements, contentieux"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Protection Juridique Entreprise | Assurance Défense Recours | XCR Courtier</title>
        <meta name="description" content="Protection juridique entreprise avec XCR Courtier. Assurance défense recours pour particuliers et professionnels. Devis protection juridique gratuit 24h." />
        <meta name="keywords" content="protection juridique entreprise, assurance défense recours, XCR courtier juridique, protection juridique professionnelle" />
        <link rel="canonical" href="https://xcr-courtier.fr/protection-juridique" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Protection Juridique Entreprise | Défense Recours XCR Courtier" />
        <meta property="og:description" content="Protection juridique entreprise et particuliers. Défendez vos droits avec XCR Courtier." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xcr-courtier.fr/protection-juridique" />
        <meta property="og:image" content="https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg" />
        
        {/* Schema.org Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Protection Juridique",
            "description": "Protection juridique entreprise et particuliers, assurance défense recours",
            "provider": {
              "@type": "Organization",
              "name": "XCR Courtier"
            },
            "serviceType": "Protection Juridique",
            "areaServed": "France",
            "audience": [
              {
                "@type": "BusinessAudience",
                "audienceType": "Entreprises"
              },
              {
                "@type": "Audience",
                "audienceType": "Particuliers"
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center py-24">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-primary-900/80"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Protection Juridique
                <span className="text-secondary-400"> Entreprise</span>
              </h1>
              
              <p className="text-xl text-gray-200 mb-8">
                Défendez vos droits avec notre assurance protection juridique. Conseil, défense et recours pour entreprises et particuliers.
              </p>

              <div className="space-y-4">
                {advantages.slice(0, 3).map((advantage, index) => (
                  <div key={index} className="flex items-center text-secondary-300">
                    <CheckCircle className="h-6 w-6 mr-2" />
                    <span className="text-lg">{advantage}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <InsuranceForm type="juridique" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Nos services de protection juridique
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une protection complète pour défendre vos droits et intérêts en toutes circonstances.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Domains Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Domaines de protection couverts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notre protection juridique couvre tous les aspects de votre vie privée et professionnelle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domains.map((domain, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-bold text-primary-800 mb-3">{domain.title}</h3>
                <p className="text-gray-600">{domain.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
                Pourquoi choisir notre protection juridique ?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Scale className="h-6 w-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{advantage}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Protégez vos droits dès aujourd'hui</h2>
            <p className="text-xl text-gray-200 mb-8">
              Ne laissez pas les conflits juridiques compromettre votre avenir
            </p>
            <div className="flex items-center justify-center space-x-8 text-secondary-300">
              <div className="text-center">
                <div className="text-3xl font-bold">24h/24</div>
                <div className="text-sm">Conseil juridique</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">300K€</div>
                <div className="text-sm">Plafond de garantie</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm">Frais pris en charge</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Links Section */}
      <OfficialLinksSection />
    </>
  );
};

export default ProtectionJuridiquePage;