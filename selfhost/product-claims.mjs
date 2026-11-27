const productClaims = [
  ["et scooter a Melun -- -35%", "et scooter à Melun"],
  [
    "et moto a Melun -- Jusqu'a -40%",
    "et moto à Melun"
  ],
  [
    "a Melun -- Economisez jusqu'a 50%",
    "à Melun"
  ],
  [
    "a Melun -- Jusqu'a -35%",
    "à Melun"
  ],
  [
    "Jusqu'a 40% d'economies",
    "Comparez les garanties"
  ],
  [
    "Jusqu'a 50% d'economies",
    "Étude de votre assurance de prêt"
  ],
  [
    "Jusqu'a 35% d'economies",
    "Comparez les garanties"
  ],
  [
    "Devis gratuit sous 24h -- jusqu'a 40% d'economies -- changement sans frais -- aucun engagement.",
    "Demandez une étude des garanties auto ou moto adaptées à votre véhicule et à vos usages."
  ],
  [
    "Devis gratuit sous 24h -- jusqu'a 50% d'economies -- changement a tout moment -- aucun engagement.",
    "Demandez une étude de votre assurance de prêt, selon les garanties exigées par votre prêteur."
  ],
  [
    "Devis gratuit sous 24h -- jusqu'a 35% d'economies -- changement sans frais -- aucun engagement.",
    "Demandez une étude des garanties adaptées à votre logement."
  ],
  [
    "Devis gratuit sous 24h -- jusqu'a 35% d'economies -- equipements couverts -- aucun engagement.",
    "Demandez une étude des garanties pour votre deux-roues et ses équipements."
  ],
  [
    "Courtier Assurance Auto Moto Melun | Voiture -40% | XCR Courtier",
    "Assurance auto et moto à Melun | XCR Assurances"
  ],
  [
    "Courtier Assurance Emprunteur Melun | Assurance Pret -50% | XCR Courtier",
    "Assurance emprunteur à Melun | XCR Assurances"
  ],
  [
    "Courtier Assurance Habitation Melun | Maison Appartement -35% | XCR",
    "Assurance habitation à Melun | XCR Assurances"
  ],
  [
    "Courtier Assurance Moto Scooter Melun | 2 Roues -35% | XCR",
    "Assurance moto et scooter à Melun | XCR Assurances"
  ],
  [
    "Courtage en assurance auto et moto a Melun (77). Comparez 30+ assureurs, economisez jusqu'a 40% sur votre assurance voiture et 2 roues. Devis gratuit sous 24h.",
    "Courtage en assurance auto et moto à Melun. Étude des garanties selon le véhicule et les usages."
  ],
  [
    "Courtage en assurance emprunteur a Melun (77). Delegation d'assurance pret immobilier, economisez jusqu'a 50% sur votre assurance credit. 30+ assureurs compares, devis gratuit sous 24h.",
    "Courtage en assurance emprunteur à Melun pour une souscription ou un changement de contrat."
  ],
  [
    "Courtage en assurance habitation a Melun (77). Maison, appartement, proprietaire, locataire, PNO. Comparez 30+ assureurs, economisez jusqu'a 35%. Devis gratuit sous 24h.",
    "Courtage en assurance habitation à Melun pour les propriétaires, locataires et bailleurs."
  ],
  [
    "Courtage en assurance moto, scooter et 2 roues a Melun (77). Comparez 15+ assureurs specialises, economisez jusqu'a 35% sur votre assurance 2 roues. Devis gratuit sous 24h.",
    "Courtage en assurance moto et scooter à Melun. Étude du véhicule, des usages et des garanties."
  ],
  [
    "Deleguation d'assurance pret immobilier. Economisez jusqu'a 50% vs banque. Loi Lemoine : changement a tout moment, sans frais, sans questionnaire de sante.",
    "Étude de l’assurance de prêt immobilier selon les garanties demandées par le prêteur et les caractéristiques du dossier."
  ]
];

export function rewriteProductClaims(code) {
  const oldBadge = '{v:"-50%",l:"vs assurance banque"}';
  if (code.split(oldBadge).length !== 2) {
    throw new Error('Expected one mortgage savings badge');
  }
  code = code.replace(oldBadge, '{v:"Prêt",l:"garanties à étudier"}');

  for (const [previous, current] of productClaims) {
    const quoted = JSON.stringify(previous);
    if (!code.includes(quoted)) {
      throw new Error('Expected a recovered product claim: ' + previous);
    }
    code = code.replaceAll(quoted, JSON.stringify(current));
  }
  return code;
}
