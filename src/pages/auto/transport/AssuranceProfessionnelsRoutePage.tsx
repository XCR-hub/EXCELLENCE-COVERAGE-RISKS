import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, Car, Clock, Award, ArrowRight, Star, Info, User, Briefcase, MapPin, Phone, Truck } from 'lucide-react';
import Button from '../../../components/common/Button';
import AutoInsuranceQuoteForm from '../../../components/forms/AutoInsuranceQuoteForm';

const AssuranceProfessionnelsRoutePage = () => {
  const features = [
    {
      icon: <Truck className="h-8 w-8 text-primary-600" />,
      title: "Tous Professionnels",
      description: "Solutions pour tous métiers de la route"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary-600" />,
      title: "Couverture Étendue",
      description: "Protection adaptée aux risques spécifiques"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary-600" />,
      title: "Assistance Dédiée",
      description: "Intervention rapide pour limiter l'immobilisation"
    },
    {
      icon: <Award className="h-8 w-8 text-primary-600" />,
      title: "Expertise Sectorielle",
      description: "Conseillers spécialisés dans le transport"
    }
  ];

  const advantages = [
    "Couverture adaptée à votre activité spécifique",
    "Protection des marchandises transportées",
    "Assistance 0km avec dépannage lourd si nécessaire",
    "Garantie des aménagements et équipements spécifiques",
    "Couverture internationale pour les transporteurs",
    "Accompagnement juridique spécialisé"
  ];

  const professionalTypes = [
    {
      type: "Transporteurs routiers",
      description: "Assurance adaptée aux transporteurs de marchandises avec couverture nationale et internationale.",
      icon: <Truck className="h-6 w-6 text-primary-600" />
    },
    {
      type: "Coursiers et livreurs",
      description: "Solutions pour les professionnels de la livraison du dernier kilomètre et les coursiers indépendants.",
      icon: <Car className="h-6 w-6 text-primary-600" />
    },
    {
      type: "Ambulanciers",
      description: "Couverture spécifique pour le transport sanitaire avec des garanties adaptées au transport de patients.",
      icon: <Car className="h-6 w-6 text-primary-600" />
    },
    {
      type: "Auto-écoles",
      description: "Assurance pour les véhicules à double commande et l'activité d'enseignement de la conduite.",
      icon: <Car className="h-6 w-6 text-primary-600" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Assurance Professionnels de la Route | Transporteurs, Livreurs | Devis Gratuit</title>
        <meta name="description" content="Assurance pour tous les professionnels de la route : transporteurs, coursiers, ambulanciers, auto-écoles. Couverture adaptée à chaque métier, assistance dédiée. Devis gratuit." />
        <meta name="keywords" content="assurance professionnels route, assurance transporteur, assurance coursier, assurance livreur, assurance ambulancier, assurance auto-école" />
        <link rel="canonical" href="https://xcr-courtier.fr/assurance-auto/transport/professionnels-route" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Assurance Professionnels de la Route | Transporteurs, Livreurs" />
        <meta property="og:description" content="Assurance pour tous les professionnels de la route : transporteurs, coursiers, ambulanciers, auto-écoles. Devis gratuit." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xcr-courtier.fr/assurance-auto/transport/professionnels-route" />
        <meta property="og:image" content="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg" />
        
        {/* Schema.org Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Assurance Professionnels de la Route",
            "description": "Assurance spécifique pour tous les professionnels du transport routier",
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
            backgroundImage: 'url("https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg")',
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
                Assurance Professionnels de la Route
                <span className="text-secondary-400"> - Protection Métier</span>
              </h1>
              
              <p className="text-xl text-gray-200 mb-8">
                Une assurance spécifiquement conçue pour tous les professionnels de la route. Protégez votre activité avec des garanties adaptées à votre métier.
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
                  Devis Professionnels de la Route
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
              Nos garanties pour les professionnels de la route
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une protection complète adaptée aux besoins spécifiques de chaque métier
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

      {/* Types de professionnels */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Solutions pour tous les métiers de la route
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des garanties adaptées à chaque profession du transport
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {professionalTypes.map((professional, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  {professional.icon}
                  <h3 className="text-xl font-bold text-primary-800 ml-3">{professional.type}</h3>
                </div>
                <p className="text-gray-600">{professional.description}</p>
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
                Garanties spécifiques aux professionnels de la route
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                Notre assurance offre des garanties spécifiques pour répondre aux besoins uniques de votre activité professionnelle.
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
                    <Truck className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-700 mb-1">Marchandises transportées</h4>
                    <p className="text-gray-600">
                      Protection des marchandises et biens transportés dans le cadre de votre activité professionnelle.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-700 mb-1">Couverture internationale</h4>
                    <p className="text-gray-600">
                      Extension de garanties pour les déplacements professionnels à l'étranger.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-700 mb-1">Perte d'exploitation</h4>
                    <p className="text-gray-600">
                      Compensation financière en cas d'immobilisation de votre véhicule suite à un sinistre.
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
              Ce que nos professionnels en disent
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les témoignages de professionnels qui nous font confiance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Philippe Durand",
                business: "Transport Express",
                text: "En tant que transporteur routier, j'apprécie particulièrement la réactivité du service d'assistance. Lors d'une panne sur l'autoroute, j'ai été dépanné en moins d'une heure et mon camion a été réparé en 48h.",
                rating: 5
              },
              {
                name: "Sylvie Martin",
                business: "Auto-École du Centre",
                text: "L'assurance pour nos véhicules à double commande est parfaitement adaptée à notre activité. Les garanties spécifiques pour l'enseignement de la conduite nous offrent une tranquillité d'esprit totale.",
                rating: 4
              },
              {
                name: "Rachid Benali",
                business: "Livraison Express",
                text: "En tant que livreur indépendant, j'ai enfin trouvé une assurance qui comprend mes besoins. La couverture des marchandises transportées et l'assistance 0km sont indispensables pour mon activité.",
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
              Tout ce que vous devez savoir sur l'assurance pour professionnels de la route
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "Comment sont couvertes les marchandises transportées ?",
                answer: "Notre garantie 'marchandises transportées' couvre les biens que vous transportez dans le cadre de votre activité professionnelle contre les dommages résultant d'un accident de la route, d'un vol, d'un incendie ou d'événements naturels. La couverture s'applique pendant le transport et les opérations de chargement/déchargement. Les montants de garantie sont adaptables selon la valeur et la nature des marchandises transportées. Pour les transporteurs publics de marchandises, cette garantie peut être complétée par une assurance spécifique RC Transporteur conforme à la Convention CMR pour les transports internationaux."
              },
              {
                question: "Quelles sont les spécificités pour les auto-écoles ?",
                answer: "L'assurance auto-école couvre les risques spécifiques liés à l'enseignement de la conduite : responsabilité civile étendue couvrant les dommages causés pendant les leçons, protection des véhicules à double commande, couverture des élèves conducteurs sans surprime, et garantie des aménagements spécifiques (doubles commandes, signalétique). Elle inclut également une protection juridique adaptée aux litiges spécifiques à cette profession et une assistance avec véhicule de remplacement équipé de doubles commandes en cas d'immobilisation. Nos contrats sont conformes aux exigences réglementaires pour l'agrément des écoles de conduite."
              },
              {
                question: "L'assurance couvre-t-elle les équipements spécifiques de mon véhicule professionnel ?",
                answer: "Oui, notre assurance pour professionnels de la route inclut la couverture des équipements et aménagements spécifiques de votre véhicule. Cela comprend les équipements fixes (hayons élévateurs, systèmes frigorifiques, grues, bennes, doubles commandes pour auto-écoles) et les équipements amovibles professionnels (outillage, matériel médical pour ambulances). Ces équipements sont couverts à leur valeur réelle en cas de vol, incendie, ou dommages suite à un accident. Il est important de déclarer précisément ces équipements lors de la souscription pour garantir une indemnisation adéquate en cas de sinistre."
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
            <h2 className="text-3xl font-bold mb-6">Protégez votre activité professionnelle</h2>
            <p className="text-xl text-gray-200 mb-8">
              Obtenez votre devis personnalisé en moins de 2 minutes et bénéficiez de garanties adaptées à votre métier.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="accent" 
                size="lg"
                href="#top"
              >
                Obtenir mon devis professionnel
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
          </div>
        </div>
      </section>
    </>
  );
};

export default AssuranceProfessionnelsRoutePage;