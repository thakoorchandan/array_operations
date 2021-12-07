var arr = [1, 2, 3, 4, 5, 6, 7, 8];
var k = 3;

// Three ways to rotate array
const rotateArray = (arr, k) => arr.concat(arr).slice(k, k + arr.length);
const rotate = (arr, k) => arr.slice(k).concat(arr.slice(0, k));

console.log(rotateArray(arr, k));
console.log(rotate(arr, k));
