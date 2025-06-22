import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, Car, Clock, Award, ArrowRight, Star, Info, User, Briefcase, Building } from 'lucide-react';
import Button from '../../components/common/Button';
import AutoInsuranceQuoteForm from '../../components/forms/AutoInsuranceQuoteForm';

const AssuranceAutoProfessionnellePage = () => {
  const features = [
    {
      icon: <Briefcase className="h-8 w-8 text-primary-600" />,
      title: "Usage Professionnel",
      description: "Couverture adaptée à l'utilisation professionnelle"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary-600" />,
      title: "Protection Étendue",
      description: "Garanties spécifiques pour les professionnels"
    },
    {
      icon: <Car className="h-8 w-8 text-primary-600" />,
      title: "Tous Types de Véhicules",
      description: "Voitures, utilitaires, camions, véhicules spéciaux"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary-600" />,
      title: "Assistance Renforcée",
      description: "Dépannage prioritaire et véhicule de remplacement"
    }
  ];

  const advantages = [
    "Couverture des marchandises et outils transportés",
    "Protection juridique professionnelle incluse",
    "Assistance 0 km avec véhicule de remplacement",
    "Garantie du conducteur étendue",
    "Couverture des aménagements spécifiques",
    "Gestion simplifiée des sinistres"
  ];

  const businessTypes = [
    {
      type: "Artisans",
      description: "Solutions adaptées pour les véhicules d'artisans avec couverture des outils et matériaux transportés.",
      icon: <Briefcase className="h-6 w-6 text-primary-600" />
    },
    {
      type: "Commerçants",
      description: "Protection des véhicules de livraison et des marchandises transportées avec garanties spécifiques.",
      icon: <Building className="h-6 w-6 text-primary-600" />
    },
    {
      type: "Professions libérales",
      description: "Assurance adaptée aux déplacements professionnels avec couverture des équipements spécifiques.",
      icon: <Briefcase className="h-6 w-6 text-primary-600" />
    },
    {
      type: "TPE/PME",
      description: "Solutions pour les petites flottes avec gestion simplifiée et tarifs dégressifs.",
      icon: <Building className="h-6 w-6 text-primary-600" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Assurance Auto Professionnelle | Véhicules Utilitaires et Commerciaux | Devis Gratuit</title>
        <meta name="description" content="Assurance auto professionnelle pour artisans, commerçants et entreprises. Couverture des marchandises transportées, assistance renforcée, protection juridique. Devis gratuit." />
        <meta name="keywords" content="assurance auto professionnelle, assurance véhicule utilitaire, assurance voiture commerciale, assurance artisan, assurance auto entreprise" />
        <link rel="canonical" href="https://xcr-courtier.fr/assurance-auto-professionnelle" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Assurance Auto Professionnelle | Véhicules Utilitaires" />
        <meta property="og:description" content="Assurance auto professionnelle pour artisans, commerçants et entreprises. Devis gratuit en 2 minutes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xcr-courtier.fr/assurance-auto-professionnelle" />
        <meta property="og:image" content="https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg" />
        
        {/* Schema.org Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Assurance Auto Professionnelle",
            "description": "Assurance pour véhicules à usage professionnel et utilitaires",
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
            backgroundImage: 'url("https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg")',
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
                Assurance Auto Professionnelle
                <span className="text-secondary-400"> - Protection Métier</span>
              </h1>
              
              <p className="text-xl text-gray-200 mb-8">
                Une assurance spécialement conçue pour les véhicules à usage professionnel. Protégez votre outil de travail avec des garanties adaptées à votre activité.
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
              Les avantages de l'assurance auto professionnelle
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des garanties spécifiques pour protéger votre activité
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

      {/* Types d'activités */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Solutions adaptées à votre activité
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quelle que soit votre profession, nous avons l'assurance qu'il vous faut
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {businessTypes.map((business, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  {business.icon}
                  <h3 className="text-xl font-bold text-primary-800 ml-3">{business.type}</h3>
                </div>
                <p className="text-gray-600">{business.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Garanties spécifiques */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Garanties spécifiques professionnelles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des protections adaptées aux besoins des professionnels
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
                <Shield className="h-6 w-6 text-primary-600 mr-2" />
                Marchandises transportées
              </h3>
              <p className="text-gray-600 mb-4">
                Protection des marchandises, matériaux et outils transportés dans votre véhicule professionnel.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Couverture en cas de vol, incendie ou accident</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Indemnisation rapide pour limiter l'impact sur votre activité</span>
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
                <Car className="h-6 w-6 text-primary-600 mr-2" />
                Aménagements professionnels
              </h3>
              <p className="text-gray-600 mb-4">
                Couverture des équipements et aménagements spécifiques installés sur votre véhicule.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Étagères, rangements, équipements spécifiques</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Signalétique et habillage professionnel</span>
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
                <Clock className="h-6 w-6 text-primary-600 mr-2" />
                Véhicule de remplacement
              </h3>
              <p className="text-gray-600 mb-4">
                Mise à disposition d'un véhicule de remplacement adapté à votre activité en cas d'immobilisation.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Véhicule de catégorie équivalente</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Durée étendue jusqu'à 30 jours</span>
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
                <Info className="h-6 w-6 text-primary-600 mr-2" />
                Protection juridique professionnelle
              </h3>
              <p className="text-gray-600 mb-4">
                Défense de vos intérêts en cas de litige lié à l'utilisation de votre véhicule professionnel.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Prise en charge des frais de justice</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Réseau d'avocats spécialisés</span>
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
              Ce que nos clients professionnels en disent
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les témoignages de professionnels qui nous font confiance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Laurent Dubois",
                business: "Électricien",
                text: "L'assurance de mon utilitaire couvre parfaitement mes outils et mon matériel. Suite à un vol, j'ai été indemnisé rapidement et j'ai pu continuer mon activité sans interruption.",
                rating: 5
              },
              {
                name: "Marie Lecomte",
                business: "Fleuriste",
                text: "La garantie marchandises transportées est idéale pour mon activité de livraison. Le véhicule de remplacement m'a sauvé lors d'une panne qui aurait pu me coûter des clients.",
                rating: 4
              },
              {
                name: "Thomas Mercier",
                business: "Plombier",
                text: "Excellente assurance pour mon fourgon aménagé. L'assistance 0 km est très réactive et la couverture des aménagements spécifiques est un vrai plus.",
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
              Tout ce que vous devez savoir sur l'assurance auto professionnelle
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "Quelle est la différence entre une assurance auto classique et professionnelle ?",
                answer: "L'assurance auto professionnelle se distingue par des garanties spécifiquement adaptées à l'usage professionnel du véhicule. Elle inclut notamment la couverture des marchandises et outils transportés, la protection des aménagements spécifiques, une assistance renforcée avec véhicule de remplacement adapté à votre activité, et une protection juridique professionnelle. De plus, elle prend en compte les contraintes spécifiques liées à votre métier et l'impact qu'aurait une immobilisation sur votre activité."
              },
              {
                question: "Puis-je assurer plusieurs véhicules professionnels sur le même contrat ?",
                answer: "Oui, nous proposons des solutions multi-véhicules pour les professionnels, avec des tarifs dégressifs selon le nombre de véhicules assurés. Pour les flottes plus importantes (à partir de 5 véhicules), nous recommandons notre assurance flottes automobiles qui offre une gestion centralisée et des avantages spécifiques. Vous bénéficiez ainsi d'une gestion simplifiée avec un interlocuteur unique et des conditions tarifaires avantageuses."
              },
              {
                question: "Les employés qui conduisent mon véhicule professionnel sont-ils couverts ?",
                answer: "Oui, notre assurance auto professionnelle couvre tous les conducteurs autorisés de votre véhicule, y compris vos employés, sans surprime ni déclaration préalable (sauf conducteurs novices ou à risque). La garantie du conducteur s'applique à toute personne conduisant le véhicule avec votre autorisation. Pour une gestion optimale, vous pouvez également opter pour une clause de conduite exclusive ou désigner des conducteurs habituels, ce qui peut influencer favorablement votre tarif."
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
            <h2 className="text-3xl font-bold mb-6">Protégez votre outil de travail</h2>
            <p className="text-xl text-gray-200 mb-8">
              Obtenez votre devis d'assurance auto professionnelle en moins de 2 minutes et bénéficiez de garanties adaptées à votre activité.
            </p>
            <Button 
              variant="accent" 
              size="lg"
              href="#top"
            >
              Obtenir mon devis professionnel
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
              <h3 className="text-xl font-bold text-primary-800 mb-3">Assurance Flottes Automobiles</h3>
              <p className="text-gray-600 mb-4">
                Gestion simplifiée pour les parcs de véhicules à partir de 5 unités.
              </p>
              <Link 
                to="/assurance-auto-flottes" 
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

export default AssuranceAutoProfessionnellePage;