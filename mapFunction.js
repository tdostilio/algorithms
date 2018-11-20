// we’re going to write a map() function. We want to be able to use it like this:
// map([ 'a', 'b', 'c' ], function( value ) {
//   return value.toUpperCase();
// }); // [ 'A', 'B', 'C' ]

const map = (arr, fn) => {
  if (arr.length === 0) {
    return []
  }
  return [fn(arr[0])].concat(map(arr.slice(1), fn))
}

console.log(
  map(['a', 'b', 'c'], function(value) {
    return value.toUpperCase()
  })
)

const factorial = num => {
  if (num === 1) {
    return 1
  }
  return num * factorial(num - 1)
}

console.log(factorial(4))

const palindrome = string => {
  let length = string.length
  if (length === 1) {
    return true
  }
  if (string[0] === string[length - 1]) {
    return palindrome(string.slice(1, length - 1))
  }
  return false
}

console.log(palindrome('12321'))

const reverse = string => {
  if (string.length === 1) {
    return string
  }
  return string[string.length - 1] + reverse(string.slice(0, string.length - 1))
}

console.log(reverse('123'))

//splice returns removed elements
//slice returns the array with elements removed
