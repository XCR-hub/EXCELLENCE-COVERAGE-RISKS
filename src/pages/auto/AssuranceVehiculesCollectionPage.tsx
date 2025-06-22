import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, Car, Clock, Award, ArrowRight, Star, Info, User, Calendar, Heart } from 'lucide-react';
import Button from '../../components/common/Button';
import AutoInsuranceQuoteForm from '../../components/forms/AutoInsuranceQuoteForm';

const AssuranceVehiculesCollectionPage = () => {
  const features = [
    {
      icon: <Award className="h-8 w-8 text-primary-600" />,
      title: "Valeur Agréée",
      description: "Indemnisation selon la valeur convenue avec l'expert"
    },
    {
      icon: <Heart className="h-8 w-8 text-primary-600" />,
      title: "Garanties Spécifiques",
      description: "Couverture adaptée aux véhicules de collection"
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary-600" />,
      title: "Usage Occasionnel",
      description: "Tarifs adaptés à une utilisation non quotidienne"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary-600" />,
      title: "Protection Événements",
      description: "Couverture lors des expositions et rassemblements"
    }
  ];

  const advantages = [
    "Tarifs préférentiels adaptés à l'usage occasionnel",
    "Valeur agréée sans dépréciation en cas de sinistre",
    "Pas de coefficient de vétusté appliqué",
    "Assistance spécialisée avec plateau dédié",
    "Couverture lors des expositions et rassemblements",
    "Garantie des pièces d'origine et de collection"
  ];

  const eligibleVehicles = [
    "Véhicules de plus de 30 ans",
    "Youngtimers (15 à 30 ans) à caractère de collection",
    "Véhicules d'exception ou de prestige",
    "Véhicules à production limitée",
    "Répliques et kit-cars homologués"
  ];

  return (
    <>
      <Helmet>
        <title>Assurance Véhicules de Collection | Valeur Agréée | Tarifs Préférentiels</title>
        <meta name="description" content="Assurance véhicules de collection avec valeur agréée. Tarifs préférentiels pour usage occasionnel, assistance spécialisée, couverture lors d'expositions. Devis gratuit." />
        <meta name="keywords" content="assurance véhicule collection, assurance voiture ancienne, assurance auto collection, assurance youngtimer, assurance valeur agréée" />
        <link rel="canonical" href="https://xcr-courtier.fr/assurance-auto-vehicules-collection" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Assurance Véhicules de Collection | Valeur Agréée" />
        <meta property="og:description" content="Assurance véhicules de collection avec valeur agréée et tarifs préférentiels. Devis gratuit en 2 minutes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xcr-courtier.fr/assurance-auto-vehicules-collection" />
        <meta property="og:image" content="https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg" />
        
        {/* Schema.org Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Assurance Véhicules de Collection",
            "description": "Assurance spécialisée pour véhicules anciens et de collection avec valeur agréée",
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
            backgroundImage: 'url("https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg")',
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
                Assurance Véhicules de Collection
                <span className="text-secondary-400"> - Valeur Agréée</span>
              </h1>
              
              <p className="text-xl text-gray-200 mb-8">
                Une assurance spécialement conçue pour protéger votre patrimoine automobile. Tarifs préférentiels et garanties adaptées aux véhicules de collection.
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
              <AutoInsuranceQuoteForm formType="collection" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Les avantages de notre assurance collection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une protection sur mesure pour votre patrimoine automobile
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

      {/* Véhicules éligibles */}
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
                Quels véhicules peuvent être assurés ?
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                Notre assurance collection s'adresse à différents types de véhicules anciens ou d'exception. Découvrez si votre véhicule est éligible.
              </p>

              <div className="space-y-4">
                {eligibleVehicles.map((item, index) => (
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
                La valeur agréée, un avantage essentiel
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <Award className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-700 mb-1">Valeur convenue avec expertise</h4>
                    <p className="text-gray-600">
                      La valeur de votre véhicule est déterminée par un expert et fixée contractuellement, sans dépréciation en cas de sinistre.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <Shield className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-700 mb-1">Protection de votre investissement</h4>
                    <p className="text-gray-600">
                      Contrairement à une assurance classique, la valeur de votre véhicule de collection peut augmenter avec le temps.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-700 mb-1">Réévaluation périodique</h4>
                    <p className="text-gray-600">
                      Possibilité de réévaluer la valeur de votre véhicule tous les 2 ans pour suivre l'évolution du marché.
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
              Ce que nos collectionneurs en disent
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les témoignages de nos clients passionnés
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Pierre Durand",
                vehicle: "Citroën DS 1965",
                text: "Enfin une assurance qui comprend la valeur réelle de ma DS ! La valeur agréée me permet d'être serein, et le tarif est très compétitif pour un usage occasionnel.",
                rating: 5
              },
              {
                name: "Jean-Claude Martin",
                vehicle: "Alpine A110 1973",
                text: "L'expertise a été réalisée avec sérieux, et ma voiture est assurée à sa juste valeur. L'assistance spécialisée est un vrai plus pour les véhicules anciens.",
                rating: 5
              },
              {
                name: "Sophie Leroy",
                vehicle: "Porsche 911 1985",
                text: "Excellente couverture pour ma Porsche que j'utilise principalement pour des rallyes. L'assurance couvre même les événements et expositions, ce qui est parfait !",
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
              Tout ce que vous devez savoir sur l'assurance véhicules de collection
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "Comment est déterminée la valeur agréée de mon véhicule ?",
                answer: "La valeur agréée est déterminée lors d'une expertise réalisée par un expert automobile spécialisé dans les véhicules de collection. Cette expertise prend en compte l'état général du véhicule, sa rareté, son historique, les travaux de restauration effectués et les tendances du marché. Une fois cette valeur fixée, elle est inscrite dans votre contrat et servira de base d'indemnisation en cas de sinistre total, sans application de vétusté."
              },
              {
                question: "Quelles sont les conditions d'utilisation d'un véhicule assuré en collection ?",
                answer: "L'assurance collection implique généralement un usage occasionnel et non quotidien du véhicule. Vous pouvez l'utiliser pour des sorties de loisirs, des rallyes touristiques, des expositions ou des rassemblements. Certains contrats limitent le kilométrage annuel (généralement entre 3 000 et 5 000 km), mais cette limite peut être adaptée selon vos besoins. L'usage professionnel ou les trajets domicile-travail réguliers sont généralement exclus, sauf exceptions spécifiques prévues au contrat."
              },
              {
                question: "Mon véhicule doit-il avoir un certain âge pour être assuré en collection ?",
                answer: "Traditionnellement, un véhicule doit avoir plus de 30 ans pour être considéré comme un véhicule de collection. Cependant, notre assurance accepte également les 'youngtimers' (véhicules de 15 à 30 ans) présentant un intérêt particulier ou une rareté. Les véhicules d'exception plus récents, les modèles à production limitée ou les répliques homologuées peuvent également être éligibles. Chaque demande est étudiée au cas par cas par nos experts passionnés d'automobile."
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
            <h2 className="text-3xl font-bold mb-6">Protégez votre patrimoine automobile</h2>
            <p className="text-xl text-gray-200 mb-8">
              Obtenez votre devis d'assurance collection en moins de 2 minutes et bénéficiez de la valeur agréée.
            </p>
            <Button 
              variant="accent" 
              size="lg"
              href="#top"
            >
              Obtenir mon devis collection
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
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-primary-800 mb-3">Assurance Auto Professionnelle</h3>
              <p className="text-gray-600 mb-4">
                Solutions pour véhicules à usage professionnel et flottes d'entreprise.
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

export default AssuranceVehiculesCollectionPage;