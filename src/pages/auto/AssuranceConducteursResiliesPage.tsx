import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, Car, Clock, Award, ArrowRight, Star, Info, User, AlertTriangle, RefreshCw } from 'lucide-react';
import Button from '../../components/common/Button';
import AutoInsuranceQuoteForm from '../../components/forms/AutoInsuranceQuoteForm';

const AssuranceConducteursResiliesPage = () => {
  const features = [
    {
      icon: <RefreshCw className="h-8 w-8 text-primary-600" />,
      title: "Seconde Chance",
      description: "Solutions adaptées après résiliation par votre précédent assureur"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary-600" />,
      title: "Couverture Immédiate",
      description: "Assurance disponible même après résiliation pour non-paiement"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary-600" />,
      title: "Réhabilitation Progressive",
      description: "Amélioration des conditions avec le temps"
    },
    {
      icon: <Award className="h-8 w-8 text-primary-600" />,
      title: "Accompagnement Personnalisé",
      description: "Conseillers spécialisés dans les situations complexes"
    }
  ];

  const advantages = [
    "Acceptation même après résiliation pour sinistres multiples",
    "Couverture possible après résiliation pour non-paiement",
    "Pas de délai de carence",
    "Attestation d'assurance immédiate",
    "Accompagnement pour améliorer votre profil",
    "Réduction progressive des surprimes"
  ];

  const resiliationTypes = [
    {
      type: "Résiliation pour non-paiement",
      description: "Nous proposons des solutions adaptées avec possibilité de paiement mensuel pour faciliter la gestion de votre budget.",
      icon: <AlertTriangle className="h-6 w-6 text-orange-500" />
    },
    {
      type: "Résiliation après sinistres multiples",
      description: "Nos partenaires spécialisés acceptent les profils à sinistralité élevée avec un accompagnement personnalisé.",
      icon: <AlertTriangle className="h-6 w-6 text-orange-500" />
    },
    {
      type: "Résiliation pour fausse déclaration",
      description: "Nous étudions votre situation et vous proposons des solutions adaptées avec une analyse approfondie de votre dossier.",
      icon: <AlertTriangle className="h-6 w-6 text-orange-500" />
    },
    {
      type: "Malus élevé (> 1.50)",
      description: "Des formules spécifiques sont disponibles pour les conducteurs avec un coefficient de bonus-malus supérieur à 1.50.",
      icon: <AlertTriangle className="h-6 w-6 text-orange-500" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Assurance Auto Conducteurs Résiliés | Seconde Chance | Devis Immédiat</title>
        <meta name="description" content="Assurance auto pour conducteurs résiliés : solutions après résiliation pour non-paiement ou sinistres. Couverture immédiate, accompagnement personnalisé. Devis gratuit." />
        <meta name="keywords" content="assurance conducteurs résiliés, assurance après résiliation, assurance non-paiement, assurance malus élevé, assurance sinistres multiples" />
        <link rel="canonical" href="https://xcr-courtier.fr/assurance-auto-conducteurs-resilies" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Assurance Auto Conducteurs Résiliés | Seconde Chance" />
        <meta property="og:description" content="Solutions d'assurance après résiliation. Couverture immédiate, accompagnement personnalisé." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xcr-courtier.fr/assurance-auto-conducteurs-resilies" />
        <meta property="og:image" content="https://images.pexels.com/photos/3807330/pexels-photo-3807330.jpeg" />
        
        {/* Schema.org Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Assurance Auto Conducteurs Résiliés",
            "description": "Solutions d'assurance pour conducteurs résiliés par leur précédent assureur",
            "provider": {
              "@type": "Organization",
              "name": "XCR Courtier"
            },
            "serviceType": "Assurance Auto",
            "areaServed": "France"
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center py-24">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/3807330/pexels-photo-3807330.jpeg")',
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
                Assurance Auto Conducteurs Résiliés
                <span className="text-secondary-400"> - Seconde Chance</span>
              </h1>
              
              <p className="text-xl text-gray-200 mb-8">
                Des solutions d'assurance adaptées après une résiliation par votre précédent assureur. Couverture immédiate et accompagnement personnalisé.
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
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <AutoInsuranceQuoteForm formType="resilies" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Nos solutions pour conducteurs résiliés
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une seconde chance pour tous les conducteurs, quelle que soit votre situation
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

      {/* Types de résiliation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Solutions adaptées à chaque type de résiliation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quelle que soit la raison de votre résiliation, nous avons une solution pour vous
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {resiliationTypes.map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  {item.icon}
                  <h3 className="text-xl font-bold text-primary-800 ml-3">{item.type}</h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Notre processus simplifié
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Obtenez votre assurance en 3 étapes simples, même après une résiliation
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-8 md:space-y-0 md:space-x-8 max-w-5xl mx-auto">
            <motion.div
              className="bg-white rounded-lg shadow-md p-6 text-center w-full md:w-1/3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-primary-800 mb-3">Analyse de votre situation</h3>
              <p className="text-gray-600">
                Nos experts analysent votre dossier et les raisons de votre résiliation pour identifier les meilleures solutions.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-md p-6 text-center w-full md:w-1/3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-primary-800 mb-3">Proposition sur mesure</h3>
              <p className="text-gray-600">
                Nous vous proposons une solution adaptée à votre profil avec les meilleures garanties possibles.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-md p-6 text-center w-full md:w-1/3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-primary-800 mb-3">Souscription rapide</h3>
              <p className="text-gray-600">
                Attestation d'assurance immédiate et accompagnement pour améliorer votre profil à long terme.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Avis clients */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Ils nous ont fait confiance après une résiliation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les témoignages de conducteurs qui ont retrouvé une assurance grâce à nous
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Patrick Legrand",
                vehicle: "Peugeot 308",
                text: "Après une résiliation pour non-paiement, j'ai trouvé une nouvelle assurance en 24h. Merci pour votre accompagnement !",
                rating: 5
              },
              {
                name: "Nathalie Rousseau",
                vehicle: "Renault Mégane",
                text: "Suite à plusieurs sinistres, plus personne ne voulait m'assurer. XCR m'a trouvé une solution adaptée à mon budget.",
                rating: 4
              },
              {
                name: "Thierry Martin",
                vehicle: "Citroën C4",
                text: "Malus de 2.50 et pourtant j'ai obtenu une assurance à un tarif raisonnable. Conseillers très professionnels.",
                rating: 5
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

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Questions fréquentes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tout ce que vous devez savoir sur l'assurance pour conducteurs résiliés
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "Puis-je être assuré après une résiliation pour non-paiement ?",
                answer: "Oui, il est tout à fait possible d'obtenir une assurance après une résiliation pour non-paiement. Nos partenaires spécialisés proposent des solutions adaptées à cette situation. Vous devrez généralement régler les arriérés auprès de votre ancien assureur et accepter certaines conditions comme le paiement par prélèvement automatique ou une surprime temporaire."
              },
              {
                question: "Combien de temps reste-t-on fiché après une résiliation ?",
                answer: "En France, il n'existe pas de fichier officiel des résiliations d'assurance auto. Cependant, les assureurs conservent généralement l'information pendant 2 à 3 ans. Lors de la souscription, vous devez déclarer honnêtement votre situation, car une fausse déclaration peut entraîner la nullité du contrat. Notre rôle est justement de vous aider à trouver une solution malgré cet historique."
              },
              {
                question: "Les garanties sont-elles limitées pour les conducteurs résiliés ?",
                answer: "Les conducteurs résiliés peuvent généralement accéder à toutes les garanties classiques (tiers, intermédiaire, tous risques), mais avec des conditions particulières : franchises plus élevées, surprimes temporaires, ou restrictions spécifiques. Avec le temps et en l'absence de nouveaux sinistres, ces conditions s'améliorent progressivement. Nos conseillers vous aideront à trouver le meilleur équilibre entre couverture et budget."
              }
            ].map((faq, index) => (
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
                    <h3 className="text-lg">{faq.question}</h3>
                    <span className="ml-6 flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform">
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Retrouvez la route en toute sérénité</h2>
            <p className="text-xl text-gray-200 mb-8">
              Ne restez pas sans assurance. Nos experts sont là pour vous aider à trouver une solution adaptée à votre situation.
            </p>
            <Button 
              variant="accent" 
              size="lg"
              href="#top"
            >
              Obtenir mon devis personnalisé
            </Button>
            <p className="mt-6 text-gray-300">
              Ou appelez-nous au <a href="tel:+33180855781" className="font-semibold hover:text-white">01 80 85 57 81</a>
            </p>
          </div>
        </div>
      </section>

      {/* Autres formules */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Découvrez nos autres formules d'assurance auto
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trouvez la solution adaptée à vos besoins spécifiques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-primary-800 mb-3">Assurance Auto Malus</h3>
              <p className="text-gray-600 mb-4">
                Solutions spécifiques pour les conducteurs avec un coefficient de bonus-malus élevé.
              </p>
              <Link 
                to="/assurance-auto-malus" 
                className="inline-block text-primary-600 hover:text-primary-800 font-medium"
              >
                En savoir plus
                <ArrowRight className="inline ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-primary-800 mb-3">Assurance Jeune Conducteur</h3>
              <p className="text-gray-600 mb-4">
                Solutions adaptées aux conducteurs novices avec des tarifs optimisés.
              </p>
              <Link 
                to="/assurance-auto-jeune-conducteur" 
                className="inline-block text-primary-600 hover:text-primary-800 font-medium"
              >
                En savoir plus
                <ArrowRight className="inline ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-primary-800 mb-3">Assurance Auto Temporaire</h3>
              <p className="text-gray-600 mb-4">
                Couverture flexible de 1 jour à 3 mois pour vos besoins ponctuels.
              </p>
              <Link 
                to="/assurance-auto-temporaire" 
                className="inline-block text-primary-600 hover:text-primary-800 font-medium"
              >
                En savoir plus
                <ArrowRight className="inline ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AssuranceConducteursResiliesPage;