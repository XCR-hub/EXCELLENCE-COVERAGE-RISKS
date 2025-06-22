import { getPageKeywords, generateSeoTitle, generateSeoDescription } from '../data/seoKeywords';

/**
 * Génère un attribut alt optimisé pour le SEO
 * @param src URL de l'image
 * @param alt Texte alternatif fourni
 * @param context Contexte de l'image (optionnel)
 * @returns Texte alternatif optimisé
 */
export function generateSeoAlt(src: string, alt: string, context?: string): string {
  if (alt && alt.length > 5) {
    return alt;
  }
  
  // Extraire le nom de fichier de l'URL
  const fileName = src.split('/').pop()?.split('.')[0] || '';
  
  // Formater le nom de fichier
  let formattedName = fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  // Ajouter le contexte si fourni
  if (context) {
    formattedName = `${formattedName} - ${context}`;
  }
  
  return formattedName;
}

/**
 * Génère un slug SEO à partir d'une chaîne
 * @param text Texte à transformer en slug
 * @returns Slug SEO
 */
export function generateSeoSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Supprimer les accents
    .replace(/[^\w\s-]/g, '') // Supprimer les caractères spéciaux
    .replace(/\s+/g, '-') // Remplacer les espaces par des tirets
    .replace(/-+/g, '-') // Éviter les tirets multiples
    .trim();
}

/**
 * Génère un schéma JSON-LD pour une page
 * @param type Type de schéma
 * @param data Données du schéma
 * @returns Schéma JSON-LD
 */
export function generateJsonLdSchema(type: string, data: Record<string, any>): Record<string, any> {
  const baseSchema = {
    "@context": "https://schema.org",
  };
  
  switch (type) {
    case 'service':
      return {
        ...baseSchema,
        "@type": "Service",
        "name": data.name,
        "description": data.description,
        "provider": {
          "@type": "Organization",
          "name": "XCR Courtier"
        },
        "serviceType": data.serviceType,
        "areaServed": "France",
        ...(data.audience && {
          "audience": {
            "@type": "BusinessAudience",
            "audienceType": data.audience
          }
        })
      };
    
    case 'faq':
      return {
        ...baseSchema,
        "@type": "FAQPage",
        "mainEntity": data.questions.map((q: { question: string; answer: string }) => ({
          "@type": "Question",
          "name": q.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": q.answer
          }
        }))
      };
    
    case 'article':
      return {
        ...baseSchema,
        "@type": "Article",
        "headline": data.title,
        "description": data.description,
        "image": data.image,
        "author": {
          "@type": "Person",
          "name": data.author
        },
        "publisher": {
          "@type": "Organization",
          "name": "XCR Courtier",
          "logo": {
            "@type": "ImageObject",
            "url": "https://xcr-courtier.fr/logo.png"
          }
        },
        "datePublished": data.datePublished,
        "dateModified": data.dateModified || data.datePublished
      };
    
    default:
      return baseSchema;
  }
}

/**
 * Génère des métadonnées SEO pour une page
 * @param pageId Identifiant de la page
 * @param pageType Type de page
 * @returns Métadonnées SEO
 */
export function generateSeoMetadata(pageId: string, pageType: string) {
  const keywords = getPageKeywords(pageId);
  const keywordGroup = {
    primary: keywords[0] || pageId.replace(/-/g, ' '),
    secondary: keywords.slice(1, 4),
    related: keywords.slice(4)
  };
  
  return {
    title: generateSeoTitle(pageType, keywordGroup),
    description: generateSeoDescription(pageType, keywordGroup),
    keywords: keywords
  };
}