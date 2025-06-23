import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Send, User, Mail, Phone, Car, Calendar, AlertCircle } from 'lucide-react';
import FormSubmissionHandler from './FormSubmissionHandler';

interface AutoInsuranceQuoteFormProps {
  formType: 'tous-risques' | 'tiers' | 'resilies' | 'kilometre' | 'jeune' | 'temporaire' | 'collection' | 'professionnelle' | 'flottes' | 'malus';
  className?: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleYear: string;
  drivingExperience: string;
  consent: boolean;
}

const AutoInsuranceQuoteForm = ({ formType, className = '' }: AutoInsuranceQuoteFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '',
    drivingExperience: '',
    consent: false
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formConfig = {
    'tous-risques': {
      title: 'Devis Assurance Tous Risques',
      subtitle: 'Protection maximale pour votre véhicule',
    },
    'tiers': {
      title: 'Devis Assurance au Tiers',
      subtitle: 'Formule économique à partir de 15€/mois',
    },
    'resilies': {
      title: 'Devis Conducteurs Résiliés',
      subtitle: 'Solutions après résiliation',
    },
    'kilometre': {
      title: 'Devis Assurance au Kilomètre',
      subtitle: 'Payez selon votre utilisation réelle',
    },
    'jeune': {
      title: 'Devis Jeune Conducteur',
      subtitle: 'Tarifs adaptés aux permis récents',
    },
    'temporaire': {
      title: 'Devis Assurance Temporaire',
      subtitle: 'Couverture de 1 jour à 3 mois',
    },
    'collection': {
      title: 'Devis Véhicules de Collection',
      subtitle: 'Protection spécifique pour véhicules anciens',
    },
    'professionnelle': {
      title: 'Devis Auto Professionnelle',
      subtitle: 'Solutions pour usage professionnel',
    },
    'flottes': {
      title: 'Devis Flottes Automobiles',
      subtitle: 'Gestion simplifiée pour parcs de véhicules',
    },
    'malus': {
      title: 'Devis Assurance Malus',
      subtitle: 'Solutions après sinistres',
    }
  };

  const config = formConfig[formType];

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneFR = (phone: string): boolean => {
    const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
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

    if (!formData.vehicleMake.trim()) {
      newErrors.vehicleMake = 'La marque du véhicule est requise';
    }

    if (!formData.consent) {
      newErrors.consent = 'Vous devez accepter les conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Track events
      if (typeof gtag !== 'undefined') {
        gtag('event', 'lead_submit', {
          type: formType,
          form_id: `auto-insurance-${formType}`,
        });
      }

      if (typeof fbq !== 'undefined') {
        fbq('track', 'Lead', {
          content_category: 'auto',
          content_name: config.title,
        });
      }
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          vehicleMake: '',
          vehicleModel: '',
          vehicleYear: '',
          drivingExperience: '',
          consent: false,
        });
      }, 5000);
    } catch (error) {
      console.error('Erreur:', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFormSuccess = () => {
    // Track events
    if (typeof gtag !== 'undefined') {
      gtag('event', 'lead_submit', {
        type: formType,
        form_id: `auto-insurance-${formType}`,
      });
    }

    if (typeof fbq !== 'undefined') {
      fbq('track', 'Lead', {
        content_category: 'auto',
        content_name: config.title,
      });
    }
    
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        vehicleMake: '',
        vehicleModel: '',
        vehicleYear: '',
        drivingExperience: '',
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
            Merci pour votre demande de devis {formType === 'tous-risques' ? 'tous risques' : formType}. 
            Un de nos conseillers vous contactera dans les plus brefs délais.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-700">
              <strong>Prochaines étapes :</strong><br />
              • Appel de notre expert sous 2h<br />
              • Analyse personnalisée de vos besoins<br />
              • Proposition de plusieurs devis comparatifs<br />
              • Accompagnement pour votre souscription
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className={`bg-white rounded-lg shadow-lg p-8 ${className}`}>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-primary-800 mb-2">
          {config.title}
        </h2>
        <p className="text-gray-600">
          {config.subtitle}
        </p>
      </div>

      <FormSubmissionHandler 
        formType={`devis-auto-${formType}`}
        onSuccess={handleFormSuccess}
        onError={handleFormError}
        emailConfig={{
          recipient: 'contact@xcr.fr',
          subject: `[Devis Auto] - ${config.title}`,
          priority: 'high'
        }}
      >
        <form className="space-y-4">
          {/* Nom et Prénom */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
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
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
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
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
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
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
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

          {/* Véhicule */}
          <div>
            <label htmlFor="vehicleMake" className="block text-sm font-medium text-gray-700 mb-1">
              Marque du véhicule *
            </label>
            <div className="relative">
              <input
                type="text"
                id="vehicleMake"
                name="vehicleMake"
                value={formData.vehicleMake}
                onChange={handleChange}
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors ${
                  errors.vehicleMake ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Ex: Renault, Peugeot, Citroën..."
              />
              <Car className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
            {errors.vehicleMake && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.vehicleMake}
              </p>
            )}
          </div>

          {/* Modèle et Année */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="vehicleModel" className="block text-sm font-medium text-gray-700 mb-1">
                Modèle
              </label>
              <input
                type="text"
                id="vehicleModel"
                name="vehicleModel"
                value={formData.vehicleModel}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Ex: Clio, 308, C3..."
              />
            </div>

            <div>
              <label htmlFor="vehicleYear" className="block text-sm font-medium text-gray-700 mb-1">
                Année
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="vehicleYear"
                  name="vehicleYear"
                  value={formData.vehicleYear}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Ex: 2018"
                />
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Expérience de conduite */}
          {(formType === 'jeune' || formType === 'resilies' || formType === 'malus') && (
            <div>
              <label htmlFor="drivingExperience" className="block text-sm font-medium text-gray-700 mb-1">
                Expérience de conduite
              </label>
              <select
                id="drivingExperience"
                name="drivingExperience"
                value={formData.drivingExperience}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">Sélectionnez</option>
                <option value="moins-1an">Moins d'1 an</option>
                <option value="1-2ans">1 à 2 ans</option>
                <option value="2-3ans">2 à 3 ans</option>
                <option value="plus-3ans">Plus de 3 ans</option>
              </select>
            </div>
          )}

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
            Devis gratuit et sans engagement. Réponse sous 2h maximum.
          </p>
        </form>
      </FormSubmissionHandler>
    </div>
  );
};

export default AutoInsuranceQuoteForm;