// Write a function that accepts a string a reverses it. Recursively.

const stringReversal = str => {
  if (str.length === 1) {
    return str
  }
  return str[str.length - 1] + stringReversal(str.substring(0, str.length - 1))
}

console.log(stringReversal('hello'))
console.log(stringReversal('bye'))
console.log(stringReversal('bryanna'))
