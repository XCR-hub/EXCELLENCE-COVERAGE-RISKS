import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, Car, Clock, Award, ArrowRight, Star, Info, User } from 'lucide-react';
import Button from '../../components/common/Button';
import AutoInsuranceQuoteForm from '../../components/forms/AutoInsuranceQuoteForm';

const AssuranceTousRisquesPage = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-primary-600" />,
      title: "Protection Maximale",
      description: "Couverture complète pour votre véhicule, même en cas d'accident responsable"
    },
    {
      icon: <Car className="h-8 w-8 text-primary-600" />,
      title: "Valeur à Neuf",
      description: "Remboursement à la valeur d'achat pendant les premières années"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary-600" />,
      title: "Véhicule de Remplacement",
      description: "Mise à disposition d'un véhicule pendant les réparations"
    },
    {
      icon: <Award className="h-8 w-8 text-primary-600" />,
      title: "Assistance Premium",
      description: "Dépannage 0km et rapatriement des passagers 24h/24"
    }
  ];

  const advantages = [
    "Couverture tous dommages, même responsable",
    "Protection contre le vol et l'incendie",
    "Bris de glace sans franchise",
    "Indemnisation rapide en cas de sinistre",
    "Garantie du conducteur étendue",
    "Assistance 0 km 24h/24"
  ];

  const idealFor = [
    "Véhicules neufs ou récents (moins de 5 ans)",
    "Véhicules haut de gamme ou de valeur élevée",
    "Conducteurs souhaitant une tranquillité maximale",
    "Personnes utilisant leur véhicule quotidiennement",
    "Familles avec enfants (protection renforcée)"
  ];

  return (
    <>
      <Helmet>
        <title>Assurance Auto Tous Risques 2025 | Devis Gratuit | Protection Maximale</title>
        <meta name="description" content="Assurance auto tous risques : protection maximale pour votre véhicule. Couverture complète même en cas d'accident responsable. Devis gratuit en 2 minutes." />
        <meta name="keywords" content="assurance tous risques, assurance auto complète, devis tous risques, protection maximale auto, assurance véhicule neuf" />
        <link rel="canonical" href="https://xcr-courtier.fr/assurance-auto-tous-risques" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Assurance Auto Tous Risques | Protection Maximale" />
        <meta property="og:description" content="Assurance auto tous risques : protection complète pour votre véhicule. Devis gratuit en 2 minutes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xcr-courtier.fr/assurance-auto-tous-risques" />
        <meta property="og:image" content="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg" />
        
        {/* Schema.org Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Assurance Auto Tous Risques",
            "description": "Assurance auto tous risques avec protection maximale pour votre véhicule",
            "provider": {
              "@type": "Organization",
              "name": "XCR Courtier"
            },
            "serviceType": "Assurance Auto",
            "areaServed": "France",
            "offers": {
              "@type": "Offer",
              "description": "Devis gratuit assurance auto tous risques"
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
            backgroundImage: 'url("https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg")',
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
                Assurance Auto Tous Risques
                <span className="text-secondary-400"> - Protection Maximale</span>
              </h1>
              
              <p className="text-xl text-gray-200 mb-8">
                La formule tous risques offre une protection complète pour votre véhicule, même en cas d'accident responsable. Idéale pour les véhicules neufs ou de valeur.
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
              <AutoInsuranceQuoteForm formType="tous-risques" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Les avantages de l'assurance tous risques
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une protection complète pour votre véhicule et une tranquillité d'esprit maximale
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
                Pour qui est adaptée l'assurance tous risques ?
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                L'assurance tous risques est particulièrement recommandée dans certaines situations. Découvrez si cette formule est adaptée à votre profil.
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
                Pourquoi choisir notre assurance tous risques ?
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <Shield className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-700 mb-1">Protection complète</h4>
                    <p className="text-gray-600">
                      Notre formule tous risques couvre l'ensemble des dommages pouvant affecter votre véhicule, quelle que soit la responsabilité.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <Award className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-700 mb-1">Garanties premium</h4>
                    <p className="text-gray-600">
                      Bénéficiez de garanties étendues comme la valeur à neuf, le prêt de véhicule et l'assistance 0 km.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-700 mb-1">Gestion rapide des sinistres</h4>
                    <p className="text-gray-600">
                      En cas de sinistre, bénéficiez d'une prise en charge prioritaire et d'une indemnisation accélérée.
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
              Découvrez les témoignages de nos clients satisfaits de leur assurance tous risques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Sophie Martin",
                vehicle: "BMW Série 3",
                text: "Suite à un accident responsable, j'ai été bluffée par la rapidité de prise en charge. Véhicule de remplacement fourni le jour même et indemnisation sous 48h !",
                rating: 5
              },
              {
                name: "Pierre Dubois",
                vehicle: "Audi A4",
                text: "La formule tous risques m'a sauvé après un vol de voiture. Remboursement à la valeur déclarée sans discussion. Service client au top !",
                rating: 5
              },
              {
                name: "Camille Leroy",
                vehicle: "Mercedes Classe C",
                text: "Excellente assurance pour ma voiture neuve. La valeur à neuf pendant 3 ans est un vrai plus. Je recommande vivement.",
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
              Tout ce que vous devez savoir sur l'assurance auto tous risques
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "Quand choisir une assurance tous risques ?",
                answer: "L'assurance tous risques est recommandée pour les véhicules neufs ou récents (moins de 5 ans), les véhicules de valeur élevée, ou si vous souhaitez une tranquillité d'esprit maximale. Elle est particulièrement adaptée si vous utilisez fréquemment votre véhicule ou si vous avez un crédit auto en cours."
              },
              {
                question: "Quelle est la différence avec une assurance intermédiaire ?",
                answer: "Contrairement à l'assurance intermédiaire qui couvre principalement le vol, l'incendie et le bris de glace, l'assurance tous risques ajoute la garantie dommages tous accidents, qui vous protège même en cas d'accident responsable. Elle inclut généralement aussi des services premium comme le véhicule de remplacement et une assistance renforcée."
              },
              {
                question: "L'assurance tous risques couvre-t-elle tous les dommages sans exception ?",
                answer: "Malgré son nom, l'assurance tous risques comporte certaines exclusions, généralement liées à des comportements à risque (conduite sous l'emprise d'alcool ou de stupéfiants, conduite sans permis valide) ou à des événements exceptionnels (guerre, émeutes). Consultez attentivement les conditions générales pour connaître les exclusions spécifiques de votre contrat."
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
            <h2 className="text-3xl font-bold mb-6">Protégez votre véhicule avec notre assurance tous risques</h2>
            <p className="text-xl text-gray-200 mb-8">
              Obtenez votre devis personnalisé en moins de 2 minutes et bénéficiez d'une protection optimale pour votre véhicule.
            </p>
            <Button 
              variant="accent" 
              size="lg"
              href="#top"
            >
              Obtenir mon devis tous risques
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
              <h3 className="text-xl font-bold text-primary-800 mb-3">Assurance Auto au Tiers</h3>
              <p className="text-gray-600 mb-4">
                La formule essentielle à prix abordable pour répondre à l'obligation légale d'assurance.
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

export default AssuranceTousRisquesPage;