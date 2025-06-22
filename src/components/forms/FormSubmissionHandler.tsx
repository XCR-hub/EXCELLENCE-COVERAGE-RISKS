import React, { FormEvent, useState } from 'react';
import { useEmailService } from '../../utils/emailService';

interface FormSubmissionHandlerProps {
  formType: string;
  children: React.ReactNode;
  onSuccess?: () => void;
  onError?: (error: Error) => void;
  emailConfig?: {
    recipient?: string;
    subject?: string;
    from?: string; // Cette option sera ignorée, on utilisera toujours noreply@xcr.fr
    replyTo?: string;
    priority?: 'high' | 'normal' | 'low';
  };
}

/**
 * Composant pour gérer la soumission des formulaires avec envoi d'email
 * Encapsule un formulaire et gère l'envoi des données par email
 */
const FormSubmissionHandler: React.FC<FormSubmissionHandlerProps> = ({
  formType,
  children,
  onSuccess,
  onError,
  emailConfig
}) => {
  const { sendFormData } = useEmailService();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
    
    try {
      // Forcer l'utilisation de noreply@xcr.fr comme adresse d'expédition
      const configWithCorrectSender = {
        ...emailConfig,
        from: 'noreply@xcr.fr'
      };
      
      const success = await sendFormData(event, formType, configWithCorrectSender);
      
      if (success) {
        if (onSuccess) {
          onSuccess();
        }
      } else {
        throw new Error('Échec de l\'envoi du formulaire');
      }
    } catch (error) {
      console.error('Erreur lors de la soumission du formulaire:', error);
      
      if (onError) {
        onError(error as Error);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Cloner l'enfant (qui doit être un formulaire) et lui ajouter le gestionnaire de soumission
  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child) && child.type === 'form') {
      return React.cloneElement(child, {
        onSubmit: handleSubmit,
        'data-submitting': isSubmitting
      });
    }
    return child;
  });

  return <>{childrenWithProps}</>;
};

export default FormSubmissionHandler;