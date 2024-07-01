export default function hasValuesFromArray(set, arr) {
  if (set.isSupersetOf(new Set(arr))) {
    return true;
  }
  return false;
}
