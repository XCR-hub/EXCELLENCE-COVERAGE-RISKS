import React from 'react';
import {
  Home,
  Heart,
  Shield,
  Car,
  Wallet,
  FileText,
  Briefcase,
  Building2,
  Users,
  Umbrella,
} from 'lucide-react';

// Site structure definition for navigation and sitemap generation
export interface SiteSection {
  id: string;
  title: string;
  path: string;
  description?: string;
  children?: SiteSection[];
  featured?: boolean;
  icon?: string;
}

// Page info interface for navigation components
export interface SitePageInfo {
  id: string;
  title: string;
  path: string;
  description: string;
  icon: React.ReactElement;
  section: 'particuliers' | 'professionnels' | 'entreprises';
  category: 'personnes' | 'biens' | 'epargne' | 'services';
  status: 'active' | 'coming-soon';
  children?: SitePageInfo[];
}

export const siteStructure: SiteSection[] = [
  {
    id: 'particuliers',
    title: 'Particuliers',
    path: '/particuliers',
    description: "Solutions d'assurance pour les particuliers et familles",
    children: [
      {
        id: 'protection-personnes-particuliers',
        title: 'Protection des personnes',
        path: '/particuliers/protection-personnes',
        children: [
          {
            id: 'assurance-sante',
            title: 'Assurance Santé',
            path: '/particuliers/protection-personnes/assurance-sante',
            description: 'Couverture complète pour vos frais de santé',
          },
          {
            id: 'assurance-prevoyance',
            title: 'Assurance Prévoyance',
            path: '/particuliers/protection-personnes/assurance-prevoyance',
            description: "Protection financière en cas d'accident ou maladie",
          },
          {
            id: 'assurance-deces',
            title: 'Assurance Décès',
            path: '/particuliers/protection-personnes/assurance-deces',
            description: 'Protection financière pour vos proches',
          },
        ],
      },
      {
        id: 'protection-biens-particuliers',
        title: 'Protection des biens',
        path: '/particuliers/protection-biens',
        children: [
          {
            id: 'assurance-auto',
            title: 'Assurance Auto',
            path: '/assurance-auto',
            description: 'Protection complète pour votre véhicule',
            featured: true,
          },
          {
            id: 'assurance-habitation',
            title: 'Assurance Habitation',
            path: '/particuliers/protection-biens/assurance-habitation',
            description: 'Protection de votre logement et de vos biens',
          },
          {
            id: 'assurance-moto',
            title: 'Assurance Moto',
            path: '/particuliers/protection-biens/assurance-moto',
            description: 'Couverture adaptée pour votre deux-roues',
          },
        ],
      },
      {
        id: 'epargne-placement-particuliers',
        title: 'Épargne et placement',
        path: '/particuliers/epargne-placement',
        children: [
          {
            id: 'assurance-vie',
            title: 'Assurance Vie',
            path: '/particuliers/epargne-placement/assurance-vie',
            description: "Solution d'épargne flexible et avantageuse",
          },
          {
            id: 'plan-epargne-retraite',
            title: 'Plan Épargne Retraite',
            path: '/particuliers/epargne-placement/plan-epargne-retraite',
            description: 'Préparez sereinement votre retraite',
          },
        ],
      },
      {
        id: 'services-particuliers',
        title: 'Services spécifiques',
        path: '/particuliers/services',
        children: [
          {
            id: 'assurance-emprunteur',
            title: 'Assurance Emprunteur',
            path: '/assurance-emprunteur',
            description: 'Protection de votre prêt immobilier',
            featured: true,
          },
          {
            id: 'protection-juridique-particuliers',
            title: 'Protection Juridique',
            path: '/protection-juridique',
            description: 'Défense de vos droits et intérêts',
            featured: true,
          },
        ],
      },
    ],
  },
  {
    id: 'professionnels',
    title: 'Professionnels',
    path: '/professionnels',
    description:
      "Solutions d'assurance pour les indépendants et petites entreprises",
    children: [
      {
        id: 'protection-personnes-professionnels',
        title: 'Protection des personnes',
        path: '/professionnels/protection-personnes',
        children: [
          {
            id: 'prevoyance-pro',
            title: 'Prévoyance Pro',
            path: '/professionnels/protection-personnes/prevoyance-pro',
            description: "Protection en cas d'arrêt de travail ou invalidité",
          },
          {
            id: 'mutuelle-sante-pro',
            title: 'Mutuelle Santé Pro',
            path: '/professionnels/protection-personnes/mutuelle-sante-pro',
            description: 'Couverture santé adaptée aux professionnels',
          },
        ],
      },
      {
        id: 'protection-biens-professionnels',
        title: 'Protection des biens',
        path: '/professionnels/protection-biens',
        children: [
          {
            id: 'rc-pro',
            title: 'RC Professionnelle',
            path: '/rc-pro',
            description: 'Protection contre les risques liés à votre activité',
            featured: true,
          },
          {
            id: 'assurance-decennale',
            title: 'Assurance Décennale',
            path: '/assurance-decennale',
            description:
              'Garantie obligatoire pour les professionnels du bâtiment',
            featured: true,
          },
          {
            id: 'multirisque-professionnelle',
            title: 'Multirisque Pro',
            path: '/multirisque-professionnelle',
            description: 'Protection complète de vos locaux et équipements',
            featured: true,
          },
        ],
      },
      {
        id: 'epargne-placement-professionnels',
        title: 'Épargne et placement',
        path: '/professionnels/epargne-placement',
        children: [
          {
            id: 'retraite-madelin',
            title: 'Retraite Madelin',
            path: '/professionnels/epargne-placement/retraite-madelin',
            description: 'Solution de retraite dédiée aux indépendants',
          },
          {
            id: 'epargne-salariale-pro',
            title: 'Épargne Salariale',
            path: '/professionnels/epargne-placement/epargne-salariale',
            description: "Dispositifs d'épargne pour vos salariés",
          },
        ],
      },
      {
        id: 'services-professionnels',
        title: 'Services spécifiques',
        path: '/professionnels/services',
        children: [
          {
            id: 'protection-juridique-pro',
            title: 'Protection Juridique Pro',
            path: '/professionnels/services/protection-juridique-pro',
            description: 'Défense de vos intérêts professionnels',
          },
          {
            id: 'assurance-cyber-risques',
            title: 'Cyber-risques',
            path: '/professionnels/services/cyber-risques',
            description: 'Protection contre les risques numériques',
          },
        ],
      },
    ],
  },
  {
    id: 'entreprises',
    title: 'Entreprises',
    path: '/entreprises',
    description:
      "Solutions d'assurance pour les moyennes et grandes entreprises",
    children: [
      {
        id: 'protection-personnes-entreprises',
        title: 'Protection des personnes',
        path: '/entreprises/protection-personnes',
        children: [
          {
            id: 'assurance-collective',
            title: 'Assurance Collective',
            path: '/assurances-collectives',
            description: 'Santé, prévoyance et retraite pour vos salariés',
            featured: true,
          },
          {
            id: 'assurance-homme-cle',
            title: 'Assurance Homme Clé',
            path: '/entreprises/protection-personnes/assurance-homme-cle',
            description:
              "Protection en cas de perte d'une personne essentielle",
          },
        ],
      },
      {
        id: 'protection-biens-entreprises',
        title: 'Protection des biens',
        path: '/entreprises/protection-biens',
        children: [
          {
            id: 'assurance-flottes',
            title: 'Assurance Flottes',
            path: '/assurance-auto-flottes',
            description: "Gestion centralisée de vos véhicules d'entreprise",
            featured: true,
          },
          {
            id: 'assurance-marchandises-transportees',
            title: 'Marchandises Transportées',
            path: '/assurance-marchandises-transportees',
            description: 'Protection de vos biens pendant le transport',
            featured: true,
          },
          {
            id: 'multirisque-entreprise',
            title: 'Multirisque Entreprise',
            path: '/entreprises/protection-biens/multirisque-entreprise',
            description: 'Protection complète de vos locaux et équipements',
          },
        ],
      },
      {
        id: 'epargne-placement-entreprises',
        title: 'Épargne et placement',
        path: '/entreprises/epargne-placement',
        children: [
          {
            id: 'epargne-salariale-entreprise',
            title: 'Épargne Salariale',
            path: '/entreprises/epargne-placement/epargne-salariale',
            description: "PEE, PERCO et autres dispositifs d'épargne",
          },
          {
            id: 'retraite-entreprise',
            title: 'Retraite Entreprise',
            path: '/entreprises/epargne-placement/retraite-entreprise',
            description: 'Solutions de retraite supplémentaire',
          },
        ],
      },
      {
        id: 'services-entreprises',
        title: 'Services spécifiques',
        path: '/entreprises/services',
        children: [
          {
            id: 'responsabilite-dirigeants',
            title: 'Responsabilité des Dirigeants',
            path: '/entreprises/services/responsabilite-dirigeants',
            description: 'Protection personnelle des dirigeants',
          },
          {
            id: 'risques-environnementaux',
            title: 'Risques Environnementaux',
            path: '/entreprises/services/risques-environnementaux',
            description: 'Couverture des risques de pollution',
          },
        ],
      },
    ],
  },
];

// Navigation pages data structure
const navigationPages: SitePageInfo[] = [
  // PARTICULIERS
  // Protection des personnes
  {
    id: 'assurance-sante-particuliers',
    title: 'Assurance Santé',
    path: '/particuliers/sante',
    description: 'Couverture complète pour vos frais de santé',
    icon: <Heart className="h-5 w-5" />,
    section: 'particuliers',
    category: 'personnes',
    status: 'coming-soon',
  },
  {
    id: 'assurance-prevoyance-particuliers',
    title: 'Assurance Prévoyance',
    path: '/particuliers/prevoyance',
    description: "Protection financière en cas d'accident ou maladie",
    icon: <Shield className="h-5 w-5" />,
    section: 'particuliers',
    category: 'personnes',
    status: 'coming-soon',
  },
  {
    id: 'assurance-emprunteur',
    title: 'Assurance Emprunteur',
    path: '/assurance-emprunteur',
    description: 'Protection de votre prêt immobilier',
    icon: <Home className="h-5 w-5" />,
    section: 'particuliers',
    category: 'personnes',
    status: 'active',
  },

  // Protection des biens
  {
    id: 'assurance-auto',
    title: 'Assurance Auto',
    path: '/assurance-auto',
    description: 'Protection complète pour votre véhicule',
    icon: <Car className="h-5 w-5" />,
    section: 'particuliers',
    category: 'biens',
    status: 'active',
  },
  {
    id: 'assurance-habitation-particuliers',
    title: 'Assurance Habitation',
    path: '/particuliers/protection-biens/assurance-habitation',
    description: 'Protection de votre logement et de vos biens',
    icon: <Home className="h-5 w-5" />,
    section: 'particuliers',
    category: 'biens',
    status: 'coming-soon',
  },

  // Épargne et placement
  {
    id: 'assurance-vie-particuliers',
    title: 'Assurance Vie',
    path: '/particuliers/epargne-placement/assurance-vie',
    description: "Solution d'épargne flexible et avantageuse",
    icon: <Wallet className="h-5 w-5" />,
    section: 'particuliers',
    category: 'epargne',
    status: 'coming-soon',
  },
  {
    id: 'epargne-retraite-particuliers',
    title: 'Épargne Retraite',
    path: '/particuliers/epargne-retraite',
    description: 'Préparez sereinement votre retraite',
    icon: <Wallet className="h-5 w-5" />,
    section: 'particuliers',
    category: 'epargne',
    status: 'coming-soon',
  },

  // Services spécifiques
  {
    id: 'protection-juridique-particuliers',
    title: 'Protection Juridique',
    path: '/protection-juridique',
    description: 'Défense de vos droits et intérêts',
    icon: <FileText className="h-5 w-5" />,
    section: 'particuliers',
    category: 'services',
    status: 'active',
  },

  // PROFESSIONNELS
  // Protection des personnes
  {
    id: 'prevoyance-tns',
    title: 'Prévoyance TNS',
    path: '/professionnels/prevoyance-tns',
    description: "Protection en cas d'arrêt de travail ou invalidité",
    icon: <Shield className="h-5 w-5" />,
    section: 'professionnels',
    category: 'personnes',
    status: 'coming-soon',
  },
  {
    id: 'sante-tns',
    title: 'Santé TNS',
    path: '/professionnels/sante-tns',
    description: 'Couverture santé adaptée aux professionnels',
    icon: <Heart className="h-5 w-5" />,
    section: 'professionnels',
    category: 'personnes',
    status: 'coming-soon',
  },

  // Protection des biens
  {
    id: 'rc-pro',
    title: 'RC Professionnelle',
    path: '/rc-pro',
    description: 'Protection contre les risques liés à votre activité',
    icon: <Shield className="h-5 w-5" />,
    section: 'professionnels',
    category: 'biens',
    status: 'active',
  },
  {
    id: 'multirisque-pro',
    title: 'Multirisque Pro',
    path: '/multirisque-professionnelle',
    description: 'Protection complète de vos locaux et équipements',
    icon: <Umbrella className="h-5 w-5" />,
    section: 'professionnels',
    category: 'biens',
    status: 'active',
  },
  {
    id: 'assurance-decennale',
    title: 'Assurance Décennale',
    path: '/assurance-decennale',
    description: 'Garantie obligatoire pour les professionnels du bâtiment',
    icon: <Building2 className="h-5 w-5" />,
    section: 'professionnels',
    category: 'biens',
    status: 'active',
  },

  // Épargne et placement
  {
    id: 'retraite-madelin',
    title: 'Retraite Madelin',
    path: '/professionnels/retraite-madelin',
    description: 'Solution de retraite dédiée aux indépendants',
    icon: <Wallet className="h-5 w-5" />,
    section: 'professionnels',
    category: 'epargne',
    status: 'coming-soon',
  },
  {
    id: 'per-individuel',
    title: 'PER Individuel',
    path: '/professionnels/per-individuel',
    description: 'Plan d\'Épargne Retraite avec avantages fiscaux',
    icon: <Wallet className="h-5 w-5" />,
    section: 'professionnels',
    category: 'epargne',
    status: 'coming-soon',
  },

  // Services spécifiques
  {
    id: 'protection-juridique-pro',
    title: 'Protection Juridique Pro',
    path: '/protection-juridique',
    description: 'Défense de vos intérêts professionnels',
    icon: <FileText className="h-5 w-5" />,
    section: 'professionnels',
    category: 'services',
    status: 'active',
  },

  // ENTREPRISES
  // Protection des personnes
  {
    id: 'assurances-collectives',
    title: 'Assurances Collectives',
    path: '/assurances-collectives',
    description: 'Santé, prévoyance et retraite pour vos salariés',
    icon: <Users className="h-5 w-5" />,
    section: 'entreprises',
    category: 'personnes',
    status: 'active',
    children: [
      {
        id: 'sante-collective',
        title: 'Santé Collective',
        path: '/assurances-collectives?tab=sante',
        description: 'Complémentaire santé pour vos salariés',
        icon: <Heart className="h-4 w-4" />,
        section: 'entreprises',
        category: 'personnes',
        status: 'active',
      },
      {
        id: 'prevoyance-collective',
        title: 'Prévoyance Collective',
        path: '/assurances-collectives?tab=prevoyance',
        description: 'Protection en cas d\'arrêt de travail ou décès',
        icon: <Shield className="h-4 w-4" />,
        section: 'entreprises',
        category: 'personnes',
        status: 'active',
      },
      {
        id: 'retraite-collective',
        title: 'Retraite Collective',
        path: '/assurances-collectives?tab=retraite',
        description: 'Solutions de retraite supplémentaire',
        icon: <Wallet className="h-4 w-4" />,
        section: 'entreprises',
        category: 'personnes',
        status: 'active',
      },
    ],
  },
  {
    id: 'assurance-homme-cle',
    title: 'Assurance Homme Clé',
    path: '/entreprises/homme-cle',
    description: "Protection en cas de perte d'une personne essentielle",
    icon: <Users className="h-5 w-5" />,
    section: 'entreprises',
    category: 'personnes',
    status: 'coming-soon',
  },

  // Protection des biens
  {
    id: 'rc-entreprise',
    title: 'RC Entreprise',
    path: '/rc-pro',
    description: 'Responsabilité civile adaptée aux entreprises',
    icon: <Shield className="h-5 w-5" />,
    section: 'entreprises',
    category: 'biens',
    status: 'active',
  },
  {
    id: 'multirisque-entreprise',
    title: 'Multirisque Entreprise',
    path: '/multirisque-professionnelle',
    description: 'Protection complète de vos locaux et équipements',
    icon: <Umbrella className="h-5 w-5" />,
    section: 'entreprises',
    category: 'biens',
    status: 'active',
  },
  {
    id: 'flotte-automobile',
    title: 'Flotte Automobile',
    path: '/entreprises/flotte-automobile',
    description: "Gestion centralisée de vos véhicules d'entreprise",
    icon: <Car className="h-5 w-5" />,
    section: 'entreprises',
    category: 'biens',
    status: 'coming-soon',
  },

  // Épargne et placement
  {
    id: 'per-entreprise',
    title: 'PER Entreprise',
    path: '/assurances-collectives?tab=retraite',
    description: 'Plan d\'Épargne Retraite pour vos salariés',
    icon: <Wallet className="h-5 w-5" />,
    section: 'entreprises',
    category: 'epargne',
    status: 'active',
  },

  // Services spécifiques
  {
    id: 'protection-juridique-entreprise',
    title: 'Protection Juridique',
    path: '/protection-juridique',
    description: 'Défense des intérêts de votre entreprise',
    icon: <FileText className="h-5 w-5" />,
    section: 'entreprises',
    category: 'services',
    status: 'active',
  },
  {
    id: 'cyber-risques',
    title: 'Cyber-risques',
    path: '/entreprises/cyber-risques',
    description: 'Protection contre les risques numériques',
    icon: <Shield className="h-5 w-5" />,
    section: 'entreprises',
    category: 'services',
    status: 'coming-soon',
  },
];

// Utility functions to work with site structure
export function findSectionById(id: string): SiteSection | undefined {
  // Recursive function to search through the site structure
  function search(sections: SiteSection[]): SiteSection | undefined {
    for (const section of sections) {
      if (section.id === id) {
        return section;
      }
      if (section.children) {
        const found = search(section.children);
        if (found) return found;
      }
    }
    return undefined;
  }

  return search(siteStructure);
}

export function getFeaturedPages(): SiteSection[] {
  // Recursive function to find all featured pages
  function findFeatured(sections: SiteSection[]): SiteSection[] {
    let featured: SiteSection[] = [];

    for (const section of sections) {
      if (section.featured) {
        featured.push(section);
      }
      if (section.children) {
        featured = [...featured, ...findFeatured(section.children)];
      }
    }

    return featured;
  }

  return findFeatured(siteStructure);
}

export function getBreadcrumbPath(currentPath: string): SiteSection[] {
  const breadcrumbs: SiteSection[] = [];
  const pathSegments = currentPath.split('/').filter(Boolean);

  let currentSections = siteStructure;
  let currentFullPath = '';

  // Add home
  breadcrumbs.push({
    id: 'home',
    title: 'Accueil',
    path: '/',
  });

  // Build breadcrumb path
  for (const segment of pathSegments) {
    currentFullPath += `/${segment}`;

    // Find matching section
    const matchingSection = currentSections.find(
      (section) =>
        section.path === currentFullPath ||
        (section.children &&
          section.children.some((child) => child.path === currentFullPath))
    );

    if (matchingSection) {
      breadcrumbs.push(matchingSection);

      // If we found a match in children, add it too
      if (matchingSection.children) {
        const childMatch = matchingSection.children.find(
          (child) => child.path === currentFullPath
        );
        if (childMatch) {
          breadcrumbs.push(childMatch);
          currentSections = childMatch.children || [];
        } else {
          currentSections = matchingSection.children;
        }
      } else {
        currentSections = [];
      }
    }
  }

  return breadcrumbs;
}

// New utility functions for navigation components
export function getPagesBySection(section: 'particuliers' | 'professionnels' | 'entreprises'): SitePageInfo[] {
  return navigationPages.filter(page => page.section === section);
}

export function getCategoryLabel(category: 'personnes' | 'biens' | 'epargne' | 'services'): string {
  const categoryLabels = {
    personnes: 'Protection des personnes',
    biens: 'Protection des biens',
    epargne: 'Épargne et placement',
    services: 'Services spécifiques',
  };
  
  return categoryLabels[category];
}

export function getSectionLabel(section: 'particuliers' | 'professionnels' | 'entreprises'): string {
  const sectionLabels = {
    particuliers: 'Particuliers',
    professionnels: 'Professionnels',
    entreprises: 'Entreprises',
  };
  
  return sectionLabels[section];
}