import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  DollarSign, 
  CheckCircle, 
  TrendingUp, 
  Phone, 
  ArrowRight, 
  Star, 
  Shield, 
  Briefcase, 
  Calendar, 
  BarChart, 
  Award, 
  Clock,
  FileText,
  Percent,
  PiggyBank,
  Building,
  Users
} from 'lucide-react';
import Button from '../components/common/Button';
import OfficialLinksSection from '../components/common/OfficialLinksSection';
import Breadcrumbs from '../components/navigation/Breadcrumbs';

const SolutionsFinancieresPage = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    typeAssurance: 'placement',
    montantInvestissement: '',
    objectif: '',
    message: '',
    consent: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('placement');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.nom.trim()) newErrors.nom = 'Ce champ est requis';
    
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format d\'email invalide';
    }
    
    if (!formData.telephone.trim()) {
      newErrors.telephone = 'Le téléphone est requis';
    } else if (!/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/.test(formData.telephone.replace(/\s/g, ''))) {
      newErrors.telephone = 'Format de téléphone invalide';
    }
    
    if (formData.typeAssurance === 'placement' && !formData.montantInvestissement) {
      newErrors.montantInvestissement = 'Veuillez sélectionner un montant';
    }
    
    if (!formData.objectif) {
      newErrors.objectif = 'Veuillez sélectionner un objectif';
    }
    
    if (!formData.consent) newErrors.consent = 'Vous devez accepter les conditions';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simuler l'envoi du formulaire
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Tracking de conversion
      if (typeof gtag !== 'undefined') {
        gtag('event', 'generate_lead', {
          event_category: formData.typeAssurance === 'placement' ? 'Placement' : 'Épargne Retraite',
          event_label: formData.objectif,
          value: 1
        });
      }
      
      if (typeof fbq !== 'undefined') {
        fbq('track', 'Lead', {
          content_category: formData.typeAssurance === 'placement' ? 'Placement' : 'Épargne Retraite',
          content_name: `Demande ${formData.typeAssurance === 'placement' ? 'Placement' : 'Épargne Retraite'}`
        });
      }
      
      setIsSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          nom: '',
          email: '',
          telephone: '',
          typeAssurance: 'placement',
          montantInvestissement: '',
          objectif: '',
          message: '',
          consent: false
        });
      }, 5000);
    } catch (error) {
      console.error('Erreur:', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Montants d'investissement
  const montantInvestissementOptions = [
    { value: '', label: 'Sélectionnez' },
    { value: '0-10000', label: 'Moins de 10 000 €' },
    { value: '10000-50000', label: '10 000 € - 50 000 €' },
    { value: '50000-100000', label: '50 000 € - 100 000 €' },
    { value: '100000-250000', label: '100 000 € - 250 000 €' },
    { value: '250000+', label: 'Plus de 250 000 €' }
  ];

  // Objectifs d'investissement
  const objectifOptions = activeTab === 'placement' ? [
    { value: '', label: 'Sélectionnez' },
    { value: 'rendement', label: 'Recherche de rendement' },
    { value: 'securite', label: 'Sécurité du capital' },
    { value: 'fiscalite', label: 'Optimisation fiscale' },
    { value: 'transmission', label: 'Préparation de la transmission' },
    { value: 'diversification', label: 'Diversification de patrimoine' }
  ] : [
    { value: '', label: 'Sélectionnez' },
    { value: 'retraite-individuelle', label: 'Préparation retraite individuelle' },
    { value: 'retraite-entreprise', label: 'Retraite collective entreprise' },
    { value: 'optimisation-fiscale', label: 'Optimisation fiscale' },
    { value: 'transmission-patrimoine', label: 'Transmission de patrimoine' }
  ];

  // Avantages par type de solution
  const avantages = {
    placement: [
      "Diversification de votre patrimoine",
      "Optimisation fiscale sur mesure",
      "Accès à des supports d'investissement exclusifs",
      "Gestion pilotée par des experts",
      "Disponibilité de vos fonds selon vos besoins",
      "Accompagnement personnalisé par un conseiller dédié"
    ],
    retraite: [
      "Préparation efficace de votre retraite",
      "Avantages fiscaux immédiats",
      "Solutions individuelles et collectives",
      "Rente garantie à vie",
      "Transmission optimisée à vos bénéficiaires",
      "Accompagnement sur le long terme"
    ]
  };

  // Témoignages clients
  const testimonials = [
    {
      name: "Jean Dupont",
      role: "Chef d'entreprise",
      text: "Grâce aux conseils de XCR Courtier, j'ai pu optimiser la fiscalité de mon entreprise tout en préparant ma retraite. Une approche globale qui a fait toute la différence.",
      rating: 5,
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
    },
    {
      name: "Marie Lecomte",
      role: "Profession libérale",
      text: "Mon conseiller XCR a su m'orienter vers les placements les plus adaptés à ma situation. J'apprécie particulièrement le suivi régulier et les ajustements proposés en fonction de l'évolution des marchés.",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
    },
    {
      name: "Philippe Martin",
      role: "Cadre supérieur",
      text: "La stratégie d'épargne retraite mise en place avec XCR me permet d'envisager l'avenir sereinement. Les solutions proposées correspondent parfaitement à mes objectifs de rendement et de sécurité.",
      rating: 4,
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
    }
  ];

  // Solutions de placement
  const placementSolutions = [
    {
      title: "Assurance Vie",
      description: "Solution d'épargne flexible et fiscalement avantageuse",
      icon: <Shield className="h-8 w-8 text-primary-600" />,
      features: [
        "Fiscalité privilégiée après 8 ans",
        "Diversification des supports d'investissement",
        "Transmission facilitée hors succession",
        "Disponibilité permanente des fonds"
      ]
    },
    {
      title: "Plan d'Épargne Retraite (PER)",
      description: "Préparez votre retraite tout en réduisant votre impôt sur le revenu",
      icon: <Calendar className="h-8 w-8 text-primary-600" />,
      features: [
        "Déduction fiscale des versements",
        "Sortie en capital ou en rente",
        "Déblocage anticipé possible",
        "Transmission aux bénéficiaires"
      ]
    },
    {
      title: "Immobilier",
      description: "Investissez dans la pierre pour diversifier votre patrimoine",
      icon: <Building className="h-8 w-8 text-primary-600" />,
      features: [
        "SCPI de rendement ou de capitalisation",
        "Immobilier en direct avec effet de levier",
        "Dispositifs fiscaux avantageux",
        "Revenus complémentaires réguliers"
      ]
    },
    {
      title: "Épargne Entreprise",
      description: "Solutions collectives pour motiver et fidéliser vos collaborateurs",
      icon: <Users className="h-8 w-8 text-primary-600" />,
      features: [
        "PER Entreprise Collectif",
        "Intéressement et participation",
        "Plan d'Épargne Entreprise (PEE)",
        "Avantages fiscaux et sociaux"
      ]
    }
  ];

  // FAQ
  const faqItems = [
    {
      question: "Comment choisir entre assurance vie et PER ?",
      answer: "Le choix dépend principalement de votre horizon d'investissement et de vos objectifs. L'assurance vie offre une grande flexibilité et une disponibilité permanente des fonds, idéale pour des projets à moyen terme. Le PER est spécifiquement conçu pour la retraite avec des avantages fiscaux immédiats (déduction des versements du revenu imposable) mais une disponibilité limitée avant la retraite. Nos conseillers réalisent une étude personnalisée pour déterminer la répartition optimale entre ces deux enveloppes selon votre situation."
    },
    {
      question: "Quels sont les avantages fiscaux des solutions d'épargne retraite ?",
      answer: "Les solutions d'épargne retraite comme le PER offrent plusieurs avantages fiscaux : déduction des versements du revenu imposable (dans certaines limites), exonération d'impôt sur les plus-values pendant la phase d'épargne, et possibilité de sortie en capital partiellement exonérée ou en rente viagère avec une fiscalité allégée. Pour les entreprises, les versements sur un PER Entreprise sont déductibles du bénéfice imposable et exonérés de charges sociales (dans certaines limites)."
    },
    {
      question: "Comment sécuriser mon capital tout en recherchant du rendement ?",
      answer: "Pour concilier sécurité et rendement, nous recommandons généralement une approche diversifiée : une partie du capital sur des supports sécurisés (fonds en euros, obligations d'État) et une autre partie sur des supports plus dynamiques (unités de compte, SCPI, actions). La répartition dépend de votre profil de risque, de votre horizon d'investissement et de vos objectifs. Nos solutions de gestion pilotée permettent également d'ajuster automatiquement cette répartition en fonction de l'évolution des marchés et de votre horizon de placement."
    },
    {
      question: "Quelle est la différence entre un PER individuel et un PER entreprise ?",
      answer: "Le PER individuel est souscrit à titre personnel et alimenté par vos versements volontaires. Le PER entreprise peut être alimenté par trois sources : vos versements volontaires, l'abondement de votre employeur, et l'intéressement/participation. Le PER entreprise offre des avantages supplémentaires comme l'abondement de l'employeur (contribution complémentaire aux versements des salariés) et des frais souvent négociés collectivement. Les deux types de PER bénéficient des mêmes avantages fiscaux sur les versements volontaires et des mêmes conditions de sortie."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Solutions Financières | Placement & Épargne Retraite | XCR Courtier</title>
        <meta name="description" content="Solutions financières personnalisées : placement, épargne retraite, optimisation fiscale. Conseils d'experts pour particuliers et entreprises. Devis gratuit avec XCR Courtier." />
        <meta name="keywords" content="placement financier, épargne retraite, PER, assurance vie, optimisation fiscale, gestion de patrimoine, SCPI, immobilier, retraite entreprise" />
        <link rel="canonical" href="https://xcr-courtier.fr/solutions-financieres" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Solutions Financières | Placement & Épargne Retraite | XCR Courtier" />
        <meta property="og:description" content="Solutions financières personnalisées : placement, épargne retraite, optimisation fiscale. Conseils d'experts pour particuliers et entreprises." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xcr-courtier.fr/solutions-financieres" />
        <meta property="og:image" content="https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg" />
        
        {/* Schema.org Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Solutions Financières",
            "description": "Services de conseil en placement, épargne retraite et optimisation fiscale",
            "provider": {
              "@type": "Organization",
              "name": "XCR Courtier"
            },
            "serviceType": "Conseil Financier",
            "areaServed": "France",
            "audience": [
              {
                "@type": "BusinessAudience",
                "audienceType": "Entreprises"
              },
              {
                "@type": "Audience",
                "audienceType": "Particuliers"
              }
            ],
            "offers": {
              "@type": "Offer",
              "description": "Étude personnalisée gratuite"
            }
          })}
        </script>
        
        {/* Schema.org FAQ */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map(faq => ({
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

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 pt-8">
        <Breadcrumbs />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center py-24">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/75"></div>
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
                Solutions Financières
                <span className="text-secondary-400 block mt-2">Placement & Épargne Retraite</span>
              </h1>
              
              <p className="text-xl text-gray-200 mb-8">
                Optimisez votre patrimoine avec nos solutions financières personnalisées. 
                Nos experts vous accompagnent dans la réalisation de vos projets d'investissement 
                et la préparation de votre retraite.
              </p>

              <div className="space-y-4">
                {avantages[activeTab === 'placement' ? 'placement' : 'retraite'].slice(0, 3).map((advantage, index) => (
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
                  Étude personnalisée gratuite
                </h2>
                <p className="text-gray-600">
                  Nos experts analysent votre situation et vous proposent les meilleures solutions
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
                  <p className="text-gray-600 mb-4">Un conseiller expert vous contactera dans les 24h pour étudier votre projet.</p>
                  <p className="text-sm text-gray-500">Nous vous remercions de votre confiance.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex gap-4 mb-4">
                    <button
                      type="button"
                      className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                        activeTab === 'placement'
                          ? 'bg-primary-800 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() => setActiveTab('placement')}
                    >
                      Placement
                    </button>
                    <button
                      type="button"
                      className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                        activeTab === 'retraite'
                          ? 'bg-primary-800 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() => setActiveTab('retraite')}
                    >
                      Épargne Retraite
                    </button>
                  </div>

                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 transition-colors ${
                        errors.nom ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Votre nom et prénom"
                    />
                    {errors.nom && <p className="mt-1 text-sm text-red-600">{errors.nom}</p>}
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
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 transition-colors ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="votre@email.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
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
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 transition-colors ${
                        errors.telephone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="06 12 34 56 78"
                    />
                    {errors.telephone && <p className="mt-1 text-sm text-red-600">{errors.telephone}</p>}
                  </div>

                  {activeTab === 'placement' && (
                    <div>
                      <label htmlFor="montantInvestissement" className="block text-sm font-medium text-gray-700 mb-1">
                        Montant d'investissement envisagé *
                      </label>
                      <select
                        id="montantInvestissement"
                        name="montantInvestissement"
                        value={formData.montantInvestissement}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 transition-colors ${
                          errors.montantInvestissement ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        {montantInvestissementOptions.map(option => (
                          <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                      </select>
                      {errors.montantInvestissement && <p className="mt-1 text-sm text-red-600">{errors.montantInvestissement}</p>}
                    </div>
                  )}

                  <div>
                    <label htmlFor="objectif" className="block text-sm font-medium text-gray-700 mb-1">
                      Objectif principal *
                    </label>
                    <select
                      id="objectif"
                      name="objectif"
                      value={formData.objectif}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 transition-colors ${
                        errors.objectif ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      {objectifOptions.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                    {errors.objectif && <p className="mt-1 text-sm text-red-600">{errors.objectif}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message (facultatif)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 transition-colors resize-none"
                      placeholder="Précisez votre projet ou vos questions..."
                    />
                  </div>

                  <div className="flex items-start">
                    <input
                      id="consent"
                      name="consent"
                      type="checkbox"
                      checked={formData.consent}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className={`h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500 mt-1 ${
                        errors.consent ? 'border-red-500' : ''
                      }`}
                    />
                    <label htmlFor="consent" className="ml-2 text-sm text-gray-700">
                      J'accepte d'être contacté par XCR Courtier concernant ma demande d'étude financière. 
                      Conformément au RGPD, vous pouvez exercer vos droits d'accès, de rectification et de suppression. *
                    </label>
                  </div>
                  {errors.consent && <p className="mt-1 text-sm text-red-600">{errors.consent}</p>}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary-800 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      'Obtenir mon étude personnalisée gratuite'
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    Étude gratuite et sans engagement. Réponse sous 24h maximum.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Nos solutions financières
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions adaptées à vos objectifs patrimoniaux et à votre profil d'investisseur
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {placementSolutions.map((solution, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-6">
                  <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary-800 mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages Section */}
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
                Pourquoi choisir XCR pour vos solutions financières ?
              </h2>
              
              <p className="text-lg text-gray-700 mb-6">
                Chez XCR Courtier, nous mettons notre expertise au service de votre patrimoine. 
                Notre approche globale et personnalisée nous permet de vous proposer les solutions 
                les plus adaptées à vos objectifs et à votre profil d'investisseur.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <Briefcase className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-700 mb-1">Expertise indépendante</h4>
                    <p className="text-gray-600">
                      Nous sélectionnons les meilleures solutions du marché sans conflit d'intérêt, 
                      en toute indépendance.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <Users className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-700 mb-1">Approche sur mesure</h4>
                    <p className="text-gray-600">
                      Chaque client bénéficie d'une stratégie patrimoniale personnalisée, 
                      adaptée à sa situation et à ses objectifs.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-700 mb-1">Suivi dans la durée</h4>
                    <p className="text-gray-600">
                      Nous vous accompagnons sur le long terme avec des points réguliers 
                      et des ajustements selon l'évolution de votre situation.
                    </p>
                  </div>
                </div>
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
                Notre méthodologie
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-xl font-bold text-primary-600">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-700 mb-1">Analyse de votre situation</h4>
                    <p className="text-gray-600">
                      Étude complète de votre patrimoine, de vos revenus, de votre fiscalité 
                      et de vos objectifs à court, moyen et long terme.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-xl font-bold text-primary-600">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-700 mb-1">Élaboration de stratégies</h4>
                    <p className="text-gray-600">
                      Conception de solutions personnalisées répondant à vos objectifs 
                      et tenant compte de votre profil de risque.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-xl font-bold text-primary-600">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-700 mb-1">Mise en œuvre</h4>
                    <p className="text-gray-600">
                      Accompagnement dans la mise en place des solutions retenues 
                      et gestion administrative complète.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-xl font-bold text-primary-600">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-700 mb-1">Suivi et ajustements</h4>
                    <p className="text-gray-600">
                      Bilans réguliers et ajustements de votre stratégie en fonction 
                      de l'évolution de votre situation et des marchés.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparatif des solutions */}
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
              Comparatif de nos solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trouvez la solution qui correspond le mieux à vos objectifs
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead className="bg-primary-800 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Solution</th>
                  <th className="px-6 py-4 text-center">Horizon</th>
                  <th className="px-6 py-4 text-center">Liquidité</th>
                  <th className="px-6 py-4 text-center">Fiscalité</th>
                  <th className="px-6 py-4 text-center">Risque</th>
                  <th className="px-6 py-4 text-center">Rendement potentiel</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-primary-800">Assurance Vie</td>
                  <td className="px-6 py-4 text-center">Moyen/Long terme</td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center">
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Élevée</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center">
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Avantageuse</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">Modulable</td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center">
                      <span className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <Star className="w-4 h-4 text-gray-300" />
                        <Star className="w-4 h-4 text-gray-300" />
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-primary-800">PER Individuel</td>
                  <td className="px-6 py-4 text-center">Retraite</td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center">
                      <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">Limitée</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center">
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Très avantageuse</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">Modulable</td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center">
                      <span className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <Star className="w-4 h-4 text-gray-300" />
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-primary-800">SCPI</td>
                  <td className="px-6 py-4 text-center">Long terme</td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center">
                      <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">Moyenne</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center">
                      <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">Standard</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">Modéré</td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center">
                      <span className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <Star className="w-4 h-4 text-gray-300" />
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-primary-800">PER Entreprise</td>
                  <td className="px-6 py-4 text-center">Retraite</td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center">
                      <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">Limitée</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center">
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Très avantageuse</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">Modulable</td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center">
                      <span className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16 bg-gray-50">
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

      {/* Chiffres clés */}
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
              Chiffres clés
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notre expertise en gestion de patrimoine
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-7 w-7 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-primary-800 mb-2">1 500+</div>
              <p className="text-gray-600">Clients accompagnés</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-7 w-7 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-primary-800 mb-2">150M€</div>
              <p className="text-gray-600">Actifs sous gestion</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-7 w-7 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-primary-800 mb-2">15+</div>
              <p className="text-gray-600">Partenaires financiers</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-7 w-7 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-primary-800 mb-2">12 ans</div>
              <p className="text-gray-600">D'expertise financière</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
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
            {faqItems.map((faq, index) => (
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
      <section className="py-16 bg-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à optimiser votre patrimoine ?</h2>
              <p className="text-xl text-gray-200 mb-8">
                Nos experts sont à votre disposition pour analyser votre situation et vous proposer 
                les meilleures solutions d'investissement et d'épargne retraite.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="accent" 
                  size="lg" 
                  href="#top"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Obtenir mon étude personnalisée
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  href="tel:+33180855781"
                  className="border-white text-white hover:bg-white/10"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Parler à un conseiller
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

export default SolutionsFinancieresPage;