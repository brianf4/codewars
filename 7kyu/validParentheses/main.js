function validParentheses(parenStr) {
  let counter = 0;

  for (let char of parenStr) {
    if (char === "(") counter++;
    if (char === ")") counter--;

    if (counter < 0) return false;
  }
  return counter === 0;
}