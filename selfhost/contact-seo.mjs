const contactUrl = 'https://xcr.fr/contact';

function agency(name, anchor, streetAddress, addressLocality, postalCode) {
  const url = contactUrl + '#' + anchor;
  return {
    '@type': 'InsuranceAgency',
    '@id': url,
    name,
    url,
    address: { '@type': 'PostalAddress', streetAddress, addressLocality, postalCode, addressCountry: 'FR' },
  };
}

const departments = [
  agency('XCR Réseau de Courtage en Assurances', 'agence-melun', '2 Avenue Gallieni, Le CATG', 'Melun', '77000'),
  agency('XCR', 'agence-milly', '26 Place du Marché', 'Milly-la-Forêt', '91490'),
];
const title = 'Contact XCR Assurances | Melun et Milly-la-Forêt';
const description = 'Contactez les agences XCR de Melun et de Milly-la-Forêt pour une demande d’assurance ou pour joindre votre interlocuteur.';
const schema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  url: contactUrl,
  name: title,
  description,
  mainEntity: {
    '@type': 'Organization',
    name: 'XCR eXcellence Coverage Risks',
    url: 'https://xcr.fr/',
    telephone: '+33-1-80-85-57-81',
    email: 'contact@xcr.fr',
    address: departments.map(location => location.address),
    department: departments,
  },
};

const legacySchema = '{"@context":"https://schema.org","@type":"ContactPage",name:"Contact XCR Courtier",description:"Page de contact pour obtenir un devis assurance gratuit",mainEntity:{"@type":"Organization",name:"XCR eXcellence Coverage Risks",telephone:"+33-1-80-85-57-81",email:"contact@xcr.fr",address:[{"@type":"PostalAddress",streetAddress:"2 Avenue Gallieni, Le CATG",addressLocality:"Melun",postalCode:"77000",addressCountry:"FR"},{"@type":"PostalAddress",streetAddress:"26 Place du Marché",addressLocality:"Milly-la-Forêt",postalCode:"91490",addressCountry:"FR"}]}}';

export function rewriteContactSeo(code) {
  const replacements = [
    ['Contact XCR Courtier | Devis Assurance Gratuit | Expert Assurance Paris', title],
    ['Contactez XCR eXcellence Coverage Risks pour votre devis assurance gratuit. Expert courtier assurance Paris depuis 15 ans. Réponse sous 24h. ☎️ 01 80 85 57 81', description],
    ['contact XCR courtier, devis assurance gratuit, expert assurance Paris, courtier assurance contact', 'contact XCR Assurances, courtier assurances Melun, courtier assurances Milly-la-Forêt'],
    ['Contact XCR Courtier | Expert Assurance Paris', title],
    ['Contactez XCR Courtier pour votre devis assurance gratuit. Expert courtier depuis 15 ans.', description],
    ['https://xcr.fr/images/contact-xcr-courtier.jpg', 'https://xcr.fr/logos/logo_xcr_new.png'],
    [legacySchema, JSON.stringify(schema)],
    ['Ct.jsx("h2",{className:"text-2xl font-bold mb-6 text-secondary-400",children:"Siège Social - Melun"})', 'Ct.jsx("h2",{id:"agence-melun",className:"text-2xl font-bold mb-6 text-secondary-400",children:"Siège Social - Melun"})'],
    ['Ct.jsx("h2",{className:"text-2xl font-bold mb-6 text-secondary-400",children:"Agence Milly-la-Forêt"})', 'Ct.jsx("h2",{id:"agence-milly",className:"text-2xl font-bold mb-6 text-secondary-400",children:"Agence Milly-la-Forêt"})'],
  ];
  for (const [before, after] of replacements) {
    if (code.indexOf(before) < 0 || code.indexOf(before) !== code.lastIndexOf(before)) {
      throw new Error('Expected one recovered Contact page occurrence: ' + before.slice(0, 80));
    }
    code = code.replace(before, after);
  }
  return code;
}
