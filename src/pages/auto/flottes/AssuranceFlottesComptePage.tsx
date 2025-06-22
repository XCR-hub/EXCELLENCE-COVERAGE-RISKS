import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, Car, Clock, Award, ArrowRight, Star, Info, User, Briefcase, Building, BarChart, Settings, Phone } from 'lucide-react';
import Button from '../../../components/common/Button';
import AutoInsuranceQuoteForm from '../../../components/forms/AutoInsuranceQuoteForm';
import { AutoInsuranceBreadcrumbs } from '../../../components/navigation';

const AssuranceFlottesComptePage = () => {
  const features = [
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
      icon: <Settings className="h-8 w-8 text-primary-600" />,
      title: "Personnalisation",
      description: "Garanties adaptées à votre secteur d'activité"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary-600" />,
      title: "Suivi Dédié",
      description: "Gestionnaire unique pour votre flotte"
    }
  ];

  const advantages = [
    "Gestion simplifiée avec un contrat unique",
    "Tarification dégressive selon le nombre de véhicules",
    "Ajout et retrait de véhicules en cours d'année",
    "Reporting détaillé de sinistralité",
    "Interlocuteur dédié pour votre flotte",
    "Solutions de prévention des risques"
  ];

  const businessSectors = [
    {
      sector: "PME et ETI",
      description: "Solutions adaptées aux entreprises de toutes tailles avec une flotte en compte propre pour leurs activités.",
      icon: <Building className="h-6 w-6 text-primary-600" />
    },
    {
      sector: "Artisans et commerçants",
      description: "Couverture pour les petites flottes d'artisans et commerçants avec des véhicules utilitaires et commerciaux.",
      icon: <Briefcase className="h-6 w-6 text-primary-600" />
    },
    {
      sector: "Professions libérales",
      description: "Assurance pour les cabinets et sociétés de professions libérales disposant de plusieurs véhicules.",
      icon: <Briefcase className="h-6 w-6 text-primary-600" />
    },
    {
      sector: "Associations et collectivités",
      description: "Formules spécifiques pour les organismes à but non lucratif et les collectivités territoriales.",
      icon: <Building className="h-6 w-6 text-primary-600" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Assurance Flottes en Compte Propre | Entreprises, PME, Artisans | Devis Gratuit</title>
        <meta name="description" content="Assurance flottes en compte propre pour entreprises, PME et artisans. Gestion centralisée, tarifs dégressifs, interlocuteur dédié. Solutions adaptées de 5 à 500+ véhicules. Devis gratuit." />
        <meta name="keywords" content="assurance flottes entreprise, assurance parc auto PME, assurance flotte artisans, gestion flotte véhicules, assurance multi-véhicules professionnels" />
        <link rel="canonical" href="https://xcr-courtier.fr/assurance-auto/flottes/compte-propre" />
        
        {/* Schema.org Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Assurance Flottes en Compte Propre",
            "description": "Assurance pour parcs de véhicules d'entreprise avec gestion centralisée",
            "provider": {
              "@type": "Organization",
              "name": "XCR Courtier"
            },
            "serviceType": "Assurance Auto",
            "areaServed": "France"
          })}
        </script>
      </Helmet>

      {/* Breadcrumbs Navigation */}
      <div className="container mx-auto px-4 pt-8">
        <AutoInsuranceBreadcrumbs />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center py-24">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1756957/pexels-photo-1756957.jpeg")',
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
                Assurance Flottes en Compte Propre
                <span className="text-secondary-400"> - Gestion Simplifiée</span>
              </h1>
              
              <p className="text-xl text-gray-200 mb-8">
                Optimisez la gestion de votre parc automobile d'entreprise avec notre solution d'assurance flottes. Un contrat unique, des garanties sur mesure et des tarifs dégressifs.
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
                  Devis Flottes en Compte Propre
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
              Les avantages de l'assurance flottes en compte propre
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une solution complète pour la gestion de votre parc automobile d'entreprise
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

      {/* Secteurs d'activité */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Solutions adaptées à tous les secteurs d'activité
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des garanties sur mesure pour chaque type d'entreprise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {businessSectors.map((sector, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  {sector.icon}
                  <h3 className="text-xl font-bold text-primary-800 ml-3">{sector.sector}</h3>
                </div>
                <p className="text-gray-600">{sector.description}</p>
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
              Services inclus dans notre offre flottes
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
                <Settings className="h-6 w-6 text-primary-600 mr-2" />
                Gestion administrative
              </h3>
              <p className="text-gray-600 mb-4">
                Simplification des démarches administratives liées à votre flotte.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Plateforme en ligne dédiée</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Gestion des attestations et cartes vertes</span>
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
              Ce que nos clients entreprises en disent
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les témoignages d'entreprises qui nous font confiance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Jean-Marc Durand",
                company: "Durand & Fils BTP",
                text: "La gestion centralisée de notre flotte de 15 véhicules nous fait gagner un temps précieux. Le reporting trimestriel nous aide à optimiser nos coûts et à sensibiliser nos conducteurs.",
                rating: 5
              },
              {
                name: "Caroline Moreau",
                company: "Cabinet Moreau & Associés",
                text: "Notre cabinet d'architectes dispose de 8 véhicules. Notre interlocuteur dédié comprend parfaitement nos enjeux et nous propose des solutions adaptées à l'évolution de notre parc.",
                rating: 5
              },
              {
                name: "Mohammed Benali",
                company: "Benali Électricité",
                text: "La flexibilité du contrat nous permet d'ajouter ou retirer des véhicules facilement selon nos chantiers. La gestion des sinistres est rapide et efficace, un vrai plus pour notre activité.",
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
              Tout ce que vous devez savoir sur l'assurance flottes en compte propre
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "À partir de combien de véhicules peut-on parler de flotte ?",
                answer: "On considère généralement qu'une flotte automobile commence à partir de 5 véhicules. Cependant, nos solutions d'assurance flottes en compte propre sont modulables et peuvent s'adapter à des parcs de toutes tailles, de 5 à plusieurs centaines de véhicules. Pour les parcs de moins de 5 véhicules, nous proposons des contrats multi-véhicules qui offrent également des avantages en termes de gestion et de tarification. L'important est d'évaluer vos besoins spécifiques et l'usage professionnel de vos véhicules."
              },
              {
                question: "Comment sont calculées les primes d'assurance flotte ?",
                answer: "Le calcul des primes d'assurance flotte prend en compte plusieurs facteurs : le nombre et le type de véhicules, leur usage professionnel, la zone géographique d'utilisation, le profil des conducteurs, et surtout l'historique de sinistralité de la flotte. Contrairement aux contrats individuels, l'assurance flotte fonctionne souvent sur le principe de la tarification a posteriori, avec une prime ajustable en fonction de la sinistralité réelle. Cette approche permet une tarification plus équitable et incite à la mise en place de mesures de prévention. Pour les flottes importantes, nous proposons également des solutions avec franchise globale ou auto-assurance partielle."
              },
              {
                question: "Est-il possible d'avoir différents niveaux de garanties au sein d'une même flotte ?",
                answer: "Oui, notre solution d'assurance flotte en compte propre permet de personnaliser les garanties pour chaque véhicule ou catégorie de véhicules. Par exemple, vous pouvez choisir une formule tous risques pour vos véhicules récents ou haut de gamme, et une formule au tiers pour les véhicules plus anciens ou utilitaires. De même, vous pouvez adapter les franchises selon le type de véhicule ou son utilisation. Cette flexibilité vous permet d'optimiser votre budget tout en assurant une protection adaptée à la valeur et à l'usage de chaque véhicule de votre parc. Votre gestionnaire de flotte dédié vous accompagne dans cette personnalisation."
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
            <h2 className="text-3xl font-bold mb-6">Optimisez la gestion de votre flotte</h2>
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
              <h3 className="text-xl font-bold text-primary-800 mb-3">Assurance Auto Professionnelle</h3>
              <p className="text-gray-600 mb-4">
                Solutions pour véhicules à usage professionnel et utilitaires individuels.
              </p>
              <Link 
                to="/assurance-auto-professionnelle" 
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

export default AssuranceFlottesComptePage;