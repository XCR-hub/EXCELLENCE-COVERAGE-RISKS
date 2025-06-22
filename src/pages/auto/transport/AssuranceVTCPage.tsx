import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, Car, Clock, Award, ArrowRight, Star, Info, User, Briefcase, MapPin, Phone, Smartphone } from 'lucide-react';
import Button from '../../../components/common/Button';
import AutoInsuranceQuoteForm from '../../../components/forms/AutoInsuranceQuoteForm';

const AssuranceVTCPage = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-primary-600" />,
      title: "Responsabilité Civile Pro",
      description: "Couverture spécifique pour le transport de personnes"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary-600" />,
      title: "Protection Activité VTC",
      description: "Garanties adaptées aux plateformes de réservation"
    },
    {
      icon: <Car className="h-8 w-8 text-primary-600" />,
      title: "Véhicule Premium",
      description: "Couverture adaptée aux véhicules haut de gamme"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary-600" />,
      title: "Assistance Prioritaire",
      description: "Dépannage express et véhicule de remplacement"
    }
  ];

  const advantages = [
    "Tarifs compétitifs spécifiques aux chauffeurs VTC",
    "Couverture pendant et entre les courses",
    "Protection des équipements professionnels",
    "Assistance 0km 24h/24 avec véhicule de remplacement",
    "Garantie perte d'exploitation en option",
    "Accompagnement juridique spécialisé"
  ];

  const legalRequirements = [
    {
      title: "Carte Professionnelle VTC",
      description: "Une assurance spécifique VTC est obligatoire pour obtenir et conserver votre carte professionnelle délivrée par la préfecture.",
      icon: <Briefcase className="h-6 w-6 text-primary-600" />
    },
    {
      title: "Responsabilité Civile Professionnelle",
      description: "Cette garantie obligatoire couvre les dommages causés aux tiers, y compris vos passagers, avec des plafonds adaptés au transport de personnes.",
      icon: <Shield className="h-6 w-6 text-primary-600" />
    },
    {
      title: "Macaron VMDTR",
      description: "L'assurance professionnelle est nécessaire pour obtenir le macaron 'Véhicule de Transport avec Chauffeur' obligatoire sur votre véhicule.",
      icon: <Car className="h-6 w-6 text-primary-600" />
    },
    {
      title: "Contrôle Technique",
      description: "Une assurance professionnelle valide est requise lors des contrôles techniques spécifiques aux VTC, effectués tous les 6 mois.",
      icon: <CheckCircle className="h-6 w-6 text-primary-600" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Assurance VTC 2025 | Devis Gratuit | Couverture Spécifique Chauffeurs VTC</title>
        <meta name="description" content="Assurance VTC adaptée aux chauffeurs professionnels. Responsabilité civile pro, protection pendant et entre les courses, véhicule de remplacement. Devis gratuit." />
        <meta name="keywords" content="assurance VTC, assurance chauffeur VTC, RC pro VTC, assurance transport personnes, assurance Uber, assurance professionnelle VTC" />
        <link rel="canonical" href="https://xcr-courtier.fr/assurance-auto/transport/vtc" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Assurance VTC | Couverture Spécifique Chauffeurs VTC" />
        <meta property="og:description" content="Assurance VTC adaptée aux chauffeurs professionnels. Devis gratuit en 2 minutes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xcr-courtier.fr/assurance-auto/transport/vtc" />
        <meta property="og:image" content="https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg" />
        
        {/* Schema.org Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Assurance VTC",
            "description": "Assurance spécifique pour les chauffeurs VTC et le transport de personnes",
            "provider": {
              "@type": "Organization",
              "name": "XCR Courtier"
            },
            "serviceType": "Assurance Auto Professionnelle",
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
            backgroundImage: 'url("https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg")',
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
                Assurance VTC
                <span className="text-secondary-400"> - Protection Chauffeur</span>
              </h1>
              
              <p className="text-xl text-gray-200 mb-8">
                Une assurance spécifiquement conçue pour les chauffeurs VTC. Protégez votre activité avec des garanties adaptées au transport de personnes à la demande.
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
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-primary-800 mb-2">
                  Devis Assurance VTC
                </h2>
                <p className="text-gray-600">
                  Obtenez votre tarif personnalisé en 2 minutes
                </p>
              </div>
              <AutoInsuranceQuoteForm formType="professionnelle" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Nos garanties spécifiques pour les VTC
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une protection complète adaptée aux besoins des chauffeurs VTC
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

      {/* Obligations légales */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Obligations légales des chauffeurs VTC
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les exigences réglementaires en matière d'assurance pour exercer votre activité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {legalRequirements.map((requirement, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  {requirement.icon}
                  <h3 className="text-xl font-bold text-primary-800 ml-3">{requirement.title}</h3>
                </div>
                <p className="text-gray-600">{requirement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plateformes VTC */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Compatible avec toutes les plateformes VTC
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notre assurance répond aux exigences de toutes les plateformes de réservation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              className="bg-white rounded-lg shadow-md p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-800 mb-3">Uber</h3>
              <p className="text-gray-600">
                Notre assurance VTC répond à toutes les exigences d'Uber pour exercer en toute légalité sur la plateforme.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-md p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-800 mb-3">Bolt</h3>
              <p className="text-gray-600">
                Attestation conforme aux critères de Bolt pour une activation rapide de votre compte chauffeur.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-md p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-800 mb-3">Autres plateformes</h3>
              <p className="text-gray-600">
                Compatible avec toutes les plateformes VTC : Heetch, Marcel, FreeNow, Allocab et autres services de réservation.
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
              Ce que nos chauffeurs VTC en disent
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les témoignages de professionnels qui nous font confiance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Thomas Legrand",
                platform: "Uber & Bolt",
                text: "Après avoir comparé plusieurs offres, j'ai choisi XCR pour mon activité VTC. La différence s'est vue lors d'un sinistre : véhicule de remplacement en 2h et aucune perte de revenus. Parfait !",
                rating: 5
              },
              {
                name: "Nadia Benmoussa",
                platform: "Uber",
                text: "L'assurance comprend parfaitement les spécificités de notre métier. Le tarif est adapté à mon activité réelle et j'apprécie la flexibilité des options. Service client très réactif.",
                rating: 5
              },
              {
                name: "Alexandre Petit",
                platform: "Heetch & FreeNow",
                text: "La garantie perte d'exploitation a été un vrai plus quand mon véhicule a été immobilisé 10 jours. J'ai pu maintenir mes revenus pendant les réparations. Je recommande vivement.",
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
                    <p className="text-sm text-gray-500">Chauffeur sur {testimonial.platform}</p>
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
              Tout ce que vous devez savoir sur l'assurance VTC
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "Suis-je couvert entre deux courses VTC ?",
                answer: "Oui, notre assurance VTC vous couvre en permanence pendant votre temps de travail, que vous ayez des passagers à bord ou que vous soyez en attente de course. Cette couverture continue est essentielle pour votre activité de VTC, contrairement à certaines assurances qui ne couvrent que lorsque vous avez des passagers. Vous êtes ainsi protégé lors de vos déplacements entre deux prises en charge, pendant vos pauses, ou lorsque vous êtes connecté à une application en attente de réservation."
              },
              {
                question: "Puis-je utiliser mon véhicule à titre personnel avec une assurance VTC ?",
                answer: "Oui, notre assurance VTC couvre également votre usage personnel du véhicule. Vous n'avez pas besoin de souscrire deux assurances distinctes. Lors de la souscription, nous prenons en compte la répartition entre usage professionnel et personnel pour établir un tarif équitable. Cette formule mixte vous permet d'utiliser votre véhicule pour vos déplacements privés en dehors de votre activité de VTC, sans restriction particulière. Vous devez simplement nous déclarer tous les conducteurs habituels du véhicule pour l'usage personnel."
              },
              {
                question: "Que se passe-t-il en cas d'immobilisation de mon véhicule VTC ?",
                answer: "En cas d'immobilisation de votre véhicule suite à un sinistre garanti, notre assurance VTC vous propose plusieurs solutions pour maintenir votre activité. Notre assistance 0km intervient immédiatement pour le dépannage et le remorquage. Nous mettons à votre disposition un véhicule de remplacement de catégorie équivalente sous 2 heures en zone urbaine, adapté à votre activité VTC et conforme aux exigences des plateformes. Si vous avez souscrit l'option perte d'exploitation, vous recevez également une indemnité journalière compensant votre perte de revenus pendant la durée des réparations."
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
            <h2 className="text-3xl font-bold mb-6">Protégez votre activité VTC dès aujourd'hui</h2>
            <p className="text-xl text-gray-200 mb-8">
              Obtenez votre devis personnalisé en moins de 2 minutes et bénéficiez de garanties adaptées à votre métier.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="accent" 
                size="lg"
                href="#top"
              >
                Obtenir mon devis VTC
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                href="tel:+33180855781"
                className="border-white text-white hover:bg-white/10"
              >
                <Phone className="w-5 h-5 mr-2" />
                Parler à un expert
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Autres solutions transport */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Autres solutions pour le transport de personnes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos offres adaptées à chaque type de transport
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-primary-800 mb-3">Assurance Taxi</h3>
              <p className="text-gray-600 mb-4">
                Solutions spécifiques pour les chauffeurs de taxi avec des garanties adaptées à votre activité.
              </p>
              <Link 
                to="/assurance-auto/transport/taxi" 
                className="inline-block text-primary-600 hover:text-primary-800 font-medium"
              >
                En savoir plus
                <ArrowRight className="inline ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-primary-800 mb-3">Transport Public de Voyageurs</h3>
              <p className="text-gray-600 mb-4">
                Assurance pour les autocaristes et transporteurs de voyageurs professionnels.
              </p>
              <Link 
                to="/assurance-auto/transport/voyageurs" 
                className="inline-block text-primary-600 hover:text-primary-800 font-medium"
              >
                En savoir plus
                <ArrowRight className="inline ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-primary-800 mb-3">Professionnels de la Route</h3>
              <p className="text-gray-600 mb-4">
                Couverture complète pour tous les professionnels du transport routier.
              </p>
              <Link 
                to="/assurance-auto/transport/professionnels-route" 
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

export default AssuranceVTCPage;