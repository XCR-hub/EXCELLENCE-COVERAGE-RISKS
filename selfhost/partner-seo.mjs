export function rewritePartnerLandingSeo(code) {
  const route = 'path:"/devenir-partenaire",element:Ct.jsx(Bm,{})';
  if (code.indexOf(route) < 0 || code.lastIndexOf(route) !== code.indexOf(route)) {
    throw new Error('Expected a unique partner landing route in the recovered bundle');
  }
  const title = JSON.stringify('Devenir courtier partenaire | XCR Assurances');
  const description = JSON.stringify('Découvrez le réseau de courtage XCR et contactez notre équipe pour étudier un partenariat pour votre activité de courtier en assurances.');
  const canonical = JSON.stringify('https://xcr.fr/devenir-partenaire');
  const head = [
    'Ct.jsx("title",{children:' + title + '})',
    'Ct.jsx("meta",{name:"description",content:' + description + '})',
    'Ct.jsx("link",{rel:"canonical",href:' + canonical + '})',
  ].join(',');
  return code.replace(route, 'path:"/devenir-partenaire",element:Ct.jsxs(Ct.Fragment,{children:[Ct.jsxs(Ea,{children:[' + head + ']}),Ct.jsx(Bm,{})]})');
}
