import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '../components/forms/ContactForm';

const ContactPage = () => {
  const services = [
    { value: 'commercial', label: 'Commercial', email: 'contact@xcr.fr' },
    { value: 'gestion', label: 'Gestion', email: 'contact@xcr.fr' },
    { value: 'sinistre', label: 'Sinistres', email: 'contact@xcr.fr' },
    { value: 'patrimoine', label: 'Patrimoine', email: 'contact@xcr.fr' },
  ];

  return (
    <>
      <Helmet>
        <title>Contact XCR Courtier | Devis Assurance Gratuit | Expert Assurance Paris</title>
        <meta name="description" content="Contactez XCR eXcellence Coverage Risks pour votre devis assurance gratuit. Expert courtier assurance Paris depuis 15 ans. Réponse sous 24h. ☎️ 01 80 85 57 81" />
        <meta name="keywords" content="contact XCR courtier, devis assurance gratuit, expert assurance Paris, courtier assurance contact" />
        <link rel="canonical" href="https://xcr-courtier.fr/contact" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Contact XCR Courtier | Expert Assurance Paris" />
        <meta property="og:description" content="Contactez XCR Courtier pour votre devis assurance gratuit. Expert courtier depuis 15 ans." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xcr-courtier.fr/contact" />
        <meta property="og:image" content="https://xcr-courtier.fr/images/contact-xcr-courtier.jpg" />
        
        {/* Schema.org ContactPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact XCR Courtier",
            "description": "Page de contact pour obtenir un devis assurance gratuit",
            "mainEntity": {
              "@type": "Organization",
              "name": "XCR eXcellence Coverage Risks",
              "telephone": "+33-1-80-85-57-81",
              "email": "contact@xcr.fr",
              "address": [
                {
                  "@type": "PostalAddress",
                  "streetAddress": "2 Avenue Gallieni, Le CATG",
                  "addressLocality": "Melun",
                  "postalCode": "77000",
                  "addressCountry": "FR"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "26 Place du Marché",
                  "addressLocality": "Milly-la-Forêt",
                  "postalCode": "91490",
                  "addressCountry": "FR"
                }
              ]
            }
          })}
        </script>
      </Helmet>

      {/* Hidden form for Netlify */}
      <form name="contact" netlify="true" hidden>
        <input type="text" name="firstName" />
        <input type="text" name="lastName" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <select name="service">
          <option value="commercial">Commercial</option>
          <option value="gestion">Gestion</option>
          <option value="sinistre">Sinistres</option>
          <option value="patrimoine">Patrimoine</option>
        </select>
        <input type="text" name="subject" />
        <textarea name="message"></textarea>
        <input type="text" name="targetEmail" />
      </form>

      <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contactez XCR eXcellence Coverage Risks
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Notre équipe d'experts est à votre disposition pour répondre à toutes vos questions 
              et vous accompagner dans vos projets d'assurance.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <motion.div 
              className="text-white space-y-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Main Office */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-6 text-secondary-400">Siège Social - Melun</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Adresse</h3>
                      <p className="text-blue-100">
                        2 Avenue Gallieni, Le CATG<br />
                        77000 Melun, France
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Téléphone</h3>
                      <a href="tel:+33180855781" className="text-blue-100 hover:text-white transition-colors">
                        01 80 85 57 81
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Milly Office */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-6 text-secondary-400">Agence Milly-la-Forêt</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Adresse</h3>
                      <p className="text-blue-100">
                        26 Place du Marché<br />
                        91490 Milly-la-Forêt, France
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Téléphone</h3>
                      <a href="tel:+33180855782" className="text-blue-100 hover:text-white transition-colors">
                        01 80 85 57 82
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a href="mailto:milly@xcr.fr" className="text-blue-100 hover:text-white transition-colors">
                        milly@xcr.fr
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Specialized Contacts */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-6 text-secondary-400">Contacts Spécialisés</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <div key={service.value} className="flex items-center">
                      <Mail className="h-4 w-4 mr-3 text-secondary-400" />
                      <div>
                        <div className="font-medium">{service.label}</div>
                        <a 
                          href={`mailto:${service.email}`} 
                          className="text-sm text-blue-100 hover:text-white transition-colors"
                        >
                          {service.email}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Horaires d'ouverture</h3>
                    <div className="text-blue-100 text-sm space-y-1">
                      <p>Lundi - Vendredi : 9h00 - 18h00</p>
                      <p>Samedi : 9h00 - 12h00</p>
                      <p>Dimanche : Fermé</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Legal Info */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-semibold mb-3 text-secondary-400">Informations Légales</h3>
                <div className="text-sm text-blue-100 space-y-1">
                  <p><span className="font-medium">ORIAS :</span> 11 061 425</p>
                  <p><span className="font-medium">SIRET :</span> 498 933 167 00027 (Evry)</p>
                  <p className="text-xs mt-2">
                    Courtier en assurance inscrit à l'ORIAS - Garantie financière et assurance de responsabilité civile professionnelle conformes au Code des assurances.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;