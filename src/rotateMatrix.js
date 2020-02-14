

const rotateMatrix = matrix => {
  let N = matrix.length
  for (let x = 0; x < (N/2); x++){
      for (let y = x; y < N - 1 - x; y++) {
        console.log('[x,y]', x, y)
          // store current cell in temp variable
          let temp = matrix[x][y]

          // set top left equal to bottom left
           matrix[x][y] = matrix[N-1-y][x]

          // set bottom left equal to bottom right
          matrix[N-1-y][x] = matrix[N-1-x][N-1-y]

          // set bottom right equal to top right
          matrix[N-1-x][N-1-y] = matrix[y][N-1-x]

          // set top right equal to temp (aka previous top left)
          matrix[y][N-1-x] = temp
      }
  }
  return matrix
}

module.exports = rotateMatrix
