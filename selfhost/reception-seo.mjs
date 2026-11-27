function updateSection(code, startMarker, endMarker, replacements) {
  const start = code.indexOf(startMarker);
  const end = code.indexOf(endMarker, start + startMarker.length);
  if (start < 0 || end <= start || code.lastIndexOf(startMarker) !== start) {
    throw new Error('Could not identify recovered reception section: ' + startMarker);
  }

  let section = code.slice(start, end);
  for (const [previous, current, expected] of replacements) {
    if (section.split(previous).length !== expected + 1) {
      throw new Error('Unexpected reception value count: ' + previous);
    }
    section = section.replaceAll(previous, current);
  }
  return code.slice(0, start) + section + code.slice(end);
}

export function rewritePublicReception(code) {
  const navigation = updateSection(code, ',Nl=()=>{', ',wl=()=>{', [
    ['01 80 85 57 81', '01 80 85 57 80', 2],
    ['tel:+33180855781', 'tel:+33180855780', 2],
  ]);
  return updateSection(navigation, ',Rl=({className:', ',Il=({className:', [
    ['01 80 85 57 81', '01 80 85 57 80', 5],
    ['tel:+33180855781', 'tel:+33180855780', 5],
    ['+33-1-80-85-57-81', '+33-1-80-85-57-80', 1],
    ['Sam 9h–12h', 'Sam fermé', 1],
  ]);
}

export function rewriteHomeResponseTimes(code) {
  return updateSection(code, ',Rl=({className:', ',Il=({className:', [
    ['Vous recevez une etude personnalisee sous 24h, sans engagement.', 'Un conseiller étudie votre demande et vous recontacte.', 1],
    ['RC Pro et Decennale : attestation generalement disponible sous 24h. Certaines couvertures peuvent etre effectives immediatement selon l\'assureur.', 'Le délai d’attestation dépend du dossier, des conditions de l’assureur et de la prise d’effet du contrat.', 1],
    ['Devis gratuit sous 24h. ORIAS', 'Demande de devis en ligne. ORIAS', 1],
    ['Devis gratuit 24h.', 'Demandez une étude de vos besoins.', 1],
    ['children:["Devis gratuit sous 24h",', 'children:["Demander un devis",', 1],
    ['Un conseiller vous contacte sous 24h.', 'Un conseiller vous recontactera au sujet de votre demande.', 1],
    ['Reponse garantie sous 24h — Aucun engagement', 'Demande de devis sans engagement', 1],
    ['Reactivite 24h', 'Suivi de vos demandes', 1],
    ['Reponse sous 24h garantie', 'Écrivez à notre équipe', 1],
    ['Devis gratuit sous 24h — 30+ assureurs compares — accompagnement inclus — aucun engagement.', 'Demandez un devis et échangez avec un conseiller sur les garanties adaptées à votre activité.', 1],
  ]);
}

export function rewriteHomeClaims(code) {
  return updateSection(code, ',Rl=({className:', ',Il=({className:', [
  ['{value:"15+",label:"ans d\'expertise"},{value:"30+",label:"assureurs"},{value:"2 500+",label:"clients"}', '{value:"Conseil",label:"selon votre activité"},{value:"Comparaison",label:"des garanties"},{value:"Suivi",label:"de votre dossier"}', 1],

  [
    "\"Un courtier independant compare l'ensemble du marche, negocie les tarifs et vous accompagne en cas de sinistre — contrairement aux assureurs en ligne qui ne proposent que leurs propres produits.\"",
    "\"Un courtier étudie vos besoins, sollicite des assureurs et vous aide à comparer les garanties et les conditions proposées.\"",
    1
  ],
  [
    "\"Courtier assurance independant specialise entreprises et professionnels. RC Pro, Decennale, Multirisque, Flotte Auto, Mutuelle. Comparaison 30+ assureurs. Demande de devis en ligne. ORIAS 11 061 425.\"",
    "\"Courtier en assurances pour professionnels et entreprises à Melun et Milly-la-Forêt. RC pro, décennale, multirisque, flotte et santé. ORIAS 11 061 425.\"",
    1
  ],
  [
    "\"Expert assurances professionnelles. 30+ assureurs compares. Demandez une étude de vos besoins.\"",
    "\"XCR accompagne les professionnels et les entreprises dans l’étude de leurs risques et de leurs garanties.\"",
    1
  ],
  [
    "\"ORIAS N° 11 061 425 — Expert courtage depuis 2009\"",
    "\"Courtier en assurances · ORIAS 11 061 425\"",
    1
  ],
  [
    "\"comparons 30+ assureurs\"",
    "\"comparons les propositions\"",
    1
  ],
  [
    "\" pour obtenir les meilleures garanties au meilleur prix pour votre entreprise.\"",
    "\" selon les risques et les besoins de votre entreprise.\"",
    1
  ],
  [
    "\"Chaque secteur a ses risques specifiques. Nous trouvons la couverture exactement adaptee a votre activite en comparant l'ensemble du marche.\"",
    "\"Chaque secteur a ses risques propres. Nous étudions votre activité et comparons les garanties proposées face à ces risques.\"",
    1
  ],
  [
    "\"Nous interrogeons 30+ assureurs partenaires pour obtenir les meilleures offres garanties/prix.\"",
    "\"Nous sollicitons des assureurs selon vos besoins et comparons les garanties, exclusions, franchises et tarifs.\"",
    1
  ],
  [
    "\"Contrairement aux agents d'assurance qui representent un seul groupe, nous comparons l'ensemble du marche pour defendre vos interets — en conseil comme en sinistre.\"",
    "\"Nous vous aidons à comparer les propositions d’assurance et à comprendre les conditions qui s’appliquent à votre activité.\"",
    1
  ],
  [
    "\"Independance totale\"",
    "\"Conseil en assurance\"",
    1
  ],
  [
    "\"Aucun lien avec un assureur. Nous negocions uniquement dans votre interet.\"",
    "\"Nous étudions les offres disponibles selon votre situation et vous expliquons les différences entre les garanties.\"",
    1
  ],
  [
    "\"Gestion sinistres incluse\"",
    "\"Suivi en cas de sinistre\"",
    1
  ],
  [
    "\"Nous suivons vos dossiers jusqu'au reglement, sans frais supplementaires.\"",
    "\"Nous vous aidons à comprendre les démarches et le suivi de votre dossier en cas de sinistre.\"",
    1
  ],
  [
    "\"Expert depuis 2009\"",
    "\"Melun et Milly-la-Forêt\"",
    1
  ],
  [
    "\"30+ assureurs partenaires\"",
    "\"Étude de vos garanties\"",
    1
  ]

  ]);
}

export function linkHomeAgencies(code) {
  const streetList = 'children:e.items.map((e,s)=>Ct.jsxs("li",{className:"flex items-center gap-2.5 text-xs text-slate-700",children:[Ct.jsx(G,{className:"w-3.5 h-3.5 text-orange-400 shrink-0"}),e]},s))})';
  const agencyLink = 'Ct.jsx("a",{href:e.contactHref,className:"mt-4 inline-block text-slate-900 underline hover:text-orange-700",children:"Coordonnées de l’agence de "+e.city})';
  return updateSection(code, ',Rl=({className:', ',Il=({className:', [
    ['{city:"Melun",code:"77 000"', '{city:"Melun",contactHref:"/contact#agence-melun",code:"77 000"', 1],
    ['{city:"Milly-la-Foret",code:"91 490"', '{city:"Milly-la-Forêt",contactHref:"/contact#agence-milly",code:"91 490"', 1],
    [streetList, streetList + ',' + agencyLink, 1],
  ]);
}

export function rewriteHomeIllustrations(code) {
  const portrait = 'Ct.jsx("img",{src:e.image,alt:e.name,className:"w-10 h-10 rounded-full object-cover ring-2 ring-orange-100"}),';
  const stockMeeting = 'Ct.jsx("img",{src:"https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg",alt:"Conseillers XCR Courtier en reunion",className:"relative rounded-2xl shadow-2xl w-full h-[440px] object-cover"})';
  const meetingFigure = 'Ct.jsxs("figure",{className:"relative",children:[' + stockMeeting.replace('Conseillers XCR Courtier en reunion', 'Illustration d’une réunion de travail') + ',Ct.jsx("figcaption",{className:"absolute bottom-2 left-2 rounded bg-slate-900 px-2 py-1 text-xs text-white",children:"Photo d’illustration"})]})';
  return updateSection(code, ',Rl=({className:', ',Il=({className:', [
    [portrait, '', 1],
    [stockMeeting, meetingFigure, 1],
    [',{"@type":"OpeningHoursSpecification",dayOfWeek:"Saturday",opens:"09:00",closes:"12:00"}', '', 1],
    ['children:"ORIAS certifie"', 'children:"Inscrit à l’ORIAS"', 1],
  ]);
}
