import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, Car, Clock, Award, ArrowRight, Star, Info, User, Briefcase, Building, BarChart, Settings, Phone, Users } from 'lucide-react';
import Button from '../../../components/common/Button';
import AutoInsuranceQuoteForm from '../../../components/forms/AutoInsuranceQuoteForm';

const AssuranceFlottesVoyageursPage = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-primary-600" />,
      title: "Spécial Voyageurs",
      description: "Garanties adaptées au transport de personnes"
    },
    {
      icon: <Building className="h-8 w-8 text-primary-600" />,
      title: "Gestion Centralisée",
      description: "Un seul contrat pour tous vos véhicules"
    },
    {
      icon: <BarChart className="h-8 w-8 text-primary-600" />,
      title: "Tarifs Dégressifs",
      description: "Économies d'échelle selon le nombre de véhicules"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary-600" />,
      title: "Assistance Spécialisée",
      description: "Solutions d'urgence pour groupes de voyageurs"
    }
  ];

  const advantages = [
    "Gestion simplifiée avec un contrat unique",
    "Garanties spécifiques pour le transport de personnes",
    "Assistance internationale avec prise en charge des passagers",
    "Tarification dégressive selon le nombre de véhicules",
    "Interlocuteur dédié pour votre flotte",
    "Solutions de prévention des risques routiers"
  ];

  const vehicleTypes = [
    {
      type: "Minibus et navettes",
      description: "Couverture adaptée aux flottes de véhicules de moins de 9 places pour le transport à la demande.",
      icon: <Car className="h-6 w-6 text-primary-600" />
    },
    {
      type: "Autocars de tourisme",
      description: "Solutions spécifiques pour les flottes d'autocars de tourisme avec des garanties adaptées aux voyages longue distance.",
      icon: <Car className="h-6 w-6 text-primary-600" />
    },
    {
      type: "Transport scolaire",
      description: "Assurance dédiée aux flottes de véhicules de transport scolaire avec des garanties renforcées pour les enfants.",
      icon: <Users className="h-6 w-6 text-primary-600" />
    },
    {
      type: "Transport urbain et interurbain",
      description: "Couverture pour les flottes de véhicules de transport en commun opérant sur des lignes régulières.",
      icon: <Car className="h-6 w-6 text-primary-600" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Assurance Flottes Transport de Voyageurs | Autocars, Minibus | Devis Gratuit</title>
        <meta name="description" content="Assurance flottes transport de voyageurs : solutions pour autocaristes et transporteurs de personnes. Garanties spécifiques, assistance internationale, gestion centralisée. Devis gratuit." />
        <meta name="keywords" content="assurance flottes voyageurs, assurance autocar, assurance minibus, assurance transport scolaire, assurance autocariste, assurance transport personnes" />
        <link rel="canonical" href="https://xcr-courtier.fr/assurance-auto/flottes/transport-voyageurs" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Assurance Flottes Transport de Voyageurs | Autocars, Minibus" />
        <meta property="og:description" content="Assurance flottes transport de voyageurs avec garanties spécifiques et assistance internationale. Devis gratuit en 2 minutes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xcr-courtier.fr/assurance-auto/flottes/transport-voyageurs" />
        <meta property="og:image" content="https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg" />
        
        {/* Schema.org Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Assurance Flottes Transport de Voyageurs",
            "description": "Assurance pour flottes de véhicules de transport de personnes et autocaristes",
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
                Assurance Flottes Transport de Voyageurs
                <span className="text-secondary-400"> - Protection Collective</span>
              </h1>
              
              <p className="text-xl text-gray-200 mb-8">
                Une assurance spécifiquement conçue pour les entreprises de transport de personnes. Protégez votre flotte et vos passagers avec des garanties adaptées à votre activité.
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
                  Devis Flottes Voyageurs
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

      {/* Services inclus */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Services inclus dans notre offre flottes voyageurs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un accompagnement complet pour optimiser la gestion de votre flotte
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-primary-800 mb-4 flex items-center">
                <BarChart className="h-6 w-6 text-primary-600 mr-2" />
                Reporting et analyse
              </h3>
              <p className="text-gray-600 mb-4">
                Suivi détaillé de la sinistralité de votre flotte avec rapports périodiques.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Tableaux de bord personnalisés</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Analyse des coûts et recommandations</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold text-primary-800 mb-4 flex items-center">
                <Users className="h-6 w-6 text-primary-600 mr-2" />
                Assistance passagers
              </h3>
              <p className="text-gray-600 mb-4">
                Solutions d'urgence pour la prise en charge de vos passagers en cas d'incident.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Rapatriement des voyageurs</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Hébergement d'urgence si nécessaire</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-primary-800 mb-4 flex items-center">
                <Shield className="h-6 w-6 text-primary-600 mr-2" />
                Prévention des risques
              </h3>
              <p className="text-gray-600 mb-4">
                Programmes de prévention pour réduire la sinistralité de votre flotte.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Formation des conducteurs</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Audit de sécurité et recommandations</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-primary-800 mb-4 flex items-center">
                <Clock className="h-6 w-6 text-primary-600 mr-2" />
                Gestion des sinistres
              </h3>
              <p className="text-gray-600 mb-4">
                Prise en charge rapide et efficace des sinistres pour minimiser l'impact sur votre activité.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Déclaration simplifiée</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Suivi personnalisé de chaque dossier</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Avis clients */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Ce que nos transporteurs de voyageurs en disent
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les témoignages d'entreprises qui nous font confiance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Jean-Pierre Moreau",
                company: "Autocars Moreau",
                text: "Avec une flotte de 15 autocars, la gestion des assurances était complexe. XCR nous a proposé une solution centralisée qui nous fait gagner un temps précieux et nous a permis de réduire nos coûts.",
                rating: 5
              },
              {
                name: "Marie Dubois",
                company: "Transport Scolaire Régional",
                text: "Les garanties spécifiques pour le transport d'enfants sont parfaitement adaptées à notre activité. L'assistance en cas de panne avec prise en charge des élèves est un atout majeur.",
                rating: 5
              },
              {
                name: "Ahmed Benali",
                company: "Navettes Aéroport Express",
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
              Tout ce que vous devez savoir sur l'assurance flottes transport de voyageurs
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "Quelles sont les obligations spécifiques pour les flottes de transport scolaire ?",
                answer: "Les flottes de transport scolaire sont soumises à des exigences réglementaires strictes en matière d'assurance. Vous devez disposer d'une responsabilité civile professionnelle avec des plafonds de garantie élevés (minimum 100 millions d'euros), d'une garantie individuelle passagers renforcée, et d'attestations spécifiques mentionnant l'activité de transport d'enfants pour chaque véhicule. Notre assurance flottes transport scolaire répond à toutes ces exigences et inclut également une assistance spécialisée en cas d'incident avec prise en charge immédiate des enfants, ainsi qu'une protection juridique adaptée aux litiges spécifiques à ce secteur. Nous proposons également des programmes de prévention des risques spécifiques au transport d'enfants."
              },
              {
                question: "Comment sont calculées les primes pour une flotte d'autocars ?",
                answer: "Le calcul des primes pour une flotte d'autocars prend en compte plusieurs facteurs spécifiques : le nombre et le type de véhicules (capacité, valeur, âge), la zone géographique d'exploitation (nationale ou internationale), le type de transport effectué (ligne régulière, tourisme, scolaire), l'expérience des conducteurs, et l'historique de sinistralité de votre entreprise. Pour les flottes importantes, nous proposons une tarification personnalisée avec possibilité de franchise globale et de coassurance. Cette approche permet d'optimiser votre budget tout en maintenant un niveau de protection adapté à votre activité. Un audit préalable de votre flotte nous permet de vous proposer la solution la plus adaptée à votre profil de risque."
              },
              {
                question: "Quelle assistance est prévue en cas de panne à l'étranger avec des passagers ?",
                answer: "Notre assistance internationale, spécialement conçue pour les transporteurs de voyageurs, intervient 24h/24 et 7j/7 en cas de panne à l'étranger. Elle comprend le dépannage et le remorquage du véhicule sans limitation de coût, l'hébergement des passagers si nécessaire (jusqu'à 3 nuits), l'organisation et la prise en charge du rapatriement des voyageurs par des moyens adaptés (autocar de remplacement, train ou avion selon les circonstances), ainsi qu'une avance de fonds si nécessaire. Un coordinateur dédié prend en charge l'ensemble de la situation pour vous permettre de vous concentrer sur vos passagers. Cette assistance est valable dans toute l'Europe géographique et les pays du pourtour méditerranéen, et s'adapte au nombre de passagers transportés."
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
            <h2 className="text-3xl font-bold mb-6">Protégez votre flotte de transport de voyageurs</h2>
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
              <h3 className="text-xl font-bold text-primary-800 mb-3">Flottes Transport de Marchandises</h3>
              <p className="text-gray-600 mb-4">
                Solutions spécifiques pour les entreprises de transport de marchandises et logistique.
              </p>
              <Link 
                to="/assurance-auto/flottes/transport-marchandises" 
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

export default AssuranceFlottesVoyageursPage;