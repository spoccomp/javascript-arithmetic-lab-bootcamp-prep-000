function add(a, b){
  return a + b
}
function subtract(a, b){
  return a - b
}
function multiply(a, b) {
  return a  * b
}
function divide(a, b) {
  return a / b
}
function inc(n) {
  return ++n
}
function dec(n) {
  return --n
}
function makeInt(n, base) {
  var parsedNumber = parseInt(n, base)
  //if (isNaN(parsedNumber)) { return true }
  return parsedNumber 
}
function preserveDecimal(n) {
  var parseFloatNumber = parseFloat(n)
  return parseFloatNumber
}
