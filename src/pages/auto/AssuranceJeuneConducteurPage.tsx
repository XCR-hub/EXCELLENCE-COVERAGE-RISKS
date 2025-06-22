import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, Car, Clock, Award, ArrowRight, Star, Info, User, Briefcase, GraduationCap } from 'lucide-react';
import Button from '../../components/common/Button';
import AutoInsuranceQuoteForm from '../../components/forms/AutoInsuranceQuoteForm';

const AssuranceJeuneConducteurPage = () => {
  const features = [
    {
      icon: <GraduationCap className="h-8 w-8 text-primary-600" />,
      title: "Tarifs Adaptés",
      description: "Formules spécifiques pour les jeunes conducteurs"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary-600" />,
      title: "Bonus Conduite Accompagnée",
      description: "Réductions pour les conducteurs issus de l'AAC"
    },
    {
      icon: <Car className="h-8 w-8 text-primary-600" />,
      title: "Véhicules Recommandés",
      description: "Conseils sur les modèles adaptés aux débutants"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary-600" />,
      title: "Évolution Progressive",
      description: "Réduction des tarifs avec l'expérience"
    }
  ];

  const advantages = [
    "Tarifs négociés spécialement pour les jeunes conducteurs",
    "Bonus pour conduite accompagnée et bons élèves",
    "Accompagnement personnalisé pour les débutants",
    "Options de paiement mensuel sans frais",
    "Application mobile de suivi et conseils de conduite",
    "Réduction progressive avec l'expérience"
  ];

  const tips = [
    {
      title: "Optez pour un véhicule adapté",
      description: "Choisissez un véhicule de faible puissance (moins de 90ch) et d'une valeur raisonnable pour réduire votre prime d'assurance.",
      icon: <Car className="h-6 w-6 text-primary-600" />
    },
    {
      title: "Privilégiez la conduite accompagnée",
      description: "La conduite accompagnée (AAC) permet d'obtenir jusqu'à 25% de réduction sur votre assurance jeune conducteur.",
      icon: <GraduationCap className="h-6 w-6 text-primary-600" />
    },
    {
      title: "Acceptez un tracker de conduite",
      description: "Les boîtiers ou applications de suivi de conduite peuvent vous faire bénéficier de réductions significatives si votre conduite est prudente.",
      icon: <Shield className="h-6 w-6 text-primary-600" />
    },
    {
      title: "Optez pour une franchise plus élevée",
      description: "Augmenter votre franchise peut réduire significativement votre prime mensuelle, si vous êtes confiant dans votre conduite.",
      icon: <Briefcase className="h-6 w-6 text-primary-600" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Assurance Auto Jeune Conducteur 2025 | Tarifs Adaptés | Devis Gratuit</title>
        <meta name="description" content="Assurance auto jeune conducteur : tarifs adaptés aux permis récents. Bonus conduite accompagnée, paiement mensuel, accompagnement personnalisé. Devis gratuit en 2 minutes." />
        <meta name="keywords" content="assurance jeune conducteur, assurance permis récent, assurance auto débutant, assurance conduite accompagnée, assurance premier véhicule" />
        <link rel="canonical" href="https://xcr-courtier.fr/assurance-auto-jeune-conducteur" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Assurance Auto Jeune Conducteur | Tarifs Adaptés" />
        <meta property="og:description" content="Assurance auto pour jeunes conducteurs : tarifs adaptés, bonus conduite accompagnée. Devis gratuit en 2 minutes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xcr-courtier.fr/assurance-auto-jeune-conducteur" />
        <meta property="og:image" content="https://images.pexels.com/photos/7433822/pexels-photo-7433822.jpeg" />
        
        {/* Schema.org Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Assurance Auto Jeune Conducteur",
            "description": "Assurance auto adaptée aux jeunes conducteurs et permis récents",
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
            backgroundImage: 'url("https://images.pexels.com/photos/7433822/pexels-photo-7433822.jpeg")',
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
                Assurance Auto Jeune Conducteur
                <span className="text-secondary-400"> - Tarifs Adaptés</span>
              </h1>
              
              <p className="text-xl text-gray-200 mb-8">
                Des solutions d'assurance spécialement conçues pour les jeunes conducteurs et permis récents. Tarifs négociés et accompagnement personnalisé.
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
              <AutoInsuranceQuoteForm formType="jeune" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Nos solutions pour jeunes conducteurs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des formules adaptées pour démarrer sereinement sur la route
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

      {/* Conseils pour économiser */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Conseils pour réduire votre prime d'assurance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Astuces pour économiser sur votre assurance auto jeune conducteur
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {tips.map((tip, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  {tip.icon}
                  <h3 className="text-xl font-bold text-primary-800 ml-3">{tip.title}</h3>
                </div>
                <p className="text-gray-600">{tip.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparatif des formules */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Nos formules jeunes conducteurs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comparez nos offres spéciales pour trouver celle qui vous convient
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead className="bg-primary-800 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Formule</th>
                  <th className="px-6 py-4 text-center">Essentielle</th>
                  <th className="px-6 py-4 text-center">Confort</th>
                  <th className="px-6 py-4 text-center">Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 font-semibold text-primary-800">Responsabilité civile</td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 font-semibold text-primary-800">Bris de glace</td>
                  <td className="px-6 py-4 text-center">Option</td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 font-semibold text-primary-800">Vol et incendie</td>
                  <td className="px-6 py-4 text-center">✗</td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 font-semibold text-primary-800">Dommages tous accidents</td>
                  <td className="px-6 py-4 text-center">✗</td>
                  <td className="px-6 py-4 text-center">✗</td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 font-semibold text-primary-800">Assistance 0 km</td>
                  <td className="px-6 py-4 text-center">Option</td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 font-semibold text-primary-800">Véhicule de remplacement</td>
                  <td className="px-6 py-4 text-center">✗</td>
                  <td className="px-6 py-4 text-center">Option</td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 font-semibold text-primary-800">Tarif mensuel indicatif</td>
                  <td className="px-6 py-4 text-center">À partir de 45€</td>
                  <td className="px-6 py-4 text-center">À partir de 65€</td>
                  <td className="px-6 py-4 text-center">À partir de 85€</td>
                </tr>
                <tr>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4 text-center">
                    <Button variant="outline" href="#top" className="w-full">Obtenir un devis</Button>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Button variant="outline" href="#top" className="w-full">Obtenir un devis</Button>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Button variant="primary" href="#top" className="w-full">Obtenir un devis</Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Avis clients */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Ce que nos jeunes conducteurs en disent
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les témoignages de nos clients satisfaits de leur assurance jeune conducteur
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Lucas Martin",
                vehicle: "Renault Clio",
                text: "Après avoir obtenu mon permis, j'ai trouvé une assurance abordable grâce à XCR. Le bonus pour la conduite accompagnée a fait une vraie différence !",
                rating: 5
              },
              {
                name: "Emma Dubois",
                vehicle: "Peugeot 208",
                text: "Excellente assurance pour mon premier véhicule. Le paiement mensuel sans frais m'aide à gérer mon budget d'étudiante.",
                rating: 4
              },
              {
                name: "Thomas Leroy",
                vehicle: "Citroën C3",
                text: "L'application de suivi de conduite m'a permis de réduire ma prime de 20% après 6 mois. Super initiative pour les jeunes conducteurs !",
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Questions fréquentes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tout ce que vous devez savoir sur l'assurance auto jeune conducteur
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "Jusqu'à quel âge est-on considéré comme jeune conducteur ?",
                answer: "En matière d'assurance auto, vous êtes généralement considéré comme jeune conducteur pendant les 3 premières années suivant l'obtention de votre permis, quel que soit votre âge. Cependant, certains assureurs appliquent également ce statut aux conducteurs de moins de 25 ans, même s'ils ont leur permis depuis plus de 3 ans. Après cette période, vous bénéficiez progressivement de tarifs plus avantageux si vous n'avez pas eu d'accident responsable."
              },
              {
                question: "La conduite accompagnée permet-elle vraiment d'économiser ?",
                answer: "Oui, la conduite accompagnée (AAC) permet de réaliser des économies significatives sur votre assurance auto. Les jeunes conducteurs issus de l'AAC bénéficient généralement d'une réduction de 10% à 25% sur leur prime d'assurance, selon les compagnies. De plus, ils commencent avec un bonus-malus de 0.80 au lieu de 1.00, ce qui représente une économie supplémentaire de 20%. Les statistiques montrent que ces conducteurs ont moins d'accidents, ce qui justifie ces tarifs préférentiels."
              },
              {
                question: "Comment évolue le tarif d'un jeune conducteur avec le temps ?",
                answer: "Le tarif d'assurance d'un jeune conducteur diminue progressivement avec le temps, à condition de ne pas avoir d'accident responsable. La première baisse significative intervient généralement après la première année sans sinistre, avec une réduction d'environ 15%. Après 2 ans sans accident, la réduction peut atteindre 25-30%. Au bout de 3 ans, vous n'êtes plus considéré comme jeune conducteur et bénéficiez des tarifs standards, ce qui représente souvent une économie de 40-50% par rapport à votre tarif initial."
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
            <h2 className="text-3xl font-bold mb-6">Démarrez sereinement sur la route</h2>
            <p className="text-xl text-gray-200 mb-8">
              Obtenez votre devis d'assurance jeune conducteur en moins de 2 minutes et bénéficiez de nos tarifs négociés.
            </p>
            <Button 
              variant="accent" 
              size="lg"
              href="#top"
            >
              Obtenir mon devis jeune conducteur
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

export default AssuranceJeuneConducteurPage;