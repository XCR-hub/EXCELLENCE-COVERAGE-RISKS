import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, Home, Users, Clock, Award, Calculator, TrendingDown, FileText, Heart, AlertCircle, Percent, DollarSign, Settings, Briefcase, Star, User, Phone } from 'lucide-react';
import InsuranceForm from '../components/forms/InsuranceForm';
import Button from '../components/common/Button';
import OfficialLinksSection from '../components/common/OfficialLinksSection';

const AssuranceEmprunteurPage = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-primary-600" />,
      title: "Garanties Complètes",
      description: "Décès, invalidité, incapacité et perte d'emploi selon vos besoins"
    },
    {
      icon: <Home className="h-8 w-8 text-primary-600" />,
      title: "Tous Types de Prêts",
      description: "Immobilier, travaux, investissement locatif, rachat de crédit"
    },
    {
      icon: <Calculator className="h-8 w-8 text-primary-600" />,
      title: "Délégation d'Assurance",
      description: "Changez facilement d'assurance emprunteur pour économiser"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary-600" />,
      title: "Souscription Rapide",
      description: "Validation en 48h, prise d'effet immédiate possible"
    }
  ];

  const advantages = [
    "Jusqu'à 50% d'économies par rapport à l'assurance groupe",
    "Garanties équivalentes ou supérieures à votre banque",
    "Questionnaire de santé simplifié",
    "Prise en charge des démarches de substitution",
    "Tarifs dégressifs selon l'âge et le capital restant dû",
    "Possibilité de changer d'assurance chaque année"
  ];

  const guarantees = [
    {
      title: "Garantie Décès",
      description: "Remboursement du capital restant dû en cas de décès de l'assuré"
    },
    {
      title: "Garantie PTIA",
      description: "Perte Totale et Irréversible d'Autonomie"
    },
    {
      title: "Garantie IPT",
      description: "Invalidité Permanente Totale (taux ≥ 66%)"
    },
    {
      title: "Garantie IPP",
      description: "Invalidité Permanente Partielle (taux 33-66%)"
    },
    {
      title: "Garantie ITT",
      description: "Incapacité Temporaire de Travail"
    },
    {
      title: "Garantie Perte d'emploi",
      description: "Prise en charge en cas de chômage involontaire"
    }
  ];

  // Tableau comparatif des garanties principales
  const guaranteeComparisonTable = [
    {
      guarantee: "Décès",
      description: "Remboursement du capital restant dû en cas de décès de l'assuré",
      coverage: ["25%", "50%", "75%", "100%"],
      exclusions: ["Suicide la première année", "Risques de guerre", "Sports extrêmes non déclarés"],
      waitingPeriod: "Aucun",
      deductiblePeriod: "Aucune",
      rating: 5
    },
    {
      guarantee: "PTIA",
      description: "Perte Totale et Irréversible d'Autonomie nécessitant l'assistance d'une tierce personne",
      coverage: ["25%", "50%", "75%", "100%"],
      exclusions: ["Automutilation", "Conséquences d'une tentative de suicide", "Affections psychiatriques sans hospitalisation"],
      waitingPeriod: "Aucun",
      deductiblePeriod: "Aucune",
      rating: 5
    },
    {
      guarantee: "IPT",
      description: "Invalidité Permanente Totale avec taux d'invalidité ≥ 66%",
      coverage: ["25%", "50%", "75%", "100%"],
      exclusions: ["Fibromyalgie", "Certaines affections psychiatriques", "Affections disco-vertébrales sans intervention"],
      waitingPeriod: "90 jours",
      deductiblePeriod: "90 jours",
      rating: 4
    },
    {
      guarantee: "IPP",
      description: "Invalidité Permanente Partielle avec taux d'invalidité entre 33% et 66%",
      coverage: ["Proportionnelle au taux d'invalidité"],
      exclusions: ["Fibromyalgie", "Certaines affections psychiatriques", "Affections disco-vertébrales sans intervention"],
      waitingPeriod: "90 jours",
      deductiblePeriod: "90 jours",
      rating: 3
    },
    {
      guarantee: "ITT",
      description: "Incapacité Temporaire de Travail, impossibilité d'exercer son activité professionnelle",
      coverage: ["Mensualités prises en charge"],
      exclusions: ["Cures thermales", "Traitements esthétiques", "Grossesse normale", "Fibromyalgie sans hospitalisation"],
      waitingPeriod: "90 jours",
      deductiblePeriod: "30, 60, 90 ou 180 jours au choix",
      rating: 4
    },
    {
      guarantee: "Perte d'emploi",
      description: "Prise en charge des mensualités en cas de chômage involontaire",
      coverage: ["50% des mensualités pendant 12 mois max"],
      exclusions: ["Démission", "Rupture conventionnelle", "Fin de CDD", "Licenciement pour faute grave"],
      waitingPeriod: "180 jours",
      deductiblePeriod: "90 jours après inscription Pôle Emploi",
      rating: 2
    }
  ];

  // Profils d'emprunteurs et recommandations
  const borrowerProfiles = [
    {
      profile: "Jeune emprunteur (< 35 ans)",
      healthStatus: "Excellent état de santé",
      profession: "Profession stable (CDI)",
      recommendations: [
        "Privilégier une délégation d'assurance plutôt que l'assurance groupe bancaire",
        "Opter pour une couverture décès/PTIA/IPT à 100%",
        "Choisir une franchise ITT courte (30 jours)",
        "La garantie perte d'emploi est optionnelle mais recommandée les premières années"
      ]
    },
    {
      profile: "Emprunteur senior (> 55 ans)",
      healthStatus: "Antécédents médicaux possibles",
      profession: "Fin de carrière professionnelle",
      recommendations: [
        "Privilégier les contrats sans questionnaire médical simplifié",
        "Opter pour une couverture décès à 100%",
        "Les garanties IPT/IPP/ITT peuvent être réduites ou exclues pour diminuer le coût",
        "Envisager une assurance temporaire sur les premières années du prêt uniquement"
      ]
    },
    {
      profile: "Profession à risque",
      healthStatus: "État de santé standard",
      profession: "Métier à risque (BTP, sécurité, etc.)",
      recommendations: [
        "Comparer attentivement les exclusions professionnelles des contrats",
        "Privilégier les contrats couvrant l'activité professionnelle sans surprime",
        "Opter pour une couverture ITT/IPT renforcée",
        "Vérifier la définition de l'ITT (impossibilité d'exercer sa profession ou toute profession)"
      ]
    },
    {
      profile: "Investisseur locatif",
      healthStatus: "État de santé standard",
      profession: "Toute profession",
      recommendations: [
        "Adapter le niveau de couverture au risque financier réel",
        "Possibilité de réduire la couverture à 50-75% si les revenus locatifs couvrent une partie du prêt",
        "Privilégier la garantie décès/PTIA, potentiellement réduire les autres",
        "Comparer le coût de l'assurance avec la rentabilité du projet immobilier"
      ]
    }
  ];

  // Critères d'évaluation financière
  const financialEvaluationCriteria = [
    {
      criterion: "Coût total sur la durée du prêt",
      description: "Somme de toutes les primes d'assurance sur la durée totale du crédit",
      importance: "Critère majeur pour comparer les offres",
      example: "Pour un prêt de 200 000€ sur 20 ans : entre 8 000€ et 25 000€ selon les contrats"
    },
    {
      criterion: "TAEA (Taux Annuel Effectif d'Assurance)",
      description: "Équivalent du TAEG pour l'assurance, permet de comparer le coût relatif",
      importance: "Facilite la comparaison entre contrats",
      example: "Entre 0,20% et 0,60% selon les profils et garanties"
    },
    {
      criterion: "Modalités de paiement",
      description: "Fréquence et méthode de paiement des primes d'assurance",
      importance: "Impact sur la trésorerie mensuelle",
      example: "Mensuel (avec les échéances du prêt), annuel, ou prime unique"
    },
    {
      criterion: "Évolution des cotisations",
      description: "Variation du coût de l'assurance pendant la durée du prêt",
      importance: "Prévisibilité budgétaire à long terme",
      example: "Prime fixe, dégressive (capital restant dû), ou variable (âge)"
    }
  ];

  // Conditions de souscription
  const subscriptionConditions = [
    {
      condition: "Limites d'âge",
      details: [
        "Âge minimal : généralement 18 ans",
        "Âge maximal à la souscription : entre 65 et 85 ans selon les contrats",
        "Âge maximal à l'échéance : entre 75 et 90 ans selon les contrats"
      ]
    },
    {
      condition: "Formalités médicales",
      details: [
        "Questionnaire de santé simplifié jusqu'à 300 000€ (selon âge)",
        "Examens médicaux complémentaires au-delà",
        "Possibilité de contrats sans questionnaire médical (avec surprime)"
      ]
    },
    {
      condition: "Professions à risque",
      details: [
        "Surprimes possibles pour certaines professions (BTP, sécurité, transport)",
        "Exclusions spécifiques selon l'activité professionnelle",
        "Contrats spécialisés pour certains secteurs d'activité"
      ]
    },
    {
      condition: "Documents requis",
      details: [
        "Offre de prêt ou caractéristiques du prêt envisagé",
        "Pièce d'identité et justificatif de domicile",
        "Questionnaire de santé complété",
        "Justificatifs professionnels pour certains métiers"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Assurance Emprunteur Pas Chère | Devis Assurance Prêt Immobilier | XCR Courtier</title>
        <meta name="description" content="Assurance emprunteur pas chère avec XCR Courtier. Économisez jusqu'à 50% sur votre assurance prêt immobilier. Devis gratuit assurance emprunteur en 24h." />
        <meta name="keywords" content="assurance emprunteur pas chère, devis assurance prêt immobilier, XCR courtier emprunteur, assurance crédit immobilier" />
        <link rel="canonical" href="https://xcr-courtier.fr/assurance-emprunteur" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Assurance Emprunteur Pas Chère | Économisez 50% XCR Courtier" />
        <meta property="og:description" content="Assurance emprunteur pas chère. Économisez jusqu'à 50% sur votre assurance prêt immobilier." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xcr-courtier.fr/assurance-emprunteur" />
        <meta property="og:image" content="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg" />
        
        {/* Schema.org Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Assurance Emprunteur",
            "description": "Assurance emprunteur pas chère pour prêt immobilier",
            "provider": {
              "@type": "Organization",
              "name": "XCR Courtier"
            },
            "serviceType": "Assurance Emprunteur",
            "areaServed": "France",
            "offers": {
              "@type": "Offer",
              "description": "Économisez jusqu'à 50% sur votre assurance emprunteur"
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
            backgroundImage: 'url("https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg")',
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
                Assurance Emprunteur
                <span className="text-secondary-400"> Pas Chère</span>
              </h1>
              
              <p className="text-xl text-gray-200 mb-8">
                Économisez jusqu'à 50% sur votre assurance prêt immobilier avec XCR Courtier. Devis gratuit en 24h.
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
              <InsuranceForm type="emprunteur" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Pourquoi changer d'assurance emprunteur ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La délégation d'assurance vous permet de choisir une assurance emprunteur externe à votre banque, souvent plus avantageuse.
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

      {/* Guide Complet Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Guide Complet d'Analyse des Contrats d'Assurance Emprunteur
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tout ce que vous devez savoir pour comprendre et comparer les offres d'assurance emprunteur
            </p>
          </div>

          {/* 1. GARANTIES PRINCIPALES */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-primary-800 mb-6 flex items-center">
                <Shield className="h-6 w-6 text-primary-600 mr-3" />
                1. Garanties Principales
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-lg shadow-lg">
                  <thead className="bg-primary-800 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Garantie</th>
                      <th className="px-6 py-4 text-left">Description</th>
                      <th className="px-6 py-4 text-left">Couverture</th>
                      <th className="px-6 py-4 text-left">Exclusions</th>
                      <th className="px-6 py-4 text-left">Délai de carence</th>
                      <th className="px-6 py-4 text-left">Franchise</th>
                      <th className="px-6 py-4 text-center">Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {guaranteeComparisonTable.map((item, index) => (
                      <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-primary-800">{item.guarantee}</td>
                        <td className="px-6 py-4 text-gray-600">{item.description}</td>
                        <td className="px-6 py-4 text-gray-600">
                          <ul className="list-disc pl-4">
                            {item.coverage.map((cov, i) => (
                              <li key={i}>{cov}</li>
                            ))}
                          </ul>
                        </td>
                        <td className="px-6 py-4 text-gray-600">
                          <ul className="list-disc pl-4">
                            {item.exclusions.map((excl, i) => (
                              <li key={i}>{excl}</li>
                            ))}
                          </ul>
                        </td>
                        <td className="px-6 py-4 text-gray-600">{item.waitingPeriod}</td>
                        <td className="px-6 py-4 text-gray-600">{item.deductiblePeriod}</td>
                        <td className="px-6 py-4 text-center">
                          <div className="flex justify-center">
                            {[...Array(item.rating)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                            ))}
                            {[...Array(5 - item.rating)].map((_, i) => (
                              <Star key={i + item.rating} className="h-5 w-5 text-gray-300" />
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>

          {/* 2. ANALYSE DÉTAILLÉE PAR GARANTIE */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-primary-800 mb-6 flex items-center">
                <FileText className="h-6 w-6 text-primary-600 mr-3" />
                2. Analyse Détaillée par Garantie
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Décès */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h4 className="text-xl font-bold text-primary-800 mb-4 flex items-center">
                    <Heart className="h-5 w-5 text-red-500 mr-2" />
                    Garantie Décès
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-800">Couverture</h5>
                      <p className="text-gray-600">Remboursement du capital restant dû à la banque en cas de décès de l'assuré, quelle qu'en soit la cause (maladie ou accident).</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Points d'attention</h5>
                      <ul className="list-disc pl-5 text-gray-600 space-y-1">
                        <li>Vérifier les exclusions liées aux sports à risque et voyages</li>
                        <li>Examiner les conditions pour les décès à l'étranger</li>
                        <li>Contrôler la définition du suicide (généralement exclu la 1ère année)</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Bénéficiaires</h5>
                      <p className="text-gray-600">L'organisme prêteur est le bénéficiaire acceptant à hauteur du capital restant dû.</p>
                    </div>
                  </div>
                </div>

                {/* PTIA */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h4 className="text-xl font-bold text-primary-800 mb-4 flex items-center">
                    <AlertCircle className="h-5 w-5 text-orange-500 mr-2" />
                    Garantie PTIA
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-800">Définition</h5>
                      <p className="text-gray-600">Perte Totale et Irréversible d'Autonomie : invalidité rendant l'assuré incapable d'exercer toute activité professionnelle et nécessitant l'assistance d'une tierce personne pour les actes de la vie quotidienne.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Critères d'évaluation</h5>
                      <ul className="list-disc pl-5 text-gray-600 space-y-1">
                        <li>Reconnaissance par la Sécurité Sociale en 3ème catégorie</li>
                        <li>Assistance d'une tierce personne pour les actes essentiels</li>
                        <li>Caractère définitif et irréversible de l'invalidité</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Prestation</h5>
                      <p className="text-gray-600">Remboursement du capital restant dû à la date de reconnaissance de l'état de PTIA.</p>
                    </div>
                  </div>
                </div>

                {/* IPT/IPP */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h4 className="text-xl font-bold text-primary-800 mb-4 flex items-center">
                    <AlertCircle className="h-5 w-5 text-yellow-500 mr-2" />
                    Garanties IPT/IPP
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-800">Définitions</h5>
                      <p className="text-gray-600"><strong>IPT</strong> (Invalidité Permanente Totale) : taux d'invalidité ≥ 66%</p>
                      <p className="text-gray-600"><strong>IPP</strong> (Invalidité Permanente Partielle) : taux d'invalidité entre 33% et 66%</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Modalités de calcul</h5>
                      <ul className="list-disc pl-5 text-gray-600 space-y-1">
                        <li>Barème fonctionnel (atteinte physique) et/ou professionnel (impact sur l'activité)</li>
                        <li>Pour l'IPP : prise en charge proportionnelle au taux d'invalidité</li>
                        <li>Formule de calcul : (N-33)/33 où N est le taux d'invalidité</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Points d'attention</h5>
                      <p className="text-gray-600">Vérifier la définition de l'invalidité (propre profession ou toute profession).</p>
                    </div>
                  </div>
                </div>

                {/* ITT */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h4 className="text-xl font-bold text-primary-800 mb-4 flex items-center">
                    <Clock className="h-5 w-5 text-blue-500 mr-2" />
                    Garantie ITT
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-800">Définition</h5>
                      <p className="text-gray-600">Incapacité Temporaire de Travail : impossibilité complète d'exercer son activité professionnelle suite à une maladie ou un accident.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Durée et franchise</h5>
                      <ul className="list-disc pl-5 text-gray-600 space-y-1">
                        <li>Durée maximale d'indemnisation : généralement 1095 jours (3 ans)</li>
                        <li>Franchises disponibles : 30, 60, 90 ou 180 jours</li>
                        <li>Franchise réduite ou supprimée en cas d'accident dans certains contrats</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Points d'attention</h5>
                      <p className="text-gray-600">Vérifier la définition de l'ITT (impossibilité d'exercer sa profession ou toute profession) et les exclusions spécifiques.</p>
                    </div>
                  </div>
                </div>

                {/* Perte d'emploi */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h4 className="text-xl font-bold text-primary-800 mb-4 flex items-center">
                    <Briefcase className="h-5 w-5 text-gray-500 mr-2" />
                    Garantie Perte d'Emploi
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-800">Conditions d'activation</h5>
                      <ul className="list-disc pl-5 text-gray-600 space-y-1">
                        <li>Licenciement économique ou personnel (hors faute grave/lourde)</li>
                        <li>Période d'activité minimale avant sinistre (souvent 12 mois en CDI)</li>
                        <li>Perception des allocations chômage</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Indemnisation</h5>
                      <ul className="list-disc pl-5 text-gray-600 space-y-1">
                        <li>Généralement 50% des mensualités</li>
                        <li>Durée limitée : 12 à 24 mois maximum sur toute la durée du prêt</li>
                        <li>Nouvelle période de carence après chaque indemnisation</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Recommandation</h5>
                      <p className="text-gray-600">Garantie souvent coûteuse par rapport à sa couverture limitée. À évaluer selon votre situation professionnelle.</p>
                    </div>
                  </div>
                </div>

                {/* Options de personnalisation */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h4 className="text-xl font-bold text-primary-800 mb-4 flex items-center">
                    <Settings className="h-5 w-5 text-purple-500 mr-2" />
                    Options de Personnalisation
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-800">Quotités</h5>
                      <p className="text-gray-600">Pourcentage du prêt couvert par l'assurance : 25%, 50%, 75% ou 100%.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Franchises</h5>
                      <p className="text-gray-600">Délai entre le sinistre et le début de l'indemnisation, à choisir selon vos besoins et capacités financières.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Définition de l'ITT</h5>
                      <p className="text-gray-600">Possibilité de choisir entre "impossibilité d'exercer sa profession" ou "toute profession".</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 3. ÉVALUATION FINANCIÈRE */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-primary-800 mb-6 flex items-center">
                <DollarSign className="h-6 w-6 text-primary-600 mr-3" />
                3. Évaluation Financière
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {financialEvaluationCriteria.map((criterion, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                    <h4 className="text-xl font-bold text-primary-800 mb-3">{criterion.criterion}</h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">{criterion.description}</p>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm font-semibold text-gray-700">Importance :</p>
                        <p className="text-gray-600">{criterion.importance}</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm font-semibold text-blue-700">Exemple :</p>
                        <p className="text-blue-600">{criterion.example}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Simulation chiffrée */}
              <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
                <h4 className="text-xl font-bold text-primary-800 mb-4">Simulation Chiffrée</h4>
                <p className="text-gray-600 mb-4">Exemple pour un prêt de 250 000€ sur 25 ans à 3,5% pour un couple de 35 ans :</p>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-2 text-left">Type d'assurance</th>
                        <th className="px-4 py-2 text-right">Coût mensuel</th>
                        <th className="px-4 py-2 text-right">Coût total</th>
                        <th className="px-4 py-2 text-right">TAEA</th>
                        <th className="px-4 py-2 text-right">Économie</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="px-4 py-2">Assurance groupe bancaire</td>
                        <td className="px-4 py-2 text-right">104€</td>
                        <td className="px-4 py-2 text-right">31 200€</td>
                        <td className="px-4 py-2 text-right">0,52%</td>
                        <td className="px-4 py-2 text-right">-</td>
                      </tr>
                      <tr className="border-b bg-green-50">
                        <td className="px-4 py-2 font-semibold">Délégation d'assurance</td>
                        <td className="px-4 py-2 text-right font-semibold">52€</td>
                        <td className="px-4 py-2 text-right font-semibold">15 600€</td>
                        <td className="px-4 py-2 text-right font-semibold">0,26%</td>
                        <td className="px-4 py-2 text-right font-semibold text-green-600">15 600€</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-4 bg-green-50 p-4 rounded-lg">
                  <p className="flex items-center text-green-700">
                    <Percent className="h-5 w-5 mr-2" />
                    <span className="font-semibold">Économie réalisée : 50%</span> soit l'équivalent de 15 600€ sur la durée du prêt
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 4. CONDITIONS DE SOUSCRIPTION */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-primary-800 mb-6 flex items-center">
                <FileText className="h-6 w-6 text-primary-600 mr-3" />
                4. Conditions de Souscription
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {subscriptionConditions.map((condition, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                    <h4 className="text-xl font-bold text-primary-800 mb-4">{condition.condition}</h4>
                    <ul className="space-y-2">
                      {condition.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RECOMMANDATIONS PERSONNALISÉES */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-primary-800 mb-6 flex items-center">
                <User className="h-6 w-6 text-primary-600 mr-3" />
                Recommandations Personnalisées
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {borrowerProfiles.map((profile, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                    <h4 className="text-xl font-bold text-primary-800 mb-3">{profile.profile}</h4>
                    <div className="mb-4">
                      <div className="flex items-center mb-1">
                        <Heart className="h-4 w-4 text-red-500 mr-2" />
                        <span className="text-sm font-semibold text-gray-700">Santé : {profile.healthStatus}</span>
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 text-blue-500 mr-2" />
                        <span className="text-sm font-semibold text-gray-700">Profession : {profile.profession}</span>
                      </div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-primary-800 mb-2">Nos recommandations :</h5>
                      <ul className="space-y-2">
                        {profile.recommendations.map((rec, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* CONCLUSION ET CTA */}
          <motion.div
            className="bg-primary-50 rounded-lg p-8 border-l-4 border-primary-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-primary-800 mb-4">Conclusion</h3>
            <p className="text-gray-700 mb-6">
              L'assurance emprunteur représente un coût significatif dans votre crédit immobilier, pouvant atteindre jusqu'à 30% du coût total. Une analyse approfondie des contrats et la comparaison des offres vous permettront de réaliser des économies substantielles tout en bénéficiant de garanties adaptées à votre situation.
            </p>
            <p className="text-gray-700 mb-6">
              Grâce à la loi Lemoine, vous pouvez désormais changer d'assurance emprunteur à tout moment, sans frais ni pénalités. Ne laissez pas passer cette opportunité d'optimiser votre budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary" 
                size="lg"
                href="#top"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Obtenir mon devis personnalisé
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                href="/contact"
              >
                <Phone className="w-5 h-5 mr-2" />
                Parler à un expert
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Nos garanties d'assurance emprunteur
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choisissez les garanties adaptées à votre situation et votre profil
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-bold text-primary-800 mb-3">{guarantee.title}</h3>
                <p className="text-gray-600">{guarantee.description}</p>
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
                Les avantages de notre assurance emprunteur
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
                  <TrendingDown className="h-6 w-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
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
            <h2 className="text-3xl font-bold mb-6">Calculez vos économies dès maintenant</h2>
            <p className="text-xl text-gray-200 mb-8">
              Découvrez combien vous pourriez économiser en changeant d'assurance emprunteur
            </p>
            <div className="flex items-center justify-center space-x-8 text-secondary-300">
              <div className="text-center">
                <div className="text-3xl font-bold">50%</div>
                <div className="text-sm">Économies possibles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">48h</div>
                <div className="text-sm">Validation rapide</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">0€</div>
                <div className="text-sm">Frais de dossier</div>
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

export default AssuranceEmprunteurPage;