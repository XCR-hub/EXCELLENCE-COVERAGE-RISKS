import { FormEvent } from 'react';

interface EmailConfig {
  recipient: string;
  subject: string;
  from?: string;
  replyTo?: string;
  priority?: 'high' | 'normal' | 'low';
}

interface FormMetadata {
  ip: string;
  userAgent: string;
  referrer: string;
  timestamp: string;
  formType: string;
  formId: string;
  pageUrl: string;
}

/**
 * Service d'envoi d'emails pour les formulaires du site
 * Gère l'envoi automatique des données de formulaire vers les destinataires configurés
 */
export class EmailService {
  private static instance: EmailService;
  private readonly defaultRecipient = 'contact@xcr.fr';
  private readonly defaultSender = 'noreply@xcr.fr'; // Adresse d'expédition modifiée

  private constructor() {
    // Singleton pattern
  }

  public static getInstance(): EmailService {
    if (!EmailService.instance) {
      EmailService.instance = new EmailService();
    }
    return EmailService.instance;
  }

  /**
   * Envoie les données d'un formulaire par email
   * @param formData Données du formulaire
   * @param formType Type de formulaire
   * @param config Configuration d'envoi
   * @returns Promise<boolean> Succès de l'envoi
   */
  public async sendFormData(
    formData: Record<string, any>,
    formType: string,
    config?: Partial<EmailConfig>
  ): Promise<boolean> {
    try {
      // Collecter les métadonnées
      const metadata = this.collectMetadata(formType);
      
      // Préparer la configuration d'envoi
      const emailConfig = this.prepareEmailConfig(formType, config);
      
      // Générer le contenu HTML
      const htmlContent = this.generateHtmlContent(formData, metadata);
      
      // Envoyer l'email via Netlify Functions ou service externe
      const success = await this.sendEmail(emailConfig, htmlContent);
      
      // Sauvegarder une copie dans la base de données
      if (success) {
        await this.saveToDatabase(formData, metadata, emailConfig);
      }
      
      return success;
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
      return false;
    }
  }

  /**
   * Collecte les métadonnées du formulaire
   * @param formType Type de formulaire
   * @returns FormMetadata Métadonnées du formulaire
   */
  private collectMetadata(formType: string): FormMetadata {
    return {
      ip: this.getClientIP(),
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      timestamp: new Date().toISOString(),
      formType: formType,
      formId: `form_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
      pageUrl: window.location.href
    };
  }

  /**
   * Prépare la configuration d'envoi d'email
   * @param formType Type de formulaire
   * @param config Configuration partielle
   * @returns EmailConfig Configuration complète
   */
  private prepareEmailConfig(formType: string, config?: Partial<EmailConfig>): EmailConfig {
    const now = new Date();
    const formattedDate = now.toLocaleDateString('fr-FR');
    const formattedTime = now.toLocaleTimeString('fr-FR');
    
    // Déterminer la priorité selon le type de formulaire
    let priority: 'high' | 'normal' | 'low' = 'normal';
    if (formType.includes('decennale') || formType.includes('emprunteur')) {
      priority = 'high';
    } else if (formType.includes('contact')) {
      priority = 'normal';
    }
    
    return {
      recipient: config?.recipient || this.defaultRecipient,
      subject: config?.subject || `[Formulaire Site Web] - ${this.formatFormType(formType)} - ${formattedDate} ${formattedTime}`,
      from: config?.from || this.defaultSender, // Utilisation de l'adresse d'expédition par défaut
      replyTo: config?.replyTo,
      priority: config?.priority || priority
    };
  }

  /**
   * Formate le type de formulaire pour l'affichage
   * @param formType Type de formulaire
   * @returns string Type formaté
   */
  private formatFormType(formType: string): string {
    const formTypeMap: Record<string, string> = {
      'contact': 'Contact',
      'devis-auto': 'Devis Assurance Auto',
      'devis-decennale': 'Devis Assurance Décennale',
      'devis-emprunteur': 'Devis Assurance Emprunteur',
      'devis-juridique': 'Devis Protection Juridique',
      'lead-auto': 'Lead Assurance Auto',
      'lead-decennale-macon': 'Lead Décennale Maçon',
      'lead-decennale-electricien': 'Lead Décennale Électricien',
      'lead-decennale-plombier': 'Lead Décennale Plombier'
    };
    
    return formTypeMap[formType] || `Formulaire ${formType}`;
  }

  /**
   * Génère le contenu HTML de l'email
   * @param formData Données du formulaire
   * @param metadata Métadonnées du formulaire
   * @returns string Contenu HTML
   */
  private generateHtmlContent(formData: Record<string, any>, metadata: FormMetadata): string {
    // Créer un tableau HTML avec les données du formulaire
    const formDataRows = Object.entries(formData)
      .map(([key, value]) => {
        // Formater les valeurs spéciales
        let formattedValue = value;
        if (Array.isArray(value)) {
          formattedValue = value.join(', ');
        } else if (typeof value === 'boolean') {
          formattedValue = value ? 'Oui' : 'Non';
        }
        
        // Formater les clés pour l'affichage
        const formattedKey = this.formatFieldName(key);
        
        return `
          <tr>
            <th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd; background-color: #f2f2f2;">${formattedKey}</th>
            <td style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd;">${formattedValue}</td>
          </tr>
        `;
      })
      .join('');

    // Créer un tableau HTML avec les métadonnées
    const metadataRows = `
      <tr>
        <th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd; background-color: #f2f2f2;">Adresse IP</th>
        <td style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd;">${metadata.ip}</td>
      </tr>
      <tr>
        <th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd; background-color: #f2f2f2;">Navigateur</th>
        <td style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd;">${metadata.userAgent}</td>
      </tr>
      <tr>
        <th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd; background-color: #f2f2f2;">Page source</th>
        <td style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd;">${metadata.pageUrl}</td>
      </tr>
      <tr>
        <th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd; background-color: #f2f2f2;">Référent</th>
        <td style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd;">${metadata.referrer || 'Direct'}</td>
      </tr>
      <tr>
        <th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd; background-color: #f2f2f2;">Date et heure</th>
        <td style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd;">${new Date(metadata.timestamp).toLocaleString('fr-FR')}</td>
      </tr>
    `;

    // Générer le HTML complet
    return `
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Données du formulaire - ${metadata.formType}</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 20px;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #fff;
            border-radius: 8px;
            overflow: hidden;
          }
          .header {
            background-color: #1e40af;
            color: white;
            padding: 20px;
            text-align: center;
          }
          .content {
            padding: 20px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
          }
          h2 {
            color: #1e40af;
            border-bottom: 1px solid #ddd;
            padding-bottom: 10px;
            margin-top: 30px;
          }
          .footer {
            background-color: #f8f9fa;
            padding: 15px;
            text-align: center;
            font-size: 12px;
            color: #6c757d;
            border-top: 1px solid #ddd;
          }
          @media only screen and (max-width: 600px) {
            body {
              padding: 10px;
            }
            table {
              font-size: 14px;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Formulaire ${this.formatFormType(metadata.formType)}</h1>
            <p>Soumis le ${new Date(metadata.timestamp).toLocaleString('fr-FR')}</p>
          </div>
          <div class="content">
            <h2>Informations soumises</h2>
            <table>
              ${formDataRows}
            </table>
            
            <h2>Métadonnées</h2>
            <table>
              ${metadataRows}
            </table>
          </div>
          <div class="footer">
            <p>Ce message a été généré automatiquement. Merci de ne pas y répondre directement.</p>
            <p>© ${new Date().getFullYear()} XCR Courtier - Tous droits réservés</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  /**
   * Formate le nom d'un champ pour l'affichage
   * @param fieldName Nom du champ
   * @returns string Nom formaté
   */
  private formatFieldName(fieldName: string): string {
    const fieldNameMap: Record<string, string> = {
      'firstName': 'Prénom',
      'lastName': 'Nom',
      'email': 'Email',
      'phone': 'Téléphone',
      'message': 'Message',
      'subject': 'Objet',
      'service': 'Service',
      'consent': 'Consentement RGPD',
      'siret': 'SIRET',
      'raisonSociale': 'Raison sociale',
      'chiffreAffaires': 'Chiffre d\'affaires',
      'effectif': 'Effectif',
      'activitesPrincipales': 'Activités principales',
      'experienceMetier': 'Expérience métier',
      'vehicleMake': 'Marque du véhicule',
      'vehicleModel': 'Modèle du véhicule',
      'vehicleYear': 'Année du véhicule',
      'coverageDetails': 'Détails de couverture',
      'newsletterConsent': 'Inscription newsletter'
    };
    
    return fieldNameMap[fieldName] || this.capitalizeFirstLetter(fieldName.replace(/([A-Z])/g, ' $1'));
  }

  /**
   * Met en majuscule la première lettre d'une chaîne
   * @param str Chaîne à formater
   * @returns string Chaîne formatée
   */
  private capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  /**
   * Récupère l'adresse IP du client
   * @returns string Adresse IP
   */
  private getClientIP(): string {
    // Dans un environnement réel, cette information serait récupérée côté serveur
    return '127.0.0.1';
  }

  /**
   * Envoie l'email via Netlify Functions ou service externe
   * @param config Configuration d'envoi
   * @param htmlContent Contenu HTML
   * @returns Promise<boolean> Succès de l'envoi
   */
  private async sendEmail(config: EmailConfig, htmlContent: string): Promise<boolean> {
    try {
      // Préparer les en-têtes pour l'API Netlify Functions
      const headers = {
        'Content-Type': 'application/json'
      };
      
      // Préparer les données pour l'API
      const emailData = {
        to: config.recipient,
        from: config.from || this.defaultSender, // Utilisation de l'adresse d'expédition par défaut si non spécifiée
        subject: config.subject,
        html: htmlContent,
        replyTo: config.replyTo || config.recipient,
        priority: config.priority,
        headers: {
          'X-Priority': config.priority === 'high' ? '1' : config.priority === 'low' ? '5' : '3',
          'X-MSMail-Priority': config.priority === 'high' ? 'High' : config.priority === 'low' ? 'Low' : 'Normal',
          'Importance': config.priority === 'high' ? 'High' : config.priority === 'low' ? 'Low' : 'Normal',
          'X-Mailer': 'XCR-Courtier-Website',
          'Disposition-Notification-To': config.recipient // Demande d'accusé de réception
        }
      };
      
      // Appel à l'API Netlify Functions
      const response = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers,
        body: JSON.stringify(emailData)
      });
      
      if (!response.ok) {
        throw new Error(`Erreur lors de l'envoi de l'email: ${response.statusText}`);
      }
      
      const result = await response.json();
      return result.success === true;
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
      return false;
    }
  }

  /**
   * Sauvegarde les données du formulaire dans la base de données
   * @param formData Données du formulaire
   * @param metadata Métadonnées du formulaire
   * @param emailConfig Configuration d'envoi
   * @returns Promise<void>
   */
  private async saveToDatabase(
    formData: Record<string, any>, 
    metadata: FormMetadata, 
    emailConfig: EmailConfig
  ): Promise<void> {
    try {
      // Préparer les données pour la sauvegarde
      const dataToSave = {
        formData,
        metadata,
        emailConfig: {
          recipient: emailConfig.recipient,
          subject: emailConfig.subject,
          from: emailConfig.from || this.defaultSender, // Utilisation de l'adresse d'expédition par défaut si non spécifiée
          priority: emailConfig.priority
        },
        status: 'sent',
        createdAt: new Date().toISOString()
      };
      
      // Appel à l'API Netlify Functions pour la sauvegarde
      const response = await fetch('/.netlify/functions/save-form-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSave)
      });
      
      if (!response.ok) {
        throw new Error(`Erreur lors de la sauvegarde des données: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Erreur lors de la sauvegarde des données:', error);
    }
  }
}

/**
 * Hook pour utiliser le service d'email dans les composants React
 * @returns Object avec la méthode sendFormData
 */
export const useEmailService = () => {
  const emailService = EmailService.getInstance();
  
  /**
   * Envoie les données d'un formulaire par email
   * @param event Événement de soumission du formulaire
   * @param formType Type de formulaire
   * @param config Configuration d'envoi
   * @returns Promise<boolean> Succès de l'envoi
   */
  const sendFormData = async (
    event: FormEvent<HTMLFormElement>,
    formType: string,
    config?: Partial<EmailConfig>
  ): Promise<boolean> => {
    event.preventDefault();
    
    // Récupérer les données du formulaire
    const formData = new FormData(event.currentTarget);
    const formDataObj: Record<string, any> = {};
    
    // Convertir FormData en objet
    formData.forEach((value, key) => {
      // Gérer les cases à cocher
      if (event.currentTarget.elements[key]?.type === 'checkbox') {
        formDataObj[key] = value === 'on';
      } else {
        formDataObj[key] = value;
      }
    });
    
    // Envoyer les données
    return await emailService.sendFormData(formDataObj, formType, config);
  };
  
  return { sendFormData };
};