import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, Car, Clock, Award, ArrowRight, Star, Info, User, DollarSign } from 'lucide-react';
import Button from '../../components/common/Button';
import AutoInsuranceQuoteForm from '../../components/forms/AutoInsuranceQuoteForm';

const AssuranceAuTiersPage = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-primary-600" />,
      title: "Responsabilité Civile",
      description: "Couverture des dommages causés aux tiers (obligatoire)"
    },
    {
      icon: <Info className="h-8 w-8 text-primary-600" />,
      title: "Défense Pénale",
      description: "Protection juridique en cas de litige suite à un accident"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary-600" />,
      title: "Assistance de Base",
      description: "Dépannage en cas d'accident (au-delà de 50km)"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-primary-600" />,
      title: "Tarif Économique",
      description: "La formule la plus abordable pour votre budget"
    }
  ];

  const advantages = [
    "Couverture minimale obligatoire à prix réduit",
    "Idéal pour les véhicules anciens ou de faible valeur",
    "Possibilité d'ajouter des options à la carte",
    "Souscription simple et rapide",
    "Tarifs à partir de 15€/mois",
    "Assistance incluse en cas d'accident"
  ];

  const idealFor = [
    "Véhicules anciens (plus de 8 ans)",
    "Véhicules de faible valeur marchande",
    "Conducteurs à petit budget",
    "Véhicules peu utilisés",
    "Second véhicule du foyer"
  ];

  return (
    <>
      <Helmet>
        <title>Assurance Auto au Tiers 2025 | Devis Gratuit | Formule Économique</title>
        <meta name="description" content="Assurance auto au tiers : formule économique à partir de 15€/mois. Couverture minimale obligatoire idéale pour véhicules anciens. Devis gratuit en 2 minutes." />
        <meta name="keywords" content="assurance au tiers, assurance auto économique, assurance voiture pas chère, devis tiers, assurance véhicule ancien" />
        <link rel="canonical" href="https://xcr-courtier.fr/assurance-auto-au-tiers" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Assurance Auto au Tiers | Formule Économique" />
        <meta property="og:description" content="Assurance auto au tiers à partir de 15€/mois. Idéale pour véhicules anciens. Devis gratuit en 2 minutes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xcr-courtier.fr/assurance-auto-au-tiers" />
        <meta property="og:image" content="https://images.pexels.com/photos/210158/pexels-photo-210158.jpeg" />
        
        {/* Schema.org Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Assurance Auto au Tiers",
            "description": "Assurance auto au tiers économique pour véhicules anciens",
            "provider": {
              "@type": "Organization",
              "name": "XCR Courtier"
            },
            "serviceType": "Assurance Auto",
            "areaServed": "France",
            "offers": {
              "@type": "Offer",
              "price": "15",
              "priceCurrency": "EUR",
              "description": "À partir de 15€/mois"
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
            backgroundImage: 'url("https://images.pexels.com/photos/210158/pexels-photo-210158.jpeg")',
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
                Assurance Auto au Tiers
                <span className="text-secondary-400"> - Formule Économique</span>
              </h1>
              
              <p className="text-xl text-gray-200 mb-8">
                L'assurance au tiers est la formule la plus économique pour répondre à l'obligation légale d'assurance. Idéale pour les véhicules anciens ou de faible valeur.
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
              <AutoInsuranceQuoteForm formType="tiers" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Ce que comprend l'assurance au tiers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La formule essentielle pour répondre à vos obligations légales
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

      {/* Pour qui ? */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-6">
                Pour qui est adaptée l'assurance au tiers ?
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                L'assurance au tiers est particulièrement recommandée dans certaines situations. Découvrez si cette formule est adaptée à votre profil.
              </p>

              <div className="space-y-4">
                {idealFor.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-primary-600 mr-2" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-primary-800 mb-6">
                Options complémentaires disponibles
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <Shield className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-700 mb-1">Bris de glace</h4>
                    <p className="text-gray-600">
                      Ajoutez la garantie bris de glace pour couvrir les réparations ou le remplacement de votre pare-brise.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <Award className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-700 mb-1">Assistance renforcée</h4>
                    <p className="text-gray-600">
                      Optez pour une assistance 0 km avec dépannage même devant chez vous et véhicule de remplacement.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-700 mb-1">Garantie du conducteur</h4>
                    <p className="text-gray-600">
                      Protégez-vous en cas de blessures lors d'un accident, même responsable.
                    </p>
                  </div>
                </div>
              </div>
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
              Découvrez les témoignages de nos clients satisfaits de leur assurance au tiers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Michel Durand",
                vehicle: "Renault Twingo 2010",
                text: "Excellente formule pour ma vieille Twingo. Je paie moins de 20€ par mois et le service client est très réactif.",
                rating: 5
              },
              {
                name: "Sylvie Petit",
                vehicle: "Peugeot 206 2008",
                text: "Parfait pour mon budget serré. L'assurance au tiers me permet d'être en règle sans me ruiner.",
                rating: 4
              },
              {
                name: "Laurent Mercier",
                vehicle: "Citroën Saxo 2005",
                text: "Formule économique pour ma seconde voiture que j'utilise peu. Souscription simple et rapide en ligne.",
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Questions fréquentes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tout ce que vous devez savoir sur l'assurance auto au tiers
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "Que couvre exactement l'assurance au tiers ?",
                answer: "L'assurance au tiers couvre uniquement les dommages que vous causez à autrui (responsabilité civile) : dommages matériels et corporels causés aux tiers, passagers de votre véhicule inclus. Elle ne couvre pas les dommages subis par votre propre véhicule, ni les blessures que vous pourriez subir en tant que conducteur."
              },
              {
                question: "Est-ce que l'assurance au tiers est suffisante ?",
                answer: "L'assurance au tiers est suffisante d'un point de vue légal, car elle répond à l'obligation minimale d'assurance. Cependant, elle peut s'avérer insuffisante en cas d'accident où votre véhicule est endommagé, car vous devrez assumer vous-même les frais de réparation. Elle est adaptée pour les véhicules anciens ou de faible valeur, où le coût des réparations potentielles est inférieur au surcoût d'une assurance plus complète."
              },
              {
                question: "Puis-je ajouter des options à mon assurance au tiers ?",
                answer: "Oui, la plupart des assureurs proposent d'enrichir votre assurance au tiers avec des options à la carte : bris de glace, vol et incendie, assistance renforcée, protection du conducteur, etc. Ces options permettent de personnaliser votre couverture selon vos besoins spécifiques tout en maintenant un coût inférieur à une formule tous risques."
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
            <h2 className="text-3xl font-bold mb-6">Obtenez votre assurance au tiers dès aujourd'hui</h2>
            <p className="text-xl text-gray-200 mb-8">
              Devis gratuit en moins de 2 minutes. Tarifs à partir de 15€/mois.
            </p>
            <Button 
              variant="accent" 
              size="lg"
              href="#top"
            >
              Obtenir mon devis au tiers
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
              <h3 className="text-xl font-bold text-primary-800 mb-3">Assurance Auto au Kilomètre</h3>
              <p className="text-gray-600 mb-4">
                Payez votre assurance en fonction de votre utilisation réelle du véhicule.
              </p>
              <Link 
                to="/assurance-auto-au-kilometre" 
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

export default AssuranceAuTiersPage;