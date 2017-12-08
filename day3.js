const input = 347991

var n = 0
var x = 1

function square(input) {
  while (n<input) {
    n = x*x
    x++
  }
  return (x)
}

function remain() {
  return (x**2 - input)
}

function fromCorner() {
  return(remain()%(x-1))
}

function steps() {
  const fromCor = fromCorner()
  const outerSteps = (x-1)/2
  const middleSq = outerSteps + 1
  const rowSteps = middleSq < fromCorner ? (fromCor - middleSq) :
    (middleSq - fromCor)

  return (outerSteps + rowSteps - 1)
}

square(input)
console.log(steps())
