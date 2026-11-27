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
