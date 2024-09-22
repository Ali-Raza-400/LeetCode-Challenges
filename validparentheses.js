/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (str) {


  let result = true;

  if (str.includes("(") && str.includes("()") && !str.includes(")(")) {
    console.log("I am here 1111");
    result = true;
  } else if (!str.includes("(")) {
    result = true;
  } else {
    return false;
  }
  if (str.includes("[") && str.includes("[]") && !str.includes("][")) {
    console.log("I am here 3333");
    result = true;
  } else if (!str.includes("[")) {
    result = true;
  } else {
    return false;
  }
  if (str.includes("{") && str.includes("{}") && !str.includes("}{")) {
    console.log("I am here 5555");
    result = true;
  } else if (!str.includes("{")) {
    result = true;
  } else {
    return false;
  }

  return result;
};

console.log(isValid("(){}}{"));
