export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }
  let newStr = '';
  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      newStr += `${value.slice(startString.length)}-`;
    }
  }
  return newStr.slice(0, newStr.length - 1);
}
