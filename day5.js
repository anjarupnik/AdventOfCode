const fs = require('fs')
const readStream = fs.createReadStream('./day5-input.txt')

let data = ''
let index = 0
let steps = 0

readStream
  .on('data', function(chunk) {
    data += chunk;
})
  .on('end', function() {
    let input = textArray(data)
    console.log(input)
    while (index < input.length) {
      let move = input[index]
      if (move === 0) { input[index] = move + 1 }
      if (move > 0) {
        input[index] = move + 1
        index = index + move
      }
      if (move < 0) {
        input[index] = move + 1
        index = index + move
      }
      steps ++
    }
    console.log(steps)
})

function textArray(data) {
  input = data.split('\n')
  input.pop()
  input = input.map(n => n.toString())
  input = input.map(n => parseInt(n))
  return input
}
