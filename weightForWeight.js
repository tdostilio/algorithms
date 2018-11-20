function orderWeight(str) {
  let weightArray = str.split(' ')
  let weightsAndSums = weightArray.map((x, i) => {
    let sum = x.split('').reduce((prev, curr) => {
      return parseInt(prev) + parseInt(curr)
    }, 0)
    return { weight: x, sum }
  })
  weightsAndSums.sort(compareWeights)
  let orderedWeights = weightsAndSums.map((x, i) => {
    return x.weight
  })
  return orderedWeights.join(' ')
}

function compareWeights(a, b) {
  if (a.sum < b.sum) {
    return -1
  }
  if (a.sum > b.sum) {
    return 1
  }

  if (a.sum === b.sum) {
    if (a.weight < b.weight) {
      return -1
    }
    if (a.weight > b.weight) {
      return 1
    }
    if (a.weight === b.weight) {
      return 0
    }
  }
}

// console.log(orderWeight('103 123 4444 99 2000'))
console.log(orderWeight('2000 10003 1234000 44444444 9999 11 11 22 123'))
