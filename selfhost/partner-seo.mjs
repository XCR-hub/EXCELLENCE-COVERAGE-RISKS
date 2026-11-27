export function rewritePartnerLandingSeo(code) {
  const previousTitle = 'Devenir Partenaire XCR | La Licorne des Courtiers 2026';
  const previousDescription = "Rejoignez XCR Courtier, la licorne française de l'assurance. Devenez co-courtier, franchisé ou mandataire et bénéficiez de notre plateforme SaaS innovante.";
  const before = 'Ct.jsx("title",{children:' + JSON.stringify(previousTitle) + '}),Ct.jsx("meta",{name:"description",content:' + JSON.stringify(previousDescription) + '})';
  const after = [
    'Ct.jsx("title",{children:' + JSON.stringify('Devenir courtier partenaire | XCR Assurances') + '})',
    'Ct.jsx("meta",{name:"description",content:' + JSON.stringify('Découvrez le réseau de courtage XCR et contactez notre équipe pour étudier un partenariat pour votre activité de courtier en assurances.') + '})',
    'Ct.jsx("link",{rel:"canonical",href:"https://xcr.fr/devenir-partenaire"})',
  ].join(',');
  if (code.indexOf(before) < 0 || code.lastIndexOf(before) !== code.indexOf(before)) {
    throw new Error('Expected a unique SEO block for the XCR partner page');
  }
  return code.replace(before, after);
}
