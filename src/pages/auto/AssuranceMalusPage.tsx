import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, Car, Clock, Award, ArrowRight, Star, Info, User, AlertTriangle, RefreshCw } from 'lucide-react';
import Button from '../../components/common/Button';
import AutoInsuranceQuoteForm from '../../components/forms/AutoInsuranceQuoteForm';

const AssuranceMalusPage = () => {
  const features = [
    {
      icon: <AlertTriangle className="h-8 w-8 text-primary-600" />,
      title: "Acceptation Malus Élevé",
      description: "Solutions même avec un coefficient > 1.50"
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-primary-600" />,
      title: "Réhabilitation Progressive",
      description: "Amélioration des conditions avec le temps"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary-600" />,
      title: "Garanties Complètes",
      description: "Mêmes protections qu'une assurance standard"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary-600" />,
      title: "Accompagnement Personnalisé",
      description: "Conseils pour réduire votre coefficient"
    }
  ];

  const advantages = [
    "Acceptation des conducteurs avec malus élevé",
    "Pas de délai de carence",
    "Attestation d'assurance immédiate",
    "Accompagnement pour améliorer votre bonus-malus",
    "Possibilité de choisir entre différentes formules",
    "Réduction progressive des surprimes"
  ];

  const malusRanges = [
    {
      range: "Malus 1.00 - 1.25",
      description: "Légère majoration de prime, toutes les formules disponibles avec tarifs légèrement majorés.",
      icon: <AlertTriangle className="h-6 w-6 text-green-500" />
    },
    {
      range: "Malus 1.26 - 1.50",
      description: "Majoration moyenne, formules au tiers et intermédiaires recommandées pour optimiser le budget.",
      icon: <AlertTriangle className="h-6 w-6 text-yellow-500" />
    },
    {
      range: "Malus 1.51 - 2.00",
      description: "Majoration importante, solutions spécifiques avec accompagnement personnalisé.",
      icon: <AlertTriangle className="h-6 w-6 text-orange-500" />
    },
    {
      range: "Malus > 2.00",
      description: "Majoration très élevée, solutions adaptées via nos partenaires spécialisés.",
      icon: <AlertTriangle className="h-6 w-6 text-red-500" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Assurance Auto Malus | Solutions Après Sinistres | Coefficient Élevé</title>
        <meta name="description" content="Assurance auto malus : solutions pour conducteurs avec coefficient bonus-malus élevé. Acceptation même avec malus > 2.00, accompagnement personnalisé. Devis gratuit." />
        <meta name="keywords" content="assurance auto malus, assurance coefficient élevé, assurance après sinistres, assurance bonus-malus, assurance conducteur à risque" />
        <link rel="canonical" href="https://xcr-courtier.fr/assurance-auto-malus" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Assurance Auto Malus | Solutions Après Sinistres" />
        <meta property="og:description" content="Assurance auto pour conducteurs avec coefficient bonus-malus élevé. Devis gratuit en 2 minutes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xcr-courtier.fr/assurance-auto-malus" />
        <meta property="og:image" content="https://images.pexels.com/photos/3807330/pexels-photo-3807330.jpeg" />
        
        {/* Schema.org Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Assurance Auto Malus",
            "description": "Assurance auto pour conducteurs avec coefficient bonus-malus élevé",
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
                Assurance Auto Malus
                <span className="text-secondary-400"> - Solutions Après Sinistres</span>
              </h1>
              
              <p className="text-xl text-gray-200 mb-8">
                Des solutions d'assurance adaptées pour les conducteurs avec un coefficient bonus-malus élevé. Retrouvez la route en toute sérénité.
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
              <AutoInsuranceQuoteForm formType="malus" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Nos solutions pour conducteurs avec malus
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une seconde chance pour tous les conducteurs, quel que soit votre coefficient
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

      {/* Niveaux de malus */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Solutions adaptées à votre coefficient
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quel que soit votre niveau de malus, nous avons une solution pour vous
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {malusRanges.map((range, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  {range.icon}
                  <h3 className="text-xl font-bold text-primary-800 ml-3">{range.range}</h3>
                </div>
                <p className="text-gray-600">{range.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprendre le bonus-malus */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Comprendre le système bonus-malus
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comment fonctionne le coefficient de réduction-majoration et comment l'améliorer
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-bold text-primary-800 mb-4">Comment évolue votre coefficient</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Réduction de 5%</strong> chaque année sans sinistre responsable
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Majoration de 25%</strong> par sinistre responsable
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Majoration de 12.5%</strong> par sinistre partiellement responsable
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Minimum 0.50</strong> (50% de réduction) après plusieurs années sans sinistre
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Maximum 3.50</strong> (250% de majoration) après plusieurs sinistres
                    </span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold text-primary-800 mb-4">Comment améliorer votre coefficient</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Conduire prudemment</strong> pour éviter tout nouveau sinistre
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Suivre un stage de récupération</strong> de points (peut influencer positivement certains assureurs)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Accepter un tracker de conduite</strong> pour démontrer votre prudence
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Opter pour une franchise plus élevée</strong> pour réduire votre prime
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Choisir un véhicule moins puissant</strong> pour réduire le risque perçu
                    </span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Avis clients */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Ils ont retrouvé la route malgré leur malus
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les témoignages de conducteurs qui ont trouvé une solution avec nous
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Marc Dupont",
                malus: "Coefficient 2.25",
                text: "Après plusieurs sinistres, mon coefficient était à 2.25 et personne ne voulait m'assurer. XCR m'a trouvé une solution adaptée et m'accompagne pour améliorer mon bonus-malus.",
                rating: 5
              },
              {
                name: "Sylvie Moreau",
                malus: "Coefficient 1.75",
                text: "Suite à un accident responsable, mon malus a grimpé. Grâce à XCR, j'ai pu obtenir une assurance à un tarif raisonnable malgré mon coefficient élevé.",
                rating: 4
              },
              {
                name: "Julien Lambert",
                malus: "Coefficient 2.50",
                text: "Avec un malus de 2.50, je pensais devoir vendre ma voiture. XCR m'a trouvé une assurance et après 2 ans sans accident, mon coefficient a déjà baissé significativement.",
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
                    <p className="text-sm text-gray-500">{testimonial.malus}</p>
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
              Tout ce que vous devez savoir sur l'assurance auto malus
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "Jusqu'à quel coefficient de malus pouvez-vous assurer ?",
                answer: "Grâce à notre réseau de partenaires spécialisés, nous pouvons généralement proposer des solutions d'assurance jusqu'à un coefficient de 3.50 (le maximum légal). Même avec un malus très élevé, nous étudions chaque situation individuellement pour trouver la meilleure solution possible. Les tarifs seront bien sûr plus élevés qu'avec un bonus, mais notre objectif est de vous permettre de rester assuré tout en vous accompagnant pour améliorer progressivement votre situation."
              },
              {
                question: "Mon malus me suit-il si je change de véhicule ou d'assureur ?",
                answer: "Oui, votre coefficient bonus-malus est personnel et vous suit quel que soit votre véhicule ou votre assureur. Il est enregistré dans un fichier central (AGIRA) consultable par tous les assureurs. Cependant, changer d'assureur peut parfois être avantageux car certaines compagnies sont plus spécialisées dans les profils à risque et proposent des tarifs plus adaptés. Notre rôle est justement de vous orienter vers l'assureur qui offrira les meilleures conditions malgré votre malus."
              },
              {
                question: "Combien de temps faut-il pour retrouver un bonus après plusieurs sinistres ?",
                answer: "Avec un coefficient maximal de 3.50, il faut théoriquement 13 années sans sinistre pour revenir à un coefficient de 1.00, puis 10 années supplémentaires pour atteindre le bonus maximal de 0.50. Cependant, en pratique, l'amélioration est plus rapide car certains assureurs proposent des programmes de réhabilitation accélérée. Après 2-3 ans sans sinistre, vous pouvez déjà bénéficier de conditions plus favorables, et notre accompagnement personnalisé vous aide à optimiser cette progression."
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
            <h2 className="text-3xl font-bold mb-6">Retrouvez la route malgré votre malus</h2>
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
              <h3 className="text-xl font-bold text-primary-800 mb-3">Assurance Conducteurs Résiliés</h3>
              <p className="text-gray-600 mb-4">
                Solutions après résiliation par votre précédent assureur.
              </p>
              <Link 
                to="/assurance-auto-conducteurs-resilies" 
                className="inline-block text-primary-600 hover:text-primary-800 font-medium"
              >
                En savoir plus
                <ArrowRight className="inline ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-primary-800 mb-3">Assurance Tous Risques</h3>
              <p className="text-gray-600 mb-4">
                Protection maximale pour votre véhicule, même en cas d'accident responsable.
              </p>
              <Link 
                to="/assurance-auto-tous-risques" 
                className="inline-block text-primary-600 hover:text-primary-800 font-medium"
              >
                En savoir plus
                <ArrowRight className="inline ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-primary-800 mb-3">Assurance Auto au Tiers</h3>
              <p className="text-gray-600 mb-4">
                La formule essentielle à prix abordable pour répondre à l'obligation légale.
              </p>
              <Link 
                to="/assurance-auto-au-tiers" 
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

export default AssuranceMalusPage;