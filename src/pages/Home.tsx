import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Car, 
  Building2, 
  FileText, 
  Heart, 
  Scale, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Star,
  Users
} from 'lucide-react';
import Button from '../components/common/Button';
import InsurancePartnersSection from '../components/common/InsurancePartnersSection';
import OfficialLinksSection from '../components/common/OfficialLinksSection';

const Home = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    typeAssurance: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('particuliers');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      
      // Track conversion
      if (typeof gtag !== 'undefined') {
        gtag('event', 'generate_lead', {
          event_category: 'Conversion',
          event_label: formData.typeAssurance || 'general',
          value: 1
        });
      }
      
      if (typeof fbq !== 'undefined') {
        fbq('track', 'Lead', {
          content_category: formData.typeAssurance || 'general',
          content_name: 'Demande de devis homepage'
        });
      }
      
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          nom: '',
          email: '',
          telephone: '',
          typeAssurance: ''
        });
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Services proposés
  const services = [
    {
      id: 'auto',
      title: 'Assurance Auto',
      icon: <Car className="h-10 w-10 text-primary-600" />,
      description: 'Protégez votre véhicule avec nos formules adaptées à tous les profils de conducteurs.',
      link: '/assurance-auto',
      features: [
        'Formules tous risques ou au tiers',
        'Tarifs préférentiels jeunes conducteurs',
        'Solutions pour conducteurs avec malus',
        'Assistance 0km incluse'
      ]
    },
    {
      id: 'decennale',
      title: 'Assurance Décennale',
      icon: <Building2 className="h-10 w-10 text-primary-600" />,
      description: 'Couverture complète pour tous les professionnels du bâtiment et de la construction.',
      link: '/assurance-decennale',
      features: [
        'Attestation en 24h',
        'Tarifs négociés pour tous les métiers',
        'RC Pro incluse',
        'Garantie parfait achèvement'
      ]
    },
    {
      id: 'emprunteur',
      title: 'Assurance Emprunteur',
      icon: <Heart className="h-10 w-10 text-primary-600" />,
      description: 'Sécurisez votre prêt immobilier avec une assurance adaptée à votre profil.',
      link: '/assurance-emprunteur',
      features: [
        'Jusqu\'à 50% d\'économies',
        'Questionnaire médical simplifié',
        'Délégation d\'assurance facilitée',
        'Couverture sur mesure'
      ]
    },
    {
      id: 'juridique',
      title: 'Protection Juridique',
      icon: <Scale className="h-10 w-10 text-primary-600" />,
      description: 'Défendez vos droits en toutes circonstances avec notre protection juridique complète.',
      link: '/protection-juridique',
      features: [
        'Conseil juridique 24h/24',
        'Prise en charge des frais de justice',
        'Médiation et résolution amiable',
        'Protection vie privée et professionnelle'
      ]
    }
  ];

  // Statistiques
  const stats = [
    { value: '15+', label: 'Années d\'expertise' },
    { value: '30+', label: 'Compagnies partenaires' },
    { value: '10K+', label: 'Clients satisfaits' },
    { value: '24h', label: 'Délai de réponse' }
  ];

  // Témoignages clients
  const testimonials = [
    {
      name: 'Sophie Martin',
      role: 'Artisan Menuisier',
      text: 'XCR Courtier m\'a trouvé une assurance décennale parfaitement adaptée à mon activité, avec un excellent rapport qualité-prix. Leur réactivité et leur expertise m\'ont vraiment impressionnée.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
    },
    {
      name: 'Thomas Dubois',
      role: 'Gérant de PME',
      text: 'Grâce à l\'analyse complète de nos besoins réalisée par XCR, nous avons optimisé l\'ensemble de nos contrats d\'assurance professionnelle. Un gain de temps et d\'argent considérable !',
      rating: 5,
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
    },
    {
      name: 'Julie Leroy',
      role: 'Particulier',
      text: 'J\'ai économisé plus de 30% sur mon assurance auto grâce aux conseils personnalisés de XCR Courtier. Le processus était simple et rapide, je recommande vivement !',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
    }
  ];

  // FAQ
  const faqData = [
    {
      question: "Comment obtenir un devis d'assurance gratuit ?",
      answer: "Remplissez notre formulaire en ligne ou contactez-nous directement par téléphone au 01 80 85 57 81. Nous vous proposons un devis personnalisé sous 24h après analyse de vos besoins spécifiques."
    },
    {
      question: "Quels types d'assurance proposez-vous ?",
      answer: "Nous proposons une gamme complète d'assurances : auto, habitation, santé, vie, professionnelle, décennale, RC Pro, protection juridique, assurance emprunteur et solutions spécifiques pour les entreprises."
    },
    {
      question: "Combien coûte une assurance auto ?",
      answer: "Le prix dépend de nombreux facteurs : âge, véhicule, historique, usage... Nos tarifs débutent à partir de 25€/mois pour une assurance au tiers et 45€/mois pour une formule tous risques. Nous comparons systématiquement les offres de plus de 20 assureurs pour vous garantir le meilleur rapport qualité-prix."
    },
    {
      question: "Puis-je changer d'assurance à tout moment ?",
      answer: "Oui, grâce à la loi Hamon, vous pouvez résilier votre contrat d'assurance auto, habitation ou affinitaire à tout moment après un an d'engagement, sans frais ni justification. Pour l'assurance emprunteur, la loi Lemoine vous permet désormais de changer à tout moment. Nous nous occupons de toutes les démarches de résiliation pour vous."
    },
    {
      question: "Dans quels délais puis-je être couvert ?",
      answer: "Une fois votre dossier validé, la couverture peut être effective immédiatement ou dès le lendemain selon le type d'assurance. Pour l'assurance décennale, nous délivrons votre attestation sous 24h dans la plupart des cas."
    }
  ];

  // Métiers spécialisés
  const specializedProfessions = [
    { name: 'Courtier Assurance Entreprise', link: '/metiers/courtier-assurance-entreprise' },
    { name: 'Courtier Assurance Construction', link: '/metiers/courtier-assurance-construction' },
    { name: 'Courtier Assurance Auto', link: '/metiers/courtier-assurance-auto' },
    { name: 'Conseiller en Gestion de Patrimoine', link: '/metiers/conseiller-patrimoine' }
  ];

  // Actualités du blog
  const latestPosts = [
    {
      title: 'Guide Complet Assurance Auto 2025',
      excerpt: 'Découvrez tout ce qu\'il faut savoir sur l\'assurance auto en 2025...',
      link: '/blog/guide-complet-assurance-auto-2025',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg',
      date: '15 Jan 2025'
    },
    {
      title: 'RC Pro Artisans & Commerçants : Guide Complet',
      excerpt: 'Protégez efficacement votre activité d\'artisan ou de commerçant...',
      link: '/blog/rc-pro-artisans-commercants-guide',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg',
      date: '20 Mar 2024'
    }
  ];

  return (
    <>
      <Helmet>
        <title>XCR Courtier - Devis Assurance Gratuit | Comparateur Assurance Auto, Habitation, Santé</title>
        <meta name="description" content="XCR Courtier, votre expert en assurance depuis 15 ans. Obtenez votre devis assurance auto, habitation, santé gratuit en 24h. Comparateur assurance pas chère." />
        <meta name="keywords" content="devis assurance auto, comparateur assurance, XCR courtier, assurance pas chère, devis gratuit assurance, courtier assurance Paris" />
        <link rel="canonical" href="https://xcr-courtier.fr/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="XCR Courtier - Devis Assurance Gratuit | Expert Assurance Paris" />
        <meta property="og:description" content="Obtenez votre devis assurance gratuit en 24h. Comparateur assurance auto, habitation, santé. Expert courtier depuis 15 ans." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xcr-courtier.fr/" />
        <meta property="og:image" content="https://xcr-courtier.fr/images/xcr-courtier-og.jpg" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="XCR Courtier" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="XCR Courtier - Devis Assurance Gratuit" />
        <meta name="twitter:description" content="Expert courtier assurance Paris. Devis gratuit 24h." />
        <meta name="twitter:image" content="https://xcr-courtier.fr/images/xcr-courtier-twitter.jpg" />

        {/* Schema.org Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "XCR Courtier",
            "url": "https://xcr-courtier.fr",
            "logo": "https://xcr-courtier.fr/logo.png",
            "description": "Courtier en assurance spécialisé dans les devis assurance auto, habitation, santé et professionnelle",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "2 Avenue Gallieni, Le CATG",
              "addressLocality": "Melun",
              "postalCode": "77000",
              "addressCountry": "FR"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+33-1-80-85-57-81",
              "contactType": "customer service",
              "email": "contact@xcr.fr",
              "availableLanguage": "French"
            },
            "openingHours": [
              "Mo-Fr 09:00-18:00",
              "Sa 09:00-12:00"
            ],
            "sameAs": [
              "https://www.facebook.com/xcrcourtier",
              "https://www.linkedin.com/company/xcr-courtier"
            ]
          })}
        </script>

        {/* Schema.org FAQ */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Votre Courtier en Assurance
                <span className="text-secondary-400 block mt-2">Expert & Indépendant</span>
              </h1>
              
              <p className="text-xl text-gray-200 mb-8 max-w-xl">
                XCR Courtier compare pour vous les offres de plus de 30 assureurs pour trouver la solution idéale à vos besoins, au meilleur prix.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <span className="text-3xl font-bold text-secondary-400">{stat.value}</span>
                    <span className="text-sm text-gray-200">{stat.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="accent" 
                  size="lg" 
                  href="#devis"
                >
                  Obtenir un devis gratuit
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  href="tel:+33180855781"
                  className="border-white text-white hover:bg-white/10"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  01 80 85 57 81
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              id="devis"
              className="bg-white rounded-2xl shadow-2xl p-8"
            >
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-800 mb-2">
                  Devis gratuit en 24h
                </h2>
                <p className="text-gray-600">
                  Remplissez ce formulaire et recevez une offre personnalisée
                </p>
              </div>

              {isSubmitted ? (
                <motion.div 
                  className="text-center py-8"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-semibold text-green-600 mb-2">Demande envoyée !</h3>
                  <p className="text-gray-600 mb-4">Nous vous contacterons dans les plus brefs délais.</p>
                  <p className="text-sm text-gray-500">Un conseiller expert vous rappellera sous 24h maximum.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex gap-4 mb-4">
                    <button
                      type="button"
                      className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                        activeTab === 'particuliers'
                          ? 'bg-primary-800 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() => setActiveTab('particuliers')}
                    >
                      Particuliers
                    </button>
                    <button
                      type="button"
                      className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                        activeTab === 'professionnels'
                          ? 'bg-primary-800 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() => setActiveTab('professionnels')}
                    >
                      Professionnels
                    </button>
                  </div>

                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
                      {activeTab === 'professionnels' ? 'Entreprise / Nom *' : 'Nom complet *'}
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder={activeTab === 'professionnels' ? "Nom de votre entreprise" : "Votre nom et prénom"}
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
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="06 12 34 56 78"
                    />
                  </div>

                  <div>
                    <label htmlFor="typeAssurance" className="block text-sm font-medium text-gray-700 mb-1">
                      Type d'assurance recherché *
                    </label>
                    <select
                      id="typeAssurance"
                      name="typeAssurance"
                      value={formData.typeAssurance}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <option value="">Sélectionnez un type</option>
                      {activeTab === 'particuliers' ? (
                        <>
                          <option value="auto">Assurance Auto</option>
                          <option value="habitation">Assurance Habitation</option>
                          <option value="sante">Assurance Santé</option>
                          <option value="emprunteur">Assurance Emprunteur</option>
                          <option value="protection-juridique">Protection Juridique</option>
                        </>
                      ) : (
                        <>
                          <option value="decennale">Assurance Décennale</option>
                          <option value="rc-pro">RC Professionnelle</option>
                          <option value="multirisque-pro">Multirisque Pro</option>
                          <option value="flotte-auto">Flotte Automobile</option>
                          <option value="protection-juridique-pro">Protection Juridique Pro</option>
                          <option value="cyber-risques">Cyber-risques</option>
                        </>
                      )}
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-primary-800 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-primary-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      'Obtenir mon devis gratuit'
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    En soumettant ce formulaire, vous acceptez d'être contacté par nos conseillers.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Nos solutions d'assurance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des garanties adaptées à vos besoins spécifiques, qu'ils soient personnels ou professionnels
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-6">
                  <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to={service.link} 
                    className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium transition-colors"
                  >
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Métiers spécialisés */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Notre expertise métier
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des conseillers spécialisés par secteur d'activité pour un accompagnement sur mesure
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="bg-white rounded-lg shadow-lg p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-primary-800 mb-6">Nos métiers spécialisés</h3>
              
              <div className="space-y-4">
                {specializedProfessions.map((profession, index) => (
                  <Link 
                    key={index}
                    to={profession.link}
                    className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center mr-4">
                      <Building2 className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
                    </div>
                    <span className="text-gray-700 group-hover:text-primary-800 transition-colors font-medium">
                      {profession.name}
                    </span>
                    <ArrowRight className="ml-auto h-4 w-4 text-gray-400 group-hover:text-primary-600 transition-colors" />
                  </Link>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <Button 
                  variant="outline" 
                  href="/metiers"
                >
                  Découvrir tous nos métiers
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-lg shadow-lg p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-2xl font-bold text-primary-800 mb-6">Derniers articles</h3>
              
              <div className="space-y-6">
                {latestPosts.map((post, index) => (
                  <Link 
                    key={index}
                    to={post.link}
                    className="flex group"
                  >
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 mr-4">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">{post.date}</p>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">{post.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <Button 
                  variant="outline" 
                  href="/blog"
                >
                  Consulter notre blog
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Ce que nos clients disent
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les témoignages de nos clients satisfaits
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-primary-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Partners Section */}
      <InsurancePartnersSection />

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Contactez-nous
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nos experts sont à votre disposition pour répondre à toutes vos questions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-7 w-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-800 mb-2">Téléphone</h3>
              <p className="text-gray-600 mb-4">Appelez-nous pour un conseil personnalisé</p>
              <a 
                href="tel:+33180855781" 
                className="text-lg font-semibold text-primary-600 hover:text-primary-800 transition-colors"
              >
                01 80 85 57 81
              </a>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-7 w-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-800 mb-2">Email</h3>
              <p className="text-gray-600 mb-4">Envoyez-nous votre demande par email</p>
              <a 
                href="mailto:contact@xcr.fr" 
                className="text-lg font-semibold text-primary-600 hover:text-primary-800 transition-colors"
              >
                contact@xcr.fr
              </a>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-7 w-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-800 mb-2">Nos agences</h3>
              <p className="text-gray-600 mb-4">Venez nous rencontrer en agence</p>
              <Link 
                to="/contact" 
                className="text-lg font-semibold text-primary-600 hover:text-primary-800 transition-colors"
              >
                Voir nos adresses
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Questions fréquentes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trouvez rapidement des réponses à vos questions
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                className="mb-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <details className="group bg-white rounded-lg shadow-md">
                  <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-primary-800">
                    <span>{faq.question}</span>
                    <span className="ml-6 flex-shrink-0 text-primary-600 group-open:rotate-180 transition-transform">
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à optimiser vos assurances ?</h2>
              <p className="text-xl text-gray-200 mb-8">
                Nos experts sont à votre disposition pour analyser vos besoins et vous proposer les meilleures solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="accent" 
                  size="lg" 
                  href="#devis"
                >
                  Obtenir mon devis gratuit
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  href="/contact"
                  className="border-white text-white hover:bg-white/10"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Contacter un expert
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Official Links Section */}
      <OfficialLinksSection />
    </>
  );
};

export default Home;