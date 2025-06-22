import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, Car, Clock, Award, ArrowRight, Star, Info, User, Briefcase, MapPin, Phone, Users } from 'lucide-react';
import Button from '../../../components/common/Button';
import AutoInsuranceQuoteForm from '../../../components/forms/AutoInsuranceQuoteForm';

const AssuranceTransportVoyageursPage = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-primary-600" />,
      title: "Responsabilité Civile Pro",
      description: "Couverture étendue pour le transport collectif"
    },
    {
      icon: <Users className="h-8 w-8 text-primary-600" />,
      title: "Protection Passagers",
      description: "Garantie renforcée pour tous les voyageurs"
    },
    {
      icon: <Car className="h-8 w-8 text-primary-600" />,
      title: "Tous Types de Véhicules",
      description: "Du minibus à l'autocar de tourisme"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary-600" />,
      title: "Assistance Spécialisée",
      description: "Solutions d'urgence pour groupes de voyageurs"
    }
  ];

  const advantages = [
    "Couverture adaptée à tous types de transport de voyageurs",
    "Garanties spécifiques pour le transport scolaire",
    "Protection des bagages et effets personnels",
    "Assistance internationale pour les voyages à l'étranger",
    "Couverture des aménagements spécifiques des véhicules",
    "Accompagnement juridique spécialisé"
  ];

  const vehicleTypes = [
    {
      type: "Minibus (jusqu'à 9 places)",
      description: "Couverture adaptée aux petits véhicules de transport collectif pour les navettes, le transport à la demande ou les petits groupes.",
      icon: <Car className="h-6 w-6 text-primary-600" />
    },
    {
      type: "Autocars de tourisme",
      description: "Solutions spécifiques pour les autocars de tourisme avec des garanties adaptées aux voyages longue distance et internationaux.",
      icon: <Car className="h-6 w-6 text-primary-600" />
    },
    {
      type: "Transport scolaire",
      description: "Assurance dédiée au transport d'enfants avec des garanties renforcées et conformes aux exigences réglementaires spécifiques.",
      icon: <Users className="h-6 w-6 text-primary-600" />
    },
    {
      type: "Transport urbain et interurbain",
      description: "Couverture pour les véhicules de transport en commun opérant sur des lignes régulières urbaines et interurbaines.",
      icon: <MapPin className="h-6 w-6 text-primary-600" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Assurance Transport Public de Voyageurs | Autocars, Minibus | Devis Gratuit</title>
        <meta name="description" content="Assurance transport public de voyageurs : solutions pour autocars, minibus et transport scolaire. Responsabilité civile pro, protection passagers, assistance internationale. Devis gratuit." />
        <meta name="keywords" content="assurance transport voyageurs, assurance autocar, assurance minibus, assurance transport scolaire, assurance autocariste, RC pro transport" />
        <link rel="canonical" href="https://xcr-courtier.fr/assurance-auto/transport/voyageurs" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Assurance Transport Public de Voyageurs | Autocars, Minibus" />
        <meta property="og:description" content="Assurance transport public de voyageurs : solutions pour autocars, minibus et transport scolaire. Devis gratuit." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xcr-courtier.fr/assurance-auto/transport/voyageurs" />
        <meta property="og:image" content="https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg" />
        
        {/* Schema.org Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Assurance Transport Public de Voyageurs",
            "description": "Assurance spécifique pour les autocars, minibus et véhicules de transport collectif",
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
            backgroundImage: 'url("https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg")',
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
                Assurance Transport Public de Voyageurs
                <span className="text-secondary-400"> - Protection Collective</span>
              </h1>
              
              <p className="text-xl text-gray-200 mb-8">
                Une assurance spécifiquement conçue pour les professionnels du transport collectif de personnes. Protégez votre activité avec des garanties adaptées à tous types de véhicules.
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
                  Devis Transport de Voyageurs
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
              Nos garanties spécifiques pour le transport de voyageurs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une protection complète adaptée aux besoins des transporteurs de personnes
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

      {/* Types de véhicules */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Solutions pour tous types de véhicules
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des garanties adaptées à chaque catégorie de transport de voyageurs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {vehicleTypes.map((vehicle, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  {vehicle.icon}
                  <h3 className="text-xl font-bold text-primary-800 ml-3">{vehicle.type}</h3>
                </div>
                <p className="text-gray-600">{vehicle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Garanties spécifiques */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-6">
                Garanties spécifiques au transport de voyageurs
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                Notre assurance transport de voyageurs offre des garanties spécifiques pour répondre aux besoins uniques de votre activité.
              </p>

              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-primary-600 mr-2" />
                    <span className="text-gray-700">{advantage}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-primary-800 mb-6">
                Options complémentaires
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <Shield className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-700 mb-1">Perte d'exploitation</h4>
                    <p className="text-gray-600">
                      Compensation financière en cas d'immobilisation de votre véhicule suite à un sinistre.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <Award className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-700 mb-1">Assistance internationale</h4>
                    <p className="text-gray-600">
                      Couverture étendue pour les voyages à l'étranger avec rapatriement des passagers.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-700 mb-1">Protection juridique renforcée</h4>
                    <p className="text-gray-600">
                      Défense de vos intérêts face aux litiges spécifiques au transport de voyageurs.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Avis clients */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Ce que nos transporteurs en disent
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les témoignages de professionnels qui nous font confiance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Jean-Pierre Moreau",
                business: "Autocars Moreau",
                text: "Après 20 ans dans le transport touristique, j'ai enfin trouvé une assurance qui comprend nos contraintes. L'assistance internationale a été précieuse lors d'une panne en Italie avec 40 passagers.",
                rating: 5
              },
              {
                name: "Marie Dubois",
                business: "Transport Scolaire Régional",
                text: "Les garanties spécifiques pour le transport d'enfants sont parfaitement adaptées à notre activité. Le rapport qualité-prix est excellent et le service client très réactif.",
                rating: 5
              },
              {
                name: "Ahmed Benali",
                business: "Navettes Aéroport Express",
                text: "Notre flotte de minibus est parfaitement couverte. La gestion des sinistres est efficace et la mise à disposition de véhicules de remplacement nous permet de maintenir notre service sans interruption.",
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
                    <p className="text-sm text-gray-500">{testimonial.business}</p>
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
              Tout ce que vous devez savoir sur l'assurance transport de voyageurs
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "Quelles sont les obligations spécifiques pour le transport scolaire ?",
                answer: "Le transport scolaire est soumis à des exigences réglementaires strictes en matière d'assurance. Vous devez disposer d'une responsabilité civile professionnelle avec des plafonds de garantie élevés (minimum 100 millions d'euros), d'une garantie individuelle passagers renforcée, et d'une attestation spécifique mentionnant l'activité de transport d'enfants. Notre assurance transport scolaire répond à toutes ces exigences et inclut également une assistance spécialisée en cas d'incident avec prise en charge immédiate des enfants, ainsi qu'une protection juridique adaptée aux litiges spécifiques à ce secteur."
              },
              {
                question: "Comment sont calculées les primes pour une flotte d'autocars ?",
                answer: "Le calcul des primes pour une flotte d'autocars prend en compte plusieurs facteurs spécifiques : le nombre et le type de véhicules (capacité, valeur, âge), la zone géographique d'exploitation (nationale ou internationale), le type de transport effectué (ligne régulière, tourisme, scolaire), l'expérience des conducteurs, et l'historique de sinistralité de votre entreprise. Pour les flottes importantes, nous proposons une tarification personnalisée avec possibilité de franchise globale et de coassurance. Cette approche permet d'optimiser votre budget tout en maintenant un niveau de protection adapté à votre activité."
              },
              {
                question: "Quelle assistance est prévue en cas de panne à l'étranger avec des passagers ?",
                answer: "Notre assistance internationale, spécialement conçue pour les transporteurs de voyageurs, intervient 24h/24 et 7j/7 en cas de panne à l'étranger. Elle comprend le dépannage et le remorquage du véhicule sans limitation de coût, l'hébergement des passagers si nécessaire (jusqu'à 3 nuits), l'organisation et la prise en charge du rapatriement des voyageurs par des moyens adaptés (autocar de remplacement, train ou avion selon les circonstances), ainsi qu'une avance de fonds si nécessaire. Un coordinateur dédié prend en charge l'ensemble de la situation pour vous permettre de vous concentrer sur vos passagers. Cette assistance est valable dans toute l'Europe géographique et les pays du pourtour méditerranéen."
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
            <h2 className="text-3xl font-bold mb-6">Protégez votre activité de transport de voyageurs</h2>
            <p className="text-xl text-gray-200 mb-8">
              Obtenez votre devis personnalisé en moins de 2 minutes et bénéficiez de garanties adaptées à votre métier.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="accent" 
                size="lg"
                href="#top"
              >
                Obtenir mon devis transport
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
              Autres solutions pour le transport professionnel
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
              <h3 className="text-xl font-bold text-primary-800 mb-3">Assurance VTC</h3>
              <p className="text-gray-600 mb-4">
                Couverture adaptée aux chauffeurs VTC et aux plateformes de réservation.
              </p>
              <Link 
                to="/assurance-auto/transport/vtc" 
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

export default AssuranceTransportVoyageursPage;