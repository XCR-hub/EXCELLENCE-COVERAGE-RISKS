import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Shield,
  CheckCircle,
  Building2,
  FileText,
  Users,
  Clock,
  Award,
  Phone,
  Briefcase,
  Flame,
  Droplets,
  Package,
  AlertTriangle,
  Star,
  ArrowRight,
  Mail,
  User,
} from 'lucide-react';
import Button from '../components/common/Button';
import { SectionHeading, SubSectionHeading } from '../components/ui/Typography';
import FormField from '../components/ui/FormField';
import OfficialLinksSection from '../components/common/OfficialLinksSection';
import { Card, FeatureCard } from '../components/ui/Card';

const MultirisqueProfessionnellePage = () => {
  // État du formulaire
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    entreprise: '',
    secteur: '',
    surface: '',
    message: '',
    consent: false,
    typeLocal: 'commerce',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('commerce');

  // Gestion des changements dans le formulaire
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

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
      newErrors.email = "L'email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
    }
    if (!formData.telephone.trim()) {
      newErrors.telephone = 'Le téléphone est requis';
    } else if (
      !/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/.test(
        formData.telephone.replace(/\s/g, '')
      )
    ) {
      newErrors.telephone = 'Format de téléphone invalide';
    }
    if (!formData.entreprise.trim())
      newErrors.entreprise = "Le nom de l'entreprise est requis";
    if (!formData.secteur)
      newErrors.secteur = "Le secteur d'activité est requis";
    if (!formData.surface) newErrors.surface = 'La surface est requise';
    if (!formData.consent)
      newErrors.consent = 'Vous devez accepter les conditions';

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
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Tracking de conversion
      if (typeof gtag !== 'undefined') {
        gtag('event', 'generate_lead', {
          event_category: 'Multirisque',
          event_label: formData.typeLocal,
          value: 1,
        });
      }

      if (typeof fbq !== 'undefined') {
        fbq('track', 'Lead', {
          content_category: 'Multirisque',
          content_name: `Lead Multirisque ${formData.typeLocal}`,
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
          surface: '',
          message: '',
          consent: false,
          typeLocal: 'commerce',
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
    commerce: [
      { id: 'commerce-detail', name: 'Commerce de détail' },
      { id: 'restauration', name: 'Restauration & Hôtellerie' },
      { id: 'service', name: 'Services aux particuliers' },
      { id: 'e-commerce', name: 'E-commerce avec stockage' },
      { id: 'autre-commerce', name: 'Autre activité commerciale' },
    ],
    entreprise: [
      { id: 'bureaux', name: 'Bureaux & Services' },
      { id: 'industrie', name: 'Industrie & Production' },
      { id: 'artisanat', name: "Artisanat & Métiers d'art" },
      { id: 'entrepot', name: 'Entrepôt & Logistique' },
      { id: 'autre-entreprise', name: 'Autre activité professionnelle' },
    ],
    marchandises: [
      { id: 'transport-routier', name: 'Transport routier' },
      { id: 'transport-maritime', name: 'Transport maritime' },
      { id: 'transport-aerien', name: 'Transport aérien' },
      { id: 'stockage', name: 'Stockage & Entreposage' },
      { id: 'autre-transport', name: 'Autre activité de transport' },
    ],
  };

  // Avantages de la multirisque
  const advantages = [
    'Protection complète de vos locaux et équipements professionnels',
    'Couverture de votre responsabilité civile professionnelle',
    "Indemnisation en cas de perte d'exploitation",
    'Protection contre les risques spécifiques à votre activité',
    'Assistance 24h/24 en cas de sinistre',
    'Contrat modulable selon vos besoins et votre budget',
  ];

  // Garanties par type
  const guaranteesByCategory = {
    commerce: [
      'Incendie, explosion, dégâts des eaux',
      'Vol, vandalisme et détériorations',
      'Bris de glace et enseignes',
      'Dommages électriques',
      "Perte d'exploitation après sinistre",
      'Responsabilité civile exploitation',
    ],
    entreprise: [
      'Dommages aux bâtiments professionnels',
      'Protection des équipements et machines',
      'Perte de marchandises et matières premières',
      'Bris de machines',
      'Pertes financières après sinistre',
      'Responsabilité civile professionnelle',
    ],
    marchandises: [
      'Dommages aux marchandises transportées',
      'Vol et détérioration pendant le transport',
      'Retard de livraison',
      'Responsabilité contractuelle du transporteur',
      'Avaries et pertes totales',
      'Assistance et expertise en cas de sinistre',
    ],
  };

  // Témoignages clients
  const testimonials = [
    {
      name: 'Jean Dupont',
      company: 'Boulangerie Dupont',
      text: 'Suite à un dégât des eaux important, XCR Courtier a géré mon dossier avec une efficacité remarquable. Indemnisation rapide et accompagnement personnalisé, je recommande vivement !',
      rating: 5,
      category: 'commerce',
    },
    {
      name: 'Marie Leroy',
      company: 'Leroy Industrie',
      text: 'Notre contrat multirisque entreprise a été entièrement repensé par XCR Courtier, avec des garanties parfaitement adaptées à notre activité industrielle et des économies substantielles à la clé.',
      rating: 5,
      category: 'entreprise',
    },
    {
      name: 'Pierre Martin',
      company: 'Transports Martin',
      text: "L'assurance marchandises transportées proposée par XCR Courtier nous a permis de sécuriser notre activité de transport. Leur expertise dans ce domaine spécifique est un véritable atout.",
      rating: 5,
      category: 'marchandises',
    },
  ];

  // FAQ
  const faqItems = [
    {
      question: "Qu'est-ce qu'une assurance multirisque professionnelle ?",
      answer:
        "L'assurance multirisque professionnelle est un contrat qui regroupe plusieurs garanties essentielles pour protéger votre activité : dommages aux locaux et aux biens professionnels, responsabilité civile, pertes d'exploitation, etc. Elle offre une protection complète contre les principaux risques auxquels votre entreprise est exposée, avec l'avantage d'un contrat unique et d'une gestion simplifiée.",
    },
    {
      question: 'Comment choisir les garanties adaptées à mon activité ?',
      answer:
        "Le choix des garanties dépend de plusieurs facteurs : votre secteur d'activité, la taille de votre entreprise, vos locaux, vos équipements, et les risques spécifiques auxquels vous êtes exposé. Chez XCR Courtier, nous réalisons une analyse personnalisée de vos besoins pour vous proposer une solution sur mesure. Nous prenons en compte les particularités de votre métier et les exigences réglementaires de votre secteur pour vous offrir une protection optimale.",
    },
    {
      question: 'Quelle est la différence entre la multirisque et la RC Pro ?',
      answer:
        "La Responsabilité Civile Professionnelle (RC Pro) couvre uniquement les dommages que vous pourriez causer à des tiers dans le cadre de votre activité professionnelle. La multirisque professionnelle est plus complète : elle inclut généralement la RC Pro, mais y ajoute la protection de vos propres biens (locaux, équipements, stocks) contre des risques comme l'incendie, le vol, les dégâts des eaux, ainsi que les pertes financières consécutives à un sinistre (perte d'exploitation). La multirisque est donc une solution globale, tandis que la RC Pro ne couvre qu'un aspect spécifique de vos risques professionnels.",
    },
    {
      question: "Comment est calculée la prime d'assurance multirisque ?",
      answer:
        "Le calcul de la prime d'assurance multirisque professionnelle prend en compte de nombreux facteurs : la nature de votre activité et ses risques spécifiques, la surface et la construction de vos locaux, la valeur de vos équipements et stocks, votre chiffre d'affaires, votre historique de sinistralité, les mesures de prévention et de protection mises en place, et les garanties choisies. Chez XCR Courtier, nous négocions auprès de nos nombreux partenaires assureurs pour vous obtenir le meilleur rapport qualité/prix en fonction de votre profil de risque.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Multirisque Professionnelle | Assurance Commerces & Entreprises | XCR
          Courtier
        </title>
        <meta
          name="description"
          content="Assurance multirisque professionnelle pour commerces, entreprises et marchandises transportées. Protection complète de vos locaux, équipements et responsabilités. Devis gratuit."
        />
        <meta
          name="keywords"
          content="multirisque professionnelle, assurance commerce, assurance entreprise, assurance marchandises transportées, multirisque commerçant, assurance local professionnel"
        />
        <link
          rel="canonical"
          href="https://xcr-courtier.fr/multirisque-professionnelle"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Multirisque Professionnelle | Assurance Commerces & Entreprises"
        />
        <meta
          property="og:description"
          content="Protection complète pour votre activité professionnelle. Devis gratuit et personnalisé."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://xcr-courtier.fr/multirisque-professionnelle"
        />
        <meta
          property="og:image"
          content="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
        />

        {/* Schema.org Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Assurance Multirisque Professionnelle',
            description:
              'Protection complète pour commerces, entreprises et marchandises transportées',
            provider: {
              '@type': 'Organization',
              name: 'XCR Courtier',
            },
            serviceType: 'Assurance Professionnelle',
            areaServed: 'France',
            audience: {
              '@type': 'BusinessAudience',
              audienceType: 'Professionnels et entreprises',
            },
          })}
        </script>

        {/* Schema.org FAQ */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center py-24">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
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
                Multirisque Professionnelle
                <span className="text-secondary-400 block mt-2">
                  Protection Complète de Votre Activité
                </span>
              </h1>

              <p className="text-xl text-gray-200 mb-8">
                Protégez votre entreprise contre tous les risques avec notre
                assurance multirisque professionnelle. Solution complète pour
                vos locaux, équipements et responsabilités.
              </p>

              <div className="space-y-4 mb-8">
                {advantages.slice(0, 3).map((advantage, index) => (
                  <div
                    key={index}
                    className="flex items-center text-secondary-300"
                  >
                    <CheckCircle className="h-6 w-6 mr-2 flex-shrink-0" />
                    <span className="text-lg">{advantage}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="accent" size="lg" href="#devis-multirisque">
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
              id="devis-multirisque"
              className="bg-white rounded-2xl shadow-2xl p-8"
            >
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-800 mb-2">
                  Devis multirisque gratuit
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
                  <h3 className="text-2xl font-semibold text-green-600 mb-2">
                    Demande envoyée !
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Votre demande de devis multirisque a été envoyée avec
                    succès.
                  </p>
                  <p className="text-sm text-gray-500">
                    Un conseiller expert vous contactera sous 24h maximum pour
                    analyser vos besoins et vous proposer une solution sur
                    mesure.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex gap-4 mb-4">
                    <button
                      type="button"
                      className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                        activeTab === 'commerce'
                          ? 'bg-primary-800 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() => {
                        setActiveTab('commerce');
                        setFormData({ ...formData, typeLocal: 'commerce' });
                      }}
                    >
                      Commerce
                    </button>
                    <button
                      type="button"
                      className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                        activeTab === 'entreprise'
                          ? 'bg-primary-800 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() => {
                        setActiveTab('entreprise');
                        setFormData({ ...formData, typeLocal: 'entreprise' });
                      }}
                    >
                      Entreprise
                    </button>
                    <button
                      type="button"
                      className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                        activeTab === 'marchandises'
                          ? 'bg-primary-800 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() => {
                        setActiveTab('marchandises');
                        setFormData({ ...formData, typeLocal: 'marchandises' });
                      }}
                    >
                      Marchandises
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
                      {sectorsData[activeTab as keyof typeof sectorsData].map(
                        (sector) => (
                          <option key={sector.id} value={sector.id}>
                            {sector.name}
                          </option>
                        )
                      )}
                    </FormField>

                    <FormField
                      label={
                        activeTab === 'marchandises'
                          ? 'Valeur des marchandises'
                          : 'Surface des locaux'
                      }
                      name="surface"
                      type="select"
                      value={formData.surface}
                      onChange={handleChange}
                      required
                      error={errors.surface}
                    >
                      <option value="">Sélectionnez</option>
                      {activeTab === 'marchandises' ? (
                        <>
                          <option value="moins-50k">Moins de 50 000 €</option>
                          <option value="50k-100k">50 000 € - 100 000 €</option>
                          <option value="100k-250k">
                            100 000 € - 250 000 €
                          </option>
                          <option value="250k-500k">
                            250 000 € - 500 000 €
                          </option>
                          <option value="500k-1M">
                            500 000 € - 1 000 000 €
                          </option>
                          <option value="plus-1M">Plus de 1 000 000 €</option>
                        </>
                      ) : (
                        <>
                          <option value="moins-50">Moins de 50 m²</option>
                          <option value="50-100">50 - 100 m²</option>
                          <option value="100-250">100 - 250 m²</option>
                          <option value="250-500">250 - 500 m²</option>
                          <option value="500-1000">500 - 1000 m²</option>
                          <option value="plus-1000">Plus de 1000 m²</option>
                        </>
                      )}
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
                      'Obtenir mon devis multirisque gratuit'
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
            title="Multirisque adaptée à votre activité"
            subtitle="Découvrez nos solutions spécifiques pour chaque type d'activité professionnelle"
          />

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                activeTab === 'commerce'
                  ? 'bg-primary-800 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab('commerce')}
            >
              Commerces & Magasins
            </button>
            <button
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                activeTab === 'entreprise'
                  ? 'bg-primary-800 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab('entreprise')}
            >
              Entreprises & Bureaux
            </button>
            <button
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                activeTab === 'marchandises'
                  ? 'bg-primary-800 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab('marchandises')}
            >
              Marchandises Transportées
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {activeTab === 'commerce' && (
                <>
                  <h3 className="text-2xl font-bold text-primary-800 mb-6">
                    Multirisque Commerce & Magasin
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Protégez votre commerce contre tous les risques avec notre
                    assurance multirisque professionnelle. Que vous soyez
                    commerçant, restaurateur ou prestataire de services, notre
                    solution couvre l'ensemble de vos besoins : locaux,
                    équipements, marchandises et responsabilités.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                    <p className="text-blue-700">
                      <strong>Bon à savoir :</strong> Notre multirisque commerce
                      inclut une garantie perte d'exploitation qui vous
                      indemnise en cas d'interruption d'activité suite à un
                      sinistre, vous permettant de maintenir votre chiffre
                      d'affaires pendant la période de fermeture.
                    </p>
                  </div>
                </>
              )}

              {activeTab === 'entreprise' && (
                <>
                  <h3 className="text-2xl font-bold text-primary-800 mb-6">
                    Multirisque Entreprise & Bureaux
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Notre assurance multirisque entreprise offre une protection
                    complète pour vos locaux professionnels, équipements,
                    matériels informatiques et responsabilités. Adaptée aux
                    bureaux, aux entreprises industrielles ou artisanales, elle
                    vous permet d'exercer votre activité en toute sérénité.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                    <p className="text-blue-700">
                      <strong>Bon à savoir :</strong> Notre garantie bris de
                      machine couvre les dommages accidentels à vos équipements
                      professionnels, y compris les pannes électriques et
                      électroniques, vous évitant des coûts de réparation ou de
                      remplacement imprévus.
                    </p>
                  </div>
                </>
              )}

              {activeTab === 'marchandises' && (
                <>
                  <h3 className="text-2xl font-bold text-primary-800 mb-6">
                    Assurance Marchandises Transportées
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Protégez vos marchandises pendant leur transport avec notre
                    assurance dédiée. Que vous soyez expéditeur, destinataire ou
                    transporteur, notre solution couvre les dommages, pertes ou
                    vols de marchandises pendant leur acheminement, quel que
                    soit le mode de transport utilisé.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                    <p className="text-blue-700">
                      <strong>Bon à savoir :</strong> Notre assurance
                      marchandises transportées peut être souscrite pour des
                      transports ponctuels (police au voyage) ou pour l'ensemble
                      de vos expéditions sur une période donnée (police
                      d'abonnement), vous offrant une flexibilité adaptée à vos
                      besoins.
                    </p>
                  </div>
                </>
              )}

              <h4 className="text-xl font-semibold text-primary-800 mb-4">
                Garanties incluses :
              </h4>
              <div className="space-y-3 mb-8">
                {guaranteesByCategory[
                  activeTab as keyof typeof guaranteesByCategory
                ].map((guarantee, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{guarantee}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button variant="primary" href="#devis-multirisque">
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
                <h3 className="text-xl font-bold text-primary-800 mb-6">
                  Principaux risques couverts
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <Flame className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-700 mb-1">
                        Incendie & Explosion
                      </h4>
                      <p className="text-gray-600">
                        Protection contre les dommages causés par un incendie,
                        une explosion ou la foudre, incluant les frais de
                        déblais et de relogement.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <Droplets className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-700 mb-1">
                        Dégâts des eaux
                      </h4>
                      <p className="text-gray-600">
                        Couverture des dommages causés par des fuites,
                        infiltrations ou inondations, y compris la recherche de
                        fuite et les dommages aux tiers.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <Package className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-700 mb-1">
                        Vol & Vandalisme
                      </h4>
                      <p className="text-gray-600">
                        Protection contre le vol, les tentatives de vol et les
                        actes de vandalisme, incluant le remplacement des
                        serrures et la réparation des dommages.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <AlertTriangle className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-700 mb-1">
                        Perte d'exploitation
                      </h4>
                      <p className="text-gray-600">
                        Indemnisation de votre perte de chiffre d'affaires et
                        des frais supplémentaires engagés suite à un sinistre,
                        vous permettant de maintenir votre activité.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-gray-700 mb-4">
                    Pour une analyse complète des risques spécifiques à votre
                    activité :
                  </p>
                  <Button variant="primary" href="tel:+33180855781" fullWidth>
                    <Phone className="w-5 h-5 mr-2" />
                    Parler à un expert risques professionnels
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
            title="Pourquoi choisir notre assurance multirisque ?"
            subtitle="Des garanties complètes et adaptées à votre activité professionnelle"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Shield className="h-8 w-8 text-primary-600" />}
              title="Protection Complète"
              description="Couverture globale de vos locaux, équipements, stocks et responsabilités dans un contrat unique."
            />
            <FeatureCard
              icon={<Building2 className="h-8 w-8 text-primary-600" />}
              title="Solutions Sectorielles"
              description="Garanties spécifiquement adaptées à votre secteur d'activité et à ses risques particuliers."
            />
            <FeatureCard
              icon={<Award className="h-8 w-8 text-primary-600" />}
              title="Tarifs Négociés"
              description="Grâce à notre réseau de plus de 30 assureurs partenaires, nous vous garantissons les meilleurs tarifs du marché."
            />
            <FeatureCard
              icon={<Clock className="h-8 w-8 text-primary-600" />}
              title="Gestion Rapide des Sinistres"
              description="Prise en charge prioritaire et indemnisation accélérée pour minimiser l'impact sur votre activité."
            />
            <FeatureCard
              icon={<Users className="h-8 w-8 text-primary-600" />}
              title="Accompagnement Dédié"
              description="Un conseiller expert de votre secteur d'activité vous accompagne dans le choix de vos garanties."
            />
            <FeatureCard
              icon={<Briefcase className="h-8 w-8 text-primary-600" />}
              title="Contrat Évolutif"
              description="Votre contrat s'adapte à l'évolution de votre entreprise : nouveaux locaux, équipements, activités..."
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
              .filter(
                (testimonial) =>
                  testimonial.category === activeTab || activeTab === 'all'
              )
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
                      <h4 className="font-semibold text-primary-800">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.company}
                      </p>
                    </div>
                    <div className="ml-auto flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                        />
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
            subtitle="Trouvez rapidement des réponses à vos questions sur la multirisque professionnelle"
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
                      <svg
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Protégez votre activité professionnelle dès maintenant
              </h2>
              <p className="text-xl text-gray-200 mb-8">
                Ne prenez pas de risques inutiles. Obtenez votre devis
                multirisque gratuit en 2 minutes et sécurisez votre entreprise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="accent" size="lg" href="#devis-multirisque">
                  Obtenir mon devis multirisque
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

export default MultirisqueProfessionnellePage;
