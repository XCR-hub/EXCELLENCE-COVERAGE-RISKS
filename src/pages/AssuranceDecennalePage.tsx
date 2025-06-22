import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, Building2, Users, Clock, Award, ArrowRight, Star, Info, FileText, TrendingDown, ExternalLink, AlertCircle, Hammer, HardHat, Calculator, Phone } from 'lucide-react';
import Button from '../components/common/Button';
import InsuranceForm from '../components/forms/InsuranceForm';
import OfficialLinksSection from '../components/common/OfficialLinksSection';
import DecennaleMetierNavigation from '../components/navigation/DecennaleMetierNavigation';

const AssuranceDecennalePage = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-primary-600" />,
      title: "Garantie Décennale Complète",
      description: "Couvre les dommages compromettant la solidité de l'ouvrage pendant 10 ans"
    },
    {
      icon: <Building2 className="h-8 w-8 text-primary-600" />,
      title: "Tous Métiers du Bâtiment",
      description: "Plus de 50 activités couvertes : maçonnerie, électricité, plomberie, menuiserie..."
    },
    {
      icon: <HardHat className="h-8 w-8 text-primary-600" />,
      title: "RC Pro Incluse",
      description: "Responsabilité civile professionnelle incluse dans nos formules"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary-600" />,
      title: "Attestation Rapide",
      description: "Attestation décennale délivrée sous 24h après souscription"
    }
  ];

  const advantages = [
    "Tarifs négociés avec les meilleures compagnies",
    "Garantie de bon fonctionnement (2 ans) incluse", 
    "Couverture des dommages aux existants",
    "Assistance juridique spécialisée BTP",
    "Paiement en plusieurs fois sans frais",
    "Accompagnement personnalisé par nos experts"
  ];

  // Liste exhaustive des métiers du bâtiment organisés par catégorie
  const activitesCouvertes = [
    {
      categorie: "Gros Œuvre",
      metiers: [
        { nom: "Maçon", description: "Construction en béton, pierre, brique", slug: "macon" },
        { nom: "Charpentier", description: "Charpente bois, métallique, lamellé-collé", slug: "charpentier" }, 
        { nom: "Couvreur", description: "Toiture tuiles, ardoises, zinc, bac acier", slug: "couvreur" },
        { nom: "Terrassier", description: "Terrassement, fondations, VRD", slug: "terrassier" },
        { nom: "Bétonneur", description: "Coulage béton, dalles, structures", slug: "betonneur" },
        { nom: "Ferrailleur", description: "Armatures béton, structures métalliques", slug: "ferrailleur" }
      ]
    },
    {
      categorie: "Second Œuvre",
      metiers: [
        { nom: "Électricien", description: "Installation électrique, domotique, courants faibles", slug: "electricien" },
        { nom: "Plombier", description: "Plomberie, sanitaires, chauffage", slug: "plombier" },
        { nom: "Chauffagiste", description: "Chauffage central, climatisation, VMC", slug: "chauffagiste" },
        { nom: "Plaquiste", description: "Cloisons sèches, isolation, plafonds", slug: "plaquiste" },
        { nom: "Peintre", description: "Peinture intérieure/extérieure, revêtements", slug: "peintre" },
        { nom: "Carreleur", description: "Carrelage, faïence, pierre naturelle", slug: "carreleur" },
        { nom: "Menuisier", description: "Menuiseries intérieures/extérieures, agencement", slug: "menuisier" },
        { nom: "Parqueteur", description: "Pose parquet, sols stratifiés", slug: "parqueteur" }
      ]
    },
    {
      categorie: "Finitions & Aménagement",
      metiers: [
        { nom: "Platrier", description: "Enduits, plâtrerie traditionnelle", slug: "platrier" },
        { nom: "Solier", description: "Revêtements de sols souples", slug: "solier" },
        { nom: "Tapissier", description: "Papiers peints, revêtements muraux", slug: "tapissier" },
        { nom: "Cuisiniste", description: "Agencement cuisine, pose mobilier", slug: "cuisiniste" },
        { nom: "Serrurier", description: "Serrurerie, métallerie, portails", slug: "serrurier" },
        { nom: "Vitrier", description: "Pose vitrage, double vitrage", slug: "vitrier" }
      ]
    },
    {
      categorie: "Équipements Techniques",
      metiers: [
        { nom: "Ascensoriste", description: "Installation, maintenance ascenseurs", slug: "ascensoriste" },
        { nom: "Antenniste", description: "Antennes, paraboles, télécommunications", slug: "antenniste" },
        { nom: "Alarme & Sécurité", description: "Systèmes de sécurité, vidéosurveillance", slug: "alarme-securite" },
        { nom: "Automatisme", description: "Portails automatiques, volets roulants", slug: "automatisme" },
        { nom: "Piscine", description: "Construction, équipement piscines", slug: "piscine" }
      ]
    },
    {
      categorie: "Spécialités",
      metiers: [
        { nom: "Étancheur", description: "Étanchéité toitures, terrasses", slug: "etancheur" },
        { nom: "Isolateur", description: "Isolation thermique, phonique", slug: "isolateur" },
        { nom: "Ravaleur", description: "Ravalement façades, ITE", slug: "ravaleur" },
        { nom: "Démolisseur", description: "Démolition, désamiantage", slug: "demolisseur" },
        { nom: "Désamianteur", description: "Retrait amiante, déplombage", slug: "desamianteur" }
      ]
    }
  ];

  const garantiesTableau = [
    {
      garantie: "Garantie Décennale",
      duree: "10 ans",
      plafond: "1 500 000 €",
      description: "Dommages compromettant solidité ou destination"
    },
    {
      garantie: "Garantie Biennale",
      duree: "2 ans", 
      plafond: "300 000 €",
      description: "Bon fonctionnement équipements dissociables"
    },
    {
      garantie: "Garantie Parfait Achèvement",
      duree: "1 an",
      plafond: "150 000 €", 
      description: "Désordres signalés à la réception"
    },
    {
      garantie: "RC Professionnelle",
      duree: "Permanente",
      plafond: "500 000 €",
      description: "Dommages causés pendant les travaux"
    },
    {
      garantie: "Dommages aux Existants",
      duree: "Permanente",
      plafond: "300 000 €",
      description: "Dommages aux ouvrages préexistants"
    }
  ];

  const faqItems = [
    {
      question: "Qu'est-ce que l'assurance décennale et pourquoi est-elle obligatoire ?",
      answer: "L'assurance décennale est une garantie obligatoire selon l'article 1792 du Code Civil et la loi Spinetta de 1978. Elle couvre pendant 10 ans les dommages qui compromettent la solidité de l'ouvrage ou le rendent impropre à sa destination. Cette obligation protège les maîtres d'ouvrage et garantit la qualité des constructions."
    },
    {
      question: "Quels métiers du bâtiment sont concernés par l'assurance décennale ?",
      answer: "Tous les professionnels du bâtiment réalisant des travaux de construction, rénovation ou réhabilitation sont concernés : maçons, électriciens, plombiers, charpentiers, couvreurs, peintres, carreleurs, menuisiers, chauffagistes, etc. La liste complète comprend plus de 50 métiers spécialisés."
    },
    {
      question: "Comment est calculé le prix de l'assurance décennale ?",
      answer: "Le tarif dépend de plusieurs critères : votre métier, votre chiffre d'affaires, votre expérience, vos antécédents de sinistres, votre zone géographique et les garanties choisies. Les tarifs varient de 800€ à 5000€ par an selon ces paramètres."
    },
    {
      question: "Puis-je souscrire une assurance décennale sans expérience ?",
      answer: "Oui, il est possible de souscrire dès la première année d'activité. Cependant, les tarifs sont généralement plus élevés pour les débutants. Certains assureurs demandent une formation qualifiante ou un parrainage par un professionnel expérimenté."
    },
    {
      question: "Que faire en cas de sinistre décennal ?",
      answer: "En cas de sinistre, déclarez-le immédiatement à votre assureur avec tous les justificatifs. L'assureur mandate un expert pour évaluer les dommages. Si la garantie décennale est acquise, l'assureur prend en charge les réparations selon les conditions du contrat."
    },
    {
      question: "L'assurance décennale couvre-t-elle les travaux de rénovation ?",
      answer: "Oui, l'assurance décennale couvre aussi bien les constructions neuves que les travaux de rénovation, d'extension ou de réhabilitation qui modifient la structure ou la destination du bâtiment. Seuls les travaux d'entretien courant en sont exclus."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Assurance Décennale Artisan 2025 | Devis Décennale Tous Métiers | XCR Courtier</title>
        <meta name="description" content="Assurance décennale pour tous métiers du bâtiment : maçon, électricien, plombier, charpentier, couvreur. Devis décennale gratuit 24h avec XCR Courtier. Tarifs négociés." />
        <meta name="keywords" content="assurance décennale, décennale maçon, décennale électricien, décennale plombier, décennale charpentier, décennale couvreur, devis décennale artisan, XCR courtier décennale" />
        <link rel="canonical" href="https://xcr-courtier.fr/assurance-decennale" />
        
        {/* Schema.org Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Assurance Décennale Artisan",
            "description": "Assurance décennale pour tous métiers du bâtiment : maçon, électricien, plombier, charpentier, couvreur",
            "provider": {
              "@type": "Organization",
              "name": "XCR Courtier"
            },
            "serviceType": "Assurance Décennale",
            "areaServed": "France",
            "audience": {
              "@type": "BusinessAudience", 
              "audienceType": "Artisans et professionnels du bâtiment"
            },
            "offers": {
              "@type": "Offer",
              "description": "Devis décennale gratuit sous 24h"
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
            backgroundImage: 'url("https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg")',
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
                Assurance Décennale Artisan
                <span className="text-secondary-400"> - Tous Métiers</span>
              </h1>
              
              <p className="text-xl text-gray-200 mb-8">
                Assurance décennale pour tous métiers du bâtiment : maçon, électricien, plombier, charpentier, couvreur. 
                Devis gratuit sous 24h avec XCR Courtier.
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
              <InsuranceForm type="decennale" />
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
              <DecennaleMetierNavigation />
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Features Section */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
                  Assurance décennale : protection obligatoire pour tous les métiers du bâtiment
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  L'assurance décennale est obligatoire pour tous les professionnels du bâtiment selon la loi Spinetta. 
                  Elle couvre les dommages pendant 10 ans après réception des travaux.
                </p>
              </div>

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

              {/* Activités Couvertes Section */}
              <div className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
                    Liste exhaustive des métiers du bâtiment couverts
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Plus de 50 activités du bâtiment couvertes par notre assurance décennale. 
                    Trouvez votre métier et obtenez votre devis personnalisé.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {activitesCouvertes.map((categorie, index) => (
                    <motion.div
                      key={index}
                      className="bg-gray-50 rounded-lg p-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <h3 className="text-xl font-bold text-primary-800 mb-4 flex items-center">
                        <Hammer className="h-6 w-6 mr-2 text-secondary-500" />
                        {categorie.categorie}
                      </h3>
                      <ul className="space-y-3">
                        {categorie.metiers.map((metier, i) => (
                          <li key={i} className="text-gray-700 text-sm">
                            <Link 
                              to={`/assurance-decennale-${metier.slug}`} 
                              className="flex items-start hover:text-primary-700 transition-colors"
                            >
                              <CheckCircle className="h-4 w-4 text-secondary-500 mr-2 mt-0.5 flex-shrink-0" />
                              <div>
                                <span className="font-medium">{metier.nom}</span>
                                <span className="text-xs text-gray-500 block">{metier.description}</span>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>

                <div className="text-center mt-12">
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 max-w-4xl mx-auto">
                    <p className="text-blue-700">
                      <strong>Votre métier n'apparaît pas dans cette liste ?</strong> Contactez nos experts XCR Courtier. 
                      Nous couvrons de nombreuses spécialités et activités connexes au bâtiment.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tableau des Garanties */}
              <div className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
                    Tableau des garanties et plafonds d'indemnisation
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Découvrez le détail de nos garanties décennale avec les plafonds d'indemnisation 
                    et les durées de couverture.
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full bg-white rounded-lg shadow-lg">
                    <thead className="bg-primary-800 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold">Garantie</th>
                        <th className="px-6 py-4 text-left font-semibold">Durée</th>
                        <th className="px-6 py-4 text-left font-semibold">Plafond</th>
                        <th className="px-6 py-4 text-left font-semibold">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {garantiesTableau.map((garantie, index) => (
                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="px-6 py-4 font-semibold text-primary-800">{garantie.garantie}</td>
                          <td className="px-6 py-4">{garantie.duree}</td>
                          <td className="px-6 py-4 font-semibold text-secondary-600">{garantie.plafond}</td>
                          <td className="px-6 py-4 text-gray-600">{garantie.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-sm text-gray-600">
                    * Plafonds indicatifs. Les montants exacts dépendent de votre activité et du contrat souscrit.
                  </p>
                </div>
              </div>

              {/* Obligations Légales */}
              <div className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
                    Obligations légales et cadre réglementaire
                  </h2>
                  <p className="text-xl text-gray-600">
                    L'assurance décennale est encadrée par des textes de loi précis que tout professionnel 
                    du bâtiment doit connaître.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-primary-800 mb-4">Textes de référence</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <ExternalLink className="h-5 w-5 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <strong>Article 1792 du Code Civil</strong><br />
                          <span className="text-sm text-gray-600">Responsabilité décennale des constructeurs</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <ExternalLink className="h-5 w-5 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <strong>Loi Spinetta du 4 janvier 1978</strong><br />
                          <span className="text-sm text-gray-600">Obligation d'assurance décennale</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <ExternalLink className="h-5 w-5 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <strong>Article L241-1 du Code des assurances</strong><br />
                          <span className="text-sm text-gray-600">Modalités de souscription</span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-primary-800 mb-4">Sanctions en cas de défaut</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <AlertCircle className="h-5 w-5 text-red-600 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <strong>Amende de 75 000 €</strong><br />
                          <span className="text-sm text-gray-600">Pour défaut d'assurance décennale</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="h-5 w-5 text-red-600 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <strong>Interdiction d'exercer</strong><br />
                          <span className="text-sm text-gray-600">Suspension de l'activité professionnelle</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="h-5 w-5 text-red-600 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <strong>Responsabilité personnelle</strong><br />
                          <span className="text-sm text-gray-600">Engagement sur biens propres</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
                    Questions fréquentes sur l'assurance décennale
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Nos experts répondent aux questions les plus courantes sur l'assurance décennale
                  </p>
                </div>
                
                <div className="max-w-4xl mx-auto">
                  {faqItems.map((item, index) => (
                    <motion.div
                      key={index}
                      className="mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <details className="group bg-white rounded-lg shadow-md">
                        <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-primary-800">
                          <h3 className="text-lg">{item.question}</h3>
                          <span className="ml-6 flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform">
                            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                        </summary>
                        <div className="px-6 pb-6">
                          <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                        </div>
                      </details>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Obtenez votre attestation décennale rapidement</h2>
            <p className="text-xl text-gray-200 mb-8">
              Plus de 10 000 artisans nous font confiance pour leur assurance décennale. 
              Rejoignez-les et sécurisez votre activité dès aujourd'hui.
            </p>
            <div className="flex items-center justify-center space-x-8 text-secondary-300 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold">10K+</div>
                <div className="text-sm">Artisans assurés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">24h</div>
                <div className="text-sm">Attestation délivrée</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">Années d'expertise</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="accent" 
                size="lg" 
                href="#top"
              >
                <Calculator className="h-5 w-5 mr-2" />
                Calculer mon tarif décennale
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                href="tel:+33180855781" 
                className="border-white text-white hover:bg-white/10"
              >
                <Phone className="h-5 w-5 mr-2" />
                Être rappelé gratuitement
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Official Links Section */}
      <OfficialLinksSection />
    </>
  );
};

export default AssuranceDecennalePage;