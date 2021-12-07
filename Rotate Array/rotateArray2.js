const rotateArray2 = function (arr, k) {
  function reverse(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
  k %= arr.length;

  reverse(arr, 0, arr.length - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1);

  return arr;
};

var arr = [1, 2, 3, 4, 5, 6, 7];
var k = 3;

console.log(rotateArray2(arr, k));
