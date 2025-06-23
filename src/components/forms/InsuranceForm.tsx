import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Send, User, Mail, Phone, Building2, FileText, Shield, AlertCircle, Home } from 'lucide-react';
import FormSubmissionHandler from './FormSubmissionHandler';

interface InsuranceFormProps {
  type: 'auto' | 'decennale' | 'emprunteur' | 'juridique' | 'habitation';
  className?: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  siret: string;
  coverageDetails: string;
  consent: boolean;
}

const InsuranceForm = ({ type, className = '' }: InsuranceFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    siret: '',
    coverageDetails: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formConfig = {
    auto: {
      title: 'Devis Assurance Auto',
      subtitle: 'Obtenez votre devis personnalisé en 2 minutes',
      coveragePlaceholder: 'Décrivez votre véhicule et vos besoins (marque, modèle, usage...)',
      icon: <Shield className="w-6 h-6" />,
    },
    decennale: {
      title: 'Devis Assurance Décennale',
      subtitle: 'Protection obligatoire pour les professionnels du bâtiment',
      coveragePlaceholder: 'Décrivez votre activité (métier, chiffre d\'affaires, expérience...)',
      icon: <Building2 className="w-6 h-6" />,
    },
    emprunteur: {
      title: 'Devis Assurance Emprunteur',
      subtitle: 'Sécurisez votre prêt immobilier',
      coveragePlaceholder: 'Détails du prêt (montant, durée, âge, profession...)',
      icon: <FileText className="w-6 h-6" />,
    },
    juridique: {
      title: 'Devis Protection Juridique',
      subtitle: 'Défendez vos droits en toutes circonstances',
      coveragePlaceholder: 'Précisez vos besoins (particulier/professionnel, domaines de protection...)',
      icon: <Shield className="w-6 h-6" />,
    },
    habitation: {
      title: 'Devis Assurance Habitation',
      subtitle: 'Protégez efficacement votre logement',
      coveragePlaceholder: "Description du logement (surface, localisation, valeur des biens...)",
      icon: <Home className="w-6 h-6" />,
    },
  };

  const config = formConfig[type];

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneFR = (phone: string): boolean => {
    const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  const validateSIRET = (siret: string): boolean => {
    const siretRegex = /^\d{14}$/;
    return siretRegex.test(siret.replace(/\s/g, ''));
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Le prénom est requis';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Le nom est requis';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Format d\'email invalide';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Le téléphone est requis';
    } else if (!validatePhoneFR(formData.phone)) {
      newErrors.phone = 'Numéro de téléphone français invalide';
    }

    if (formData.siret && !validateSIRET(formData.siret)) {
      newErrors.siret = 'SIRET invalide (14 chiffres requis)';
    }

    if (!formData.coverageDetails.trim()) {
      newErrors.coverageDetails = 'Les détails de couverture sont requis';
    }

    if (!formData.consent) {
      newErrors.consent = 'Vous devez accepter les conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type: inputType } = e.target;
    const checked = inputType === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    setFormData(prev => ({
      ...prev,
      [name]: inputType === 'checkbox' ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const trackEvents = () => {
    // GA4 Event
    if (typeof gtag !== 'undefined') {
      gtag('event', 'lead_submit', {
        type: type,
        form_id: `lead-${type}`,
      });
    }

    // Meta Pixel Event
    if (typeof fbq !== 'undefined') {
      fbq('track', 'Lead', {
        content_category: type,
        content_name: config.title,
      });
    }
  };

  const handleFormSuccess = () => {
    // Track events
    trackEvents();
    
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        siret: '',
        coverageDetails: '',
        consent: false,
      });
    }, 5000);
  };

  const handleFormError = (error: Error) => {
    console.error('Erreur:', error);
    alert('Une erreur est survenue. Veuillez réessayer.');
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
            Merci pour votre demande de devis. Un de nos conseillers vous contactera dans les plus brefs délais.
          </p>
          <p className="text-sm text-gray-500">
            Vous devriez recevoir une réponse sous 24h.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <div className={`bg-white rounded-lg shadow-lg p-8 ${className}`}>
      {/* Hidden form for Netlify */}
      <form name={`lead-${type}`} netlify="true" hidden>
        <input type="text" name="firstName" />
        <input type="text" name="lastName" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <input type="text" name="siret" />
        <textarea name="coverageDetails"></textarea>
        <input type="text" name="type" />
      </form>

      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-primary-100 p-3 rounded-full mr-3">
            {config.icon}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary-800">{config.title}</h2>
            <p className="text-gray-600">{config.subtitle}</p>
          </div>
        </div>
      </div>

      <FormSubmissionHandler 
        formType={`devis-${type}`}
        onSuccess={handleFormSuccess}
        onError={handleFormError}
        emailConfig={{
          recipient: 'contact@xcr.fr',
          subject: `[Devis ${type.charAt(0).toUpperCase() + type.slice(1)}]`,
          priority: 'high'
        }}
      >
        <form className="space-y-6">
          {/* Nom et Prénom */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                Prénom *
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors ${
                    errors.firstName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Votre prénom"
                />
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.firstName}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                Nom *
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors ${
                    errors.lastName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Votre nom"
                />
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.lastName}
                </p>
              )}
            </div>
          </div>

          {/* Email et Téléphone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="votre@email.com"
                />
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Téléphone *
              </label>
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="06 12 34 56 78"
                />
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.phone}
                </p>
              )}
            </div>
          </div>

          {/* SIRET (optionnel) */}
          <div>
            <label htmlFor="siret" className="block text-sm font-medium text-gray-700 mb-2">
              SIRET (si professionnel)
            </label>
            <div className="relative">
              <input
                type="text"
                id="siret"
                name="siret"
                value={formData.siret}
                onChange={handleChange}
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors ${
                  errors.siret ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="12345678901234"
                maxLength={14}
              />
              <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
            {errors.siret && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.siret}
              </p>
            )}
          </div>

          {/* Détails de couverture */}
          <div>
            <label htmlFor="coverageDetails" className="block text-sm font-medium text-gray-700 mb-2">
              Détails de couverture *
            </label>
            <div className="relative">
              <textarea
                id="coverageDetails"
                name="coverageDetails"
                value={formData.coverageDetails}
                onChange={handleChange}
                rows={4}
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors resize-none ${
                  errors.coverageDetails ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder={config.coveragePlaceholder}
              />
              <FileText className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            </div>
            {errors.coverageDetails && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.coverageDetails}
              </p>
            )}
          </div>

          {/* Champ caché pour le type de formulaire */}
          <input type="hidden" name="type" value={type} />

          {/* Consentement RGPD */}
          <div>
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
                J'accepte que mes données personnelles soient utilisées pour me recontacter concernant ma demande de devis. 
                Conformément au RGPD, vous pouvez exercer vos droits d'accès, de rectification et de suppression en nous contactant. *
              </span>
            </label>
            {errors.consent && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.consent}
              </p>
            )}
          </div>

          {/* Bouton de soumission */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary-800 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                Envoi en cours...
              </>
            ) : (
              <>
                <Send className="h-5 w-5 mr-2" />
                Obtenir mon devis gratuit
              </>
            )}
          </button>

          <p className="text-xs text-gray-500 text-center">
            Devis gratuit et sans engagement. Réponse sous 24h maximum.
          </p>
        </form>
      </FormSubmissionHandler>
    </div>
  );
};

export default InsuranceForm;