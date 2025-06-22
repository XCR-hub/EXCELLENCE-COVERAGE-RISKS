import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, Car, Clock, Award, ArrowRight, Star, Info, User, Briefcase, Building, BarChart, Settings, Phone, Truck, Package } from 'lucide-react';
import Button from '../../../components/common/Button';
import AutoInsuranceQuoteForm from '../../../components/forms/AutoInsuranceQuoteForm';

const AssuranceFlottesMarchandisesPage = () => {
  const features = [
    {
      icon: <Truck className="h-8 w-8 text-primary-600" />,
      title: "Spécial Transport",
      description: "Garanties adaptées au transport de marchandises"
    },
    {
      icon: <Package className="h-8 w-8 text-primary-600" />,
      title: "Marchandises Couvertes",
      description: "Protection des biens transportés"
    },
    {
      icon: <Building className="h-8 w-8 text-primary-600" />,
      title: "Gestion Centralisée",
      description: "Un seul contrat pour tous vos véhicules"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary-600" />,
      title: "Couverture Internationale",
      description: "Protection dans toute l'Europe"
    }
  ];

  const advantages = [
    "Gestion simplifiée avec un contrat unique",
    "Couverture des marchandises transportées",
    "Assistance spéciale poids lourds 24h/24",
    "Tarification dégressive selon le nombre de véhicules",
    "Interlocuteur dédié pour votre flotte",
    "Solutions de prévention des risques routiers"
  ];

  const vehicleTypes = [
    {
      type: "Véhicules utilitaires légers",
      description: "Couverture adaptée aux flottes de VUL pour la livraison urbaine et périurbaine.",
      icon: <Car className="h-6 w-6 text-primary-600" />
    },
    {
      type: "Poids lourds",
      description: "Solutions spécifiques pour les flottes de camions et semi-remorques avec assistance dédiée.",
      icon: <Truck className="h-6 w-6 text-primary-600" />
    },
    {
      type: "Véhicules spéciaux",
      description: "Assurance pour les véhicules spécifiques : frigorifiques, citernes, bennes, porte-conteneurs...",
      icon: <Truck className="h-6 w-6 text-primary-600" />
    },
    {
      type: "Flottes mixtes",
      description: "Couverture globale pour les entreprises disposant de différents types de véhicules de transport.",
      icon: <Car className="h-6 w-6 text-primary-600" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Assurance Flottes Transport de Marchandises | Logistique | Devis Gratuit</title>
        <meta name="description" content="Assurance flottes transport de marchandises : solutions pour transporteurs et logisticiens. Couverture des marchandises, assistance spéciale poids lourds, gestion centralisée. Devis gratuit." />
        <meta name="keywords" content="assurance flottes transport, assurance camions, assurance poids lourds, assurance marchandises transportées, assurance logistique, assurance transporteur" />
        <link rel="canonical" href="https://xcr-courtier.fr/assurance-auto/flottes/transport-marchandises" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Assurance Flottes Transport de Marchandises | Logistique" />
        <meta property="og:description" content="Assurance flottes transport de marchandises avec couverture des biens transportés. Devis gratuit en 2 minutes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xcr-courtier.fr/assurance-auto/flottes/transport-marchandises" />
        <meta property="og:image" content="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg" />
        
        {/* Schema.org Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Assurance Flottes Transport de Marchandises",
            "description": "Assurance pour flottes de véhicules de transport de marchandises et logistique",
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
                Assurance Flottes Transport de Marchandises
                <span className="text-secondary-400"> - Protection Logistique</span>
              </h1>
              
              <p className="text-xl text-gray-200 mb-8">
                Une assurance spécifiquement conçue pour les entreprises de transport de marchandises. Protégez votre flotte et les biens transportés avec des garanties adaptées à votre activité.
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
                  Devis Flottes Transport
                </h2>
                <p className="text-gray-600">
                  Obtenez votre tarif personnalisé en 2 minutes
                </p>
              </div>
              <AutoInsuranceQuoteForm formType="flottes" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Nos garanties spécifiques pour le transport de marchandises
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une protection complète adaptée aux besoins des transporteurs
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
              Solutions pour tous types de véhicules de transport
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des garanties adaptées à chaque catégorie de véhicule de votre flotte
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
                Garanties spécifiques au transport de marchandises
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                Notre assurance flottes transport offre des garanties spécifiques pour répondre aux besoins uniques de votre activité.
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
                    <Package className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-700 mb-1">RC Marchandises Transportées</h4>
                    <p className="text-gray-600">
                      Couverture de votre responsabilité civile contractuelle pour les marchandises que vous transportez.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <Truck className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-700 mb-1">Bris de machine</h4>
                    <p className="text-gray-600">
                      Protection des équipements spécifiques de vos véhicules (hayons, grues, systèmes frigorifiques).
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
                      Compensation financière en cas d'immobilisation de vos véhicules suite à un sinistre.
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
              Découvrez les témoignages d'entreprises qui nous font confiance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Philippe Durand",
                company: "Transports Durand",
                text: "Avec une flotte de 25 camions, la gestion des assurances était un casse-tête. XCR nous a proposé une solution centralisée qui nous fait gagner un temps précieux et nous a permis de réduire nos coûts de 15%.",
                rating: 5
              },
              {
                name: "Sophie Martin",
                company: "Express Livraison",
                text: "La couverture des marchandises transportées est un vrai plus pour notre activité de messagerie. Le service d'assistance est très réactif, essentiel quand on a 40 véhicules sur la route.",
                rating: 5
              },
              {
                name: "Karim Benali",
                company: "Benali Logistique",
                text: "Notre interlocuteur dédié comprend parfaitement les enjeux du transport international. La gestion des sinistres est rapide et professionnelle, un atout majeur pour notre entreprise.",
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
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
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
              Tout ce que vous devez savoir sur l'assurance flottes transport de marchandises
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "Quelle est la différence entre l'assurance du véhicule et l'assurance des marchandises transportées ?",
                answer: "L'assurance du véhicule couvre les dommages au véhicule lui-même et la responsabilité civile pour les dommages causés aux tiers. L'assurance des marchandises transportées, quant à elle, couvre spécifiquement les biens que vous transportez pour le compte de vos clients. Cette distinction est essentielle pour les transporteurs, car votre responsabilité contractuelle envers les marchandises est régie par des conventions spécifiques (comme la CMR pour le transport international). Notre solution d'assurance flottes transport peut intégrer ces deux aspects dans un contrat global, avec des garanties adaptées à votre activité et aux types de marchandises que vous transportez."
              },
              {
                question: "Comment l'assurance s'adapte-t-elle aux différents types de véhicules de ma flotte ?",
                answer: "Notre assurance flottes transport de marchandises est conçue pour s'adapter à l'hétérogénéité de votre parc. Chaque catégorie de véhicule (VUL, porteurs, tracteurs, semi-remorques, véhicules spéciaux) bénéficie de garanties spécifiques adaptées à ses caractéristiques et à son usage. Par exemple, les poids lourds disposent d'une assistance spécialisée avec dépannage lourd, tandis que les véhicules frigorifiques bénéficient d'une couverture spécifique pour leurs équipements de réfrigération. Cette approche modulaire permet d'optimiser votre couverture tout en maîtrisant votre budget global. Votre gestionnaire de flotte dédié vous accompagne dans cette personnalisation."
              },
              {
                question: "Comment fonctionne l'assistance en cas de panne ou d'accident à l'étranger ?",
                answer: "Notre assistance internationale, spécialement conçue pour les transporteurs, intervient 24h/24 et 7j/7 en cas de panne ou d'accident à l'étranger. Elle comprend le dépannage et le remorquage des poids lourds sans limitation de coût, l'organisation des réparations avec notre réseau de garages agréés en Europe, la mise à disposition d'un véhicule de remplacement si nécessaire, et la prise en charge des frais d'hébergement du conducteur. Pour les marchandises périssables ou urgentes, nous organisons également leur transbordement et acheminement. Un coordinateur multilingue dédié suit votre dossier de A à Z et vous tient informé en temps réel. Cette assistance est valable dans toute l'Europe géographique et les pays du pourtour méditerranéen."
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
            <h2 className="text-3xl font-bold mb-6">Protégez votre flotte de transport dès aujourd'hui</h2>
            <p className="text-xl text-gray-200 mb-8">
              Obtenez votre devis personnalisé et découvrez comment notre solution peut vous faire économiser temps et argent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="accent" 
                size="lg"
                href="#top"
              >
                Demander une étude personnalisée
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

      {/* Autres solutions flottes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Autres solutions pour les flottes automobiles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos offres adaptées à chaque type de flotte
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-primary-800 mb-3">Flottes en Compte Propre</h3>
              <p className="text-gray-600 mb-4">
                Solutions pour les entreprises disposant d'une flotte pour leurs activités propres.
              </p>
              <Link 
                to="/assurance-auto/flottes/compte-propre" 
                className="inline-block text-primary-600 hover:text-primary-800 font-medium"
              >
                En savoir plus
                <ArrowRight className="inline ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-primary-800 mb-3">Flottes Transport de Voyageurs</h3>
              <p className="text-gray-600 mb-4">
                Couverture adaptée aux entreprises de transport de personnes et autocaristes.
              </p>
              <Link 
                to="/assurance-auto/flottes/transport-voyageurs" 
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

export default AssuranceFlottesMarchandisesPage;