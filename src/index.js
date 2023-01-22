module.exports = function reverse (n){
  if (n>'0') {
  n = n + "";
  return n.split("").reverse().join("");
}
else if (n<'0') {
   n = n + "";
  return n.split("").reverse().join("").slice(0, -1);
}
}

// // Второй способ : 
// module.exports = function reverse (n){
//   n =Math.abs(n)
//     return n.toString().split('').reverse().join('')
// }
