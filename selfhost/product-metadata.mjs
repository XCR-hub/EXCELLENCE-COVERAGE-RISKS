const productPages = [
    {
        "route":  "/assurance-2-roues",
        "oldTitle":  "Courtier Assurance Moto Scooter Melun (77) | 2 Roues -35% | XCR",
        "title":  "Assurance moto et scooter à Melun | XCR Assurances",
        "oldDescription":  "Courtier assurance moto et scooter a Melun (77). Economisez jusqu\u0027a 35% sur votre assurance 2 roues. Moto, scooter, quad. 15+ assureurs specialises. Devis gratuit 24h.",
        "description":  "Courtier en assurance moto, scooter et quad à Melun. Étudiez les garanties selon le véhicule, le profil et les usages du conducteur."
    },
    {
        "route":  "/assurance-auto",
        "oldTitle":  "Courtier Assurance Auto Moto Melun (77) | Voiture -40% | XCR",
        "title":  "Assurance auto à Melun | XCR Assurances",
        "oldDescription":  "Courtier assurance auto et moto a Melun (77). Economisez jusqu\u0027a 40% sur votre assurance voiture. Tiers, intermediaire, tous risques. 30+ assureurs. Devis gratuit 24h.",
        "description":  "Courtier en assurance auto à Melun. Comparez les niveaux de couverture, du tiers au tous risques, selon le véhicule et vos besoins."
    },
    {
        "route":  "/assurance-emprunteur",
        "oldTitle":  "Courtier Assurance Emprunteur Melun (77) | Assurance Pret -50% | XCR",
        "title":  "Assurance emprunteur à Melun | XCR Assurances",
        "oldDescription":  "Courtier assurance emprunteur a Melun (77). Economisez jusqu\u0027a 50% sur votre assurance pret immobilier. Delegation, loi Lemoine, changement a tout moment. 30+ assureurs. Devis gratuit 24h.",
        "description":  "Étudiez les garanties de votre assurance de prêt immobilier avec un courtier à Melun, pour une nouvelle souscription ou un changement de contrat."
    },
    {
        "route":  "/cocourtage-assurance",
        "oldTitle":  "Reseau Cocourtage Assurance Entreprise | Premier Reseau Courtiers France 2025",
        "title":  "Réseau de cocourtage en assurances | XCR Assurances",
        "oldDescription":  "Premier reseau de cocourtage en assurances entreprises. Rejoignez 150+ courtiers partenaires. RC Pro, decennale, sante collective, gestion patrimoine. Commissions jusqu\u0027a 50%.",
        "description":  "Découvrez le réseau de cocourtage XCR pour les professionnels de l’assurance et ses domaines d’intervention auprès des entreprises."
    },
    {
        "route":  "/courtier-assurance-entreprise",
        "oldTitle":  "Courtier Assurance Entreprise | Comparateur 30+ Assureurs | XCR Courtier",
        "title":  "Courtier en assurances pour entreprises | XCR Assurances",
        "oldDescription":  "Courtier assurance entreprise independant : RC Pro, decennale, multirisque, flotte auto, mutuelle collective. Comparaison 30+ assureurs. Audit gratuit et devis sous 24h. ORIAS 11 061 425.",
        "description":  "XCR accompagne les entreprises dans l’étude de leurs risques et de leurs garanties en RC pro, multirisque, flotte et protection collective."
    },
    {
        "route":  "/courtier-assurance-flotte",
        "oldTitle":  "Courtier Assurance Flotte Automobile | Tarifs Degressifs | XCR Courtier",
        "title":  "Courtier en assurance flotte automobile | XCR Assurances",
        "oldDescription":  "Courtier assurance flotte automobile : tarifs degressifs, gestion centralisee, 30+ assureurs compares. Voitures, utilitaires, poids lourds, engins. Devis gratuit sous 24h. ORIAS 11 061 425.",
        "description":  "Étude des garanties pour les flottes de véhicules professionnels, selon la composition du parc, les usages et les conducteurs."
    },
    {
        "route":  "/courtier-assurance-professionnel",
        "oldTitle":  "Courtier Assurance Professionnel | RC Pro, Decennale, Prevoyance | XCR",
        "title":  null,
        "oldDescription":  "Courtier assurance professionnel independant specialise artisans, professions liberales, TNS. RC Pro, decennale, prevoyance Madelin, multirisque. 30+ assureurs compares. Devis gratuit 24h.",
        "description":  "XCR accompagne artisans, commerçants et professions libérales pour étudier leurs garanties RC pro, décennale, multirisque et prévoyance."
    },
    {
        "route":  "/particuliers",
        "oldTitle":  "Assurance Particuliers Melun | Auto, Habitation, Sante, Prevoyance, Epargne | XCR Courtier",
        "title":  null,
        "oldDescription":  "Courtier assurance particuliers a Melun (77). Auto, habitation, sante, prevoyance, emprunteur, assurance vie, PER. 20+ assureurs compares. Devis gratuit en 48h.",
        "description":  "Courtier en assurances pour les particuliers à Melun. Découvrez les solutions auto, habitation, santé, prévoyance et assurance emprunteur."
    },
    {
        "route":  "/particuliers/assurance-vie",
        "oldTitle":  "Courtier Assurance Vie Melun (77) | Epargne Placement Retraite PERin SCPI | XCR",
        "title":  null,
        "oldDescription":  "Courtier assurance vie a Melun (77). Epargne, placement, retraite, PERin, SCPI, fonds euros. 30+ assureurs compares, 0% frais d\u0027entree. Conseil gratuit et personnalise.",
        "description":  "Étudiez avec un courtier à Melun les solutions d’assurance vie et d’épargne adaptées à votre horizon, vos projets et votre profil."
    },
    {
        "route":  "/particuliers/habitation",
        "oldTitle":  "Courtier Assurance Habitation Melun (77) | Maison Appartement -35% | XCR",
        "title":  "Assurance habitation à Melun | XCR Assurances",
        "oldDescription":  "Courtier assurance habitation a Melun (77). Assurance maison, appartement, proprietaire, locataire. Economisez jusqu\u0027a 35%. 30+ assureurs compares. Devis gratuit 24h.",
        "description":  "Étude des garanties pour votre maison ou votre appartement à Melun, selon que vous êtes propriétaire, locataire ou bailleur."
    },
    {
        "route":  "/particuliers/prevoyance",
        "oldTitle":  "Courtier Assurance Prevoyance Melun (77) | Capital Deces \u0026 Invalidite | XCR",
        "title":  null,
        "oldDescription":  "Courtier assurance prevoyance a Melun (77). Capital deces, indemnites journalieres, rente invalidite et education. 30+ assureurs compares. Devis gratuit 24h. ORIAS 11 061 425.",
        "description":  "Étudiez les garanties de prévoyance à Melun pour protéger vos revenus ou vos proches en cas d’arrêt de travail, d’invalidité ou de décès."
    },
    {
        "route":  "/particuliers/sante",
        "oldTitle":  "Courtier Assurance Mutuelle Sante Melun (77) | Devis Gratuit | XCR",
        "title":  "Complémentaire santé à Melun | XCR Assurances",
        "oldDescription":  "Courtier assurance mutuelle sante a Melun (77). Comparaison 30+ mutuelles, remboursements optimaux, tiers payant. Devis gratuit 24h. Families, seniors, actifs. ORIAS 11 061 425.",
        "description":  "Comparez les postes de remboursement et les niveaux de couverture d’une complémentaire santé selon votre situation et vos besoins."
    },
    {
        "route":  "/professionnels",
        "oldTitle":  "Assurance Professionnels Melun | RC Pro, Decennale, Prevoyance, Retraite Madelin | XCR Courtier",
        "title":  null,
        "oldDescription":  "Courtier assurance professionnels a Melun (77). RC Pro, decennale, multirisque, prevoyance TNS, sante TNS, retraite Madelin, PER. Artisan, commercant, profession liberale. 20+ assureurs. Devis gratuit.",
        "description":  "XCR accompagne les professionnels à Melun dans l’étude de leurs garanties RC pro, décennale, multirisque, santé et prévoyance."
    },
    {
        "route":  "/rc-pro",
        "oldTitle":  "Courtier RC Pro Melun (77) | Assurance Responsabilite Civile Professionnelle Artisan Commercant | XCR",
        "title":  null,
        "oldDescription":  "Courtier RC Pro a Melun (77). Assurance responsabilite civile professionnelle pour artisans, commercants, professions liberales. 20+ contrats compares, attestation sous 24h. Devis gratuit.",
        "description":  "Étude des garanties de responsabilité civile professionnelle à Melun pour les artisans, commerçants et professions libérales."
    }
];

export function rewriteProductMetadata(code) {
  for (const page of productPages) {
    const pairs = [[page.oldDescription, page.description]];
    if (page.title) pairs.push([page.oldTitle, page.title]);
    for (const [previous, updated] of pairs) {
      const before = JSON.stringify(previous);
      if (!code.includes(before)) {
        throw new Error('Recovered product metadata is missing for ' + page.route);
      }
      code = code.replaceAll(before, JSON.stringify(updated));
    }
  }
  return code;
}
