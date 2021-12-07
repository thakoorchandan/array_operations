var arr = [1, 2, 3, 4, 5, 6];

var k = 3;

function rotateArray(arr, k) {
  for (i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
}

console.log(rotateArray(arr, k));
