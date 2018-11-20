function groupCheck(s) {
  let curly = 0
  let bracket = 0
  let parens = 0
  let codes = {
    '{': 125,
    '(': 41,
    '[': 93,
  }
  console.log(`s: ${s}`)
  if (s.length === 0) {
    return true
  }
  if (s.length === 1) {
    return false
  }
  if (s[s.length - 1] !== String.fromCharCode(codes[s[0]])) {
    return false
  }
  s.split('').forEach(element => {
      if (element === '{') {
        curly += 1
      }
      if (element === '}' && curly >= 0) {
        curly -= 1
      } else {
        return false
      }
      if (element === '[') {
        bracket += 1
      }
      if (element === ']' && bracket >= 0) {
        bracket -= 1
      } else {
        return false
      }
      if (element === '(') {
        parens += 1
      }
      if (element === ')'&& bracket >= 0) {
        parens -= 1
      } else {
        return false
      }

  })

    console.log(`curly:${curly}  bracket:${bracket} + parens:${parens}`)
    let sum = curly + bracket + parens
    if (sum !== 0) {
      return false
    }
    console.log(`${curly} + ${bracket} + ${parens}`)
    return true
  }
  return false

  // console.log('broke the loop')
  // return false
}

console.log(groupCheck('{)[}'))
