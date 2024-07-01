export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const newStr = [];
  for (const value of set) {
    if (value.startsWith(startString)) {
      newStr.push(value.slice(startString.length));
    }
  }
  return newStr.join('-');
}
