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