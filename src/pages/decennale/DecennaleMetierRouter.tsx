import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, Star, Phone, Calculator } from 'lucide-react';
import DecennaleLeadForm from '../../components/forms/DecennaleLeadForm';
import Button from '../../components/common/Button';
import { DecennaleBreadcrumbs } from '../../components/navigation';
import { getMetierById } from '../../data/metiers';
import { Icon, getIconForMetier } from '../../components/ui/Icon';
import { Card, TestimonialCard } from '../../components/ui/Card';
import { MetaTags } from '../../components/seo/MetaTags';

const DecennaleMetierRouter = () => {
  const { metier } = useParams<{ metier: string }>();
  
  // Vérifier si le métier existe dans notre liste
  if (!metier) {
    return <Navigate to="/assurance-decennale" />;
  }
  
  const metierData = getMetierById(metier);
  
  if (!metierData) {
    return <Navigate to="/assurance-decennale" />;
  }
  
  const iconName = getIconForMetier(metier);
  
  return (
    <>
      <MetaTags
        title={metierData.seoMeta.title}
        description={metierData.seoMeta.description}
        keywords={metierData.seoMeta.keywords}
        canonicalUrl={`https://xcr-courtier.fr/assurance-decennale-${metier}`}
        ogImage={metierData.image}
      />

      {/* Breadcrumbs Navigation */}
      <div className="container mx-auto px-4 pt-8">
        <DecennaleBreadcrumbs />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center py-24">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url("${metierData.image}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/75"></div>
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
                Assurance Décennale {metierData.title}
                <span className="text-secondary-400"> - Devis Gratuit en 2 Minutes</span>
              </h1>
              
              <p className="text-xl text-gray-200 mb-8">
                Spécialiste assurance décennale {metierData.title.toLowerCase()} depuis 15 ans. Tarifs négociés, 
                attestation sous 24h, RC Pro incluse. Expert {metierData.description}.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center text-secondary-300">
                  <div className="w-8 h-8 bg-secondary-400 rounded-full flex items-center justify-center mr-3">
                    <Calculator className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm">Tarif {metierData.title.toLowerCase()} dès {metierData.tarif}</span>
                </div>
                <div className="flex items-center text-secondary-300">
                  <div className="w-8 h-8 bg-secondary-400 rounded-full flex items-center justify-center mr-3">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm">Attestation en 24h</span>
                </div>
                <div className="flex items-center text-secondary-300">
                  <div className="w-8 h-8 bg-secondary-400 rounded-full flex items-center justify-center mr-3">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm">RC Pro incluse</span>
                </div>
                <div className="flex items-center text-secondary-300">
                  <div className="w-8 h-8 bg-secondary-400 rounded-full flex items-center justify-center mr-3">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm">Expert {metierData.title.toLowerCase()} dédié</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <DecennaleLeadForm metier={metier} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pourquoi choisir section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">
              Pourquoi choisir notre assurance décennale pour {metierData.title.toLowerCase()}s ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expertise spécialisée {metierData.title.toLowerCase()}, garanties adaptées aux risques du métier, 
              tarifs négociés avec les meilleures compagnies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {metierData.guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Icon name={iconName} className="h-6 w-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
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
            Témoignages de {metierData.title.toLowerCase()}s assurés
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {metierData.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <TestimonialCard
                  name={testimonial.name}
                  company={testimonial.company}
                  text={testimonial.text}
                  rating={testimonial.rating}
                  avatar={testimonial.avatar}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Obtenez votre assurance décennale {metierData.title.toLowerCase()} maintenant
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Des milliers de {metierData.title.toLowerCase()}s nous font confiance. Rejoignez-les et sécurisez 
            votre activité dès aujourd'hui.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="accent" 
              size="lg" 
              href="#formulaire"
            >
              <Calculator className="w-5 h-5 mr-2" />
              Calculer mon tarif {metierData.title.toLowerCase()}
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              href="tel:+33180855781" 
              className="border-white text-white hover:bg-white/10"
            >
              <Phone className="w-5 h-5 mr-2" />
              Parler à un expert {metierData.title.toLowerCase()}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default DecennaleMetierRouter;