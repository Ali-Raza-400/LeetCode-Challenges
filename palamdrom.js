function reverseString(str) {
  let stack = [];
  let final = [];
  const hashmap = {};
  for (let char of str) {
    // console.log("char:::", char);
    stack.push(char);
    var newarray = stack.slice().reverse();

    if (newarray.join("") === stack.join("")) {
      final = stack;
      console.log("result",final);
    }
  }
  return final;
}
const result = reverseString("babad");
console.log("result:::", result);
