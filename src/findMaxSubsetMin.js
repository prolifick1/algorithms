function findMaxSubsetMin (x, arr) {
  if (x > arr.length) return -1
  else if (x === 1) return Math.max(...arr)
  let subsetMins = []
  let start = 0
  while (start <= arr.length - x) {
    let slice = arr.slice(start,start+x)
    subsetMins.push(Math.min(...slice))
    start++
  }
  return Math.max(...subsetMins)
}

module.exports = findMaxSubsetMin
