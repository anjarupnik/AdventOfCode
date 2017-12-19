const fs = require('fs')

const readStream = fs.createReadStream('./day4-input.txt')
let data = ''
let input = []
let invalid = []
let checked = []

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
    checkAnagrams(p)
    return invalid
  })
  return invalid
}

function checkAnagrams(password) {
  let sorted = []
  sorted = password.map(p => p.toLowerCase().split('').sort().join('').trim())
  checkForEquals(sorted)
}
