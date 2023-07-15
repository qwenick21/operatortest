function flattenObject(obj, parentKey = '', result = {}) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let newKey = parentKey ? `${parentKey}.${key}` : key;
      if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        flattenObject(obj[key], newKey, result);
      } else {
        result[newKey] = obj[key];
      }
    }
  }
  return result;
}

const input = { a: { b: 5, c: { d: 3 } }, e: { f: 'foo' } };
const output = flattenObject(input);
console.log(output);
// Output: { 'a.b': 5, 'a.c.d': 3, 'e.f': 'foo' }
