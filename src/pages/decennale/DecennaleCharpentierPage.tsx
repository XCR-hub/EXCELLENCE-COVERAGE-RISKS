import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, Hammer, Star, Phone, Calculator } from 'lucide-react';
import DecennaleLeadForm from '../../components/forms/DecennaleLeadForm';
import Button from '../../components/common/Button';
import { DecennaleBreadcrumbs } from '../../components/navigation';

const DecennaleCharpentierPage = () => {
  const testimonials = [
    {
      name: "Jérôme Dupont",
      company: "Dupont Charpentes",
      text: "Grâce à XCR, j'ai obtenu mon assurance décennale charpentier en 24h avec un tarif très compétitif. Leur expertise dans notre domaine est vraiment appréciable.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
    },
    {
      name: "Nicolas Martin", 
      company: "Martin Structures Bois",
      text: "Service impeccable, conseiller dédié qui comprend les spécificités de notre métier et attestation décennale charpentier délivrée rapidement.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
    }
  ];

  const guarantees = [
    "Garantie décennale charpente : structures bois, métal, lamellé-collé",
    "Couverture fermes, pannes, chevrons et ossatures",
    "Protection charpentes traditionnelles et industrielles",
    "Garantie biennale équipements : fixations, assemblages",
    "RC Pro charpentier incluse : dommages pendant travaux",
    "Dommages aux existants : protection bâtiments adjacents"
  ];

  const advantages = [
    { icon: <Calculator />, text: "Tarif charpentier dès 1 200€/an" },
    { icon: <Shield />, text: "Attestation en 24h" },
    { icon: <CheckCircle />, text: "RC Pro incluse" },
    { icon: <Phone />, text: "Expert charpente dédié" }
  ];

  return (
    <>
      <Helmet>
        <title>Assurance Décennale Charpentier - Devis Gratuit en 2 Minutes | XCR Courtier</title>
        <meta name="description" content="Assurance décennale charpentier pas chère. Devis gratuit en 2 minutes, attestation sous 24h. Spécialiste charpente : bois, métal, lamellé-collé. XCR expert." />
        <meta name="keywords" content="assurance décennale charpentier, décennale charpente, assurance charpentier, devis décennale charpentier, XCR courtier charpentier" />
        <link rel="canonical" href="https://xcr-courtier.fr/assurance-decennale-charpentier" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Assurance Décennale Charpentier",
            "description": "Assurance décennale spécialisée pour charpentiers et entreprises de charpente",
            "provider": {
              "@type": "Organization",
              "name": "XCR Courtier"
            },
            "serviceType": "Assurance Décennale Charpente",
            "audience": {
              "@type": "BusinessAudience", 
              "audienceType": "Charpentiers et entreprises de charpente"
            }
          })}
        </script>
      </Helmet>

      {/* Breadcrumbs Navigation */}
      <div className="container mx-auto px-4 pt-8">
        <DecennaleBreadcrumbs />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center py-24">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-primary-900/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Assurance Décennale Charpentier
                <span className="text-secondary-400"> - Devis Gratuit en 2 Minutes</span>
              </h1>
              
              <p className="text-xl text-gray-200 mb-8">
                Spécialiste assurance décennale charpentier depuis 15 ans. Tarifs négociés, 
                attestation sous 24h, RC Pro incluse. Expert charpente bois, métal, lamellé-collé.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-center text-secondary-300">
                    <div className="w-8 h-8 bg-secondary-400 rounded-full flex items-center justify-center mr-3">
                      {React.cloneElement(advantage.icon, { className: "w-4 h-4 text-white" })}
                    </div>
                    <span className="text-sm">{advantage.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <DecennaleLeadForm metier="charpentier" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pourquoi choisir section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">
              Pourquoi choisir notre assurance décennale pour charpentiers ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expertise spécialisée charpente, garanties adaptées aux risques du métier, 
              couverture complète pour tous types de structures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Hammer className="h-6 w-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{guarantee}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risques spécifiques */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">
              Risques spécifiques du métier de charpentier
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notre assurance décennale charpentier couvre les risques propres à votre activité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-primary-800 mb-4 flex items-center">
                <Hammer className="h-6 w-6 text-amber-500 mr-2" />
                Risques structurels
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Affaissement de charpente</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Rupture d'assemblages</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Défauts de dimensionnement</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold text-primary-800 mb-4 flex items-center">
                <Hammer className="h-6 w-6 text-blue-500 mr-2" />
                Risques matériaux
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Déformation du bois</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Corrosion des éléments métalliques</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Problèmes liés au traitement du bois</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-primary-800 mb-4 flex items-center">
                <Hammer className="h-6 w-6 text-red-500 mr-2" />
                Risques climatiques
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Résistance insuffisante aux charges de neige</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Dommages liés aux vents violents</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Problèmes d'humidité et condensation</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary-800 mb-12">
            Témoignages de charpentiers assurés
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-primary-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Activités couvertes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">
              Activités de charpentier couvertes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notre assurance décennale couvre toutes les activités liées au métier de charpentier
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              className="bg-gray-50 rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-primary-800 mb-4">Charpente traditionnelle</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Fabrication et pose de fermes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Installation de pannes et chevrons</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Réalisation d'assemblages traditionnels</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-gray-50 rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold text-primary-800 mb-4">Charpente industrielle</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Pose de fermettes industrielles</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Installation de structures métalliques</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Montage de charpentes en lamellé-collé</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-gray-50 rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-primary-800 mb-4">Travaux spécifiques</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Rénovation de charpentes anciennes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Traitement du bois</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Création de structures spéciales</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Obtenez votre assurance décennale charpentier maintenant
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Plus de 1 400 charpentiers nous font confiance. Rejoignez-les et sécurisez 
            votre activité de charpentier dès aujourd'hui.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" href="#formulaire">
              <Calculator className="w-5 h-5 mr-2" />
              Calculer mon tarif charpentier
            </Button>
            <Button variant="outline" size="lg" href="tel:+33180855781" 
                   className="border-white text-white hover:bg-white/10">
              <Phone className="w-5 h-5 mr-2" />
              Parler à un expert charpente
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default DecennaleCharpentierPage;