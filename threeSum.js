// console.log("Script is running");
// let str1 = "20";
// let str2 = "30";
// let sum = Number(str1) + Number(str2);
// console.log(sum);

var addTwoNumbers = function (l1, l2) {
  let l1ToStr = l1.join("");
  let l2ToStr = l2.join("");

  let sum = Number(l1ToStr) + Number(l2ToStr);
  return sum.toString().split("");
};

console.log("function addTwoNumbers", addTwoNumbers([2, 4, 3], [5, 6, 4]));
