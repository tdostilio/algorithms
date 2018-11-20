const isPalindrome = num => {
  if (num.length === 0 || num.length === 1) {
    return true
  }
  if (num[0] === num[num.length - 1]) {
    return isPalindrome(num.slice(1, num.length - 1))
  }
  return false
}

console.log(isPalindrome('1234321'))
console.log(isPalindrome('123'))
