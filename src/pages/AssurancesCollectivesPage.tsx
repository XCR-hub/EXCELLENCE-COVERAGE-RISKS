import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Shield,
  CheckCircle,
  Users,
  Heart,
  Clock,
  Award,
  Phone,
  FileText,
  Building2,
  Briefcase,
  Calculator,
  TrendingUp,
  Star,
  Mail,
  User,
} from 'lucide-react';
import Button from '../components/common/Button';
import { SectionHeading, SubSectionHeading } from '../components/ui/Typography';
import FormField from '../components/ui/FormField';
import OfficialLinksSection from '../components/common/OfficialLinksSection';
import { Card, FeatureCard } from '../components/ui/Card';

const AssurancesCollectivesPage = () => {
  // État du formulaire
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    entreprise: '',
    secteur: '',
    effectif: '',
    message: '',
    consent: false,
    typeAssurance: 'sante',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('sante');

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
    if (!formData.effectif) newErrors.effectif = "L'effectif est requis";
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
          event_category: 'Assurances Collectives',
          event_label: formData.typeAssurance,
          value: 1,
        });
      }

      if (typeof fbq !== 'undefined') {
        fbq('track', 'Lead', {
          content_category: 'Assurances Collectives',
          content_name: `Lead ${formData.typeAssurance}`,
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
          effectif: '',
          message: '',
          consent: false,
          typeAssurance: 'sante',
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
    { id: 'services', name: 'Services aux entreprises' },
    { id: 'batiment', name: 'BTP & Construction' },
    { id: 'sante', name: 'Santé & Action sociale' },
    { id: 'transport', name: 'Transport & Logistique' },
    { id: 'hotellerie', name: 'Hôtellerie & Restauration' },
    { id: 'informatique', name: 'Informatique & Télécoms' },
    { id: 'autre', name: 'Autre secteur' },
  ];

  // Avantages des assurances collectives
  const advantages = {
    common: [
      'Fidélisation et motivation des salariés',
      "Avantages fiscaux et sociaux pour l'entreprise",
      'Attractivité pour le recrutement',
      'Couverture sur mesure adaptée à votre secteur',
      'Gestion simplifiée des contrats',
      'Accompagnement dédié par un expert',
    ],
    sante: [
      'Remboursements optimisés des frais médicaux',
      "Prise en charge des dépassements d'honoraires",
      'Couverture optique, dentaire et audiologie',
      'Médecine douce et prévention',
      'Téléconsultation incluse',
      "Services d'assistance et prévention",
    ],
    prevoyance: [
      "Protection en cas d'arrêt de travail",
      'Garantie invalidité adaptée',
      'Capital décès personnalisable',
      'Rente éducation pour les enfants',
      'Maintien de salaire optimisé',
      "Assistance psychologique et aide au retour à l'emploi",
    ],
    retraite: [
      "Constitution d'un complément de revenus",
      'Optimisation fiscale des versements',
      'Sortie en rente ou en capital',
      'Gestion pilotée ou libre des placements',
      'Portabilité des droits en cas de départ',
      'Accompagnement à la préparation de la retraite',
    ],
  };

  // Caractéristiques des solutions
  const features = [
    {
      icon: <Users className="h-8 w-8 text-primary-600" />,
      title: 'Solutions sur mesure',
      description:
        "Contrats adaptés à votre secteur d'activité, à la taille de votre entreprise et au profil de vos salariés.",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary-600" />,
      title: 'Conformité légale',
      description:
        'Respect des obligations légales et conventionnelles avec une veille réglementaire permanente.',
    },
    {
      icon: <Calculator className="h-8 w-8 text-primary-600" />,
      title: 'Optimisation fiscale',
      description:
        "Maximisation des avantages fiscaux et sociaux pour l'entreprise et les salariés.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary-600" />,
      title: 'Pilotage des contrats',
      description:
        "Tableaux de bord et reporting réguliers pour suivre l'évolution de vos contrats.",
    },
  ];

  // Témoignages clients
  const testimonials = [
    {
      name: 'Sophie Moreau',
      position: 'DRH',
      company: 'Industrie Moreau',
      text: 'Grâce à XCR Courtier, nous avons mis en place une complémentaire santé qui répond parfaitement aux besoins de nos 120 salariés, avec un excellent rapport garanties/cotisations. Leur accompagnement dans la mise en place a été exemplaire.',
      rating: 5,
    },
    {
      name: 'Thomas Durand',
      position: 'Gérant',
      company: 'Durand & Associés',
      text: 'La mise en place du PER Entreprise a été un vrai plus pour fidéliser nos collaborateurs clés. XCR nous a guidés dans toutes les étapes avec professionnalisme et expertise.',
      rating: 5,
    },
    {
      name: 'Marie Lambert',
      position: 'Responsable RH',
      company: 'Tech Solutions',
      text: "Notre contrat de prévoyance a été entièrement repensé par XCR, ce qui nous a permis d'améliorer significativement les garanties tout en maîtrisant notre budget. Un vrai partenariat gagnant-gagnant !",
      rating: 5,
    },
  ];

  // FAQ
  const faqItems = [
    {
      question:
        'Quelles sont les obligations légales en matière de protection sociale collective ?',
      answer:
        "Depuis le 1er janvier 2016, toutes les entreprises, quelle que soit leur taille, doivent proposer une complémentaire santé collective à l'ensemble de leurs salariés, avec une participation employeur d'au moins 50%. Pour la prévoyance, les obligations dépendent de la convention collective applicable à votre entreprise. Concernant la retraite supplémentaire, il n'existe pas d'obligation légale, mais elle constitue un avantage social important pour les salariés.",
    },
    {
      question: 'Comment choisir entre contrat standard et sur mesure ?',
      answer:
        "Le choix dépend principalement de la taille de votre entreprise, de votre budget et des spécificités de votre secteur d'activité. Pour les TPE/PME de moins de 20 salariés, les contrats standards sont souvent suffisants et plus économiques. Pour les entreprises plus grandes ou avec des besoins spécifiques (métiers à risque, convention collective exigeante), un contrat sur mesure sera plus adapté. Nos experts vous accompagnent dans cette analyse pour déterminer la solution optimale.",
    },
    {
      question:
        'Quels sont les avantages fiscaux et sociaux des assurances collectives ?',
      answer:
        "Les cotisations patronales aux régimes de prévoyance et de santé sont exonérées de charges sociales dans certaines limites (6% du PASS et 1,5% de la rémunération brute, dans la limite de 12% du PASS). Elles sont également déductibles du bénéfice imposable de l'entreprise. Pour les salariés, les cotisations patronales ne sont pas considérées comme un avantage en nature imposable, dans les mêmes limites. Pour la retraite supplémentaire, les versements de l'entreprise sont exonérés de cotisations sociales dans la limite de 8% de la rémunération annuelle brute (plafonnée à 8 PASS).",
    },
    {
      question:
        'Comment mettre en place une assurance collective dans mon entreprise ?',
      answer:
        "La mise en place se fait généralement par l'un des trois moyens suivants : par décision unilatérale de l'employeur (DUE), par référendum auprès des salariés, ou par accord collectif. Le choix de la méthode dépend de la taille de votre entreprise, de la présence ou non de représentants du personnel, et de votre culture d'entreprise. Nos experts vous accompagnent dans toutes les étapes : analyse des besoins, rédaction des documents juridiques, information des salariés, et mise en place opérationnelle du contrat.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Assurances Collectives Entreprise | Santé, Prévoyance, Retraite | XCR
          Courtier
        </title>
        <meta
          name="description"
          content="Solutions d'assurances collectives pour entreprises : complémentaire santé, prévoyance, retraite supplémentaire. Optimisation fiscale et sociale, accompagnement personnalisé. Devis gratuit."
        />
        <meta
          name="keywords"
          content="assurance collective, mutuelle entreprise, prévoyance collective, retraite supplémentaire, PER entreprise, complémentaire santé, avantages sociaux"
        />
        <link
          rel="canonical"
          href="https://xcr-courtier.fr/assurances-collectives"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Assurances Collectives Entreprise | Santé, Prévoyance, Retraite"
        />
        <meta
          property="og:description"
          content="Solutions d'assurances collectives optimisées pour votre entreprise. Devis gratuit et accompagnement personnalisé."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://xcr-courtier.fr/assurances-collectives"
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
            name: 'Assurances Collectives Entreprise',
            description:
              "Solutions d'assurances collectives pour entreprises : santé, prévoyance, retraite",
            provider: {
              '@type': 'Organization',
              name: 'XCR Courtier',
            },
            serviceType: 'Assurance Collective',
            areaServed: 'France',
            audience: {
              '@type': 'BusinessAudience',
              audienceType: 'Entreprises et organisations',
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
                Assurances Collectives Entreprise
                <span className="text-secondary-400 block mt-2">
                  Santé, Prévoyance, Retraite
                </span>
              </h1>

              <p className="text-xl text-gray-200 mb-8">
                Optimisez la protection sociale de vos collaborateurs avec nos
                solutions d'assurances collectives sur mesure. Bénéficiez
                d'avantages fiscaux et sociaux tout en fidélisant vos talents.
              </p>

              <div className="space-y-4 mb-8">
                {advantages.common.slice(0, 3).map((advantage, index) => (
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
                <Button variant="accent" size="lg" href="#devis-collectif">
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
              id="devis-collectif"
              className="bg-white rounded-2xl shadow-2xl p-8"
            >
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-800 mb-2">
                  Devis assurance collective gratuit
                </h2>
                <p className="text-gray-600">
                  Recevez une offre personnalisée pour votre entreprise
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
                    Votre demande de devis a été envoyée avec succès.
                  </p>
                  <p className="text-sm text-gray-500">
                    Un conseiller expert en assurances collectives vous
                    contactera sous 24h maximum pour analyser vos besoins et
                    vous proposer une solution sur mesure.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex gap-4 mb-4">
                    <button
                      type="button"
                      className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                        activeTab === 'sante'
                          ? 'bg-primary-800 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() => {
                        setActiveTab('sante');
                        setFormData({ ...formData, typeAssurance: 'sante' });
                      }}
                    >
                      Santé
                    </button>
                    <button
                      type="button"
                      className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                        activeTab === 'prevoyance'
                          ? 'bg-primary-800 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() => {
                        setActiveTab('prevoyance');
                        setFormData({
                          ...formData,
                          typeAssurance: 'prevoyance',
                        });
                      }}
                    >
                      Prévoyance
                    </button>
                    <button
                      type="button"
                      className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                        activeTab === 'retraite'
                          ? 'bg-primary-800 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() => {
                        setActiveTab('retraite');
                        setFormData({ ...formData, typeAssurance: 'retraite' });
                      }}
                    >
                      Retraite
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
                      {sectorsData.map((sector) => (
                        <option key={sector.id} value={sector.id}>
                          {sector.name}
                        </option>
                      ))}
                    </FormField>

                    <FormField
                      label="Effectif"
                      name="effectif"
                      type="select"
                      value={formData.effectif}
                      onChange={handleChange}
                      required
                      error={errors.effectif}
                    >
                      <option value="">Sélectionnez votre effectif</option>
                      <option value="1-9">1 à 9 salariés</option>
                      <option value="10-49">10 à 49 salariés</option>
                      <option value="50-249">50 à 249 salariés</option>
                      <option value="250-999">250 à 999 salariés</option>
                      <option value="1000+">1000 salariés et plus</option>
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
                      'Obtenir mon devis personnalisé'
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
            title="Nos solutions d'assurances collectives"
            subtitle="Des garanties adaptées aux besoins de votre entreprise et de vos collaborateurs"
          />

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                activeTab === 'sante'
                  ? 'bg-primary-800 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab('sante')}
            >
              Complémentaire Santé
            </button>
            <button
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                activeTab === 'prevoyance'
                  ? 'bg-primary-800 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab('prevoyance')}
            >
              Prévoyance Collective
            </button>
            <button
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                activeTab === 'retraite'
                  ? 'bg-primary-800 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab('retraite')}
            >
              Retraite Supplémentaire
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {activeTab === 'sante' && (
                <>
                  <h3 className="text-2xl font-bold text-primary-800 mb-6">
                    Complémentaire Santé Collective
                  </h3>
                  <p className="text-gray-700 mb-6">
                    La complémentaire santé collective permet à vos salariés de
                    bénéficier d'une couverture santé de qualité à des tarifs
                    avantageux. Obligatoire depuis 2016, elle constitue un
                    élément essentiel de votre politique sociale et un avantage
                    concurrentiel pour attirer et fidéliser les talents.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                    <p className="text-blue-700">
                      <strong>Bon à savoir :</strong> La participation de
                      l'employeur doit être d'au moins 50% de la cotisation.
                      Cette participation est exonérée de charges sociales dans
                      certaines limites et déductible du bénéfice imposable.
                    </p>
                  </div>
                </>
              )}

              {activeTab === 'prevoyance' && (
                <>
                  <h3 className="text-2xl font-bold text-primary-800 mb-6">
                    Prévoyance Collective
                  </h3>
                  <p className="text-gray-700 mb-6">
                    La prévoyance collective protège vos salariés et leur
                    famille contre les aléas de la vie : incapacité de travail,
                    invalidité, décès. Elle complète les prestations limitées de
                    la Sécurité sociale et permet de maintenir le niveau de vie
                    des salariés et de leurs proches en cas de coup dur.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                    <p className="text-blue-700">
                      <strong>Bon à savoir :</strong> De nombreuses conventions
                      collectives imposent la mise en place d'un régime de
                      prévoyance avec des garanties minimales. Vérifiez les
                      obligations spécifiques à votre secteur d'activité.
                    </p>
                  </div>
                </>
              )}

              {activeTab === 'retraite' && (
                <>
                  <h3 className="text-2xl font-bold text-primary-800 mb-6">
                    Retraite Supplémentaire
                  </h3>
                  <p className="text-gray-700 mb-6">
                    La retraite supplémentaire permet à vos collaborateurs de se
                    constituer une épargne pour compléter leur future pension.
                    Avec le Plan d'Épargne Retraite (PER) Entreprise, vous
                    offrez à vos salariés un dispositif d'épargne avantageux
                    tout en bénéficiant d'avantages fiscaux et sociaux
                    significatifs.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                    <p className="text-blue-700">
                      <strong>Bon à savoir :</strong> Le PER Entreprise remplace
                      désormais les anciens dispositifs (PERCO, Article 83). Il
                      offre plus de souplesse et de possibilités de sortie,
                      notamment en capital.
                    </p>
                  </div>
                </>
              )}

              <h4 className="text-xl font-semibold text-primary-800 mb-4">
                Avantages clés :
              </h4>
              <div className="space-y-3 mb-8">
                {advantages[activeTab as keyof typeof advantages].map(
                  (advantage, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{advantage}</span>
                    </div>
                  )
                )}
              </div>

              <div className="mt-8">
                <Button variant="primary" href="#devis-collectif">
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
                  <Calculator className="h-6 w-6 text-primary-600 mr-2" />
                  Simulateur d'économies
                </h3>

                {activeTab === 'sante' && (
                  <div className="space-y-6">
                    <p className="text-gray-700">
                      Estimez vos économies en mettant en place une
                      complémentaire santé collective :
                    </p>

                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-primary-700 mb-2">
                        Exemple pour une entreprise de 10 salariés
                      </h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">
                            Coût annuel moyen par salarié :
                          </span>
                          <span className="font-semibold">600 €</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">
                            Participation employeur (50%) :
                          </span>
                          <span className="font-semibold">300 €</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">
                            Coût total pour l'entreprise :
                          </span>
                          <span className="font-semibold">3 000 €</span>
                        </div>
                        <div className="flex justify-between text-green-600 font-semibold border-t pt-2">
                          <span>Économies fiscales et sociales :</span>
                          <span>~ 1 200 €</span>
                        </div>
                        <div className="flex justify-between text-green-600 font-semibold">
                          <span>Coût net annuel :</span>
                          <span>~ 1 800 €</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-gray-500 italic">
                      * Simulation indicative basée sur un profil moyen. Les
                      économies réelles dépendent de nombreux facteurs
                      spécifiques à votre entreprise.
                    </p>
                  </div>
                )}

                {activeTab === 'prevoyance' && (
                  <div className="space-y-6">
                    <p className="text-gray-700">
                      Estimez vos économies en mettant en place un régime de
                      prévoyance collective :
                    </p>

                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-primary-700 mb-2">
                        Exemple pour une entreprise de 10 salariés
                      </h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">
                            Coût annuel moyen par salarié :
                          </span>
                          <span className="font-semibold">400 €</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">
                            Participation employeur (60%) :
                          </span>
                          <span className="font-semibold">240 €</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">
                            Coût total pour l'entreprise :
                          </span>
                          <span className="font-semibold">2 400 €</span>
                        </div>
                        <div className="flex justify-between text-green-600 font-semibold border-t pt-2">
                          <span>Économies fiscales et sociales :</span>
                          <span>~ 960 €</span>
                        </div>
                        <div className="flex justify-between text-green-600 font-semibold">
                          <span>Coût net annuel :</span>
                          <span>~ 1 440 €</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-gray-500 italic">
                      * Simulation indicative basée sur un profil moyen. Les
                      économies réelles dépendent de nombreux facteurs
                      spécifiques à votre entreprise.
                    </p>
                  </div>
                )}

                {activeTab === 'retraite' && (
                  <div className="space-y-6">
                    <p className="text-gray-700">
                      Estimez vos économies en mettant en place un Plan
                      d'Épargne Retraite Entreprise :
                    </p>

                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-primary-700 mb-2">
                        Exemple pour une entreprise de 10 salariés
                      </h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">
                            Versement annuel moyen par salarié :
                          </span>
                          <span className="font-semibold">1 000 €</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">
                            Coût total pour l'entreprise :
                          </span>
                          <span className="font-semibold">10 000 €</span>
                        </div>
                        <div className="flex justify-between text-green-600 font-semibold border-t pt-2">
                          <span>Économies fiscales (IS à 25%) :</span>
                          <span>~ 2 500 €</span>
                        </div>
                        <div className="flex justify-between text-green-600 font-semibold">
                          <span>Économies de charges sociales :</span>
                          <span>~ 2 000 €</span>
                        </div>
                        <div className="flex justify-between text-green-600 font-semibold">
                          <span>Coût net annuel :</span>
                          <span>~ 5 500 €</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-gray-500 italic">
                      * Simulation indicative basée sur un profil moyen. Les
                      économies réelles dépendent de nombreux facteurs
                      spécifiques à votre entreprise.
                    </p>
                  </div>
                )}

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-gray-700 mb-4">
                    Pour une simulation précise adaptée à votre situation,
                    contactez nos experts :
                  </p>
                  <Button variant="primary" href="tel:+33180855781" fullWidth>
                    <Phone className="w-5 h-5 mr-2" />
                    Obtenir une simulation personnalisée
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
            title="Notre approche des assurances collectives"
            subtitle="Un accompagnement complet pour une protection sociale optimale"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Notre méthodologie en 4 étapes"
            subtitle="Un processus éprouvé pour une mise en place sereine et efficace"
          />

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Ligne de connexion */}
              <div className="absolute left-16 top-0 bottom-0 w-1 bg-primary-100 hidden md:block"></div>

              {/* Étapes */}
              <div className="space-y-12">
                <motion.div
                  className="relative flex flex-col md:flex-row gap-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="md:w-32 flex-shrink-0 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-800 text-2xl font-bold z-10">
                      1
                    </div>
                  </div>
                  <div className="flex-grow bg-gray-50 rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-primary-800 mb-3">
                      Audit & Analyse
                    </h3>
                    <p className="text-gray-700">
                      Nous réalisons un audit complet de votre situation
                      actuelle : analyse de vos contrats existants, étude de
                      votre convention collective, identification de vos
                      obligations légales et évaluation des besoins de vos
                      salariés.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="relative flex flex-col md:flex-row gap-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="md:w-32 flex-shrink-0 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-800 text-2xl font-bold z-10">
                      2
                    </div>
                  </div>
                  <div className="flex-grow bg-gray-50 rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-primary-800 mb-3">
                      Conception & Négociation
                    </h3>
                    <p className="text-gray-700">
                      Nous concevons une solution sur mesure adaptée à vos
                      besoins et à votre budget. Grâce à notre réseau de plus de
                      30 assureurs partenaires, nous négocions pour vous les
                      meilleures conditions tarifaires et garanties.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="relative flex flex-col md:flex-row gap-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="md:w-32 flex-shrink-0 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-800 text-2xl font-bold z-10">
                      3
                    </div>
                  </div>
                  <div className="flex-grow bg-gray-50 rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-primary-800 mb-3">
                      Mise en place & Déploiement
                    </h3>
                    <p className="text-gray-700">
                      Nous vous accompagnons dans toutes les étapes de la mise
                      en place : rédaction des documents juridiques (DUE,
                      référendum, accord), organisation des réunions
                      d'information, et assistance pour l'affiliation des
                      salariés.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="relative flex flex-col md:flex-row gap-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="md:w-32 flex-shrink-0 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-800 text-2xl font-bold z-10">
                      4
                    </div>
                  </div>
                  <div className="flex-grow bg-gray-50 rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-primary-800 mb-3">
                      Suivi & Optimisation
                    </h3>
                    <p className="text-gray-700">
                      Nous assurons un suivi régulier de vos contrats : analyse
                      des résultats, ajustement des garanties si nécessaire,
                      veille réglementaire, et assistance en cas de sinistre.
                      Votre conseiller dédié reste à votre disposition pour
                      toute question.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Ce que nos clients en disent"
            subtitle="Découvrez les témoignages d'entreprises qui nous font confiance"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
                  <div className="bg-primary-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <User className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.position}, {testimonial.company}
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Questions fréquentes"
            subtitle="Trouvez rapidement des réponses à vos questions sur les assurances collectives"
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
            <h2 className="text-3xl font-bold mb-6">
              Optimisez la protection sociale de vos collaborateurs
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Contactez nos experts en assurances collectives pour une étude
              personnalisée de vos besoins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" href="#devis-collectif">
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
          </div>
        </div>
      </section>

      {/* Official Links Section */}
      <OfficialLinksSection />
    </>
  );
};

export default AssurancesCollectivesPage;
