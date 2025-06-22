import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building2, Shield, CheckCircle, Users, Award, ArrowRight, Star, Phone, FileText, Briefcase } from 'lucide-react';
import Button from '../../components/common/Button';
import MetiersBreadcrumbs from '../../components/navigation/MetiersBreadcrumbs';

const CourtierAssuranceEntreprisePage = () => {
  // Compétences requises
  const skills = [
    "Expertise en analyse de risques professionnels",
    "Connaissance approfondie des contrats d'assurance entreprise",
    "Maîtrise des spécificités sectorielles",
    "Capacité de négociation avec les assureurs",
    "Accompagnement en gestion de sinistres",
    "Veille réglementaire et juridique"
  ];

  // Avantages du métier
  const advantages = [
    {
      title: "Analyse de risques sur mesure",
      description: "Identification précise des risques spécifiques à votre activité pour une couverture optimale",
      icon: <Shield className="h-8 w-8 text-primary-600" />
    },
    {
      title: "Comparaison multi-compagnies",
      description: "Accès à plus de 30 compagnies d'assurance pour trouver les meilleures garanties au meilleur prix",
      icon: <Building2 className="h-8 w-8 text-primary-600" />
    },
    {
      title: "Accompagnement personnalisé",
      description: "Un conseiller dédié qui connaît votre entreprise et ses spécificités",
      icon: <Users className="h-8 w-8 text-primary-600" />
    },
    {
      title: "Gestion proactive des contrats",
      description: "Suivi et optimisation continue de vos contrats en fonction de l'évolution de votre activité",
      icon: <FileText className="h-8 w-8 text-primary-600" />
    }
  ];

  // Témoignages clients
  const testimonials = [
    {
      name: "Sophie Moreau",
      position: "Directrice Générale",
      company: "Moreau Industries",
      text: "Notre conseiller XCR a réalisé un audit complet de nos contrats d'assurance et nous a permis d'économiser 35% tout en améliorant nos garanties. Son expertise sectorielle a fait toute la différence.",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      rating: 5
    },
    {
      name: "Jean Dupont",
      position: "Gérant",
      company: "Dupont & Associés",
      text: "Suite à un sinistre important, notre courtier XCR a géré l'intégralité du dossier et nous a obtenu une indemnisation bien supérieure à nos attentes. Un accompagnement de qualité qui nous a permis de traverser cette période difficile.",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      rating: 5
    }
  ];

  // Secteurs d'activité couverts
  const sectors = [
    {
      name: "Commerce & Distribution",
      examples: "Commerces de détail, grossistes, e-commerce",
      icon: <Briefcase className="h-6 w-6 text-primary-600" />
    },
    {
      name: "Services & Professions libérales",
      examples: "Consultants, agences, professions réglementées",
      icon: <Briefcase className="h-6 w-6 text-primary-600" />
    },
    {
      name: "Industrie & Production",
      examples: "Usines, ateliers, sites de production",
      icon: <Briefcase className="h-6 w-6 text-primary-600" />
    },
    {
      name: "Hôtellerie & Restauration",
      examples: "Hôtels, restaurants, traiteurs, food trucks",
      icon: <Briefcase className="h-6 w-6 text-primary-600" />
    },
    {
      name: "Santé & Bien-être",
      examples: "Cabinets médicaux, cliniques, centres de bien-être",
      icon: <Briefcase className="h-6 w-6 text-primary-600" />
    },
    {
      name: "Technologie & Innovation",
      examples: "Startups, entreprises tech, R&D",
      icon: <Briefcase className="h-6 w-6 text-primary-600" />
    }
  ];

  // Types d'assurances proposées
  const insuranceTypes = [
    {
      title: "Responsabilité Civile Professionnelle",
      description: "Protection contre les dommages causés aux tiers dans le cadre de votre activité",
      link: "/rc-pro"
    },
    {
      title: "Multirisque Entreprise",
      description: "Couverture complète des locaux, équipements et pertes d'exploitation",
      link: "/multirisque-entreprise"
    },
    {
      title: "Assurance Flotte Automobile",
      description: "Gestion centralisée de tous vos véhicules professionnels",
      link: "/assurance-auto/flottes/compte-propre"
    },
    {
      title: "Protection Juridique",
      description: "Défense de vos intérêts en cas de litige professionnel",
      link: "/protection-juridique"
    },
    {
      title: "Assurance Homme Clé",
      description: "Protection financière en cas d'indisponibilité d'une personne essentielle",
      link: "/assurance-homme-cle"
    },
    {
      title: "Cyber-risques",
      description: "Protection contre les attaques informatiques et fuites de données",
      link: "/cyber-risques"
    }
  ];

  // Tracking Analytics
  React.useEffect(() => {
    // Google Analytics page view tracking
    if (typeof gtag !== 'undefined') {
      gtag('event', 'page_view', {
        page_title: 'Courtier Assurance Entreprise',
        page_path: '/metiers/courtier-assurance-entreprise',
        page_location: window.location.href,
        send_to: 'G-TEST123456'
      });
      
      // Custom dimension for métier tracking
      gtag('set', 'metier_page', 'courtier-assurance-entreprise');
    }
    
    // Facebook Pixel tracking
    if (typeof fbq !== 'undefined') {
      fbq('track', 'ViewContent', {
        content_name: 'Courtier Assurance Entreprise',
        content_category: 'Métiers',
        content_ids: ['courtier-assurance-entreprise'],
        content_type: 'product'
      });
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Courtier Assurance Entreprise | Expert Assurance Professionnelle | XCR</title>
        <meta name="description" content="Courtier spécialisé en assurance entreprise : RC Pro, multirisque, flotte auto, protection juridique. Analyse de risques sur mesure et optimisation de vos contrats." />
        <meta name="keywords" content="courtier assurance entreprise, assurance professionnelle, RC Pro, multirisque entreprise, assurance cyber-risques, protection juridique professionnelle" />
        <link rel="canonical" href="https://xcr-courtier.fr/metiers/courtier-assurance-entreprise" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Courtier Assurance Entreprise | Expert Assurance Professionnelle" />
        <meta property="og:description" content="Courtier spécialisé en assurance entreprise : analyse de risques sur mesure et optimisation de vos contrats." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xcr-courtier.fr/metiers/courtier-assurance-entreprise" />
        <meta property="og:image" content="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg" />
        
        {/* Schema.org ProfessionalService */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "XCR Courtier - Assurance Entreprise",
            "description": "Courtier spécialisé en assurance entreprise et professionnelle",
            "url": "https://xcr-courtier.fr/metiers/courtier-assurance-entreprise",
            "telephone": "+33-1-80-85-57-81",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "2 Avenue Gallieni, Le CATG",
              "addressLocality": "Melun",
              "postalCode": "77000",
              "addressCountry": "FR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 48.5394,
              "longitude": 2.6603
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "09:00",
                "closes": "12:00"
              }
            ],
            "sameAs": [
              "https://www.facebook.com/xcrcourtier",
              "https://www.linkedin.com/company/xcr-courtier"
            ],
            "image": "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
            "priceRange": "$$"
          })}
        </script>
      </Helmet>

      {/* Breadcrumbs Navigation */}
      <div className="container mx-auto px-4 pt-8">
        <MetiersBreadcrumbs />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center py-24">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
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
                Courtier en Assurance Entreprise
                <span className="text-secondary-400"> - Expertise Professionnelle</span>
              </h1>
              
              <p className="text-xl text-gray-200 mb-8">
                Spécialiste en assurance professionnelle depuis plus de 15 ans, nous accompagnons les entreprises 
                de toutes tailles dans l'analyse de leurs risques et l'optimisation de leur protection.
              </p>

              <div className="space-y-4">
                {skills.slice(0, 3).map((skill, index) => (
                  <div key={index} className="flex items-center text-secondary-300">
                    <CheckCircle className="h-6 w-6 mr-2" />
                    <span className="text-lg">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8"
            >
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-primary-800 mb-6 text-center">
                  Demande d'analyse de risques gratuite
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Entreprise *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Nom de votre entreprise"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="sector" className="block text-sm font-medium text-gray-700 mb-1">
                        Secteur d'activité *
                      </label>
                      <select
                        id="sector"
                        name="sector"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        required
                      >
                        <option value="">Sélectionnez</option>
                        <option value="commerce">Commerce & Distribution</option>
                        <option value="services">Services & Professions libérales</option>
                        <option value="industrie">Industrie & Production</option>
                        <option value="hotellerie">Hôtellerie & Restauration</option>
                        <option value="sante">Santé & Bien-être</option>
                        <option value="tech">Technologie & Innovation</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nom *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Votre nom"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="votre@email.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="06 12 34 56 78"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Besoins spécifiques
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                      placeholder="Décrivez brièvement vos besoins en assurance"
                    ></textarea>
                  </div>
                  <div className="flex items-start">
                    <input
                      id="consent"
                      name="consent"
                      type="checkbox"
                      className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500 mt-1"
                      required
                    />
                    <label htmlFor="consent" className="ml-2 text-sm text-gray-700">
                      J'accepte d'être contacté par XCR Courtier concernant ma demande d'analyse de risques. *
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary-800 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                    data-tracking="submit-enterprise-analysis"
                  >
                    Demander mon analyse gratuite
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Description du métier */}
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
                Notre Métier : Courtier en Assurance Entreprise
              </h2>
              
              <p className="text-lg text-gray-700 mb-6">
                Le courtier en assurance entreprise est un expert indépendant qui agit comme intermédiaire entre les entreprises 
                et les compagnies d'assurance. Son rôle est d'analyser précisément les besoins et les risques spécifiques 
                à chaque activité professionnelle pour proposer les solutions d'assurance les plus adaptées.
              </p>
              
              <p className="text-lg text-gray-700 mb-6">
                Chez XCR Courtier, nos experts en assurance entreprise possèdent une connaissance approfondie des différents 
                secteurs d'activité et des risques qui leur sont propres. Cette expertise sectorielle nous permet de négocier 
                les meilleures conditions auprès des assureurs et d'optimiser vos contrats.
              </p>
              
              <p className="text-lg text-gray-700">
                Notre accompagnement ne s'arrête pas à la souscription : nous vous assistons tout au long de la vie de vos contrats, 
                notamment en cas de sinistre, pour vous garantir une indemnisation optimale et rapide.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-primary-800 mb-6">
                  Compétences Clés
                </h3>
                
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-primary-800 mb-3">Certifications & Accréditations</h4>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm">ORIAS N° 11 061 425</span>
                    <span className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm">Capacité Professionnelle</span>
                    <span className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm">Formation IAS Niveau I</span>
                    <span className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm">Conformité ACPR</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Les Avantages de Notre Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez comment notre approche spécialisée en assurance entreprise peut bénéficier à votre activité
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-full mr-4 flex-shrink-0">
                    {advantage.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-800 mb-2">{advantage.title}</h3>
                    <p className="text-gray-600">{advantage.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Secteurs d'activité */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Secteurs d'Activité Couverts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notre expertise s'étend à de nombreux secteurs d'activité, chacun avec ses risques spécifiques
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-3">
                  {sector.icon}
                  <h3 className="text-lg font-bold text-primary-800 ml-3">{sector.name}</h3>
                </div>
                <p className="text-gray-600 text-sm">{sector.examples}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Types d'assurances */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Nos Solutions d'Assurance Entreprise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez notre gamme complète de solutions pour protéger votre activité professionnelle
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insuranceTypes.map((insurance, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-primary-800 mb-3">{insurance.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{insurance.description}</p>
                <Link 
                  to={insurance.link} 
                  className="flex items-center text-primary-600 hover:text-primary-800 font-medium transition-colors mt-auto"
                  data-tracking={`view-insurance-${insurance.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  En savoir plus
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Ce que nos clients en disent
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les témoignages d'entreprises qui nous font confiance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-primary-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.position}, {testimonial.company}</p>
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

      {/* CTA Section */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Besoin d'un expert en assurance entreprise ?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Nos conseillers spécialisés sont à votre disposition pour réaliser une analyse complète 
              de vos risques professionnels et optimiser votre protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="accent" 
                size="lg" 
                href="/contact?service=commercial"
                data-tracking="cta-contact-enterprise-expert"
              >
                Contacter un expert
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                href="tel:+33180855781"
                className="border-white text-white hover:bg-white/10"
                data-tracking="cta-call-enterprise-expert"
              >
                <Phone className="w-5 h-5 mr-2" />
                01 80 85 57 81
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Articles liés */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Ressources & Articles Spécialisés
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos contenus experts dédiés à l'assurance entreprise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg" 
                alt="RC Pro Artisans & Commerçants" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-800 mb-3">RC Pro Artisans & Commerçants : Guide Complet</h3>
                <p className="text-gray-600 mb-4">Découvrez comment protéger efficacement votre activité d'artisan ou de commerçant avec une assurance RC Pro adaptée.</p>
                <Link 
                  to="/blog/rc-pro-artisans-commercants-guide" 
                  className="flex items-center text-primary-600 hover:text-primary-800 font-medium transition-colors"
                  data-tracking="view-article-rc-pro-guide"
                >
                  Lire l'article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <img 
                src="https://images.pexels.com/photos/3637786/pexels-photo-3637786.jpeg" 
                alt="Risques Spécifiques des Artisans" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-800 mb-3">Les Risques Spécifiques des Artisans</h3>
                <p className="text-gray-600 mb-4">Analyse détaillée des risques professionnels propres aux artisans et solutions d'assurance adaptées.</p>
                <Link 
                  to="/blog/risques-specifiques-artisans" 
                  className="flex items-center text-primary-600 hover:text-primary-800 font-medium transition-colors"
                  data-tracking="view-article-artisans-risks"
                >
                  Lire l'article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="https://images.pexels.com/photos/8867426/pexels-photo-8867426.jpeg" 
                alt="Cybersécurité pour PME" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-800 mb-3">Cybersécurité : Protéger votre PME des risques numériques</h3>
                <p className="text-gray-600 mb-4">Guide pratique pour comprendre et se protéger contre les cyber-risques qui menacent les petites et moyennes entreprises.</p>
                <Link 
                  to="/blog/cybersecurite-pme-guide" 
                  className="flex items-center text-primary-600 hover:text-primary-800 font-medium transition-colors"
                  data-tracking="view-article-cybersecurity"
                >
                  Lire l'article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourtierAssuranceEntreprisePage;