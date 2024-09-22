// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

const str = "MCMXCIV";
var romanToInt = function (s) {
  let result = 0;
  const hashtable = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  for (let i = 0; i < s.length; i++) {
    const current = hashtable[s[i]];
    const next = hashtable[s[i + 1]] || 0;

    if (current >= next) {
      result += current;
    } else {
      result += next - current;
      i++;
    }
  }

  return result;
};

console.log("===>", romanToInt(str));
