let not = [4, 10, 4, 1, 8, 4, 9, 14, 5, 1, 14, 15, 0, 15, 3, 5]
let input = [0, 2, 7, 0]
let output = []
let cycles = 0

let maxNum = () => Math.max.apply(null, input)
let index = () => input.indexOf(maxNum(input))

function distribute() {
  let i = index()
  let temp = parseInt(input.splice(index(input), 1).join())
  output = input.map(n => n + Math.floor(temp/input.length))
  input.splice(i, 0, temp)
  temp = temp - (output.length * Math.floor(temp/output.length))
  output.splice(i, 0, temp)
  return output
}

console.log(distribute())
