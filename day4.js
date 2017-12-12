const fs = require('fs')

const readStream = fs.createReadStream('./day4-input.txt')
var data = ''
var input = []
var invalid = []
var checked = []

readStream
  .on('data', function(chunk) {
    data += chunk;
})
  .on('end', function() {
    textArray(data)
    console.log(input.length - checkText(input).length)

})

function textArray(data) {
  input = data.split('\n')
  input.pop()
  input = input.map(l => l.split(' '))
  return input
}

function checkForEquals(password) {
  password.forEach(l => {
    if (password.filter(p => p === l).length > 1) {
      checked.push(true)
    }
  })
  if (checked.length > 1) {
    invalid.push(false)
    checked = []
    return invalid
  }
  return invalid
}

function checkText(input) {
  input.forEach(function(p) {
    checkForEquals(p)
    return invalid
  })
  return invalid
}
