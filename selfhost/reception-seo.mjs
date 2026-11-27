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
