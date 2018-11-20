const factorial = num => {
  if (num > 0) {
    return num * factorial(num - 1)
  }
  return 1
}

console.log(factorial(5))
console.log(factorial(4))
