// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function updateFileNames(S) {
    function getNumDigits(num) {
        return num.toString().length
    }

  // split the string on each line break
  let photos = S.split('\n')

  // group together photos by city
  let visitedCities = {}
  photos = photos.map(photo => {
      // split the string on by commas
      let details = photo.split(', ')
      // idx 1 holds city name
      let city = details[1]
      if (visitedCities[city]) {
          visitedCities[city].push(details)
      } else {
          visitedCities[city] = [details]
      }
      return details
  })

  for (let city in visitedCities) {
      // sort each cities photos by date
      visitedCities[city].sort((photo1,photo2) => new Date(photo1[2]) - new Date(photo2[2]))
      // get numDigits
      let numDigits = getNumDigits(visitedCities[city].length)
      // map over the array of photos for each city adjusting the name
      visitedCities[city] = visitedCities[city].map((photo, i) => {
          let city = photo[1]
          let num = i + 1
          let diff = numDigits - getNumDigits(num)
          while (diff !== 0) {
              num = '0'+num
              diff--
          }
          let extension = photo[0].split('.')[1]
          return [...photo,`${city}${num}.${extension}`]
      })
      // create an output string for each photo separated by line breaks
  }
  let output = ''
  photos.forEach(photo => {
    let cityPhotos = visitedCities[photo[1]]
    cityPhotos.forEach(p => {
        if (photo[0]+photo[1]+photo[2] === p[0]+p[1]+p[2]) {
            if (output) output += '\n'
            output+=p[3]
        }
    })
  })
  console.log(output)
  return output
}

module.exports = updateFileNames
