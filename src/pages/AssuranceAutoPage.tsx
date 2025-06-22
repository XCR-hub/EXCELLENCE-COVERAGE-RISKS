import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, Car, Clock, Award, ArrowRight, Star, Info, User } from 'lucide-react';
import Button from '../components/common/Button';
import AutoInsuranceQuoteForm from '../components/forms/AutoInsuranceQuoteForm';
import AutoInsuranceNavigation from '../components/navigation/AutoInsuranceNavigation';
import OfficialLinksSection from '../components/common/OfficialLinksSection';

const AssuranceAutoPage = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-primary-600" />,
      title: "Couverture Complète",
      description: "Formules au tiers, intermédiaire ou tous risques adaptées à vos besoins"
    },
    {
      icon: <Car className="h-8 w-8 text-primary-600" />,
      title: "Tous Véhicules",
      description: "Auto, moto, utilitaire - nous couvrons tous types de véhicules"
    },
    {
      icon: <User className="h-8 w-8 text-primary-600" />,
      title: "Service Client 24h/24",
      description: "Assistance et dépannage disponibles jour et nuit"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary-600" />,
      title: "Souscription Rapide",
      description: "Devis en 2 minutes, souscription en ligne immédiate"
    }
  ];

  const advantages = [
    "Jusqu'à 40% d'économies par rapport aux tarifs classiques",
    "Bonus-malus préservé en cas de changement d'assureur",
    "Garantie du conducteur incluse dans nos formules",
    "Véhicule de remplacement en cas de sinistre",
    "Protection juridique automobile incluse",
    "Assistance 0 km dès le premier jour"
  ];

  const guaranteeTable = [
    {
      guarantee: "Responsabilité civile",
      tiers: "✓",
      intermediaire: "✓",
      tousRisques: "✓",
      description: "Dommages causés aux tiers (obligatoire)"
    },
    {
      guarantee: "Protection juridique",
      tiers: "✓",
      intermediaire: "✓",
      tousRisques: "✓",
      description: "Défense de vos intérêts en cas de litige"
    },
    {
      guarantee: "Assistance 0 km",
      tiers: "Option",
      intermediaire: "✓",
      tousRisques: "✓",
      description: "Dépannage même devant chez vous"
    },
    {
      guarantee: "Bris de glace",
      tiers: "✗",
      intermediaire: "✓",
      tousRisques: "✓",
      description: "Réparation ou remplacement des vitres"
    },
    {
      guarantee: "Vol et incendie",
      tiers: "✗",
      intermediaire: "✓",
      tousRisques: "✓",
      description: "Indemnisation en cas de vol ou incendie"
    },
    {
      guarantee: "Catastrophes naturelles",
      tiers: "✗",
      intermediaire: "✓",
      tousRisques: "✓",
      description: "Dommages liés aux événements naturels"
    },
    {
      guarantee: "Dommages tous accidents",
      tiers: "✗",
      intermediaire: "✗",
      tousRisques: "✓",
      description: "Tous dommages, même responsable"
    },
    {
      guarantee: "Véhicule de remplacement",
      tiers: "✗",
      intermediaire: "Option",
      tousRisques: "✓",
      description: "Prêt d'un véhicule en cas d'immobilisation"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Guide Complet Assurance Auto 2025 | Comparateur et Devis Gratuit | XCR Courtier</title>
        <meta name="description" content="Guide complet assurance auto 2025 : tous risques, au tiers, jeune conducteur, malus. Comparez et obtenez votre devis gratuit en 2 minutes avec XCR Courtier." />
        <meta name="keywords" content="assurance auto, comparateur assurance voiture, devis assurance auto gratuit, tous risques, au tiers, jeune conducteur, malus, assurance au kilomètre" />
        <link rel="canonical" href="https://xcr-courtier.fr/assurance-auto" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Guide Complet Assurance Auto 2025 | XCR Courtier" />
        <meta property="og:description" content="Comparez et obtenez votre devis assurance auto gratuit en 2 minutes. Économisez jusqu'à 40% sur votre assurance voiture." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xcr-courtier.fr/assurance-auto" />
        <meta property="og:image" content="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg" />
        
        {/* Schema.org Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Comparateur Assurance Auto",
            "description": "Service de comparaison et devis d'assurance auto gratuit",
            "provider": {
              "@type": "Organization",
              "name": "XCR Courtier"
            },
            "serviceType": "Assurance Auto",
            "areaServed": "France",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "EUR",
              "description": "Devis gratuit assurance auto"
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center py-24">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg")',
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
                Guide Complet Assurance Auto
                <span className="text-secondary-400"> 2025</span>
              </h1>
              
              <p className="text-xl text-gray-200 mb-8">
                Comparez et obtenez votre devis assurance auto gratuit en 2 minutes. Économisez jusqu'à 40% sur votre assurance voiture avec XCR Courtier.
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
              <AutoInsuranceQuoteForm formType="tous-risques" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Section with Navigation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Sidebar Navigation */}
            <div className="lg:col-span-1">
              <AutoInsuranceNavigation />
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
                  Guide complet des assurances auto en France
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Découvrez tous les types d'assurance auto et trouvez la formule adaptée à vos besoins spécifiques
                </p>
              </div>

              {/* Features Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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

              {/* Guarantees Table */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-primary-800 mb-6 text-center">
                  Tableau comparatif des garanties
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full bg-white rounded-lg shadow-lg">
                    <thead className="bg-primary-800 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left">Garantie</th>
                        <th className="px-6 py-4 text-center">Au Tiers</th>
                        <th className="px-6 py-4 text-center">Intermédiaire</th>
                        <th className="px-6 py-4 text-center">Tous Risques</th>
                        <th className="px-6 py-4 text-left">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {guaranteeTable.map((row, index) => (
                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="px-6 py-4 font-semibold text-primary-800">{row.guarantee}</td>
                          <td className="px-6 py-4 text-center">
                            {row.tiers === "✓" ? (
                              <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                            ) : row.tiers === "✗" ? (
                              <span className="text-red-500">✗</span>
                            ) : (
                              <span className="text-orange-500">{row.tiers}</span>
                            )}
                          </td>
                          <td className="px-6 py-4 text-center">
                            {row.intermediaire === "✓" ? (
                              <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                            ) : row.intermediaire === "✗" ? (
                              <span className="text-red-500">✗</span>
                            ) : (
                              <span className="text-orange-500">{row.intermediaire}</span>
                            )}
                          </td>
                          <td className="px-6 py-4 text-center">
                            {row.tousRisques === "✓" ? (
                              <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                            ) : row.tousRisques === "✗" ? (
                              <span className="text-red-500">✗</span>
                            ) : (
                              <span className="text-orange-500">{row.tousRisques}</span>
                            )}
                          </td>
                          <td className="px-6 py-4 text-gray-600">{row.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Conseils pour choisir */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-primary-800 mb-6 text-center">
                  Comment choisir son assurance auto ?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <motion.div
                    className="bg-gray-50 rounded-lg p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-xl font-bold text-primary-800 mb-4 flex items-center">
                      <Info className="h-6 w-6 text-primary-600 mr-2" />
                      Évaluez vos besoins
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Analysez la valeur de votre véhicule</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Considérez votre fréquence d'utilisation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Évaluez votre budget mensuel disponible</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Identifiez les garanties indispensables pour vous</span>
                      </li>
                    </ul>
                  </motion.div>

                  <motion.div
                    className="bg-gray-50 rounded-lg p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h3 className="text-xl font-bold text-primary-800 mb-4 flex items-center">
                      <Info className="h-6 w-6 text-primary-600 mr-2" />
                      Comparez les offres
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Vérifiez les plafonds de garantie</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Examinez les franchises appliquées</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Comparez les services d'assistance</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Lisez les avis clients et évaluations</span>
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avis clients */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Ce que nos clients disent
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des milliers d'automobilistes nous font confiance pour leur assurance auto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Thomas Dupont",
                vehicle: "Renault Clio",
                text: "J'ai économisé plus de 300€ sur mon assurance auto grâce à XCR Courtier. Le processus était simple et rapide !",
                rating: 5
              },
              {
                name: "Marie Lefevre",
                vehicle: "Peugeot 3008",
                text: "Excellent service client et tarifs très compétitifs. Je recommande vivement pour toute assurance auto.",
                rating: 5
              },
              {
                name: "Jean Moreau",
                vehicle: "Citroën C4",
                text: "Après un sinistre, j'ai été pris en charge rapidement et efficacement. Très satisfait de mon assurance auto.",
                rating: 4
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <User className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.vehicle}</p>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Prêt à économiser sur votre assurance auto ?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Rejoignez les milliers d'automobilistes qui nous font confiance pour leur assurance auto. 
              Obtenez votre devis gratuit en 2 minutes.
            </p>
            <div className="flex items-center justify-center space-x-8 text-secondary-300 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold">15K+</div>
                <div className="text-sm">Clients satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">40%</div>
                <div className="text-sm">Économies moyennes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">24h</div>
                <div className="text-sm">Délai de réponse</div>
              </div>
            </div>
            <Button 
              variant="accent" 
              size="lg"
              href="#top"
            >
              Obtenir mon devis gratuit
            </Button>
          </div>
        </div>
      </section>

      {/* Official Links Section */}
      <OfficialLinksSection />
    </>
  );
};

export default AssuranceAutoPage;