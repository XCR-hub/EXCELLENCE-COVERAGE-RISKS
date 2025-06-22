import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, Car, Clock, Award, ArrowRight, Star, Info, User, Calendar, Clock as ClockIcon } from 'lucide-react';
import Button from '../../components/common/Button';
import AutoInsuranceQuoteForm from '../../components/forms/AutoInsuranceQuoteForm';

const AssuranceTemporairePage = () => {
  const features = [
    {
      icon: <Calendar className="h-8 w-8 text-primary-600" />,
      title: "Durée Flexible",
      description: "Couverture de 1 jour à 3 mois selon vos besoins"
    },
    {
      icon: <ClockIcon className="h-8 w-8 text-primary-600" />,
      title: "Souscription Rapide",
      description: "Attestation délivrée en quelques minutes"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary-600" />,
      title: "Garanties Complètes",
      description: "Mêmes protections qu'une assurance classique"
    },
    {
      icon: <Car className="h-8 w-8 text-primary-600" />,
      title: "Tous Véhicules",
      description: "Voitures, utilitaires, motos, camping-cars"
    }
  ];

  const advantages = [
    "Souscription 100% en ligne en moins de 5 minutes",
    "Attestation d'assurance immédiate par email",
    "Pas d'engagement à long terme",
    "Paiement sécurisé par carte bancaire",
    "Assistance 24h/24 incluse",
    "Tarifs à partir de 5€/jour"
  ];

  const useCases = [
    {
      title: "Achat/Vente de véhicule",
      description: "Couverture temporaire pendant le transfert de propriété ou en attendant une assurance définitive.",
      icon: <Car className="h-6 w-6 text-primary-600" />
    },
    {
      title: "Prêt de véhicule",
      description: "Protection pour un véhicule emprunté à un ami ou à la famille pour une courte période.",
      icon: <User className="h-6 w-6 text-primary-600" />
    },
    {
      title: "Véhicule de collection",
      description: "Assurance pour une utilisation ponctuelle lors de rassemblements ou d'expositions.",
      icon: <Award className="h-6 w-6 text-primary-600" />
    },
    {
      title: "Location entre particuliers",
      description: "Couverture complémentaire pour les locations de courte durée entre particuliers.",
      icon: <Shield className="h-6 w-6 text-primary-600" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Assurance Auto Temporaire | 1 Jour à 3 Mois | Attestation Immédiate</title>
        <meta name="description" content="Assurance auto temporaire de 1 jour à 3 mois. Souscription en 5 minutes, attestation immédiate. Idéale pour achat/vente, prêt de véhicule, location. Tarifs dès 5€/jour." />
        <meta name="keywords" content="assurance auto temporaire, assurance courte durée, assurance journalière, assurance 1 jour, assurance véhicule provisoire" />
        <link rel="canonical" href="https://xcr-courtier.fr/assurance-auto-temporaire" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Assurance Auto Temporaire | 1 Jour à 3 Mois" />
        <meta property="og:description" content="Assurance auto temporaire avec attestation immédiate. Souscription en 5 minutes, tarifs dès 5€/jour." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xcr-courtier.fr/assurance-auto-temporaire" />
        <meta property="og:image" content="https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg" />
        
        {/* Schema.org Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Assurance Auto Temporaire",
            "description": "Assurance auto temporaire de 1 jour à 3 mois avec attestation immédiate",
            "provider": {
              "@type": "Organization",
              "name": "XCR Courtier"
            },
            "serviceType": "Assurance Auto",
            "areaServed": "France",
            "offers": {
              "@type": "Offer",
              "price": "5",
              "priceCurrency": "EUR",
              "description": "À partir de 5€/jour"
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
                Assurance Auto Temporaire
                <span className="text-secondary-400"> - 1 Jour à 3 Mois</span>
              </h1>
              
              <p className="text-xl text-gray-200 mb-8">
                Besoin d'une assurance pour une courte durée ? Notre assurance temporaire vous couvre de 1 jour à 3 mois avec attestation immédiate.
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
              <AutoInsuranceQuoteForm formType="temporaire" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Les avantages de l'assurance temporaire
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une solution flexible pour tous vos besoins d'assurance à court terme
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

      {/* Cas d'usage */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Quand souscrire une assurance temporaire ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les situations où l'assurance auto temporaire est la solution idéale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  {useCase.icon}
                  <h3 className="text-xl font-bold text-primary-800 ml-3">{useCase.title}</h3>
                </div>
                <p className="text-gray-600">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Nos tarifs d'assurance temporaire
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des formules adaptées à toutes les durées, à partir de 5€/jour
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-primary-800 text-white p-6 text-center">
                <h3 className="text-xl font-bold">Formule Journalière</h3>
                <div className="text-3xl font-bold mt-2">
                  À partir de <span className="text-secondary-400">5€</span><span className="text-lg">/jour</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Durée de 1 à 7 jours</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Responsabilité civile</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Assistance de base</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Attestation immédiate</span>
                  </li>
                </ul>
                <Button 
                  variant="outline" 
                  href="#top"
                  className="w-full mt-6"
                >
                  Obtenir un devis
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden transform md:scale-105 z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-secondary-400 text-white p-6 text-center">
                <h3 className="text-xl font-bold">Formule Hebdomadaire</h3>
                <div className="text-3xl font-bold mt-2">
                  À partir de <span className="text-white">30€</span><span className="text-lg">/semaine</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Durée de 8 à 30 jours</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Responsabilité civile</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Vol et incendie</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Assistance 0 km</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Bris de glace</span>
                  </li>
                </ul>
                <Button 
                  variant="primary" 
                  href="#top"
                  className="w-full mt-6"
                >
                  Obtenir un devis
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-primary-800 text-white p-6 text-center">
                <h3 className="text-xl font-bold">Formule Mensuelle</h3>
                <div className="text-3xl font-bold mt-2">
                  À partir de <span className="text-secondary-400">90€</span><span className="text-lg">/mois</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Durée de 1 à 3 mois</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Formule tous risques</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Assistance premium</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Véhicule de remplacement</span>
                  </li>
                </ul>
                <Button 
                  variant="outline" 
                  href="#top"
                  className="w-full mt-6"
                >
                  Obtenir un devis
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Comment souscrire en 3 étapes simples
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une souscription 100% en ligne, rapide et sécurisée
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-8 md:space-y-0 md:space-x-8 max-w-5xl mx-auto">
            <motion.div
              className="bg-gray-50 rounded-lg shadow-md p-6 text-center w-full md:w-1/3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-primary-800 mb-3">Remplissez le formulaire</h3>
              <p className="text-gray-600">
                Indiquez vos informations personnelles, les détails du véhicule et la durée souhaitée.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-50 rounded-lg shadow-md p-6 text-center w-full md:w-1/3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-primary-800 mb-3">Payez en ligne</h3>
              <p className="text-gray-600">
                Réglez votre assurance temporaire par carte bancaire sur notre plateforme sécurisée.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-50 rounded-lg shadow-md p-6 text-center w-full md:w-1/3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-primary-800 mb-3">Recevez votre attestation</h3>
              <p className="text-gray-600">
                Votre attestation d'assurance est envoyée immédiatement par email, prête à être imprimée.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Avis clients */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Ce que nos clients en disent
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les témoignages de nos clients satisfaits de leur assurance temporaire
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Antoine Dupont",
                context: "Achat de véhicule",
                text: "J'ai souscrit une assurance temporaire pour mon nouveau véhicule en attendant de choisir mon assurance définitive. Tout s'est fait en 5 minutes, attestation reçue immédiatement !",
                rating: 5
              },
              {
                name: "Marie Leclerc",
                context: "Prêt de voiture",
                text: "J'ai emprunté la voiture de mes parents pour les vacances. L'assurance temporaire était parfaite et bien moins chère que d'être ajoutée à leur contrat.",
                rating: 5
              },
              {
                name: "Julien Moreau",
                context: "Véhicule de collection",
                text: "Pour une exposition de véhicules anciens, j'ai assuré ma Citroën DS pour 3 jours. Processus simple et tarif très raisonnable.",
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
                    <p className="text-sm text-gray-500">{testimonial.context}</p>
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Questions fréquentes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tout ce que vous devez savoir sur l'assurance auto temporaire
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "Quels documents sont nécessaires pour souscrire ?",
                answer: "Pour souscrire une assurance auto temporaire, vous aurez besoin de : votre permis de conduire valide, la carte grise du véhicule (ou le certificat provisoire), une pièce d'identité (CNI ou passeport), et une carte bancaire pour le paiement. Tous ces documents peuvent être téléchargés directement sur notre plateforme sécurisée lors de la souscription."
              },
              {
                question: "L'assurance temporaire couvre-t-elle les mêmes risques qu'une assurance classique ?",
                answer: "Oui, l'assurance temporaire offre les mêmes garanties qu'une assurance classique. Vous pouvez choisir entre une formule au tiers ou tous risques, avec les options habituelles (bris de glace, vol, assistance, etc.). La seule différence réside dans la durée du contrat, qui est limitée dans le temps, mais pas dans l'étendue des garanties."
              },
              {
                question: "Puis-je prolonger mon assurance temporaire ?",
                answer: "Oui, vous pouvez prolonger votre assurance temporaire avant son expiration, dans la limite de 3 mois au total. La prolongation se fait en quelques clics depuis votre espace client. Au-delà de 3 mois, nous vous recommandons de souscrire une assurance auto classique, généralement plus avantageuse financièrement sur le long terme."
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
            <h2 className="text-3xl font-bold mb-6">Besoin d'une assurance pour quelques jours ?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Souscrivez en ligne en moins de 5 minutes et recevez votre attestation immédiatement.
            </p>
            <Button 
              variant="accent" 
              size="lg"
              href="#top"
            >
              Obtenir mon devis temporaire
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
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-primary-800 mb-3">Assurance Véhicules de Collection</h3>
              <p className="text-gray-600 mb-4">
                Protection spécifique pour vos véhicules anciens et de collection.
              </p>
              <Link 
                to="/assurance-auto-vehicules-collection" 
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

export default AssuranceTemporairePage;