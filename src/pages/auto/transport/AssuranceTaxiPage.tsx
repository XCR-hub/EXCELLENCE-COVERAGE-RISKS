import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, Car, Clock, Award, ArrowRight, Star, Info, User, Briefcase, MapPin, Phone } from 'lucide-react';
import Button from '../../../components/common/Button';
import AutoInsuranceQuoteForm from '../../../components/forms/AutoInsuranceQuoteForm';
import { AutoInsuranceBreadcrumbs } from '../../../components/navigation';

const AssuranceTaxiPage = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-primary-600" />,
      title: "Responsabilité Civile Pro",
      description: "Couverture spécifique pour le transport de personnes"
    },
    {
      icon: <User className="h-8 w-8 text-primary-600" />,
      title: "Protection Passagers",
      description: "Garantie des personnes transportées renforcée"
    },
    {
      icon: <Car className="h-8 w-8 text-primary-600" />,
      title: "Véhicule de Remplacement",
      description: "Continuité d'activité en cas d'immobilisation"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary-600" />,
      title: "Assistance 0km 24h/24",
      description: "Dépannage prioritaire pour les professionnels"
    }
  ];

  const advantages = [
    "Tarifs négociés spécifiquement pour les taxis",
    "Couverture des équipements spécifiques (taximètre, enseigne...)",
    "Protection juridique professionnelle incluse",
    "Indemnisation rapide en cas de sinistre",
    "Garantie perte d'exploitation en option",
    "Accompagnement par des experts du secteur"
  ];

  const legalRequirements = [
    {
      title: "Responsabilité Civile Professionnelle",
      description: "Obligatoire pour tous les taxis, cette garantie couvre les dommages causés aux tiers, y compris les passagers transportés, à hauteur de montants spécifiques au transport de personnes.",
      icon: <Shield className="h-6 w-6 text-primary-600" />
    },
    {
      title: "Carte Professionnelle",
      description: "L'assurance est indispensable pour obtenir et conserver votre carte professionnelle de chauffeur de taxi, délivrée par la préfecture.",
      icon: <Briefcase className="h-6 w-6 text-primary-600" />
    },
    {
      title: "Autorisation de Stationnement (ADS)",
      description: "Votre assurance doit couvrir spécifiquement l'activité de taxi pour que votre autorisation de stationnement reste valide.",
      icon: <MapPin className="h-6 w-6 text-primary-600" />
    },
    {
      title: "Visite Technique",
      description: "Une assurance professionnelle valide est requise lors des contrôles techniques spécifiques aux taxis, effectués tous les 6 mois.",
      icon: <Car className="h-6 w-6 text-primary-600" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Assurance Taxi 2025 | Devis Gratuit | Couverture Spécifique Transport de Personnes</title>
        <meta name="description" content="Assurance taxi adaptée aux chauffeurs professionnels. Responsabilité civile pro, protection passagers, véhicule de remplacement. Devis gratuit en 2 minutes." />
        <meta name="keywords" content="assurance taxi, assurance chauffeur taxi, RC pro taxi, assurance transport personnes, assurance vtc, assurance professionnelle taxi" />
        <link rel="canonical" href="https://xcr-courtier.fr/assurance-auto/transport/taxi" />
        
        {/* Schema.org Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Assurance Taxi",
            "description": "Assurance spécifique pour les chauffeurs de taxi et le transport de personnes",
            "provider": {
              "@type": "Organization",
              "name": "XCR Courtier"
            },
            "serviceType": "Assurance Auto Professionnelle",
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
            backgroundImage: 'url("https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg")',
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
                Assurance Taxi
                <span className="text-secondary-400"> - Protection Sur Mesure</span>
              </h1>
              
              <p className="text-xl text-gray-200 mb-8">
                Une assurance spécifiquement conçue pour les chauffeurs de taxi. Protégez votre activité avec des garanties adaptées au transport de personnes.
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
                  Devis Assurance Taxi
                </h2>
                <p className="text-gray-600">
                  Obtenez votre tarif personnalisé en 2 minutes
                </p>
              </div>
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
              Nos garanties spécifiques pour les taxis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une protection complète adaptée aux besoins des chauffeurs de taxi
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

      {/* Obligations légales */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Obligations légales des chauffeurs de taxi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les exigences réglementaires en matière d'assurance pour exercer votre activité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {legalRequirements.map((requirement, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  {requirement.icon}
                  <h3 className="text-xl font-bold text-primary-800 ml-3">{requirement.title}</h3>
                </div>
                <p className="text-gray-600">{requirement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
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
                Pourquoi choisir notre assurance taxi ?
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                Notre assurance taxi offre des avantages spécifiques pour répondre aux besoins uniques des chauffeurs professionnels.
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
                    <Shield className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-700 mb-1">Garantie perte d'exploitation</h4>
                    <p className="text-gray-600">
                      Compensation financière en cas d'immobilisation de votre véhicule suite à un sinistre.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <Award className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-700 mb-1">Protection financière licence</h4>
                    <p className="text-gray-600">
                      Couverture de la valeur de votre autorisation de stationnement (ADS) en cas de sinistre.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-700 mb-1">Assistance premium</h4>
                    <p className="text-gray-600">
                      Dépannage prioritaire et véhicule de remplacement de catégorie équivalente.
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
              Ce que nos chauffeurs de taxi en disent
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les témoignages de professionnels qui nous font confiance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Michel Durand",
                location: "Paris",
                text: "Après 15 ans de métier, j'ai enfin trouvé une assurance qui comprend vraiment les besoins des taxis. Le véhicule de remplacement m'a sauvé lors d'une panne qui aurait pu me coûter une semaine de travail.",
                rating: 5
              },
              {
                name: "Sophie Martin",
                location: "Lyon",
                text: "La réactivité en cas de sinistre est impressionnante. Suite à un accrochage, j'ai été prise en charge immédiatement et j'ai pu reprendre mon activité dès le lendemain. Un vrai plus pour nous qui vivons de notre véhicule.",
                rating: 5
              },
              {
                name: "Karim Benali",
                location: "Marseille",
                text: "Le rapport qualité-prix est excellent. J'apprécie particulièrement la protection juridique incluse qui m'a déjà aidé lors d'un litige avec un client. Je recommande à tous mes collègues.",
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
                    <p className="text-sm text-gray-500">Taxi à {testimonial.location}</p>
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
              Tout ce que vous devez savoir sur l'assurance taxi
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "Quelles sont les garanties obligatoires pour un taxi ?",
                answer: "En tant que chauffeur de taxi, vous devez obligatoirement souscrire à une assurance responsabilité civile professionnelle spécifique au transport de personnes. Cette garantie couvre les dommages causés aux tiers, y compris vos passagers, pendant l'exercice de votre activité. Les montants de couverture sont plus élevés que pour un véhicule particulier, reflétant la responsabilité accrue liée au transport de personnes. Cette assurance est indispensable pour obtenir et conserver votre carte professionnelle et votre autorisation de stationnement (ADS)."
              },
              {
                question: "Comment est calculé le tarif d'une assurance taxi ?",
                answer: "Le tarif de votre assurance taxi dépend de plusieurs facteurs spécifiques : votre zone d'exercice (les grandes villes comme Paris ont généralement des tarifs plus élevés), votre expérience professionnelle, votre historique de sinistralité, les caractéristiques de votre véhicule, et les garanties choisies. Nous prenons également en compte votre chiffre d'affaires annuel et le nombre d'heures travaillées. Notre approche consiste à analyser précisément votre profil professionnel pour vous proposer un tarif juste et adapté à votre situation réelle."
              },
              {
                question: "Que faire en cas de sinistre avec des passagers à bord ?",
                answer: "En cas de sinistre avec des passagers à bord, suivez ces étapes essentielles : assurez d'abord la sécurité de vos passagers et appelez les secours si nécessaire. Recueillez les coordonnées de tous vos passagers, même ceux qui semblent indemnes (des blessures peuvent se déclarer ultérieurement). Remplissez soigneusement le constat amiable en précisant la présence de clients. Contactez notre service sinistre dédié aux professionnels dans les 24h, disponible 7j/7. Notre équipe spécialisée prendra immédiatement en charge votre dossier et vous guidera dans les démarches spécifiques au transport de personnes."
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
            <h2 className="text-3xl font-bold mb-6">Protégez votre activité de taxi dès aujourd'hui</h2>
            <p className="text-xl text-gray-200 mb-8">
              Obtenez votre devis personnalisé en moins de 2 minutes et bénéficiez de garanties adaptées à votre métier.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="accent" 
                size="lg"
                href="#top"
              >
                Obtenir mon devis taxi
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

      {/* Autres solutions transport */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Autres solutions pour le transport de personnes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos offres adaptées à chaque type de transport
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-primary-800 mb-3">Assurance VTC</h3>
              <p className="text-gray-600 mb-4">
                Solutions spécifiques pour les chauffeurs de VTC avec des garanties adaptées à votre activité.
              </p>
              <Link 
                to="/assurance-auto/transport/vtc" 
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

export default AssuranceTaxiPage;