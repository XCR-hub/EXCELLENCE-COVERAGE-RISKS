import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  CheckCircle, 
  Package, 
  Truck, 
  Ship, 
  Plane, 
  Clock, 
  Award, 
  Phone, 
  FileText, 
  MapPin,
  AlertTriangle,
  Star,
  Globe
} from 'lucide-react';
import Button from '../components/common/Button';
import { SectionHeading, SubSectionHeading } from '../components/ui/Typography';
import FormField from '../components/ui/FormField';
import OfficialLinksSection from '../components/common/OfficialLinksSection';
import { Card, FeatureCard } from '../components/ui/Card';

const AssuranceMarchandisesTransporteesPage = () => {
  // État du formulaire
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    entreprise: '',
    secteur: '',
    typeMarchandises: '',
    modeTransport: '',
    message: '',
    consent: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('routier');

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
    if (!formData.typeMarchandises) newErrors.typeMarchandises = 'Le type de marchandises est requis';
    if (!formData.modeTransport) newErrors.modeTransport = 'Le mode de transport est requis';
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
          event_category: 'Marchandises Transportées',
          event_label: formData.modeTransport,
          value: 1
        });
      }
      
      if (typeof fbq !== 'undefined') {
        fbq('track', 'Lead', {
          content_category: 'Marchandises Transportées',
          content_name: `Lead Transport ${formData.modeTransport}`
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
          typeMarchandises: '',
          modeTransport: '',
          message: '',
          consent: false
        });
      }, 5000);
    } catch (error) {
      console.error('Erreur lors de la soumission du formulaire:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Secteurs d'activité
  const sectorsData = [
    { id: 'industrie', name: 'Industrie & Production' },
    { id: 'commerce', name: 'Commerce & Distribution' },
    { id: 'agroalimentaire', name: 'Agroalimentaire' },
    { id: 'textile', name: 'Textile & Habillement' },
    { id: 'high-tech', name: 'High-Tech & Électronique' },
    { id: 'pharmaceutique', name: 'Pharmaceutique & Médical' },
    { id: 'transport', name: 'Transport & Logistique' },
    { id: 'import-export', name: 'Import-Export' },
    { id: 'autre', name: 'Autre secteur' }
  ];

  // Types de marchandises
  const typeMarchandisesData = [
    { id: 'standard', name: 'Marchandises standard' },
    { id: 'fragile', name: 'Marchandises fragiles' },
    { id: 'perissable', name: 'Denrées périssables' },
    { id: 'dangereuse', name: 'Matières dangereuses' },
    { id: 'valeur', name: 'Objets de valeur' },
    { id: 'technologique', name: 'Équipements technologiques' },
    { id: 'vehicule', name: 'Véhicules' },
    { id: 'autre-marchandise', name: 'Autres marchandises' }
  ];

  // Modes de transport
  const modesTransportData = [
    { id: 'routier', name: 'Transport routier' },
    { id: 'maritime', name: 'Transport maritime' },
    { id: 'aerien', name: 'Transport aérien' },
    { id: 'ferroviaire', name: 'Transport ferroviaire' },
    { id: 'multimodal', name: 'Transport multimodal' },
    { id: 'express', name: 'Transport express' }
  ];

  // Avantages de l'assurance marchandises transportées
  const advantages = [
    "Protection de vos marchandises pendant le transport",
    "Couverture adaptée à la nature de vos produits",
    "Indemnisation rapide en cas de sinistre",
    "Couverture internationale",
    "Assistance et expertise en cas de litige",
    "Contrat modulable selon vos besoins et votre budget"
  ];

  // Garanties par mode de transport
  const guaranteesByCategory = {
    routier: [
      "Dommages matériels aux marchandises",
      "Vol et détérioration pendant le transport",
      "Accidents de la route",
      "Incendie du véhicule transporteur",
      "Chargement et déchargement",
      "Responsabilité contractuelle du transporteur"
    ],
    maritime: [
      "Avaries particulières et communes",
      "Fortunes de mer",
      "Jet à la mer",
      "Échouement et naufrage",
      "Contribution aux avaries communes",
      "Frais de sauvetage"
    ],
    aerien: [
      "Dommages pendant le transport aérien",
      "Perte totale ou partielle",
      "Retard de livraison",
      "Frais de reconstitution des documents",
      "Frais de sauvetage et de conservation",
      "Responsabilité du transporteur aérien"
    ]
  };

  // Témoignages clients
  const testimonials = [
    {
      name: "Pierre Martin",
      company: "Transports Martin",
      text: "L'assurance marchandises transportées proposée par XCR Courtier nous a permis de sécuriser notre activité de transport routier. Leur expertise dans ce domaine spécifique est un véritable atout.",
      rating: 5,
      category: "routier"
    },
    {
      name: "Sophie Dubois",
      company: "Import-Export Méditerranée",
      text: "Grâce à XCR Courtier, nous avons pu mettre en place une assurance maritime parfaitement adaptée à nos flux d'import-export. Leur réactivité lors d'un sinistre récent a été exemplaire.",
      rating: 5,
      category: "maritime"
    },
    {
      name: "Thomas Leroy",
      company: "Tech Express",
      text: "Notre entreprise expédie des équipements électroniques sensibles par voie aérienne. L'assurance sur mesure proposée par XCR nous offre une tranquillité d'esprit totale, avec une couverture parfaitement adaptée à nos produits de haute valeur.",
      rating: 5,
      category: "aerien"
    }
  ];

  // FAQ
  const faqItems = [
    {
      question: "Pourquoi souscrire une assurance marchandises transportées ?",
      answer: "L'assurance marchandises transportées est essentielle car elle protège vos biens contre les risques inhérents au transport (accidents, vols, détériorations, retards). Les conventions internationales limitent souvent la responsabilité des transporteurs à des montants bien inférieurs à la valeur réelle des marchandises. Par exemple, en transport routier, l'indemnisation est plafonnée à environ 20€/kg selon la CMR. De plus, certains événements comme les catastrophes naturelles ou les grèves peuvent exonérer le transporteur de sa responsabilité. Votre assurance marchandises transportées comble ces lacunes en vous garantissant une indemnisation à la valeur réelle de vos biens."
    },
    {
      question: "Quelle est la différence entre une police au voyage et une police d'abonnement ?",
      answer: "La police au voyage couvre un transport spécifique, identifié par une date, un trajet et une marchandise précise. Elle est idéale pour les expéditions ponctuelles ou exceptionnelles. La police d'abonnement, quant à elle, couvre l'ensemble des expéditions sur une période donnée (généralement un an). Elle est plus adaptée aux entreprises qui expédient régulièrement des marchandises. La police d'abonnement offre généralement des tarifs plus avantageux et une gestion administrative simplifiée, avec une déclaration périodique des expéditions (mensuelle ou trimestrielle)."
    },
    {
      question: "Comment est calculée la prime d'assurance pour les marchandises transportées ?",
      answer: "Le calcul de la prime d'assurance marchandises transportées prend en compte plusieurs facteurs : la valeur des marchandises transportées, leur nature (fragiles, dangereuses, périssables...), le mode de transport utilisé (routier, maritime, aérien...), les zones géographiques traversées et leur niveau de risque, le type d'emballage et les mesures de protection, ainsi que votre historique de sinistralité. Pour une police d'abonnement, la prime est généralement calculée sur la base d'un taux appliqué au chiffre d'affaires ou à la valeur totale des marchandises transportées sur la période."
    },
    {
      question: "Quelles sont les exclusions courantes de l'assurance marchandises transportées ?",
      answer: "Les exclusions courantes comprennent : les dommages résultant d'un emballage inadapté ou insuffisant, le vice propre de la marchandise (détérioration naturelle, défaut préexistant), les retards non consécutifs à un événement garanti, les dommages dus à l'humidité atmosphérique ou aux influences de la température (sauf défaillance des systèmes de régulation), les amendes et confiscations douanières, les dommages causés par des actes de guerre ou de terrorisme (sauf extensions spécifiques), et les pertes de marché. Il est essentiel de bien lire les conditions de votre contrat et d'opter pour des extensions de garantie si nécessaire."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Assurance Marchandises Transportées | Couverture Internationale | XCR Courtier</title>
        <meta name="description" content="Assurance marchandises transportées pour protéger vos biens pendant l'acheminement. Couverture internationale, tous modes de transport (routier, maritime, aérien). Devis gratuit." />
        <meta name="keywords" content="assurance marchandises transportées, assurance transport, assurance fret, assurance cargo, transport routier, transport maritime, transport aérien, assurance logistique" />
        <link rel="canonical" href="https://xcr-courtier.fr/assurance-marchandises-transportees" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Assurance Marchandises Transportées | Couverture Internationale" />
        <meta property="og:description" content="Protection complète de vos marchandises pendant le transport. Devis gratuit et personnalisé." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xcr-courtier.fr/assurance-marchandises-transportees" />
        <meta property="og:image" content="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg" />
        
        {/* Schema.org Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Assurance Marchandises Transportées",
            "description": "Protection des marchandises pendant leur transport par voie routière, maritime ou aérienne",
            "provider": {
              "@type": "Organization",
              "name": "XCR Courtier"
            },
            "serviceType": "Assurance Transport",
            "areaServed": "International",
            "audience": {
              "@type": "BusinessAudience", 
              "audienceType": "Entreprises et transporteurs"
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
            backgroundImage: 'url("https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg")',
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
                Assurance Marchandises Transportées
                <span className="text-secondary-400 block mt-2">Protection Internationale de vos Biens</span>
              </h1>
              
              <p className="text-xl text-gray-200 mb-8">
                Protégez vos marchandises pendant leur transport, quel que soit le mode d'acheminement. 
                Solution complète pour sécuriser vos expéditions nationales et internationales.
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
                  href="#devis-transport"
                >
                  Obtenir mon devis gratuit
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
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              id="devis-transport"
              className="bg-white rounded-2xl shadow-2xl p-8"
            >
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-800 mb-2">
                  Devis transport gratuit
                </h2>
                <p className="text-gray-600">
                  Recevez une offre personnalisée pour vos marchandises
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
                  <p className="text-gray-600 mb-4">Votre demande de devis a été envoyée avec succès.</p>
                  <p className="text-sm text-gray-500">Un conseiller expert en assurance transport vous contactera sous 24h maximum pour analyser vos besoins et vous proposer une solution sur mesure.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex gap-4 mb-4">
                    <button
                      type="button"
                      className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                        activeTab === 'routier'
                          ? 'bg-primary-800 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() => {
                        setActiveTab('routier');
                        setFormData({...formData, modeTransport: 'routier'});
                      }}
                    >
                      Routier
                    </button>
                    <button
                      type="button"
                      className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                        activeTab === 'maritime'
                          ? 'bg-primary-800 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() => {
                        setActiveTab('maritime');
                        setFormData({...formData, modeTransport: 'maritime'});
                      }}
                    >
                      Maritime
                    </button>
                    <button
                      type="button"
                      className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                        activeTab === 'aerien'
                          ? 'bg-primary-800 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() => {
                        setActiveTab('aerien');
                        setFormData({...formData, modeTransport: 'aerien'});
                      }}
                    >
                      Aérien
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      {sectorsData.map(sector => (
                        <option key={sector.id} value={sector.id}>{sector.name}</option>
                      ))}
                    </FormField>

                    <FormField
                      label="Type de marchandises"
                      name="typeMarchandises"
                      type="select"
                      value={formData.typeMarchandises}
                      onChange={handleChange}
                      required
                      error={errors.typeMarchandises}
                    >
                      <option value="">Sélectionnez le type</option>
                      {typeMarchandisesData.map(type => (
                        <option key={type.id} value={type.id}>{type.name}</option>
                      ))}
                    </FormField>
                  </div>

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
                    label="J'accepte d'être contacté par XCR Courtier concernant ma demande de devis. Conformément au RGPD, vous pouvez exercer vos droits d'accès, de rectification et de suppression."
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
                      'Obtenir mon devis transport gratuit'
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Solutions par mode de transport"
            subtitle="Découvrez nos garanties adaptées à chaque type d'acheminement"
          />

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              className={`px-6 py-3 rounded-full font-medium transition-colors flex items-center ${
                activeTab === 'routier'
                  ? 'bg-primary-800 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab('routier')}
            >
              <Truck className="h-5 w-5 mr-2" />
              Transport Routier
            </button>
            <button
              className={`px-6 py-3 rounded-full font-medium transition-colors flex items-center ${
                activeTab === 'maritime'
                  ? 'bg-primary-800 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab('maritime')}
            >
              <Ship className="h-5 w-5 mr-2" />
              Transport Maritime
            </button>
            <button
              className={`px-6 py-3 rounded-full font-medium transition-colors flex items-center ${
                activeTab === 'aerien'
                  ? 'bg-primary-800 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab('aerien')}
            >
              <Plane className="h-5 w-5 mr-2" />
              Transport Aérien
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {activeTab === 'routier' && (
                <>
                  <h3 className="text-2xl font-bold text-primary-800 mb-6">Assurance Transport Routier</h3>
                  <p className="text-gray-700 mb-6">
                    Notre assurance transport routier protège vos marchandises lors de leur acheminement par camion, utilitaire ou tout autre véhicule terrestre. Que vous soyez expéditeur, destinataire ou transporteur, nous vous proposons une couverture adaptée à vos besoins spécifiques.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                    <p className="text-blue-700">
                      <strong>Bon à savoir :</strong> La responsabilité du transporteur routier est limitée à environ 20€/kg selon la Convention CMR pour les transports internationaux. Notre assurance vous permet d'être indemnisé à la valeur réelle de vos marchandises.
                    </p>
                  </div>
                </>
              )}

              {activeTab === 'maritime' && (
                <>
                  <h3 className="text-2xl font-bold text-primary-800 mb-6">Assurance Transport Maritime</h3>
                  <p className="text-gray-700 mb-6">
                    Le transport maritime présente des risques spécifiques liés à la navigation. Notre assurance maritime couvre vos marchandises contre les fortunes de mer, les avaries communes et particulières, et tous les risques inhérents au transport par voie maritime ou fluviale.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                    <p className="text-blue-700">
                      <strong>Bon à savoir :</strong> En transport maritime, la responsabilité du transporteur est limitée à 2 DTS/kg (environ 2,5€/kg) ou 666,67 DTS/colis selon les Règles de La Haye-Visby. Notre assurance vous garantit une indemnisation complète.
                    </p>
                  </div>
                </>
              )}

              {activeTab === 'aerien' && (
                <>
                  <h3 className="text-2xl font-bold text-primary-800 mb-6">Assurance Transport Aérien</h3>
                  <p className="text-gray-700 mb-6">
                    Le transport aérien, bien que rapide et sécurisé, n'est pas exempt de risques. Notre assurance transport aérien protège vos marchandises de valeur ou urgentes contre les dommages, pertes ou retards lors de leur acheminement par voie aérienne.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                    <p className="text-blue-700">
                      <strong>Bon à savoir :</strong> La Convention de Montréal limite la responsabilité du transporteur aérien à 22 DTS/kg (environ 27€/kg). Pour des marchandises de valeur, notre assurance est indispensable pour couvrir leur valeur réelle.
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
                  href="#devis-transport"
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
                  <Globe className="h-6 w-6 text-primary-600 mr-2" />
                  Couverture internationale
                </h3>
                
                <div className="space-y-6">
                  <p className="text-gray-700">
                    Notre assurance marchandises transportées vous offre une protection mondiale, quel que soit le trajet de vos marchandises :
                  </p>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-primary-700 mb-2">Zones géographiques couvertes</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">Europe (UE et hors UE)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">Amérique du Nord et du Sud</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">Asie et Océanie</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">Afrique et Moyen-Orient</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-primary-700 mb-2">Types de couverture</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">Tous risques (couverture la plus complète)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">FAP Sauf (Franc d'Avaries Particulières sauf événements majeurs)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">Risques de guerre et de grève</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-gray-700 mb-4">
                    Pour une analyse personnalisée de vos besoins en assurance transport :
                  </p>
                  <Button 
                    variant="primary" 
                    href="tel:+33180855781"
                    fullWidth
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Parler à un expert transport
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Pourquoi choisir notre assurance transport ?"
            subtitle="Des garanties complètes et adaptées à vos besoins spécifiques"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Package className="h-8 w-8 text-primary-600" />}
              title="Couverture Adaptée"
              description="Solutions sur mesure selon la nature de vos marchandises, leur valeur et le mode de transport utilisé."
            />
            <FeatureCard
              icon={<Globe className="h-8 w-8 text-primary-600" />}
              title="Couverture Mondiale"
              description="Protection de vos marchandises partout dans le monde, quel que soit le trajet ou la destination."
            />
            <FeatureCard
              icon={<Award className="h-8 w-8 text-primary-600" />}
              title="Expertise Sectorielle"
              description="Nos experts connaissent parfaitement les spécificités de chaque secteur et mode de transport."
            />
            <FeatureCard
              icon={<Clock className="h-8 w-8 text-primary-600" />}
              title="Gestion Rapide des Sinistres"
              description="Prise en charge prioritaire et indemnisation accélérée pour minimiser l'impact sur votre activité."
            />
            <FeatureCard
              icon={<AlertTriangle className="h-8 w-8 text-primary-600" />}
              title="Prévention des Risques"
              description="Conseils et accompagnement pour sécuriser vos expéditions et réduire les risques de sinistres."
            />
            <FeatureCard
              icon={<FileText className="h-8 w-8 text-primary-600" />}
              title="Flexibilité Contractuelle"
              description="Polices au voyage ou d'abonnement selon vos besoins, avec des options adaptées à votre activité."
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
              .filter(testimonial => testimonial.category === activeTab || activeTab === 'all')
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
            title="Questions fréquentes"
            subtitle="Trouvez rapidement des réponses à vos questions sur l'assurance marchandises transportées"
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Sécurisez vos marchandises pendant le transport</h2>
              <p className="text-xl text-gray-200 mb-8">
                Ne laissez pas le hasard compromettre la livraison de vos marchandises. Obtenez votre devis gratuit en 2 minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="accent" 
                  size="lg" 
                  href="#devis-transport"
                >
                  Obtenir mon devis transport
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
              title="RC Pro"
              description="Protection contre les conséquences financières des dommages causés aux tiers dans le cadre de votre activité professionnelle."
              icon={<Shield className="h-8 w-8 text-primary-600" />}
              variant="outline"
            >
              <Link 
                to="/rc-pro" 
                className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium mt-4"
              >
                En savoir plus
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Card>
            
            <Card
              title="Multirisque Professionnelle"
              description="Protection complète pour vos locaux, équipements et responsabilités liées à votre activité professionnelle."
              icon={<Building2 className="h-8 w-8 text-primary-600" />}
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
              title="Assurance Flottes"
              description="Gestion centralisée de tous vos véhicules professionnels avec des garanties adaptées à votre activité."
              icon={<Truck className="h-8 w-8 text-primary-600" />}
              variant="outline"
            >
              <Link 
                to="/assurance-auto-flottes" 
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

export default AssuranceMarchandisesTransporteesPage;