function stringReverse(str) {
  var temp = "";
  let stack = [];
  let token = str.split(" ");
  for (i = 0; i < token.length; i++) {
    stack.push(token[i]);
  }
  while (stack.length > 0) {
    temp += stack[stack.length - 1] + " ";
    stack.pop();
  }
  return temp;
}

let word = "I Love My Country";
console.log(stringReverse(word));
