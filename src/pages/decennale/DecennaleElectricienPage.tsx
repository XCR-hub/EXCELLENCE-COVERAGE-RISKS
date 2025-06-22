import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, Zap, Star, Phone, Calculator } from 'lucide-react';
import DecennaleLeadForm from '../../components/forms/DecennaleLeadForm';
import Button from '../../components/common/Button';

const DecennaleElectricienPage = () => {
  const testimonials = [
    {
      name: "Laurent Moreau",
      company: "Moreau Électricité",
      text: "Assurance décennale électricien obtenue en 24h avec XCR. Tarif imbattable et service client au top.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
    },
    {
      name: "David Leroy", 
      company: "Leroy Installations",
      text: "Expert en électricité, ils comprennent nos risques. Attestation décennale électricien rapide.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
    }
  ];

  const guarantees = [
    "Garantie décennale électricité : installations courants forts et faibles",
    "Couverture tableaux électriques, câblages, prises et interrupteurs",
    "Protection installations domotique et systèmes connectés",
    "Garantie biennale équipements : VMC, chauffage électrique",
    "RC Pro électricien incluse : courts-circuits, incendies",
    "Cyber-risques : protection données clients et systèmes"
  ];

  const advantages = [
    { icon: <Calculator />, text: "Tarif électricien dès 750€/an" },
    { icon: <Shield />, text: "Attestation en 24h" },
    { icon: <CheckCircle />, text: "RC Pro incluse" },
    { icon: <Phone />, text: "Expert électricité dédié" }
  ];

  return (
    <>
      <Helmet>
        <title>Assurance Décennale Électricien - Devis Gratuit en 2 Minutes | XCR Courtier</title>
        <meta name="description" content="Assurance décennale électricien pas chère. Devis gratuit en 2 minutes, attestation sous 24h. Spécialiste électricité : courants forts/faibles, domotique. XCR expert." />
        <meta name="keywords" content="assurance décennale électricien, décennale électricité, assurance électricien, devis décennale électricien, XCR courtier électricien" />
        <link rel="canonical" href="https://xcr-courtier.fr/assurance-decennale-electricien" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Assurance Décennale Électricien",
            "description": "Assurance décennale spécialisée pour électriciens et entreprises d'électricité",
            "provider": {
              "@type": "Organization",
              "name": "XCR Courtier"
            },
            "serviceType": "Assurance Décennale Électricité",
            "audience": {
              "@type": "BusinessAudience", 
              "audienceType": "Électriciens et entreprises d'électricité"
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center py-24">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg")',
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
                Assurance Décennale Électricien
                <span className="text-secondary-400"> - Devis Gratuit en 2 Minutes</span>
              </h1>
              
              <p className="text-xl text-gray-200 mb-8">
                Spécialiste assurance décennale électricité depuis 15 ans. Tarifs négociés, 
                attestation sous 24h, RC Pro incluse. Expert courants forts/faibles, domotique.
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
              <DecennaleLeadForm metier="electricien" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pourquoi choisir section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">
              Pourquoi choisir notre assurance décennale pour électriciens ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expertise spécialisée électricité, garanties adaptées aux risques du métier, 
              couverture domotique et systèmes connectés.
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
                <Zap className="h-6 w-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{guarantee}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary-800 mb-12">
            Témoignages d'électriciens assurés
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-6"
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

      {/* CTA Final */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Obtenez votre assurance décennale électricien maintenant
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Plus de 1 500 électriciens nous font confiance. Rejoignez-les et sécurisez 
            votre activité électricité dès aujourd'hui.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" href="#formulaire">
              <Calculator className="w-5 h-5 mr-2" />
              Calculer mon tarif électricien
            </Button>
            <Button variant="outline" size="lg" href="tel:+33180855781" 
                   className="border-white text-white hover:bg-white/10">
              <Phone className="w-5 h-5 mr-2" />
              Parler à un expert électricité
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default DecennaleElectricienPage;