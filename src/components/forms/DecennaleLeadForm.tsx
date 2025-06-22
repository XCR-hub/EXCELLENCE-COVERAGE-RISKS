import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Send, User, Mail, Phone, Building2, Calendar, DollarSign, Users, FileText, AlertCircle } from 'lucide-react';
import FormSubmissionHandler from './FormSubmissionHandler';

interface DecennaleLeadFormProps {
  metier: string;
  className?: string;
}

interface FormData {
  // Informations entreprise
  raisonSociale: string;
  siret: string;
  dateCreation: string;
  chiffreAffaires: string;
  effectif: string;
  
  // Activités
  activitesPrincipales: string[];
  activitesSecondaires: string[];
  experienceMetier: string;
  
  // Antécédents
  assureurActuel: string;
  antecedentsAssurance: string;
  sinistralite36Mois: string;
  
  // Contact
  civilite: string;
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  
  // Consentement
  consent: boolean;
  newsletterConsent: boolean;
}

const DecennaleLeadForm = ({ metier, className = '' }: DecennaleLeadFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    raisonSociale: '',
    siret: '',
    dateCreation: '',
    chiffreAffaires: '',
    effectif: '',
    activitesPrincipales: [],
    activitesSecondaires: [],
    experienceMetier: '',
    assureurActuel: '',
    antecedentsAssurance: '',
    sinistralite36Mois: '',
    civilite: '',
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    consent: false,
    newsletterConsent: false,
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  // Activités par métier
  const activitesParMetier = {
    macon: [
      'Maçonnerie traditionnelle',
      'Béton armé',
      'Construction pierre',
      'Rénovation façades',
      'Fondations',
      'Murs porteurs',
      'Dalles et planchers',
      'Cheminées'
    ],
    electricien: [
      'Installation électrique',
      'Courants forts',
      'Courants faibles',
      'Domotique',
      'Éclairage',
      'Tableaux électriques',
      'Réseaux informatiques',
      'Systèmes de sécurité'
    ],
    plombier: [
      'Plomberie sanitaire',
      'Chauffage central',
      'Climatisation',
      'VMC',
      'Canalisations',
      'Robinetterie',
      'Chauffe-eau',
      'Pompes à chaleur'
    ]
  };

  const activites = activitesParMetier[metier as keyof typeof activitesParMetier] || [];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleActiviteChange = (activite: string, type: 'principales' | 'secondaires') => {
    const field = type === 'principales' ? 'activitesPrincipales' : 'activitesSecondaires';
    
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(activite)
        ? prev[field].filter(a => a !== activite)
        : [...prev[field], activite]
    }));
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<FormData> = {};

    if (step === 1) {
      if (!formData.raisonSociale.trim()) newErrors.raisonSociale = 'Raison sociale requise';
      if (!formData.siret.trim()) newErrors.siret = 'SIRET requis';
      if (!formData.dateCreation) newErrors.dateCreation = 'Date de création requise';
      if (!formData.chiffreAffaires) newErrors.chiffreAffaires = 'Chiffre d\'affaires requis';
      if (!formData.effectif) newErrors.effectif = 'Effectif requis';
    }

    if (step === 2) {
      if (formData.activitesPrincipales.length === 0) {
        newErrors.activitesPrincipales = 'Sélectionnez au moins une activité principale';
      }
      if (!formData.experienceMetier) newErrors.experienceMetier = 'Expérience requise';
    }

    if (step === 3) {
      if (!formData.civilite) newErrors.civilite = 'Civilité requise';
      if (!formData.prenom.trim()) newErrors.prenom = 'Prénom requis';
      if (!formData.nom.trim()) newErrors.nom = 'Nom requis';
      if (!formData.email.trim()) newErrors.email = 'Email requis';
      if (!formData.telephone.trim()) newErrors.telephone = 'Téléphone requis';
      if (!formData.consent) newErrors.consent = 'Consentement requis';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleFormSuccess = () => {
    // Déclencher l'événement de conversion
    const event = new CustomEvent('decennaleLeadSubmitted', {
      detail: {
        metier: metier,
        value: estimateLeadValue(),
        id: `lead_${Date.now()}`
      }
    });
    document.dispatchEvent(event);
    
    setIsSubmitted(true);
    
    // Auto-relance email (simulé)
    setTimeout(() => {
      console.log('Email de relance programmé pour dans 24h');
    }, 1000);
  };

  const handleFormError = (error: Error) => {
    console.error('Erreur:', error);
    alert('Une erreur est survenue. Veuillez réessayer.');
  };

  // Estimation de la valeur du lead pour le tracking
  const estimateLeadValue = (): number => {
    // Valeurs de base par métier
    const baseValues: Record<string, number> = {
      macon: 2000,
      electricien: 800,
      plombier: 900,
      default: 1000
    };
    
    // Récupérer la valeur de base pour ce métier
    const baseValue = baseValues[metier] || baseValues.default;
    
    // Facteurs multiplicateurs
    let multiplier = 1.0;
    
    // Ajuster selon le chiffre d'affaires
    if (formData.chiffreAffaires === '0-50000') multiplier *= 0.8;
    else if (formData.chiffreAffaires === '50000-100000') multiplier *= 1.0;
    else if (formData.chiffreAffaires === '100000-200000') multiplier *= 1.2;
    else if (formData.chiffreAffaires === '200000-500000') multiplier *= 1.5;
    else if (formData.chiffreAffaires === '500000+') multiplier *= 2.0;
    
    // Ajuster selon l'expérience
    if (formData.experienceMetier === 'moins-1an') multiplier *= 1.2; // Plus cher pour les débutants
    else if (formData.experienceMetier === '1-3ans') multiplier *= 1.1;
    else if (formData.experienceMetier === '3-5ans') multiplier *= 1.0;
    else if (formData.experienceMetier === '5-10ans') multiplier *= 0.9;
    else if (formData.experienceMetier === 'plus-10ans') multiplier *= 0.8;
    
    // Calculer la valeur estimée
    return Math.round(baseValue * multiplier);
  };

  if (isSubmitted) {
    return (
      <motion.div
        className={`bg-white rounded-lg shadow-lg p-8 ${className}`}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold text-green-600 mb-4">Demande envoyée !</h3>
          <p className="text-gray-600 mb-4">
            Merci pour votre demande de devis décennale {metier}. 
            Un expert vous contactera dans les 2 heures.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-700">
              <strong>Prochaines étapes :</strong><br />
              • Appel de notre expert dans les 2h<br />
              • Analyse personnalisée de vos besoins<br />
              • Devis sur-mesure sous 24h<br />
              • Attestation décennale si souscription
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className={`bg-white rounded-lg shadow-lg p-8 ${className}`} id="formulaire">
      {/* Hidden form for Netlify */}
      <form name={`lead-decennale-${metier}`} netlify="true" hidden>
        <input type="text" name="raisonSociale" />
        <input type="text" name="siret" />
        <input type="date" name="dateCreation" />
        <input type="text" name="chiffreAffaires" />
        <input type="text" name="effectif" />
        <input type="text" name="activitesPrincipales" />
        <input type="text" name="activitesSecondaires" />
        <input type="text" name="experienceMetier" />
        <input type="text" name="assureurActuel" />
        <input type="text" name="antecedentsAssurance" />
        <input type="text" name="sinistralite36Mois" />
        <input type="text" name="civilite" />
        <input type="text" name="prenom" />
        <input type="text" name="nom" />
        <input type="email" name="email" />
        <input type="tel" name="telephone" />
        <input type="text" name="metier" />
        <input type="text" name="timestamp" />
      </form>

      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-primary-800 mb-2">
          Devis Décennale {metier.charAt(0).toUpperCase() + metier.slice(1)}
        </h2>
        <p className="text-gray-600">Obtenez votre devis personnalisé en 3 étapes</p>
        
        {/* Progress bar */}
        <div className="flex justify-center mt-4">
          <div className="flex space-x-2">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step <= currentStep
                    ? 'bg-primary-800 text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {step}
              </div>
            ))}
          </div>
        </div>
      </div>

      <FormSubmissionHandler 
        formType={`lead-decennale-${metier}`}
        onSuccess={handleFormSuccess}
        onError={handleFormError}
        emailConfig={{
          recipient: 'decennale@xcr.fr',
          subject: `[Lead Décennale] - ${metier.charAt(0).toUpperCase() + metier.slice(1)}`,
          priority: 'high'
        }}
      >
        <form className="space-y-6">
          {/* Étape 1: Informations entreprise */}
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Building2 className="w-5 h-5 mr-2 text-primary-600" />
                Informations entreprise
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Raison sociale / Nom de l'entreprise *
                  </label>
                  <input
                    type="text"
                    name="raisonSociale"
                    value={formData.raisonSociale}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      errors.raisonSociale ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Nom de votre entreprise"
                  />
                  {errors.raisonSociale && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.raisonSociale}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      SIRET *
                    </label>
                    <input
                      type="text"
                      name="siret"
                      value={formData.siret}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                        errors.siret ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="12345678901234"
                      maxLength={14}
                    />
                    {errors.siret && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.siret}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date de création *
                    </label>
                    <input
                      type="date"
                      name="dateCreation"
                      value={formData.dateCreation}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                        errors.dateCreation ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.dateCreation && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.dateCreation}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Chiffre d'affaires prévisionnel *
                    </label>
                    <select
                      name="chiffreAffaires"
                      value={formData.chiffreAffaires}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                        errors.chiffreAffaires ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Sélectionnez</option>
                      <option value="0-50000">0 - 50 000 €</option>
                      <option value="50000-100000">50 000 - 100 000 €</option>
                      <option value="100000-200000">100 000 - 200 000 €</option>
                      <option value="200000-500000">200 000 - 500 000 €</option>
                      <option value="500000+">Plus de 500 000 €</option>
                    </select>
                    {errors.chiffreAffaires && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.chiffreAffaires}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Effectif *
                    </label>
                    <select
                      name="effectif"
                      value={formData.effectif}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                        errors.effectif ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Sélectionnez</option>
                      <option value="1">1 personne (auto-entrepreneur)</option>
                      <option value="2-5">2 à 5 salariés</option>
                      <option value="6-10">6 à 10 salariés</option>
                      <option value="11-20">11 à 20 salariés</option>
                      <option value="20+">Plus de 20 salariés</option>
                    </select>
                    {errors.effectif && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.effectif}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Étape 2: Activités */}
          {currentStep === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-primary-600" />
                Activités exercées
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Activités principales * (sélectionnez toutes les activités que vous exercez)
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {activites.map((activite) => (
                      <label key={activite} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded">
                        <input
                          type="checkbox"
                          checked={formData.activitesPrincipales.includes(activite)}
                          onChange={() => handleActiviteChange(activite, 'principales')}
                          className="form-checkbox h-4 w-4 text-primary-600 rounded border-gray-300 focus:ring-primary-500"
                        />
                        <span className="text-sm text-gray-700">{activite}</span>
                      </label>
                    ))}
                  </div>
                  {errors.activitesPrincipales && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.activitesPrincipales}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expérience dans le métier *
                  </label>
                  <select
                    name="experienceMetier"
                    value={formData.experienceMetier}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      errors.experienceMetier ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Sélectionnez</option>
                    <option value="moins-1an">Moins d'1 an</option>
                    <option value="1-3ans">1 à 3 ans</option>
                    <option value="3-5ans">3 à 5 ans</option>
                    <option value="5-10ans">5 à 10 ans</option>
                    <option value="plus-10ans">Plus de 10 ans</option>
                  </select>
                  {errors.experienceMetier && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.experienceMetier}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Assureur actuel (si applicable)
                    </label>
                    <input
                      type="text"
                      name="assureurActuel"
                      value={formData.assureurActuel}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="Nom de votre assureur actuel"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sinistralité 36 derniers mois
                    </label>
                    <select
                      name="sinistralite36Mois"
                      value={formData.sinistralite36Mois}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="">Sélectionnez</option>
                      <option value="aucun">Aucun sinistre</option>
                      <option value="1">1 sinistre</option>
                      <option value="2">2 sinistres</option>
                      <option value="3+">3 sinistres ou plus</option>
                    </select>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Étape 3: Contact */}
          {currentStep === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <User className="w-5 h-5 mr-2 text-primary-600" />
                Vos coordonnées
              </h3>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Civilité *
                    </label>
                    <select
                      name="civilite"
                      value={formData.civilite}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                        errors.civilite ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Sélectionnez</option>
                      <option value="M">M.</option>
                      <option value="Mme">Mme</option>
                    </select>
                    {errors.civilite && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.civilite}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                        errors.prenom ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Votre prénom"
                    />
                    {errors.prenom && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.prenom}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                        errors.nom ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Votre nom"
                    />
                    {errors.nom && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.nom}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="votre@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                        errors.telephone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="06 12 34 56 78"
                    />
                    {errors.telephone && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.telephone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      className={`mt-1 h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500 ${
                        errors.consent ? 'border-red-500' : ''
                      }`}
                    />
                    <span className="text-sm text-gray-700">
                      J'accepte d'être contacté par XCR Courtier concernant ma demande de devis décennale {metier}. 
                      Conformément au RGPD, vous pouvez exercer vos droits d'accès, de rectification et de suppression. *
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.consent}
                    </p>
                  )}

                  <label className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="newsletterConsent"
                      checked={formData.newsletterConsent}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <span className="text-sm text-gray-700">
                      J'accepte de recevoir des conseils et actualités assurance par email (optionnel)
                    </span>
                  </label>
                </div>
              </div>
            </motion.div>
          )}

          {/* Champs cachés pour le tracking */}
          <input type="hidden" name="metier" value={metier} />
          <input type="hidden" name="timestamp" value={new Date().toISOString()} />

          {/* Navigation buttons */}
          <div className="flex justify-between pt-6">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Précédent
              </button>
            )}
            
            {currentStep < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                className="ml-auto px-6 py-3 bg-primary-800 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                Suivant
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="ml-auto px-6 py-3 bg-accent-400 text-white rounded-lg hover:bg-accent-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Obtenir mon devis décennale
                  </>
                )}
              </button>
            )}
          </div>

          <p className="text-xs text-gray-500 text-center mt-4">
            Devis gratuit et sans engagement. Réponse sous 2h maximum.
          </p>
        </form>
      </FormSubmissionHandler>
    </div>
  );
};

export default DecennaleLeadForm;