import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  CheckCircle, 
  FileText, 
  Users, 
  Building2, 
  Briefcase, 
  Star, 
  Phone, 
  Download,
  ArrowRight,
  AlertTriangle,
  Award,
  Mail,
  Clock,
  User
} from 'lucide-react';
import Button from '../components/common/Button';
import { SectionHeading, SubSectionHeading } from '../components/ui/Typography';
import FormField from '../components/ui/FormField';
import OfficialLinksSection from '../components/common/OfficialLinksSection';
import { Card, FeatureCard } from '../components/ui/Card';

const RCProPage = () => {
  // État du formulaire
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    entreprise: '',
    secteur: '',
    chiffreAffaires: '',
    message: '',
    consent: false,
    downloadGuide: true
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('artisans');

  // Gestion des changements dans le formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });

    // Effacer l'erreur lorsque l'utilisateur commence à taper
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  // Validation du formulaire
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.nom.trim()) newErrors.nom = 'Le nom est requis';
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
    if (!formData.entreprise.trim()) newErrors.entreprise = 'Le nom de l\'entreprise est requis';
    if (!formData.secteur) newErrors.secteur = 'Le secteur d\'activité est requis';
    if (!formData.consent) newErrors.consent = 'Vous devez accepter les conditions';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simuler un appel API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Tracking de conversion
      if (typeof gtag !== 'undefined') {
        gtag('event', 'generate_lead', {
          event_category: 'RC Pro',
          event_label: formData.secteur,
          value: 1
        });
      }
      
      if (typeof fbq !== 'undefined') {
        fbq('track', 'Lead', {
          content_category: 'RC Pro',
          content_name: `Lead RC Pro ${formData.secteur}`
        });
      }
      
      setIsSubmitted(true);
      
      // Réinitialiser le formulaire après 5 secondes
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          nom: '',
          email: '',
          telephone: '',
          entreprise: '',
          secteur: '',
          chiffreAffaires: '',
          message: '',
          consent: false,
          downloadGuide: true
        });
      }, 5000);
    } catch (error) {
      console.error('Erreur lors de la soumission du formulaire:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Secteurs d'activité
  const sectorsData = {
    artisans: [
      { id: 'batiment', name: 'Bâtiment & Construction' },
      { id: 'artisanat', name: 'Artisanat d\'art' },
      { id: 'reparation', name: 'Réparation & Maintenance' },
      { id: 'alimentation', name: 'Métiers de bouche' },
      { id: 'autre-artisan', name: 'Autre métier artisanal' }
    ],
    commercants: [
      { id: 'commerce-detail', name: 'Commerce de détail' },
      { id: 'restauration', name: 'Restauration & Hôtellerie' },
      { id: 'service', name: 'Services aux particuliers' },
      { id: 'e-commerce', name: 'E-commerce' },
      { id: 'autre-commerce', name: 'Autre activité commerciale' }
    ],
    liberales: [
      { id: 'sante', name: 'Santé' },
      { id: 'juridique', name: 'Juridique' },
      { id: 'conseil', name: 'Conseil & Expertise' },
      { id: 'formation', name: 'Formation & Enseignement' },
      { id: 'autre-liberal', name: 'Autre profession libérale' }
    ]
  };

  // Avantages de la RC Pro
  const advantages = [
    "Protection financière en cas de dommages causés à des tiers",
    "Couverture des frais de défense juridique",
    "Préservation de la réputation de votre entreprise",
    "Obligation légale pour de nombreuses professions",
    "Gage de sérieux auprès de vos clients et partenaires",
    "Sérénité dans l'exercice de votre activité professionnelle"
  ];

  // Garanties par secteur
  const guaranteesByCategory = {
    artisans: [
      "Dommages matériels causés aux biens des clients",
      "Dommages corporels suite à vos interventions",
      "Malfaçons et erreurs techniques",
      "Dommages après livraison ou réception",
      "Protection juridique professionnelle",
      "Dommages aux biens confiés"
    ],
    commercants: [
      "Dommages corporels causés aux clients",
      "Intoxications alimentaires (restauration)",
      "Dommages aux biens des clients",
      "Erreurs de conseil ou d'information",
      "Protection juridique commerciale",
      "Dommages après livraison"
    ],
    liberales: [
      "Erreurs, omissions et négligences professionnelles",
      "Manquements aux obligations de conseil",
      "Divulgation d'informations confidentielles",
      "Pertes de documents confiés",
      "Protection juridique spécifique",
      "Dommages immatériels"
    ]
  };

  // Témoignages clients
  const testimonials = [
    {
      name: "Jean Dupont",
      company: "Dupont Électricité",
      text: "Grâce à XCR Courtier, j'ai obtenu une RC Pro parfaitement adaptée à mon activité d'électricien, avec des garanties étendues et un tarif très compétitif. Leur expertise dans le domaine artisanal m'a vraiment impressionné.",
      rating: 5,
      sector: "artisans"
    },
    {
      name: "Marie Leroy",
      company: "Boutique Élégance",
      text: "En tant que commerçante, j'avais besoin d'une RC Pro qui couvre tous les risques liés à mon activité. XCR Courtier m'a proposé une solution sur mesure à un prix très avantageux. Je recommande vivement !",
      rating: 5,
      sector: "commercants"
    },
    {
      name: "Pierre Martin",
      company: "Cabinet Martin & Associés",
      text: "La RC Pro proposée par XCR Courtier répond parfaitement aux exigences de ma profession d'avocat. Leur connaissance des spécificités des professions libérales est un véritable atout.",
      rating: 5,
      sector: "liberales"
    }
  ];

  // FAQ
  const faqItems = [
    {
      question: "Qu'est-ce que la RC Pro et pourquoi est-elle importante ?",
      answer: "La Responsabilité Civile Professionnelle (RC Pro) est une assurance qui protège les professionnels contre les conséquences financières des dommages qu'ils pourraient causer à des tiers dans le cadre de leur activité. Elle est essentielle car elle couvre les erreurs, négligences ou manquements qui peuvent survenir même chez les professionnels les plus rigoureux, et dont les conséquences financières peuvent être considérables."
    },
    {
      question: "La RC Pro est-elle obligatoire pour mon activité ?",
      answer: "La RC Pro est obligatoire pour certaines professions réglementées (avocats, médecins, experts-comptables, agents immobiliers, etc.) et pour les artisans du bâtiment. Pour les autres activités, bien qu'elle ne soit pas toujours légalement obligatoire, elle est fortement recommandée et souvent exigée par les clients, notamment dans le cadre de marchés publics ou de contrats avec de grandes entreprises."
    },
    {
      question: "Quels sont les risques couverts par la RC Pro ?",
      answer: "La RC Pro couvre généralement les dommages matériels, corporels et immatériels causés aux tiers dans le cadre de votre activité professionnelle. Cela inclut les erreurs, négligences, malfaçons, manquements aux obligations de conseil, ainsi que les frais de défense juridique en cas de litige. Les garanties précises varient selon votre métier et le contrat choisi."
    },
    {
      question: "Comment est calculé le tarif de la RC Pro ?",
      answer: "Le tarif de la RC Pro dépend de plusieurs facteurs : votre secteur d'activité et les risques associés, votre chiffre d'affaires, votre expérience professionnelle, l'étendue des garanties souhaitées, votre historique de sinistralité, et parfois la zone géographique d'exercice. Chez XCR Courtier, nous négocions les meilleures conditions auprès de nos partenaires assureurs pour vous proposer un tarif optimal."
    }
  ];

  return (
    <>
      <Helmet>
        <title>RC Pro Artisans, Commerçants & Professions Libérales | Devis Gratuit | XCR Courtier</title>
        <meta name="description" content="Assurance RC Pro pour artisans, commerçants et professions libérales. Devis gratuit en 2 minutes, tarifs négociés, attestation sous 24h. Protection complète pour votre activité professionnelle." />
        <meta name="keywords" content="RC Pro, responsabilité civile professionnelle, assurance professionnelle, RC Pro artisan, RC Pro commerçant, RC Pro profession libérale, devis RC Pro" />
        <link rel="canonical" href="https://xcr-courtier.fr/rc-pro" />
        
        {/* Open Graph */}
        <meta property="og:title" content="RC Pro Artisans, Commerçants & Professions Libérales | XCR Courtier" />
        <meta property="og:description" content="Assurance RC Pro sur mesure pour votre activité professionnelle. Devis gratuit en 2 minutes, tarifs négociés." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xcr-courtier.fr/rc-pro" />
        <meta property="og:image" content="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg" />
        
        {/* Schema.org Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Assurance RC Pro",
            "description": "Responsabilité Civile Professionnelle pour artisans, commerçants et professions libérales",
            "provider": {
              "@type": "Organization",
              "name": "XCR Courtier"
            },
            "serviceType": "Assurance Professionnelle",
            "areaServed": "France",
            "audience": {
              "@type": "BusinessAudience", 
              "audienceType": "Professionnels et entreprises"
            }
          })}
        </script>
        
        {/* Schema.org FAQ */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center py-24">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg")',
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Assurance RC Pro
                <span className="text-secondary-400 block mt-2">Protection Sur Mesure pour Votre Activité</span>
              </h1>
              
              <p className="text-xl text-gray-200 mb-8">
                Protégez votre activité professionnelle contre les risques de responsabilité civile. 
                Devis gratuit en 2 minutes, tarifs négociés, attestation sous 24h.
              </p>

              <div className="space-y-4 mb-8">
                {advantages.slice(0, 3).map((advantage, index) => (
                  <div key={index} className="flex items-center text-secondary-300">
                    <CheckCircle className="h-6 w-6 mr-2 flex-shrink-0" />
                    <span className="text-lg">{advantage}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="accent" 
                  size="lg" 
                  href="#devis-rc-pro"
                >
                  Obtenir mon devis gratuit
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  href="#guide-rc-pro"
                  className="border-white text-white hover:bg-white/10"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Télécharger le guide RC Pro
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              id="devis-rc-pro"
              className="bg-white rounded-2xl shadow-2xl p-8"
            >
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-800 mb-2">
                  Devis RC Pro gratuit en 2 minutes
                </h2>
                <p className="text-gray-600">
                  Recevez une offre personnalisée pour votre activité
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
                  <p className="text-gray-600 mb-4">Votre demande de devis RC Pro a été envoyée avec succès.</p>
                  <p className="text-sm text-gray-500">Un conseiller expert vous contactera sous 24h maximum.</p>
                  {formData.downloadGuide && (
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <p className="text-blue-700 font-medium mb-2">Votre guide RC Pro est prêt !</p>
                      <Button 
                        variant="primary" 
                        href="/guides/rc-pro-essentials.pdf"
                        className="mt-2"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Télécharger maintenant
                      </Button>
                    </div>
                  )}
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex gap-4 mb-4">
                    <button
                      type="button"
                      className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                        activeTab === 'artisans'
                          ? 'bg-primary-800 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() => setActiveTab('artisans')}
                    >
                      Artisans
                    </button>
                    <button
                      type="button"
                      className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                        activeTab === 'commercants'
                          ? 'bg-primary-800 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() => setActiveTab('commercants')}
                    >
                      Commerçants
                    </button>
                    <button
                      type="button"
                      className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                        activeTab === 'liberales'
                          ? 'bg-primary-800 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() => setActiveTab('liberales')}
                    >
                      Libérales
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      label="Nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      required
                      error={errors.nom}
                      icon={<Users className="h-5 w-5 text-gray-400" />}
                    />
                    <FormField
                      label="Entreprise"
                      name="entreprise"
                      value={formData.entreprise}
                      onChange={handleChange}
                      placeholder="Nom de votre entreprise"
                      required
                      error={errors.entreprise}
                      icon={<Building2 className="h-5 w-5 text-gray-400" />}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre@email.com"
                      required
                      error={errors.email}
                      icon={<Mail className="h-5 w-5 text-gray-400" />}
                    />
                    <FormField
                      label="Téléphone"
                      name="telephone"
                      type="tel"
                      value={formData.telephone}
                      onChange={handleChange}
                      placeholder="06 12 34 56 78"
                      required
                      error={errors.telephone}
                      icon={<Phone className="h-5 w-5 text-gray-400" />}
                    />
                  </div>

                  <FormField
                    label="Secteur d'activité"
                    name="secteur"
                    type="select"
                    value={formData.secteur}
                    onChange={handleChange}
                    required
                    error={errors.secteur}
                  >
                    <option value="">Sélectionnez votre secteur</option>
                    {sectorsData[activeTab as keyof typeof sectorsData].map(sector => (
                      <option key={sector.id} value={sector.id}>{sector.name}</option>
                    ))}
                  </FormField>

                  <FormField
                    label="Chiffre d'affaires annuel"
                    name="chiffreAffaires"
                    type="select"
                    value={formData.chiffreAffaires}
                    onChange={handleChange}
                    error={errors.chiffreAffaires}
                  >
                    <option value="">Sélectionnez votre CA</option>
                    <option value="moins-50k">Moins de 50 000 €</option>
                    <option value="50k-100k">50 000 € - 100 000 €</option>
                    <option value="100k-250k">100 000 € - 250 000 €</option>
                    <option value="250k-500k">250 000 € - 500 000 €</option>
                    <option value="500k-1M">500 000 € - 1 000 000 €</option>
                    <option value="plus-1M">Plus de 1 000 000 €</option>
                  </FormField>

                  <FormField
                    label="Message (optionnel)"
                    name="message"
                    type="textarea"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Précisez vos besoins spécifiques ou posez-nous vos questions"
                    error={errors.message}
                  />

                  <FormField
                    label="Je souhaite recevoir le guide gratuit 'Les Essentiels de la RC Pro'"
                    name="downloadGuide"
                    type="checkbox"
                    value={formData.downloadGuide}
                    onChange={handleChange}
                    error={errors.downloadGuide}
                  />

                  <FormField
                    label="J'accepte d'être contacté par XCR Courtier concernant ma demande de devis RC Pro. Conformément au RGPD, vous pouvez exercer vos droits d'accès, de rectification et de suppression."
                    name="consent"
                    type="checkbox"
                    value={formData.consent}
                    onChange={handleChange}
                    required
                    error={errors.consent}
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary-800 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-primary-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      'Obtenir mon devis RC Pro gratuit'
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    Devis gratuit et sans engagement. Réponse sous 24h maximum.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16 bg-white" id="guide-rc-pro">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="RC Pro adaptée à votre activité"
            subtitle="Découvrez nos solutions spécifiques pour chaque secteur professionnel"
          />

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                activeTab === 'artisans'
                  ? 'bg-primary-800 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab('artisans')}
            >
              Artisans
            </button>
            <button
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                activeTab === 'commercants'
                  ? 'bg-primary-800 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab('commercants')}
            >
              Commerçants
            </button>
            <button
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                activeTab === 'liberales'
                  ? 'bg-primary-800 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab('liberales')}
            >
              Professions Libérales
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {activeTab === 'artisans' && (
                <>
                  <h3 className="text-2xl font-bold text-primary-800 mb-6">RC Pro Artisans</h3>
                  <p className="text-gray-700 mb-6">
                    En tant qu'artisan, votre responsabilité peut être engagée en cas de dommages causés à vos clients ou à des tiers. Notre assurance RC Pro Artisans vous protège contre les conséquences financières de ces risques, vous permettant d'exercer votre métier en toute sérénité.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                    <p className="text-blue-700">
                      <strong>Bon à savoir :</strong> La RC Pro est obligatoire pour les artisans du bâtiment et fortement recommandée pour tous les autres corps de métier.
                    </p>
                  </div>
                </>
              )}

              {activeTab === 'commercants' && (
                <>
                  <h3 className="text-2xl font-bold text-primary-800 mb-6">RC Pro Commerçants</h3>
                  <p className="text-gray-700 mb-6">
                    Les commerçants sont exposés à de nombreux risques liés à leur activité : accidents dans le magasin, problèmes liés aux produits vendus, conseils inappropriés... Notre RC Pro Commerçants vous offre une protection complète adaptée à votre secteur d'activité.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                    <p className="text-blue-700">
                      <strong>Bon à savoir :</strong> La RC Pro peut être complétée par une garantie des dommages après livraison, essentielle pour les commerçants qui vendent des produits.
                    </p>
                  </div>
                </>
              )}

              {activeTab === 'liberales' && (
                <>
                  <h3 className="text-2xl font-bold text-primary-800 mb-6">RC Pro Professions Libérales</h3>
                  <p className="text-gray-700 mb-6">
                    Les professionnels libéraux engagent leur responsabilité à travers leurs conseils et prestations intellectuelles. Notre RC Pro Professions Libérales vous protège contre les risques d'erreurs, d'omissions ou de négligences dans l'exercice de votre profession.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                    <p className="text-blue-700">
                      <strong>Bon à savoir :</strong> La RC Pro est obligatoire pour de nombreuses professions libérales réglementées (avocats, experts-comptables, architectes, etc.).
                    </p>
                  </div>
                </>
              )}

              <h4 className="text-xl font-semibold text-primary-800 mb-4">Garanties incluses :</h4>
              <div className="space-y-3 mb-8">
                {guaranteesByCategory[activeTab as keyof typeof guaranteesByCategory].map((guarantee, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{guarantee}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button 
                  variant="primary" 
                  href="#devis-rc-pro"
                >
                  Obtenir mon devis personnalisé
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-gray-50 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-primary-800 mb-6 flex items-center">
                  <Download className="h-6 w-6 text-primary-600 mr-2" />
                  Guide gratuit : Les Essentiels de la RC Pro
                </h3>
                <img 
                  src="/guides/rc-pro-essentials.pdf" 
                  alt="Couverture du guide RC Pro" 
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <p className="text-gray-700 mb-6">
                  Téléchargez notre guide complet pour tout savoir sur la RC Pro :
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">Définition et cadre légal</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">Les garanties essentielles</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">Comment choisir sa RC Pro</span>
                  </li>
                </ul>
                <Button 
                  variant="primary" 
                  href="#devis-rc-pro"
                  fullWidth
                >
                  <Download className="w-5 h-5 mr-2" />
                  Télécharger le guide gratuit
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Pourquoi choisir notre assurance RC Pro ?"
            subtitle="Des garanties complètes et adaptées à votre activité professionnelle"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Shield className="h-8 w-8 text-primary-600" />}
              title="Protection Complète"
              description="Couverture des dommages matériels, corporels et immatériels causés aux tiers dans le cadre de votre activité."
            />
            <FeatureCard
              icon={<FileText className="h-8 w-8 text-primary-600" />}
              title="Contrats Sur Mesure"
              description="Garanties adaptées à votre secteur d'activité, à la taille de votre entreprise et à vos besoins spécifiques."
            />
            <FeatureCard
              icon={<Award className="h-8 w-8 text-primary-600" />}
              title="Tarifs Négociés"
              description="Grâce à notre réseau de plus de 30 assureurs partenaires, nous vous garantissons les meilleurs tarifs du marché."
            />
            <FeatureCard
              icon={<Clock className="h-8 w-8 text-primary-600" />}
              title="Attestation Rapide"
              description="Recevez votre attestation RC Pro sous 24h après la souscription pour répondre rapidement à vos obligations."
            />
            <FeatureCard
              icon={<Users className="h-8 w-8 text-primary-600" />}
              title="Accompagnement Dédié"
              description="Un conseiller expert de votre secteur d'activité vous accompagne dans le choix de vos garanties."
            />
            <FeatureCard
              icon={<AlertTriangle className="h-8 w-8 text-primary-600" />}
              title="Gestion des Sinistres"
              description="En cas de sinistre, nous vous accompagnons dans toutes vos démarches pour une indemnisation rapide et optimale."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Ce que nos clients en disent"
            subtitle="Découvrez les témoignages de professionnels qui nous font confiance"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials
              .filter(testimonial => testimonial.sector === activeTab || activeTab === 'all')
              .map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 border border-gray-100"
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
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
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
          <SectionHeading
            title="Questions fréquentes sur la RC Pro"
            subtitle="Trouvez rapidement des réponses à vos questions"
          />

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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Protégez votre activité professionnelle dès maintenant</h2>
              <p className="text-xl text-gray-200 mb-8">
                Ne prenez pas de risques inutiles. Obtenez votre devis RC Pro gratuit en 2 minutes et sécurisez votre activité.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="accent" 
                  size="lg" 
                  href="#devis-rc-pro"
                >
                  Obtenir mon devis RC Pro
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Autres assurances professionnelles"
            subtitle="Découvrez nos autres solutions pour protéger votre activité"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card
              title="Assurance Décennale"
              description="Protection obligatoire pour les professionnels du bâtiment couvrant les dommages compromettant la solidité de l'ouvrage."
              icon={<Building2 className="h-8 w-8 text-primary-600" />}
              variant="outline"
            >
              <Link 
                to="/assurance-decennale" 
                className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium mt-4"
              >
                En savoir plus
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Card>
            
            <Card
              title="Multirisque Professionnelle"
              description="Protection complète pour vos locaux, équipements et responsabilités liées à votre activité professionnelle."
              icon={<Shield className="h-8 w-8 text-primary-600" />}
              variant="outline"
            >
              <Link 
                to="/multirisque-professionnelle" 
                className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium mt-4"
              >
                En savoir plus
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Card>
            
            <Card
              title="Protection Juridique"
              description="Défense de vos intérêts en cas de litige professionnel, avec prise en charge des frais de justice."
              icon={<FileText className="h-8 w-8 text-primary-600" />}
              variant="outline"
            >
              <Link 
                to="/protection-juridique" 
                className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium mt-4"
              >
                En savoir plus
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Official Links Section */}
      <OfficialLinksSection />
    </>
  );
};

export default RCProPage;