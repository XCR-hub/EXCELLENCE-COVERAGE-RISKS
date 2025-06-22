export interface KeywordGroup {
  primary: string;
  secondary: string[];
  related: string[];
}

export const SEO_KEYWORDS: Record<string, KeywordGroup> = {
  'assurance-auto': {
    primary: 'assurance auto',
    secondary: [
      'devis assurance auto',
      'comparateur assurance voiture',
      'assurance auto pas chère'
    ],
    related: [
      'assurance tous risques',
      'assurance au tiers',
      'assurance jeune conducteur'
    ]
  },
  'assurance-decennale': {
    primary: 'assurance décennale',
    secondary: [
      'devis assurance décennale',
      'assurance décennale pas chère',
      'assurance décennale artisan'
    ],
    related: [
      'assurance décennale obligatoire',
      'prix assurance décennale',
      'garantie décennale'
    ]
  },
  'assurance-emprunteur': {
    primary: 'assurance emprunteur',
    secondary: [
      'assurance prêt immobilier',
      'délégation assurance emprunteur',
      'économies assurance emprunteur'
    ],
    related: [
      'loi Lemoine',
      'changer assurance emprunteur',
      'questionnaire médical simplifié'
    ]
  },
  'protection-juridique': {
    primary: 'protection juridique',
    secondary: [
      'assurance défense recours',
      'protection juridique entreprise',
      'assurance juridique professionnelle'
    ],
    related: [
      'frais d\'avocat',
      'litige professionnel',
      'assistance juridique'
    ]
  },
  'assurance-auto-tous-risques': {
    primary: 'assurance auto tous risques',
    secondary: [
      'devis tous risques',
      'assurance tous risques pas chère',
      'comparateur tous risques'
    ],
    related: [
      'garantie tous risques',
      'assurance véhicule neuf',
      'couverture complète auto'
    ]
  },
  'assurance-auto-au-tiers': {
    primary: 'assurance auto au tiers',
    secondary: [
      'assurance au tiers pas chère',
      'devis assurance tiers',
      'assurance responsabilité civile auto'
    ],
    related: [
      'assurance obligatoire voiture',
      'assurance minimum légale',
      'assurance véhicule ancien'
    ]
  }
};

// Fonction pour obtenir les mots-clés d'une page
export function getPageKeywords(pageId: string): string[] {
  const keywordGroup = SEO_KEYWORDS[pageId];
  if (!keywordGroup) return [];
  
  return [
    keywordGroup.primary,
    ...keywordGroup.secondary,
    ...keywordGroup.related
  ];
}

// Fonction pour générer un titre SEO
export function generateSeoTitle(pageType: string, keywords: KeywordGroup): string {
  switch (pageType) {
    case 'decennale-metier':
      return `Assurance Décennale ${keywords.primary} - Devis Gratuit en 2 Minutes | XCR Courtier`;
    case 'assurance-auto':
      return `Assurance Auto ${keywords.primary} 2025 | Devis Gratuit | XCR Courtier`;
    case 'assurance-emprunteur':
      return `Assurance Emprunteur Pas Chère | ${keywords.primary} | XCR Courtier`;
    case 'protection-juridique':
      return `${keywords.primary} Entreprise | Assurance Défense Recours | XCR Courtier`;
    default:
      return `${keywords.primary} | XCR Courtier`;
  }
}

// Fonction pour générer une description SEO
export function generateSeoDescription(pageType: string, keywords: KeywordGroup): string {
  switch (pageType) {
    case 'decennale-metier':
      return `Assurance décennale ${keywords.primary} pas chère. Devis gratuit en 2 minutes, attestation sous 24h. ${keywords.secondary[0]}. XCR expert.`;
    case 'assurance-auto':
      return `${keywords.primary} : ${keywords.secondary[0]}. ${keywords.secondary[1]}. Devis gratuit en 2 minutes avec XCR Courtier.`;
    case 'assurance-emprunteur':
      return `${keywords.primary} pas chère avec XCR Courtier. ${keywords.secondary[0]}. Économisez jusqu'à 50% sur votre assurance prêt immobilier.`;
    case 'protection-juridique':
      return `${keywords.primary} entreprise avec XCR Courtier. ${keywords.secondary[0]} pour particuliers et professionnels. Devis protection juridique gratuit 24h.`;
    default:
      return `${keywords.primary} avec XCR Courtier. ${keywords.secondary[0]}. Devis gratuit en 24h.`;
  }
}