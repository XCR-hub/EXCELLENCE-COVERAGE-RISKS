import { FlameIcon as IconName } from 'lucide-react';

export interface Metier {
  id: string;
  title: string;
  description: string;
  image: string;
  tarif: string;
  category: string;
  icon: IconName;
  testimonials: Testimonial[];
  guarantees: string[];
  seoMeta: SeoMetadata;
}

export interface Testimonial {
  name: string;
  company: string;
  text: string;
  rating: number;
  avatar: string;
}

export interface SeoMetadata {
  title: string;
  description: string;
  keywords: string[];
}

// Catégories de métiers
export const METIER_CATEGORIES = {
  'gros-oeuvre': 'Gros Œuvre',
  'second-oeuvre': 'Second Œuvre',
  'finitions': 'Finitions & Aménagement',
  'specialites': 'Spécialités',
  'equipements': 'Équipements Techniques'
};

// Définition des métiers
export const METIERS: Record<string, Metier> = {
  "macon": {
    id: "macon",
    title: "Maçon",
    description: "Construction en béton, pierre, brique",
    image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg",
    tarif: "1800€/an",
    category: "gros-oeuvre",
    icon: "Building2",
    testimonials: [
      {
        name: "Pierre Dubois",
        company: "Dubois Maçonnerie",
        text: "Grâce à XCR, j'ai obtenu mon assurance décennale maçon en 24h avec un tarif 30% moins cher qu'ailleurs.",
        rating: 5,
        avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
      },
      {
        name: "Michel Rousseau", 
        company: "Rousseau Construction",
        text: "Service impeccable, conseiller dédié et attestation décennale maçon délivrée rapidement.",
        rating: 5,
        avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
      }
    ],
    guarantees: [
      "Garantie décennale maçonnerie : dommages structure béton, pierre, brique",
      "Couverture fondations, murs porteurs, dalles et planchers",
      "Protection ouvrages en béton armé et maçonnerie traditionnelle",
      "Garantie biennale équipements : chauffage, plomberie intégrés",
      "RC Pro maçon incluse : dommages pendant travaux",
      "Dommages aux existants : protection bâtiments adjacents"
    ],
    seoMeta: {
      title: "Assurance Décennale Maçon - Devis Gratuit en 2 Minutes | XCR Courtier",
      description: "Assurance décennale maçon pas chère. Devis gratuit en 2 minutes, attestation sous 24h. Spécialiste maçonnerie : béton, pierre, brique. XCR Courtier expert.",
      keywords: ["assurance décennale maçon", "décennale maçonnerie", "assurance maçon", "devis décennale maçon", "XCR courtier maçon"]
    }
  },
  "electricien": {
    id: "electricien",
    title: "Électricien",
    description: "Installation électrique, domotique, courants faibles",
    image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg",
    tarif: "750€/an",
    category: "second-oeuvre",
    icon: "Zap",
    testimonials: [
      {
        name: "Laurent Moreau",
        company: "Moreau Électricité",
        text: "Assurance décennale électricien obtenue en 24h avec XCR. Tarif imbattable et service client au top.",
        rating: 5,
        avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
      },
      {
        name: "David Leroy", 
        company: "Leroy Installations",
        text: "Expert en électricité, ils comprennent nos risques. Attestation décennale électricien rapide.",
        rating: 5,
        avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
      }
    ],
    guarantees: [
      "Garantie décennale électricité : installations courants forts et faibles",
      "Couverture tableaux électriques, câblages, prises et interrupteurs",
      "Protection installations domotique et systèmes connectés",
      "Garantie biennale équipements : VMC, chauffage électrique",
      "RC Pro électricien incluse : courts-circuits, incendies",
      "Cyber-risques : protection données clients et systèmes"
    ],
    seoMeta: {
      title: "Assurance Décennale Électricien - Devis Gratuit en 2 Minutes | XCR Courtier",
      description: "Assurance décennale électricien pas chère. Devis gratuit en 2 minutes, attestation sous 24h. Spécialiste électricité : courants forts/faibles, domotique. XCR expert.",
      keywords: ["assurance décennale électricien", "décennale électricité", "assurance électricien", "devis décennale électricien", "XCR courtier électricien"]
    }
  },
  "plombier": {
    id: "plombier",
    title: "Plombier",
    description: "Plomberie sanitaire, chauffage, climatisation",
    image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg",
    tarif: "850€/an",
    category: "second-oeuvre",
    icon: "Droplet",
    testimonials: [
      {
        name: "Thomas Martin",
        company: "Martin Plomberie",
        text: "XCR m'a trouvé une assurance décennale plombier parfaitement adaptée à mon activité, à un prix très compétitif.",
        rating: 5,
        avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
      },
      {
        name: "Julien Petit", 
        company: "Petit Chauffage & Plomberie",
        text: "Excellente prise en charge, devis décennale plombier en 2h et attestation le lendemain. Je recommande !",
        rating: 5,
        avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
      }
    ],
    guarantees: [
      "Garantie décennale plomberie : installations sanitaires et réseaux",
      "Couverture canalisations, évacuations et alimentations",
      "Protection installations chauffage et climatisation",
      "Garantie biennale équipements : robinetterie, chauffe-eau",
      "RC Pro plombier incluse : dégâts des eaux, fuites",
      "Dommages aux existants : protection bâtiments adjacents"
    ],
    seoMeta: {
      title: "Assurance Décennale Plombier - Devis Gratuit en 2 Minutes | XCR Courtier",
      description: "Assurance décennale plombier pas chère. Devis gratuit en 2 minutes, attestation sous 24h. Spécialiste plomberie : sanitaires, chauffage, climatisation. XCR expert.",
      keywords: ["assurance décennale plombier", "décennale plomberie", "assurance plombier", "devis décennale plombier", "XCR courtier plombier"]
    }
  },
  "charpentier": {
    id: "charpentier",
    title: "Charpentier",
    description: "Charpente bois, métallique, lamellé-collé",
    image: "https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg",
    tarif: "1200€/an",
    category: "gros-oeuvre",
    icon: "Hammer",
    testimonials: [
      {
        name: "Jérôme Dupont",
        company: "Dupont Charpentes",
        text: "Grâce à XCR, j'ai obtenu mon assurance décennale charpentier en 24h avec un tarif très compétitif. Leur expertise dans notre domaine est vraiment appréciable.",
        rating: 5,
        avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
      },
      {
        name: "Nicolas Martin", 
        company: "Martin Structures Bois",
        text: "Service impeccable, conseiller dédié qui comprend les spécificités de notre métier et attestation décennale charpentier délivrée rapidement.",
        rating: 5,
        avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
      }
    ],
    guarantees: [
      "Garantie décennale charpente : structures bois, métal, lamellé-collé",
      "Couverture fermes, pannes, chevrons et ossatures",
      "Protection charpentes traditionnelles et industrielles",
      "Garantie biennale équipements : fixations, assemblages",
      "RC Pro charpentier incluse : dommages pendant travaux",
      "Dommages aux existants : protection bâtiments adjacents"
    ],
    seoMeta: {
      title: "Assurance Décennale Charpentier - Devis Gratuit en 2 Minutes | XCR Courtier",
      description: "Assurance décennale charpentier pas chère. Devis gratuit en 2 minutes, attestation sous 24h. Spécialiste charpente : bois, métal, lamellé-collé. XCR expert.",
      keywords: ["assurance décennale charpentier", "décennale charpente", "assurance charpentier", "devis décennale charpentier", "XCR courtier charpentier"]
    }
  },
  "couvreur": {
    id: "couvreur",
    title: "Couvreur",
    description: "Toiture tuiles, ardoises, zinc, bac acier",
    image: "https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg",
    tarif: "1500€/an",
    category: "gros-oeuvre",
    icon: "Cloud",
    testimonials: [
      {
        name: "Mathieu Durand",
        company: "Durand Toitures",
        text: "Grâce à XCR, j'ai obtenu mon assurance décennale couvreur en 24h avec un tarif très compétitif malgré les risques élevés de notre métier.",
        rating: 5,
        avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
      },
      {
        name: "Christophe Leroy", 
        company: "Leroy Couverture",
        text: "Service impeccable, conseiller dédié qui comprend les spécificités de notre métier et attestation décennale couvreur délivrée rapidement.",
        rating: 5,
        avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
      }
    ],
    guarantees: [
      "Garantie décennale couverture : tuiles, ardoises, zinc, bac acier",
      "Couverture étanchéité toiture et terrasse",
      "Protection contre infiltrations et fuites",
      "Garantie biennale équipements : gouttières, descentes",
      "RC Pro couvreur incluse : dommages pendant travaux",
      "Dommages aux existants : protection bâtiments adjacents"
    ],
    seoMeta: {
      title: "Assurance Décennale Couvreur - Devis Gratuit en 2 Minutes | XCR Courtier",
      description: "Assurance décennale couvreur pas chère. Devis gratuit en 2 minutes, attestation sous 24h. Spécialiste couverture : tuiles, ardoises, zinc, étanchéité. XCR expert.",
      keywords: ["assurance décennale couvreur", "décennale couverture", "assurance couvreur", "devis décennale couvreur", "XCR courtier couvreur"]
    }
  },
  "chauffagiste": {
    id: "chauffagiste",
    title: "Chauffagiste",
    description: "Chauffage central, climatisation, VMC",
    image: "https://images.pexels.com/photos/4491881/pexels-photo-4491881.jpeg",
    tarif: "900€/an",
    category: "second-oeuvre",
    icon: "Flame",
    testimonials: [
      {
        name: "Julien Dupont",
        company: "Dupont Chauffage",
        text: "Grâce à XCR, j'ai obtenu mon assurance décennale chauffagiste en 24h avec un tarif très compétitif. Leur expertise dans notre domaine est vraiment appréciable.",
        rating: 5,
        avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
      },
      {
        name: "Stéphane Martin", 
        company: "Confort Thermique",
        text: "Service impeccable, conseiller dédié qui comprend les spécificités de notre métier et attestation décennale chauffagiste délivrée rapidement.",
        rating: 5,
        avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
      }
    ],
    guarantees: [
      "Garantie décennale chauffagiste : installation chauffage central, pompe à chaleur",
      "Couverture chaudières, radiateurs, planchers chauffants",
      "Protection installations climatisation et ventilation",
      "Garantie biennale équipements : thermostats, régulation",
      "RC Pro chauffagiste incluse : dommages pendant travaux",
      "Dommages aux existants : protection installations adjacentes"
    ],
    seoMeta: {
      title: "Assurance Décennale Chauffagiste - Devis Gratuit en 2 Minutes | XCR Courtier",
      description: "Assurance décennale chauffagiste pas chère. Devis gratuit en 2 minutes, attestation sous 24h. Spécialiste chauffage : central, PAC, climatisation. XCR expert.",
      keywords: ["assurance décennale chauffagiste", "décennale chauffage", "assurance chauffagiste", "devis décennale chauffagiste", "XCR courtier chauffagiste"]
    }
  },
  "menuisier": {
    id: "menuisier",
    title: "Menuisier",
    description: "Menuiseries intérieures/extérieures, agencement",
    image: "https://images.pexels.com/photos/6474343/pexels-photo-6474343.jpeg",
    tarif: "850€/an",
    category: "second-oeuvre",
    icon: "PenTool",
    testimonials: [
      {
        name: "François Leroy",
        company: "Leroy Menuiserie",
        text: "XCR m'a trouvé une assurance décennale menuisier parfaitement adaptée à mon activité, avec un excellent rapport qualité-prix.",
        rating: 5,
        avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
      },
      {
        name: "Antoine Dubois", 
        company: "Dubois & Fils",
        text: "Excellente prise en charge, devis décennale menuisier en 2h et attestation le lendemain. Je recommande vivement !",
        rating: 5,
        avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
      }
    ],
    guarantees: [
      "Garantie décennale menuiserie : bois, aluminium, PVC",
      "Couverture menuiseries intérieures et extérieures",
      "Protection escaliers, parquets, agencements",
      "Garantie biennale équipements : quincaillerie, serrurerie",
      "RC Pro menuisier incluse : dommages pendant travaux",
      "Dommages aux existants : protection bâtiments adjacents"
    ],
    seoMeta: {
      title: "Assurance Décennale Menuisier - Devis Gratuit en 2 Minutes | XCR Courtier",
      description: "Assurance décennale menuisier pas chère. Devis gratuit en 2 minutes, attestation sous 24h. Spécialiste menuiserie : bois, aluminium, PVC. XCR expert.",
      keywords: ["assurance décennale menuisier", "décennale menuiserie", "assurance menuisier", "devis décennale menuisier", "XCR courtier menuisier"]
    }
  },
  "carreleur": {
    id: "carreleur",
    title: "Carreleur",
    description: "Carrelage, faïence, pierre naturelle",
    image: "https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg",
    tarif: "800€/an",
    category: "second-oeuvre",
    icon: "Grid",
    testimonials: [
      {
        name: "Patrick Moreau",
        company: "Moreau Carrelage",
        text: "XCR m'a trouvé une assurance décennale carreleur parfaitement adaptée à mon activité, avec un excellent rapport qualité-prix.",
        rating: 5,
        avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
      },
      {
        name: "Éric Lambert", 
        company: "Lambert & Fils",
        text: "Excellente prise en charge, devis décennale carreleur en 2h et attestation le lendemain. Je recommande vivement !",
        rating: 5,
        avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
      }
    ],
    guarantees: [
      "Garantie décennale carreleur : pose sol et mur",
      "Couverture carrelage, faïence, pierre naturelle, mosaïque",
      "Protection contre décollement et fissuration",
      "Garantie biennale équipements : plinthes, joints",
      "RC Pro carreleur incluse : dommages pendant travaux",
      "Dommages aux existants : protection revêtements adjacents"
    ],
    seoMeta: {
      title: "Assurance Décennale Carreleur - Devis Gratuit en 2 Minutes | XCR Courtier",
      description: "Assurance décennale carreleur pas chère. Devis gratuit en 2 minutes, attestation sous 24h. Spécialiste carrelage : sol, mur, faïence, pierre naturelle. XCR expert.",
      keywords: ["assurance décennale carreleur", "décennale carrelage", "assurance carreleur", "devis décennale carreleur", "XCR courtier carreleur"]
    }
  }
};

// Fonctions utilitaires
export function getMetierById(id: string): Metier | undefined {
  return METIERS[id];
}

export function getAllMetiers(): Metier[] {
  return Object.values(METIERS);
}

export function getMetiersByCategory(category: string): Metier[] {
  return Object.values(METIERS).filter(metier => metier.category === category);
}