import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, Car, Clock, Award, ArrowRight, Star, Info, User, DollarSign, MapPin } from 'lucide-react';
import Button from '../../components/common/Button';
import AutoInsuranceQuoteForm from '../../components/forms/AutoInsuranceQuoteForm';

const AssuranceAuKilometrePage = () => {
  const features = [
    {
      icon: <MapPin className="h-8 w-8 text-primary-600" />,
      title: "Paiement au Kilomètre",
      description: "Ne payez que pour les kilomètres réellement parcourus"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-primary-600" />,
      title: "Économies Garanties",
      description: "Jusqu'à 50% d'économies pour les petits rouleurs"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary-600" />,
      title: "Mêmes Garanties",
      description: "Toutes les protections d'une assurance classique"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary-600" />,
      title: "Flexibilité Totale",
      description: "Ajustement automatique selon votre utilisation"
    }
  ];

  const advantages = [
    "Économies significatives pour les petits rouleurs",
    "Formules au tiers ou tous risques disponibles",
    "Suivi kilométrique simple via application mobile",
    "Pas de pénalité en cas de dépassement occasionnel",
    "Ajustement automatique de votre prime",
    "Toutes les garanties d'une assurance classique"
  ];

  const idealFor = [
    "Conducteurs parcourant moins de 8 000 km/an",
    "Personnes utilisant les transports en commun au quotidien",
    "Propriétaires d'un second véhicule peu utilisé",
    "Télétravailleurs se déplaçant occasionnellement",
    "Seniors conduisant principalement pour les loisirs"
  ];

  return (
    <>
      <Helmet>
        <title>Assurance Auto au Kilomètre 2025 | Payez Selon Votre Usage | Devis Gratuit</title>
        <meta name="description" content="Assurance auto au kilomètre : payez uniquement selon votre utilisation réelle. Jusqu'à 50% d'économies pour les petits rouleurs. Devis gratuit en 2 minutes." />
        <meta name="keywords" content="assurance au kilomètre, assurance auto petit rouleur, pay as you drive, assurance selon usage, assurance voiture économique" />
        <link rel="canonical" href="https://xcr-courtier.fr/assurance-auto-au-kilometre" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Assurance Auto au Kilomètre | Payez Selon Votre Usage" />
        <meta property="og:description" content="Assurance auto au kilomètre : jusqu'à 50% d'économies pour les petits rouleurs. Devis gratuit en 2 minutes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xcr-courtier.fr/assurance-auto-au-kilometre" />
        <meta property="og:image" content="https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg" />
        
        {/* Schema.org Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Assurance Auto au Kilomètre",
            "description": "Assurance auto avec paiement selon le kilométrage réel parcouru",
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
                Assurance Auto au Kilomètre
                <span className="text-secondary-400"> - Payez Selon Votre Usage</span>
              </h1>
              
              <p className="text-xl text-gray-200 mb-8">
                Ne payez que pour les kilomètres que vous parcourez réellement. Économisez jusqu'à 50% sur votre assurance auto si vous roulez peu.
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
              <AutoInsuranceQuoteForm formType="kilometre" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Les avantages de l'assurance au kilomètre
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une solution innovante et économique pour les conducteurs qui roulent peu
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

      {/* Comment ça marche */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Comment fonctionne l'assurance au kilomètre ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un système simple et transparent pour payer votre assurance selon votre utilisation réelle
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
              <h3 className="text-xl font-bold text-primary-800 mb-3">Estimation initiale</h3>
              <p className="text-gray-600">
                Vous déclarez votre kilométrage annuel estimé lors de la souscription.
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
              <h3 className="text-xl font-bold text-primary-800 mb-3">Suivi kilométrique</h3>
              <p className="text-gray-600">
                Vous déclarez votre kilométrage via notre application ou lors de rendez-vous périodiques.
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
              <h3 className="text-xl font-bold text-primary-800 mb-3">Ajustement automatique</h3>
              <p className="text-gray-600">
                Votre prime s'ajuste automatiquement selon votre kilométrage réel parcouru.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pour qui ? */}
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
                Pour qui est adaptée l'assurance au kilomètre ?
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                L'assurance au kilomètre est particulièrement avantageuse pour certains profils de conducteurs. Vérifiez si vous pouvez en bénéficier.
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
              className="bg-white rounded-lg p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-primary-800 mb-6">
                Calculez vos économies potentielles
              </h3>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary-700 mb-2">Moins de 5 000 km/an</h4>
                  <p className="text-gray-600 mb-2">
                    Économies moyennes : <span className="font-bold text-green-600">40-50%</span>
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary-700 mb-2">5 000 - 8 000 km/an</h4>
                  <p className="text-gray-600 mb-2">
                    Économies moyennes : <span className="font-bold text-green-600">25-40%</span>
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '35%' }}></div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary-700 mb-2">8 000 - 12 000 km/an</h4>
                  <p className="text-gray-600 mb-2">
                    Économies moyennes : <span className="font-bold text-green-600">10-25%</span>
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '20%' }}></div>
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
              Ce que nos clients en disent
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les témoignages de nos clients satisfaits de leur assurance au kilomètre
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Émilie Durand",
                vehicle: "Fiat 500",
                text: "Je travaille en télétravail et utilise peu ma voiture. Avec l'assurance au kilomètre, j'économise plus de 200€ par an !",
                rating: 5
              },
              {
                name: "Jean-Pierre Moreau",
                vehicle: "Peugeot 208",
                text: "Retraité, je ne fais que de petits trajets occasionnels. Cette formule est parfaite pour mon usage et mon budget.",
                rating: 5
              },
              {
                name: "Lucie Bertrand",
                vehicle: "Renault Clio",
                text: "J'habite en centre-ville et utilise principalement les transports en commun. L'assurance au kilomètre me permet de payer uniquement pour mon usage réel.",
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Questions fréquentes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tout ce que vous devez savoir sur l'assurance auto au kilomètre
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "Comment est calculé mon kilométrage ?",
                answer: "Le kilométrage est calculé de plusieurs façons selon l'offre choisie : déclaration périodique avec photo du compteur via notre application, boîtier connecté installé dans le véhicule, ou relevé lors de l'entretien annuel. Vous choisissez la méthode qui vous convient le mieux, sachant que le boîtier connecté offre généralement les tarifs les plus avantageux grâce à sa précision."
              },
              {
                question: "Que se passe-t-il si je dépasse mon kilométrage estimé ?",
                answer: "Si vous dépassez votre kilométrage estimé, votre prime sera simplement ajustée en conséquence, sans pénalité. Vous ne payez que pour les kilomètres supplémentaires parcourus. Nos formules incluent généralement une marge de tolérance pour les dépassements occasionnels. Vous pouvez également ajuster votre estimation à tout moment si vos habitudes de conduite changent."
              },
              {
                question: "Les garanties sont-elles identiques à une assurance classique ?",
                answer: "Oui, l'assurance au kilomètre offre exactement les mêmes garanties qu'une assurance auto classique. Vous pouvez choisir entre une formule au tiers, intermédiaire ou tous risques, avec toutes les options habituelles (assistance, protection juridique, garantie du conducteur, etc.). Seul le mode de calcul de la prime change, pas la qualité de la couverture."
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
            <h2 className="text-3xl font-bold mb-6">Payez uniquement pour ce que vous utilisez</h2>
            <p className="text-xl text-gray-200 mb-8">
              Obtenez votre devis d'assurance au kilomètre en moins de 2 minutes et commencez à économiser.
            </p>
            <Button 
              variant="accent" 
              size="lg"
              href="#top"
            >
              Calculer mes économies
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
          </div>
        </div>
      </section>
    </>
  );
};

export default AssuranceAuKilometrePage;